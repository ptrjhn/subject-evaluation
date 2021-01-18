<template>
  <div>
    <div>
      <title-bar :title-stack="['Instructor Subjects']" />
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
import apiClient from "../apiClient";

import CardToolbar from "@/components/CardToolbar";
import { mapGetters, mapActions, mapState } from "vuex";

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
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: [],
      params: {
        instructor_id: "",
        sy_id: "",
        semester_id: "",
      },
    };
  },

  computed: {
    ...mapGetters("subjects", ["subjects"]),
    ...mapGetters("auth", ["user"]),
    ...mapGetters("instructors", ["instructor", "instructorSubjects"]),
  },

  async created() {
    await this.currentAY();
    await this.currentSem();
    await this.fetchInstructorLoad();
  },

  methods: {
    ...mapActions("subjects", ["fetchSubjects"]),
    ...mapActions("instructors", [
      "fetchInstructor",
      "fetchInstructorSubjects",
      "updateInstructorSubject",
      "createInstructorSubject",
    ]),

    async currentSem() {
      await apiClient
        .get("/settings/semesters/current")
        .then((response) => {
          this.$store.commit("currentSem", response.data.data[0]);
        })
        .catch((error) => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
          });
        });
    },
    async currentAY() {
      await apiClient
        .get("/sy/current")
        .then((response) => {
          this.$store.commit("currentSY", response.data.data[0]);
        })
        .catch((error) => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
          });
        });
    },

    async fetchInstructorLoad() {
      let sy = this.$store.state.currentSY;
      let sem = this.$store.state.currentSem;

      await this.fetchInstructorSubjects({
        instructor_id: this.user.instructor_id,
        sy_id: sy.id,
        semester_id: sem.id,
      });
    },
  },
};
</script>
