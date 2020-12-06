<template>
  <div>
    <title-bar :title-stack="['Admin Settings', 'Users', 'List']" />
    <hero-bar>
      Users
      <button class="button is-default" @click="showModal()" slot="right">
        <b-icon icon="file-plus" custom-size="default" class="i" />
        <span>New Users</span>
      </button>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Users">
        <card-toolbar>
          <b-select v-model="perPage" slot="left">
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="15">15 per page</option>
            <option value="20">20 per page</option>
          </b-select>
        </card-toolbar>

        <b-modal :active.sync="isModalActive" has-modal-card>
          <form @submit.prevent="save()" novalidate>
            <div class="modal-card">
              <header class="modal-card-head">
                <h3 class="modal-card-title">
                  {{ isNew ? "Creating User" : "Editing User" }}
                </h3>
                <button type="button" class="delete" @click="cancel" />
              </header>
              <section class="modal-card-body">
                <b-field label="Name">
                  <b-input
                    placeholder="e.g Juan Dela Cruz"
                    type="text"
                    v-model="formData.name"
                    required
                  ></b-input>
                </b-field>

                <b-field label="Email Address">
                  <b-input
                    placeholder="e.g juandelacruz@email.com"
                    type="email"
                    v-model="formData.email"
                    required
                  ></b-input>
                </b-field>

                <b-field label="User Type">
                  <b-select v-model="formData.user_type" expanded placeholder="Select user type">
                    <option value="Administrator">Administrator</option>
                    <option value="Standard User">Standard User</option>
                  </b-select>
                </b-field>
              </section>
              <footer class="modal-card-foot">
                <button type="submit" class="button is-success">
                  {{ isNew ? "Save" : "Update" }}
                </button>
                <a class="button" @click="cancel()">Cancel</a>
              </footer>
            </div>
          </form>
        </b-modal>

        <b-table
          :loading="isLoading"
          :paginated="true"
          :per-page="perPage"
          :hoverable="true"
          default-sort="name"
          :data="users"
        >
          <template slot-scope="props">
            <b-table-column
              searchable
              label="Account Name"
              field="name"
              sortable
              >{{ props.row.name }}</b-table-column
            >

            <b-table-column
              searchable
              label="Email Address"
              field="email"
              sortable
              >{{ props.row.email }}</b-table-column
            >

            <b-table-column
              searchable
              label="User Type"
              field="user_type"
              sortable
              >{{ props.row.user_type }}</b-table-column
            >

            <b-table-column custom-key="actions" class="is-actions-cell">
              <div class="buttons is-right">
                <b-tooltip label="Click to edit" position="is-left">
                  <button
                    class="button is-link btn-rounded"
                    @click="edit(props.row)"
                  >
                    <b-icon icon="pencil" size="is-small" />
                  </button>
                </b-tooltip>
                <b-tooltip label="Click to Delete" position="is-left">
                  <button
                    class="button is-danger btn-rounded"
                     v-if="props.row.user_type != 'Administrator'"
                    type="button"
                    @click.prevent="deleteConfirmation(props.row)"
                  >
                    <b-icon icon="trash-can" size="is-small" />
                  </button>
                </b-tooltip>
              </div>
            </b-table-column>
          </template>

          <section class="section" slot="empty">
            <div class="content has-text-grey has-text-centered">
              <template v-if="isLoading">
                <p>
                  <b-icon icon="dots-horizontal" size="is-large" />
                </p>
                <p>Fetching data...</p>
              </template>
              <template v-else>
                <p>Nothing's here&hellip;</p>
              </template>
            </div>
          </section>
        </b-table>
      </card-component>
    </section>
  </div>
</template>

<script>
import map from "lodash/map";
import CardComponent from "@/components/CardComponent";
import ModalBox from "@/components/ModalBox";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import CardToolbar from "@/components/CardToolbar";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    CardToolbar,
    HeroBar,
    TitleBar,
    ModalBox,
    CardComponent
  },
  data() {
    return {
      isModalActive: false,
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: [],
      isNew: true,
      formData: {
        id: "",
        name: "",
        source_id: 0,
        email: "",
        user_type: "",
      }
    };
  },
  computed: {
    ...mapGetters("users", ["users", "user"])
  },

  created() {
    this.fetchUsers();
  },

  methods: {
    ...mapActions("users", [
      "fetchUsers",
      "fetctUser",
      "createUser",
      "updateUser",
      "deleteUser"
    ]),

    edit(data) {
      this.isModalActive = true;
      this.isNew = false;
      Object.assign(this.formData, data);
    },

    deleteConfirmation(trashObject = null) {
      this.trashObject = trashObject;

      if (trashObject || this.checkedRows.length) {
        this.$buefy.dialog.confirm({
          title: "Deleting",
          message: `Are you sure you want to <b>delete ${trashObject.name}</b> this?`,
          confirmText: "DELETE",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () => {
            this.remove(this.trashObject);
          }
        });
      }
    },

    showNotification(message, type) {
      this.$buefy.notification.open({
        duration: 4000,
        message: message,
        position: "is-bottom-right",
        type: `is-${type}`,
        hasIcon: true,
        closable: true,
        qeue: false,
        autoClose: true
      });
    },

    async save() {
      let response = "";
      console.log(this.formData);
      if (this.isNew) {
        response = await this.createUser(this.formData);
        if (response == undefined) {
          this.isModalActive = false;
          this.showNotification("Successfully created", "success");
        } else {
          var key = Object.keys(response.errors);
          var message = response.errors[key[0]][0];

          this.showNotification(message, "danger");
        }
      } else {
        let response = await this.updateUser(this.formData);
        if (response == undefined) {
          this.isModalActive = false;

          this.showNotification("Successfully updated", "success");
        } else {
          var key = Object.keys(response.errors);
          var message = response.errors[key[0]][0];
          this.showNotification(message, "error");
        }
      }
    },

    remove(data) {
      this.deleteUser(data);
      this.showNotification("Successfully deleted", "info");
    },

    cancel() {
      this.isModalActive = false;
    },
    showModal() {
      this.clearForm();
      this.isModalActive = true;
      this.isNew = true;
    },

    clearForm() {
      this.formData = {
        id: "",
        email: "",
        name: "",
        user_type: "",
        source_id: 0,
      };
    }
  }
};
</script>
