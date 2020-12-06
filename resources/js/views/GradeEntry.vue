<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <b-loading
      :is-full-page="false"
      :active="isComponentLoading"
      :can-cancel="false"
    ></b-loading>
    <section class="section is-main-section">
      <card-component title="Student Detail" icon="ballot">
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
                    @select="option => setSelectedStudent(option)"
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
      <card-component title="Student Grades">
        <card-toolbar>
          <button v-if="studentSubjects.length > 0"
            slot="right"
            type="button"
            :class="isEdit ? 'button is-success' : 'button is-link'"
            @click="saveGrades"
          >
            <b-icon
              v-if="!isEdit"
              icon="pencil"
              custom-size="default"
              class="i"
            />
            <b-icon
              v-if="isEdit"
              icon="content-save-edit"
              custom-size="default"
              class="i"
            />
            <span>{{ isEdit ? "Submit Grades" : "Edit Grades" }}</span>
          </button>
        </card-toolbar>
        <div class="container-fluid">
          <div class="columns">
            <b-table :data="studentSubjects">
              <template slot-scope="props">
                <b-table-column
                  searchable
                  width="12%"
                  label="Subject Code"
                  field="subject_code"
                  sortable
                  >{{ props.row.subject_code }}</b-table-column
                >

                <b-table-column
                  searchable
                  label="Descriptive Title"
                  field="subject_description"
                  width="40%"
                  sortable
                  >{{
                    props.row.subject_description | truncate(60)
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
                      <option value="">All</option>
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
                  width="15%"
                  label="Grade"
                  field="grade"
                  sortable
                >
                  <div v-if="!isEdit">
                    {{ props.row.grade }}
                  </div>
                  <b-select
                    name="grade"
                    v-model="props.row.grade"
                    v-on:blur="props.row.edit = ''"
                    @keyup.enter="props.row.edit = ''"
                    v-if="isEdit"
                    placeholder="Enter Grade"
                    style="width: 150px !important"
                    :expanded="true"
                  >
                    <option
                      v-for="(grading, index) in gradings"
                      :value="grading"
                      :key="index"
                      >{{ grading }}</option
                    >
                  </b-select>
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
                    <p>No record found...</p>
                  </template>
                </div>
              </section>
            </b-table>
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
    CardToolbar
  },
  data() {
    return {
      curriculums: [],
      grades: [],
      isAdding: false,
      isLoading: false,
      errors: {},
      isNew: true,
      paramId: this.$route.params.id,
      isLoading: false,
      isEdit: false,
      currentTab: 0,
      searchStudent: "",
      isComponentLoading: true,
      student: {
        student_id: "",
        course_id: "",
        curriculum_year: "",
        course: {}
      },

      isEdit: false,
      gradings: [
        "1.00",
        "1.25",
        "1.50",
        "1.75",
        "2.00",
        "2.25",
        "2.50",
        "2.75",
        "3.00",
        "INC",
        "5.00",
        "DRP",
        "N/A"
      ]
    };
  },

  computed: {
    titleStack() {
      return ["Transactions", "Subjects", "Grade Entry"];
    },

    sy() {
      return this.$store.state.currentSY.description;
    },

    ...mapGetters("courseSubject", ["coursesSubjects"]),
    ...mapGetters("studentSubject", ["remainingSubjects", "studentSubjects"]),
    ...mapGetters("students", ["students"]),

    filteredStudents() {
      return this.students.filter(opt => {
        return (
          opt.full_name
            .toString()
            .toLowerCase()
            .indexOf(this.searchStudent.toLowerCase()) >= 0
        );
      });
    }
  },

  async created() {
    this.isComponentLoading = true;
    await this.fetchStudents();
    this.showEnrolledSubjects();
    setTimeout(() => {
      this.isComponentLoading = false;
    }, 500);
  },
  methods: {
    ...mapActions("studentSubject", [
      "getStudentSubjects",
      "updateStudentSubject"
    ]),

    ...mapActions("students", ["fetchStudents"]),

    saveGrades() {
      if (this.isEdit) {
        this.updateStudentSubject(this.studentSubjects).then(() => {
           this.showNotification("Successfully updated", "success", "is-top-right");
          });
      }
      this.isEdit = !this.isEdit;
    },

    async showEnrolledSubjects() {
      await this.getStudentSubjects({
        id: this.student.id,
        curriculum: this.student.curriculum_year,
        sy: this.sy
      });
    },

    setSelectedStudent(data) {
      this.isLoading = true;
      if (data !== null) {
        this.student = data;
        this.student.curriculum_year = data.curriculum.curriculum_year
      } else {
        this.reset();
        this.clearText();
      }
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
        course: {}
      };
    },

    reset() {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === "object") {
          return [];
        }
        return null;
      });
    }
  }
};
</script>

<style>
.input:read-only {
  background: #f4f4f4 !important;
}
</style>
