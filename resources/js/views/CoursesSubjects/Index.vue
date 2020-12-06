<template>
  <div>
    <div>
      <title-bar
        :title-stack="['Master Files', 'Curriculum Subjects', 'List']"
      />
      <hero-bar>
        <!-- {{curriculum.course.course_code}} - {{curriculum.course.description}} Subjects -->
        <button class="button is-default" @click="showModal()" slot="right">
          <b-icon icon="file-plus" custom-size="default" class="i" />
          <span>New</span>
        </button>
        <button
          class="button is-default ml-2"
          @click="navigateToCurriculums()"
          slot="right"
        >
          <!-- <b-icon icon="back" custom-size="default" class="i" /> -->
          <span>Back</span>
        </button>
      </hero-bar>
      <section class="section is-main-section">
        <card-component
          class="has-table has-mobile-sort-spaced"
          :title="
            `${curriculum.course.course_code} - ${curriculum.curriculum_year}`
          "
        >
          <card-toolbar>
            <button
              slot="right"
              type="button"
              class="button is-primary"
              @click="print()"
            >
              <b-icon icon="printer" custom-size="default" class="i" />
              <span>Print</span>
            </button>

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
                  <!--
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
                      :open-on-focus="true"
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
                  !-->
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
                      @select="option => setSubjectDetails(option)"
                      :clearable="true"
                    >
                      <template slot-scope="props">
                        <strong>{{ props.option.code }}</strong>
                        | {{ props.option.description }}
                      </template>
                    </b-autocomplete>
                  </b-field>

                  <b-field label="Prerequsite">
                    <b-taginput
                      close-type="is-success"
                      :open-on-focus="true"
                      v-model="tags.prerequisite"
                      :data="filteredSubjectsTags"
                      autocomplete
                      field="code"
                      type="is-info"
                      maxtags="5"
                      placeholder="Enter Subject Code"
                      @typing="getFilteredSubjectTags"
                    >
                      <template slot-scope="props">
                        <strong>{{ props.option.code }}</strong>
                        | {{ props.option.description }}
                      </template>
                    </b-taginput>
                  </b-field>

                  <b-field label="Year Level">
                    <template slot="label">
                      Year Level
                      <span class="has-text-danger">*</span>
                    </template>

                    <b-select
                      placeholder="Year Level"
                      v-model="formData.year_level"
                      expanded
                    >
                      <option value="First Year">First Year</option>
                      <option value="Second Year">Second Year</option>
                      <option value="Third Year">Third Year</option>
                      <option value="Fourth Year">Fourth Year</option>
                      <option value="Fifth Year">Fifth Year</option>
                    </b-select>
                  </b-field>

                  <b-field label="Semester">
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
            default-sort="subject_code"
            :narrowed="true"
            :data="coursesSubjects"
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

              <b-table-column label="Units" field="units" width="5%" sortable>{{
                props.row.units
              }}</b-table-column>

              <b-table-column label="Lab" field="lab" width="5%" sortable>{{
                props.row.lab
              }}</b-table-column>

              <b-table-column label="Lec" field="lec" width="5%" sortable>{{
                props.row.lec
              }}</b-table-column>

              <b-table-column
                label="Semester"
                field="semester"
                width="10%"
                sortable
                >{{ props.row.semester }}</b-table-column
              >

              <b-table-column
                label="Year Level"
                field="year_level"
                sortable
                width="10%"
                class="wrap-text"
                >{{ props.row.year_level }}</b-table-column
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
      openedDetails: [],
      checkedRows: [],
      isNew: true,
      curriculum_id: this.$route.params.curriculum_id,
      filteredSubjectsTags: [],

      tags: {
        prerequisite: []
      },

      formData: {
        id: "",
        course_id: "",
        sy_id: "",
        units: "",
        prerequisite: [],
        subject_code: "",
        lec: "",
        subject_id: "",
        lab: "",
        year_level: "",
        curriculum_year: "",
        semester: ""
      }
    };
  },

  computed: {
    ...mapGetters("courseSubject", ["coursesSubjects", "courseSubject"]),
    ...mapGetters("courses", ["courses"]),
    ...mapGetters("subjects", ["subjects"]),
    ...mapGetters("curriculums", ["curriculum"]),
    ...mapGetters("academicYears", ["academicYears"])
  },

  async created() {
    await this.fetcCurriculumSubjects();
    this.getSubjects();
    this.fetchSubjects();
    this.filteredSubjectsTags = this.subjects;
  },

  methods: {
    ...mapActions("courseSubject", [
      "fetchCourseSubject",
      "fetchCoursesSubjects",
      "createCourseSubject",
      "updateCourseSubject",
      "deleteCourseSubject"
    ]),

    ...mapActions("curriculums", ["fetchCurriculum"]),

    ...mapActions("courses", ["fetchCourses"]),
    ...mapActions("subjects", ["fetchSubjects"]),
    ...mapActions("academicYears", ["fetchAcademicYears"]),

    getFilteredSubjectTags(text) {
      this.filteredSubjectsTags = this.subjects.filter(opt => {
        return (
          opt.code
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0 ||
          opt.description
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },

    async getSubjects() {
      this.isLoading = true;
      await this.fetchCoursesSubjects({
        curriculum_id: this.curriculum_id
      });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },

    getTaggedPrerequisite(tags) {
      if (tags !== null) {
        tags = tags.includes(",") ? tags.split(",") : [].concat(tags);
        let sbjTag = null;
        tags.forEach(value => {
          sbjTag = this.subjects.forEach(sbj => {
            if (sbj.code == value) {
              this.tags.prerequisite.push(sbj);
              return sbj;
            }
          });
        });
      }
    },

    setSubjectDetails(option) {
      if (option !== null) {
        this.formData.subject_id = option.id;
        this.formData.units = option.unit;
        this.formData.lab = option.lab;
        this.formData.lec = option.lec;
      }
    },

    edit(data) {
      this.clearForm();
      console.log(data);
      this.options.course.searchText = data.course_description;
      this.options.subject.searchText = data.subject_code;
      this.options.academicYear.searchText = data.curriculum_year;
      this.isNew = false;
      Object.assign(this.formData, data);
      this.getTaggedPrerequisite(data.prerequisite);
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
          }
        });
      }
    },

    async fetcCurriculumSubjects() {
      await this.fetchCurriculum(this.curriculum_id);
    },

    mapSubjectCode() {
      this.formData.prerequisite = this.tags.prerequisite.map(item => {
        return item.code;
      });
      this.formData.prerequisite = this.formData.prerequisite.toString();
    },

    async save() {
      let response = null;
      this.mapSubjectCode();
      if (this.isNew) {
        response = await this.createCourseSubject(this.formData);
        if (response == undefined || response == null) {
          this.isModalActive = false;
          this.showNotification("Successfully created", "success");
        } else {
          this.showErrorMessage(response);
        }
      } else {
        response = await this.updateCourseSubject(this.formData);
        if (response == undefined || response == null) {
          this.isModalActive = false;
          this.showNotification("Successfully updated", "success");
        } else {
          this.showErrorMessage(response);
        }
      }
    },

    remove(data) {
      this.deleteCourseSubject(data);
      this.showNotification("Successfully deleted", "info");
    },

    cancel() {
      this.isModalActive = false;
    },

    navigateToCurriculums() {
      this.$router.push({ path: "/courses/curriculums" });
    },

    showModal() {
      this.clearForm();
      this.isModalActive = true;
      this.isNew = true;

      this.formData.course_id = this.curriculum.course_id;
      this.formData.curriculum_id = this.curriculum.id;
    },

    print() {
      let routeData = this.$router.resolve({ name: "curriculum-subjects-print", 
      params: {curriculum_id: this.curriculum_id} });
      window.open(routeData.href, "_blank");
    },

    clearForm() {
      this.formData = {
        id: "",
        course_id: "",
        sy_id: "",
        units: "",
        prerequisite: [],
        subject_code: "",
        lec: "",
        subject_id: "",
        lab: "",
        year_level: "",
        semester: "",
        curriculum_id: ""
      };

      this.options.course.searchText = "";
      this.options.subject.searchText = "";
      this.options.academicYear.searchText = "";
      this.tags.prerequisite = [];
    }
  }
};
</script>
