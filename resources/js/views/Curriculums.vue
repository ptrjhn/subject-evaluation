<template>
  <div>
    <div>
      <title-bar
        :title-stack="['Master Files', 'Courses','Curriculums','List']"
      />
      <hero-bar>
        Courses Curriculums
        <button class="button is-default" @click="showModal()" slot="right">
          <b-icon icon="file-plus" custom-size="default" class="i" />
          <span>New</span>
        </button>
      </hero-bar>
      <section class="section is-main-section">
        <card-component
          class="has-table has-mobile-sort-spaced"
          title="Curriculums"
        >
          <card-toolbar>
            <b-field slot="right">
              <b-input placeholder="Search..." expanded></b-input>
              <p class="control">
                <button class="button is-primary">Search</button>
              </p>
            </b-field>

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
                  <b-field>
                    <template slot="label">
                      Course
                      <span class="has-text-danger">*</span>
                    </template>
                    <b-autocomplete
                      placeholder="e.g. Bachelor of Science in Information Technology"
                      :data="getFilteredCourses"
                      v-model="options.course.searchText"
                      field="description"
                      @select="
                        option =>
                          (this.formData.course_id =
                            option === null ? '' : option.id)
                      "
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

                  <b-field label="Academic Year">
                    <template slot="label">
                      Curriculum Year
                      <span class="has-text-danger">*</span>
                    </template>
                    <b-autocomplete
                      placeholder="e.g. S.Y 2013 - 2014"
                      :open-on-focus="true"
                      v-model="options.academicYear.searchText"
                      :data="filteredYear"
                      expanded
                      field="description"
                      @select="
                        option =>
                          (this.formData.curriculum_year =
                            option === null ? '' : option.description)
                      "
                      :clearable="true"
                    ></b-autocomplete>
                  </b-field>
                </section>
                <footer slot="left" class="modal-card-foot">
                  <button type="submit" class="button is-success">
                    {{ isNew ? "Save" : "Update" }}
                  </button>
                  <a class="button" @click="cancel()">Cancel</a>
                </footer>
              </div>
            </form>
          </b-modal>

          <b-table
            :paginated="true"
            :per-page="perPage"
            :hoverable="true"
            :data="curriculums"
            :narrowed="true"
            :bordered="true"
          >
            <template slot-scope="props">
              <b-table-column
                searchable
                label="Course Code"
                field="course_oode"
                sortable
                class="wrap-text"
                width="12%"
                >{{ props.row.course.course_code }}</b-table-column
              >

              <b-table-column
                searchable
                label="Course Description"
                field="description"
                sortable
                width="20%"
                class="wrap-text"
                >{{ props.row.course.description }}</b-table-column
              >

              <b-table-column
                label="Curriculum Year"
                field="curriculum_year"
                width="12%"
                sortable
                >{{ props.row.curriculum_year }}</b-table-column
              >

              <b-table-column
                custom-key="actions"
                class="is-actions-cell"
                width="10%"
              >
                <div class="buttons is-right">
                  <b-tooltip label="Print Subjects" position="is-top">
                    <button class="button is-primary" @click="navigateToSubjects(props.row)">
                      <b-icon icon="printer" size="is-small" />
                    </button>
                  </b-tooltip>
                 <b-tooltip label="Details" position="is-top">
                    <button class="button is-link" @click="navigateToSubjects(props.row)">
                      <b-icon icon="view-headline" size="is-small" />
                    </button>
                  </b-tooltip>
                  <b-tooltip label="Edit" position="is-top">
                    <button class="button is-link" @click="edit(props.row)">
                      <b-icon icon="pencil" size="is-small" />
                    </button>
                  </b-tooltip>
                  <b-tooltip label="Delete" position="is-top">
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

            <template slot="detail" slot-scope="props">
              <div class="content">
                <p>
                  <strong>Descriptive Title:</strong>
                  {{ props.row.subject_description }}
                </p>
                <p>
                  <strong>Number of Units:</strong>
                  {{ props.row.units }}
                </p>
                <p>
                  <strong>Lecture Hours:</strong>
                  {{ props.row.lec }}
                </p>
                <p>
                  <strong>Laboratory Hours:</strong>
                  {{ props.row.lab }}
                </p>
              </div>
            </template>
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
import { mapGetters, mapActions, mapState } from "vuex";

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
        course_id: "",
        curriculum_year: "",
        is_active: true
      }
    };
  },

  computed: {
    ...mapGetters("curriculums", ["curriculums"]),
    ...mapGetters("courses", ["courses"]),
    ...mapGetters("academicYears", ["academicYears"])
  },

  async created() {
    await this.fetchCurriculums();
    await this.fetchCourses();
    await this.fetchAcademicYears();
  },

  methods: {
    ...mapActions("curriculums", [
      "fetchCurriculums",
      "createCurriculum",
      "updateCurriculum",
      "deleteCurriculum"
    ]),

    ...mapActions("courses", ["fetchCourses"]),
    ...mapActions("academicYears", ["fetchAcademicYears"]),

    edit(data) {
      this.clearForm();
      this.options.course.searchText = data.course.description;
      this.options.academicYear.searchText = data.curriculum_year;
      this.isNew = false;
      Object.assign(this.formData, data);
      this.isModalActive = true;
    },

    navigateToSubjects(params) {
        this.$router.push({path: `/courses/curriculums/${params.id}/subjects`});
    },

    deleteConfirmation(trashObject = null) {
      this.trashObject = trashObject;

      if (trashObject || this.checkedRows.length) {
        this.$buefy.dialog.confirm({
          title: "Deleting",
          message: `Are you sure you want to <b>delete</b>? This action cannot be undone.`,
          confirmText: "Delete",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () => {
            this.remove(this.trashObject);
          }
        });
      }
    },

    async save() {
      let response = null;
      if (this.isNew) {
        response = await this.createCurriculum(this.formData);
        if (response == undefined || response == null) {
          this.isModalActive = false;
          this.showNotification("Successfully created", "success");
        } else {
          this.showErrorMessage(response);
        }
      } else {
        response = await this.updateCurriculum(this.formData);
        if (response == undefined || response == null) {
          this.isModalActive = false;
          this.showNotification("Successfully updated", "success");
        } else {
          this.showErrorMessage(response);
        }
      }
    },

    remove(data) {
      this.deleteCurriculum(data);
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
        course_id: "",
        curriculum_year: ""
      };

      this.options.course.searchText = "";
      this.options.academicYear.searchText = "";
    }
  }
};
</script>
