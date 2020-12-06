<template>
  <div>
    <title-bar :title-stack="['Master Files', 'Sections', 'List']" />
    <hero-bar>
      Sections
      <button class="button is-default" @click="showModal()" slot="right">
        New Section
      </button>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced" title="Sections">
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
                <p class="modal-card-title">{{ isNew ? 'Create Section' : 'Update Section' }}</p>
                <button type="button" class="delete" @click="cancel" />
              </header>
              <section class="modal-card-body">
              <b-field label="Course Code">
                  <b-autocomplete
                  icon="clipboard-list"
                  expanded
                  v-model="options.course.searchText"
                  required
                  placeholder="e.g. Bachelor of Science in Information Technology"
                  :data="getFilteredCourses"
                  field="description"
                  :open-on-focus="true"
                  @select="option => setSelected(option)"
                  :clearable="true"
                >
                  <template slot-scope="props">
                    <div class="media">
                      <div class="media-content">
                        <strong>{{ props.option.course_code }}</strong>
                        | {{ props.option.description }}
                      </div>
                    </div>
                  </template>
                </b-autocomplete>
                </b-field>

                <b-field label="Section"
                  :type="errors.section_name == null ? '' : 'is-danger'"
                :message="
                  errors.section_name == null ? '' : errors.section_name"
                >
                  <b-input
                    placeholder="E.g BSIT-1A"
                    type="text"
                    v-model="formData.section_name"
                    required
                    p
                  ></b-input>
                </b-field>
              </section>
              <footer class="modal-card-foot">
                <button type="submit" class="button is-success">
                  {{ isNew ? "Save Section" : "Update Section" }}
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
          :narrowed="true"
          :hoverable="true"
          :data="sections"
        >
          <template slot-scope="props">
            <b-table-column
              searchable
              label="Course"
              field="course_code"
              sortable
              >{{ props.row.course.course_code }}</b-table-column
            >

            <b-table-column
              searchable
              label="Section"
              field="section_name"
              sortable
              >{{ props.row.section_name }}</b-table-column
            >

            <b-table-column custom-key="actions" class="is-actions-cell">
              <div class="buttons is-right">
                <b-tooltip label="Click to edit" position="is-left">
                  <button class="button is-link" @click="edit(props.row)">
                    <b-icon icon="pencil" size="is-small" />
                  </button>
                </b-tooltip>
                <b-tooltip label="Click to Delete" position="is-left">
                  <button
                    class="button is-danger"
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
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "CourseIndex",
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
      errors: {},
      isNew: true,
      formData: {
        id: "",
        course_id: "",
        section_name: ""
      }
    };
  },
  computed: {
    ...mapGetters("sections", ["sections"]),

  },

  async created() {
    await this.fetchSections();
    await this.fetchCourses();
  },

  methods: {
    ...mapActions("sections", [
      "fetchSections",
      "updateSection",
      "deleteSection",
      "createSection"
    ]),

    ...mapActions("courses", ["fetchCourses"]),


    edit(data) {
      this.isModalActive = true;
      this.isNew = false;
      console.log(data);
      this.options.course.searchText = data.course.description;
      Object.assign(this.formData, data);
    },

    deleteConfirmation(trashObject = null) {
      this.trashObject = trashObject;

      if (trashObject || this.checkedRows.length) {
        this.$buefy.dialog.confirm({
          title: "Deleting",
          message: "Are you sure you want to <b>delete</b> this? This action cannot be undone.",
          confirmText: "Delete",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () => {
            this.removeSection(this.trashObject);
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
        queue: false
      });
    },

    async save() {
      let response = null;
      if (this.isNew) {
        response = await this.createSection(this.formData);
        if (response == undefined || response == null) {
          this.showNotification("Successfully created", "success");
          this.isModalActive = false;
        } else {
          this.showErrorMessage(response);
        }
      } else {
        response = await this.updateSection(this.formData);
        if (response == undefined || response == null) {
          this.showNotification("Successfully created", "success");
          this.isModalActive = false;
        } else {
          this.showErrorMessage(response);
        }
      }
    },

    removeSection(data) {
      this.deleteSection(data);
      this.showNotification("Successfully deleted", "info");
    },

    setSelected(data) {
      this.formData.course_id = data?.id;
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
        course_id: "",
        section_name: ""
      };
      this.options.course.searchText = ""
    }
  }
};
</script>
