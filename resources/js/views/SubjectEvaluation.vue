<template>
  <div>
    <title-bar :title-stack="titleStack">
      <template>
        <div class="buttons is-right">
          <button
            slot="right"
            type="button"
            class="button is-primary"
            @click="print()"
            :disabled="!student.curriculum_year"
          >
            <b-icon icon="printer" custom-size="default" class="i" />
            <span>Print Form</span>
          </button>
        </div>
      </template>
    </title-bar>
    <b-loading
      :is-full-page="false"
      :active="isComponentLoading"
      :can-cancel="false"
    ></b-loading>

    <section class="section is-main-section">
      <card-component title="Forms" icon="ballot">
        <div class="container-fluid">
          <form>
            <div class="columns">
              <div class="column is-one-half">
                <b-field label="Search Student" horizontal>
                  <b-autocomplete
                    placeholder="e.g Cruz, Juan Dela"
                    :open-on-focus="true"
                    v-model="searchStudent"
                    :data="filteredStudents"
                    field="full_name"
                    @select="(option) => setSelectedStudent(option)"
                    :clearable="true"
                  >
                    <template slot-scope="props">
                      <div>
                        {{ props.option.student_id }} |
                        {{ props.option.full_name }}
                      </div>
                    </template>
                  </b-autocomplete>
                </b-field>
              </div>
              <div class="column is-one-half">
                <b-field label="ID Number" horizontal>
                  <b-input
                    class="bg-color"
                    readonly
                    :value="student.student_id"
                  />
                </b-field>
              </div>
            </div>

            <div class="columns">
              <div class="column is-one-half">
                <b-field label="Course" horizontal>
                  <b-input readonly :value="student.course.description" />
                </b-field>
              </div>
              <div class="column is-one-half">
                <b-field label="Curriculum" horizontal>
                  <b-input readonly :value="student.curriculum_year" />
                </b-field>
              </div>
            </div>
          </form>
        </div>
      </card-component>
      <card-component>
        <div class="container-fluid">
          <div class="columns">
            <b-tabs v-model="currentTab">
              <b-tab-item label="Course Subjects">
                <div class="column is-one-half">
                  <b-table
                    :loading="isLoading"
                    :bordered="true"
                    :narrowed="true"
                    :hoverable="true"
                    :data="remainingSubjects"
                  >
                    <template slot-scope="props">
                      <b-table-column
                        searchable
                        width="10%"
                        label="Subject Code"
                        field="subject_code"
                        sortable
                        >{{ props.row.subject_code }}</b-table-column
                      >

                      <b-table-column
                        searchable
                        label="Descriptive Title"
                        field="subject_description"
                        width="30%"
                        sortable
                        >{{
                          props.row.subject_description | truncate(50)
                        }}</b-table-column
                      >

                      <b-table-column
                        label="Pre-requisite"
                        field="prerequisite"
                        width="10%"
                        sortable
                        >{{
                          props.row.prerequisite | isNone | truncate(12)
                        }}</b-table-column
                      >

                      <b-table-column
                        width="5%"
                        label="Units"
                        field="units"
                        sortable
                        >{{ props.row.units }}</b-table-column
                      >

                      <b-table-column
                        searchable
                        width="10%"
                        label="Year Level"
                        field="year_level"
                        sortable
                      >
                        <template slot="searchable" slot-scope="props">
                          <b-select
                            v-model="props.filters['year_level']"
                            slot="left"
                            style="width: 150px !important"
                            :expanded="true"
                            placeholder="Filter By Year Level"
                          >
                            <option value=""></option>
                            <option value="First Year">First Year</option>
                            <option value="Second Year">Second Year</option>
                            <option value="Third Year">Third Year</option>
                            <option value="Fourth">Fourth</option>
                            <option value="Fifth Year">Fifth Year</option>
                          </b-select>
                        </template>
                        {{ props.row.year_level }}
                      </b-table-column>

                      <b-table-column
                        searchable
                        width="12%"
                        label="Semester"
                        field="semester"
                        sortable
                      >
                        <template slot="searchable" slot-scope="props">
                          <b-select
                            v-model="props.filters['semester']"
                            slot="left"
                            style="width: 150px !important"
                            :expanded="true"
                            placeholder="Filter By Semester"
                          >
                            <option value=""></option>
                            <option value="First">First</option>
                            <option value="Second">Second</option>
                            <option value="Summer">Summer</option>
                          </b-select>
                        </template>
                        {{ props.row.semester }}</b-table-column
                      >

                      <b-table-column
                        width="8%"
                        :sortable="false"
                        custom-key="actions"
                        class="is-actions-cell"
                      >
                        <div class="buttons is-center">
                          <b-tooltip
                            label="Click to Eroll this subject"
                            position="is-top"
                          >
                            <b-button
                              class="button is-small is-success"
                              type="button"
                              icon-left="plus-circle"
                              @click.prevent="addSubject(props.row)"
                            >
                              Add
                            </b-button>
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
                </div>
              </b-tab-item>

              <b-tab-item label="Added Subjects">
                <div class="column is-one-half">
                  <b-table
                    :paginated="true"
                    :bordered="true"
                    :narrowed="true"
                    :hoverable="true"
                    :data="studentSubjects"
                  >
                    <template slot-scope="props">
                      <b-table-column
                        searchable
                        width="15%"
                        label="Subject Code"
                        field="subject_code"
                        sortable
                        >{{ props.row.subject_code }}</b-table-column
                      >

                      <b-table-column
                        searchable
                        label="Descriptive Title"
                        field="subject_description"
                        width="45%"
                        sortable
                        >{{
                          props.row.subject_description | truncate(100)
                        }}</b-table-column
                      >

                      <b-table-column
                        searchable
                        width="10%"
                        label="Units"
                        field="units"
                        sortable
                        >{{ props.row.units }}</b-table-column
                      >

                      <b-table-column
                        searchable
                        width="12%"
                        label="Year Level"
                        field="year_level"
                        sortable
                      >
                        <template slot="searchable" slot-scope="props">
                          <b-select
                            v-model="props.filters['year_level']"
                            slot="left"
                            style="width: 150px !important"
                            :expanded="true"
                          >
                            <option value="First Year">First Year</option>
                            <option value="Second Year">Second Year</option>
                            <option value="Third Year">Third Year</option>
                            <option value="Fourth">Fourth</option>
                            <option value="Fifth Year">Fifth Year</option>
                          </b-select>
                        </template>
                        {{ props.row.year_level }}
                      </b-table-column>

                      <b-table-column
                        custom-key="actions"
                        class="is-actions-cell"
                      >
                        <div class="buttons is-left">
                          <b-tooltip
                            label="Click to remove this subject"
                            position="is-top"
                          >
                            <b-button
                              v-if="!props.row.grade"
                              class="button is-small is-danger"
                              type="button"
                              icon-left="delete"
                              @click.prevent="removeSubject(props.row)"
                            >
                              Remove
                            </b-button>
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
                        <template v-else> </template>
                      </div>
                    </section>
                  </b-table>
                </div>
              </b-tab-item>
            </b-tabs>
          </div>
        </div>
      </card-component>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import TitleBar from "@/components/TitleBar";
import CardComponent from "@/components/CardComponent";
import CardToolbar from "@/components/CardToolbar";
import mapValues from "lodash/mapValues";
import apiClient from "../apiClient";
import HeroBar from "@/components/HeroBar";
import Axios from "axios";
export default {
  name: "Registration",
  components: {
    HeroBar,
    CardComponent,
    TitleBar,
    CardToolbar,
  },
  data() {
    return {
      curriculums: [],
      isAdding: false,
      isLoading: false,
      errors: {},
      isNew: true,
      paramId: this.$route.params.id,
      isLoading: false,

      currentTab: 0,
      searchStudent: "",
      isComponentLoading: true,
      student: {
        student_id: "",
        course_id: "",
        curriculum_year: "",
        course: {},
      },
    };
  },

  computed: {
    titleStack() {
      return ["Transactions", "Subject Evaluation"];
    },
    sy() {
      return this.$store.state.currentSY?.description;
    },
    semester() {
      return this.$store.state.currentSem?.semester;
    },
    ...mapGetters("courseSubject", ["coursesSubjects"]),
    ...mapGetters("studentSubject", ["remainingSubjects", "studentSubjects"]),
    ...mapGetters("students", ["students"]),

    filteredStudents() {
      return this.students.filter((opt) => {
        return (
          opt.full_name
            .toString()
            .toLowerCase()
            .indexOf(this.searchStudent.toLowerCase()) >= 0
        );
      });
    },
  },

  async created() {
    this.isComponentLoading = true;
    await this.fetchStudents();
    this.showSubjects();
    setTimeout(() => {
      this.isComponentLoading = false;
    }, 300);
  },
  methods: {
    ...mapActions("courseSubject", ["fetchCoursesSubjects"]),
    ...mapActions("studentSubject", [
      "fetchStudentRemainingSubjects",
      "postStudentSubject",
      "getStudentSubjects",
      "deleteStudentSubject",
    ]),
    ...mapActions("students", ["fetchStudents"]),

    showSubjects() {
      this.fetchStudentRemainingSubjects({
        courseId: this.student.course_id,
        curriculum: this.student.curriculum_year,
        studentId: this.student.student_id,
        sy: this.sy,
      });
    },

    print() {
      let routeData = this.$router.resolve({
        name: "student-form-print",
        params: { 
          sy: this.sy,
          semester: this.semester.toLowerCase(),
          student_id: this.student.id,
        }
      });

      window.open(routeData.href, "_blank");
    },

    showEnrolledSubjects() {
      this.getStudentSubjects({
        id: this.student.id,
        curriculum: this.student.curriculum_year,
        sy: this.sy,
      });
    },
    setSelectedStudent(data) {
      this.isLoading = true;
      if (data !== null) {
        this.student = data;
        this.student.curriculum_year = data.curriculum.curriculum_year;
      } else {
        this.reset();
        this.clearText();
      }
      this.showSubjects();
      this.showEnrolledSubjects();
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },

    clearText() {
      this.student = {
        student_id: "",
        course_id: "",
        curriculum_year: "",
        course: {},
      };
    },

    removeSubject(data) {
      this.deleteStudentSubject(data).then(() => {
        this.$buefy.snackbar.open({
          message: `${data.subject_code} successfully removed`,
          queue: false,
          position: "is-top",
        });
      });
      this.showSubjects();
    },

    addSubject(data) {
      this.isAdding = true;
      let studentSbj = data;
      studentSbj.school_year = this.sy;
      studentSbj.student_id = this.student.id;
      studentSbj.semester = this.semester;
      apiClient
        .post("/student/subjects", studentSbj)
        .then((response) => {
          this.$store.commit(
            "studentSubject/REMOVE_ADDED_SUBJECT",
            response.data.data
          );

          this.$store.commit(
            "studentSubject/ADD_STUDENT_SUBJECT",
            response.data.data
          );

          this.$buefy.snackbar.open({
            message: response.data.message,
            queue: false,
            position: "is-top",
          });
          this.isAdding = false;
        })
        .catch(({ response }) => {
          this.$buefy.snackbar.open({
            message: response.data.message,
            queue: false,
            position: "is-top",
          });
          this.isAdding = false;
        });
    },

    reset() {
      this.form = mapValues(this.form, (item) => {
        if (item && typeof item === "object") {
          return [];
        }
        return null;
      });
    },
  },
};
</script>

<style>
.input:read-only {
  background: #f4f4f4 !important;
}
</style>
