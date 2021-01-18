<template>
  <div>
    <div>
      <title-bar :title-stack="['Instructor Subjects']" />
      <hero-bar>
        <button class="button is-default" @click="showModal()" slot="right">
          <b-icon icon="file-plus" custom-size="default" class="i" />
          <span>New</span>
        </button>
        <button
          class="button is-default ml-2"
          @click="previousPage()"
          slot="right"
        >
          <span>Back</span>
        </button>
      </hero-bar>
      <section class="section is-main-section">
        <card-component class="has-table has-mobile-sort-spaced">
          <card-toolbar>
            <b-select v-model="perPage" slot="left">
              <option value="5">5 per page</option>
              <option value="10">10 per page</option>
              <option value="15">15 per page</option>
              <option value="20">20 per page</option>
            </b-select>
          </card-toolbar>

          <b-modal :active.sync="isModalActive" has-modal-card :can-cancel="[]">
            <form @submit.prevent="save()" novalidate>
              <div class="modal-card">
                <header class="modal-card-head">
                  <h3 class="modal-card-title">
                    {{ isNew ? "Creating" : "Editing" }}
                  </h3>
                  <button type="button" class="delete" @click="cancel" />
                </header>
                <section class="modal-card-body">
                  <b-field label="Subject">
                    <template slot="label">
                      Subject
                      <span class="has-text-danger">*</span>
                    </template>
                    <b-autocomplete
                      placeholder="Search Code or Description e.g IT 30/IT Fundamentals"
                      :open-on-focus="true"
                      v-model="options.subject.searchText"
                      :data="filteredSubjects"
                      field="code"
                      @select="(option) => setSubjectDetails(option)"
                      :clearable="true"
                    >
                      <template slot-scope="props">
                        <strong>{{ props.option.code }}</strong>
                        | {{ props.option.description }}
                      </template>
                    </b-autocomplete>
                  </b-field>
                  <!-- <b-field label="Semester">
                    <template slot="label">
                      Semester
                      <span class="has-text-danger">*</span>
                    </template>
                    <b-select
                      v-model="formData.semester"
                      placeholder="Select Semester"
                      expanded
                    >
                      <option value="First">First</option>
                      <option value="Second">Second</option>
                      <option value="Summer">Summer</option>
                    </b-select>
                  </b-field> -->
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
            default-sort="subject_code"
            :narrowed="true"
            :data="instructorSubjects"
          >
            <template slot-scope="props">
              <b-table-column
                searchable
                label="Subject Code"
                field="subject_code"
                sortable
                width="12%"
                class="wrap-text"
                >{{ props.row.subject_code }}</b-table-column
              >

              <b-table-column
                searchable
                label="Descriptive Title"
                field="subject_description"
                sortable
                width="30%"
                class="wrap-text"
                :title="props.row.subject_description"
                >{{ props.row.subject_description }}</b-table-column
              >

              <b-table-column
                searchable
                label="Prerequisite"
                field="prerequisite"
                sortable
                width="15%"
                class="wrap-text"
                :title="props.row.prerequisite"
                >{{
                  props.row.prerequisite == null
                    ? "None"
                    : props.row.prerequisite
                }}</b-table-column
              >

              <b-table-column
                custom-key="actions"
                class="is-actions-cell"
                width="10%"
              >
                <div class="buttons is-right">
                  <b-tooltip label="Click to edit" position="is-top">
                    <button class="button is-link" @click="edit(props.row)">
                      <b-icon icon="pencil" size="is-small" />
                    </button>
                  </b-tooltip>
                  <b-tooltip label="Click to Delete" position="is-top">
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
    CardComponent,
  },
  data() {
    return {
      isModalActive: false,
      isLoading: false,
      paginated: false,
      perPage: 10,
      openedDetails: [],
      checkedRows: [],
      isNew: true,
      filteredSubjectsTags: [],
      formData: {
        id: "",
        instructor_id: "",
        sy_id: "",
        semester_id: "",
        subject_code: "",
        subject_description: "",
        units: "",
      },
    };
  },

  computed: {
    ...mapGetters("subjects", ["subjects"]),
    ...mapGetters("instructors", ["instructor", "instructorSubjects"]),

    sy() {
      return this.$store.state.currentSY;
    },
    semester() {
      return this.$store.state.currentSem;
    },
  },

  created() {
    this.fetchSubjects();
    this.fetchInstructorLoad();
    this.filteredSubjectsTags = this.subjects;
  },

  methods: {
    ...mapActions("subjects", ["fetchSubjects"]),
    ...mapActions("instructors", [
      "fetchInstructor",
      "fetchInstructorSubjects",
      "updateInstructorSubject",
      "createInstructorSubject",
    ]),

    getFilteredSubjectTags(text) {
      this.filteredSubjectsTags = this.subjects.filter((opt) => {
        return (
          opt.code.toString().toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
          opt.description
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },

    async fetchInstructorLoad() {
      await this.fetchInstructorSubjects({
        instructor_id: id,
        sy_id: this.sy,
        semester_id: this.semester,
      });
      this.filteredSubjectsTags = this.subjects;
    },

    previousPage() {
      this.$router.go(-1);
    },

    setSubjectDetails(option) {
      const id = this.$route.params.id;
      if (option !== null) {
        this.formData.subject_id = option.id;
        this.formData.units = option.unit;
        this.formData.subject_code = option.code;
        this.formData.subject_description = option.description;
        this.formData.sy_id = this.sy.id;
        this.formData.instructor_id = id;
        this.formData.semester_id = this.semester.id;
      }
    },

    edit(data) {
      this.clearForm();
      this.options.course.searchText = data.course_description;
      this.options.subject.searchText = data.subject_code;
      this.options.academicYear.searchText = data.curriculum_year;
      this.isNew = false;
      Object.assign(this.formData, data);
      this.isModalActive = true;
    },

    deleteConfirmation(trashObject = null) {
      this.trashObject = trashObject;

      if (trashObject || this.checkedRows.length) {
        this.$buefy.dialog.confirm({
          title: "Deleting",
          message: `Are you sure you want to <b>delete ${trashObject.subject_code}</b>? This action cannot be undone.`,
          confirmText: "Delete",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () => {
            this.remove(this.trashObject);
          },
        });
      }
    },

    async save() {
      if (this.isNew) {
        await this.createInstructorSubject(this.formData)
          .then(() => {
            this.isModalActive = false;
            this.showNotification("Successfully created", "success");
          })
          .catch((response) => {
            this.showErrorMessage(response);
          });
      } else {
        await this.updateInstructorSubject(this.formData)
          .then(() => {
            this.isModalActive = false;
            this.showNotification("Successfully updated", "success");
          })
          .catch((response) => {
            this.showErrorMessage(response);
          });
      }
    },

    remove(data) {
      this.deleteCourseSubject(data);
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
        instructor_id: "",
        sy_id: this.sy,
        semester_id: this.semester,
        subject_code: "",
        subject_description: "",
        units: "",
      };

      this.options.subject.searchText = "";
    },
  },
};
</script>
