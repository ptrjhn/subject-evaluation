<template>
  <div>
    <title-bar :title-stack="['Master Files', 'Academic Years', 'List']" />
    <hero-bar>
      Academic Years
      <button class="button is-default" @click="showModal()" slot="right">
        <b-icon icon="file-plus" custom-size="default" class="i" />
        <span>New</span>
      </button>
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Academic Years"
      >
        <card-toolbar>
          <button
            slot="right"
            type="button"
            class="button is-danger has-checked-rows-number"
            @click="deleteConfirmation(null)"
            :disabled="!checkedRows.length"
          >
            <b-icon icon="trash-can" custom-size="default" class="i" />
            <span>Delete</span>
            <span v-show="!!checkedRows.length"
              >({{ checkedRows.length }})</span
            >
          </button>
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
                  {{
                    isNew ? "Creating Academic Year" : "Editing Academic Year"
                  }}
                </h3>
                <button type="button" class="delete" @click="cancel" />
              </header>
              <section class="modal-card-body">
                <b-field label="School Year">
                  <b-input
                    placeholder="Enter School Year"
                    type="text"
                    v-model="formData.school_year"
                    required
                  ></b-input>
                </b-field>

                <b-field label="Description">
                  <b-input
                    placeholder="Enter Description"
                    type="text"
                    v-model="formData.description"
                    required
                  ></b-input>
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
          :checked-rows.sync="checkedRows"
          :loading="isLoading"
          :paginated="true"
          :per-page="perPage"
          :checkable="true"
          :hoverable="true"
          :data="academicYears"
        >
          <template slot-scope="props">
            <b-table-column
              searchable
              label="School Year"
              field="school_year"
              sortable
              >{{ props.row.school_year }}</b-table-column
            >

            <b-table-column
              searchable
              label="Description"
              field="description"
              sortable
              >{{ props.row.description }}</b-table-column
            >

            <b-table-column label="Status" field="is_active" sortable>
              <b-switch
                @input="setCurrent(props.row)"
                :value="props.row.is_current"
                :disabled="props.row.is_current"
                type="is-success"
              >
                {{ props.row.is_current ? "Open" : "Closed" }}
              </b-switch>
            </b-table-column>

            <b-table-column custom-key="actions" class="is-actions-cell">
              <div class="buttons is-right">
                <b-tooltip
                  label="Click to edit"
                  type="is-dark"
                  position="is-left"
                >
                  <button
                    class="button is-link btn-rounded"
                    @click="edit(props.row)"
                  >
                    <b-icon icon="pencil" size="is-small" />
                  </button>
                </b-tooltip>
                <b-tooltip
                  label="Click to Delete"
                  type="is-dark"
                  position="is-left"
                >
                  <button
                    class="button is-danger btn-rounded"
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
import apiClient from "../apiClient";

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
      isLoading: true,
      paginated: false,
      perPage: 10,
      checkedRows: [],
      isNew: true,
      formData: {
        id: "",
        school_year: "",
        description: "",
        is_current: false
      }
    };
  },
  computed: {
    ...mapGetters("academicYears", ["academicYears"])
  },
  created() {
    this.fetchAcademicYears();
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  },

  methods: {
    ...mapActions("academicYears", [
      "fetchAcademicYears",
      "fetchAcademicYear",
      "createAY",
      "updateAY",
      "deleteAY"
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
          message: `Are you sure you want to <b>delete ${trashObject.description}</b>?`,
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
      if (this.isNew) {
        response = await this.createAY(this.formData);
        if (response == undefined) {
          this.isModalActive = false;
          this.showNotification("Successfully created", "success");
        } else {
          var key = Object.keys(response.errors);
          var message = response.errors[key[0]][0];

          this.showNotification(message, "danger");
        }
      } else {
        let response = await this.updateAY(this.formData);
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

    async setCurrent(data) {
      this.isLoading = true;
      apiClient
        .get(`/academic-years/${data.id}/set-current`)
        .then(({ data }) => {
          this.$store.commit("currentSY", data.data);
        });
      this.fetchAcademicYears();
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    remove(data) {
      this.deleteAY(data);
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
        school_year: "",
        description: ""
      };
    }
  }
};
</script>
