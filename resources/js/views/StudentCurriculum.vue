<template>
  <div>
    <div>
      <title-bar :title-stack="['Curriculum Checklist']" />
      <!-- <hero-bar> </hero-bar> -->
      <section class="section is-main-section">
        <card-component
          class="has-table has-mobile-sort-spaced"
          title="Curriculum Grades"
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

          <b-table
            :loading="isLoading"
            :paginated="true"
            :per-page="perPage"
            :hoverable="true"
            default-sort="subject_code"
            :narrowed="true"
            :data="grades"
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

              <b-table-column label="Grade" field="grade" width="5%" sortable>{{
                props.row.grade
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
      perPage: "15",
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

    ...mapGetters("students", ["student", "grades"]),
    ...mapGetters("curriculums", ["curriculum"]),
  },

  async created() {
    await this.showStudent();
    await this.fetchGrades({
      student_id: this.student.student_id,
      curriculum_id: this.student.curriculum_id,
    });
  },

  methods: {
    ...mapActions("students", ["fetchGrades", "fetchStudent"]),
    ...mapActions("curriculums", ["fetchCurriculum"]),

    async showStudent() {
      await this.fetchStudent(this.user.student_id);
      //   await this.showCourseSubjects();
    },
    async showCourseSubjects() {
      await this.getSubjects();
    },

    print() {
      let routeData = this.$router.resolve({
        name: "student-curriculum-grades",
        params: { student_id: this.student.id },
      });
      window.open(routeData.href, "_blank");
    },

    async getSubjects() {
      this.isLoading = true;
      //   await this.fetchCoursesSubjects({
      //     curriculum_id: this.student.curriculum_id,
      //   });
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>
