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
                <b-field label="Student Name" horizontal>
                  <b-input
                    class="bg-color"
                    readonly
                    :value="student.full_name"
                  />
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
                  <b-input readonly :value="course.description" />
                </b-field>
              </div>
              <div class="column is-one-half">
                <b-field label="Curriculum" horizontal>
                  <b-input readonly :value="curriculum.curriculum_year" />
                </b-field>
              </div>
            </div>
          </form>
        </div>
      </card-component>
      <card-component title="Subjects">
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
                  <div>
                    {{ props.row.grade }}
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
  name: "Grades",
  components: {
    HeroBar,
    CardComponent,
    TitleBar,
    CardToolbar,
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
      isComponentLoading: true,
    };
  },

  computed: {
    ...mapGetters("auth", ["user"]),
    titleStack() {
      return ["Subjects"];
    },

    sy() {
      return this.$store.state.currentSY;
    },
    semester() {
      return this.$store.state.currentSem;
    },
    course() {
      return this.student.course;
    },

    curriculum() {
      return this.student.curriculum;
    },

    ...mapGetters("courseSubject", ["coursesSubjects"]),
    ...mapGetters("studentSubject", ["remainingSubjects", "studentSubjects"]),
    ...mapGetters("students", ["student"]),
  },

  async created() {
    this.isComponentLoading = true;
    await this.showStudent();
    setTimeout(() => {
      this.isComponentLoading = false;
    }, 500);
  },
  methods: {
    ...mapActions("studentSubject", ["getStudentSubjects"]),
    ...mapActions("students", ["fetchStudent"]),
    async showStudent() {
      await this.fetchStudent(this.user.student_id);
      await this.showEnrolledSubjects();
    },
    async showEnrolledSubjects() {
      await this.getStudentSubjects({
        id: this.user.student_id,
        curriculum: this.student.curriculum_year,
        sy: this.sy.description,
        semester: this.semester.semester,
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
