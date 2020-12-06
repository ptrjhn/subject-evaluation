<template>
  <div>
    <div>
      <title-bar :title-stack="['Master Files', 'Students', 'List']" />
      <hero-bar>
        Students
        <router-link
          class="button is-default"
          :to="{ name: 'students-new' }"
          slot="right"
        >
          <b-icon icon="file-plus" custom-size="default" class="i" />
          <span>New</span>
        </router-link>
      </hero-bar>
      <section class="section is-main-section">
        <card-component
          class="has-table has-mobile-sort-spaced"
          title="Students"
        >
          <card-toolbar>
            <b-select v-model="perPage" slot="left">
              <option value="5">5 per page</option>
              <option value="10">10 per page</option>
              <option value="15">15 per page</option>
              <option value="20">20 per page</option>
              <option value="25">25 per page</option>
            </b-select>
          </card-toolbar>

          <b-table
            :loading="isLoading"
            :paginated="true"
            :per-page="perPage"
            :hoverable="true"
            default-sort="student_id"
            :data="students"
            ref="table"
            detailed
            detail-key="id"
            :show-detail-icon="true"
          >
            <template slot-scope="props">
              <b-table-column
                searchable
                label="ID Number"
                width="10%"
                field="student_id"
                >{{ props.row.student_id }}</b-table-column
              >

              <b-table-column
                searchable
                width="30%"
                label="Student Name"
                field="full_name"
                >{{ props.row.full_name }}</b-table-column
              >

              <b-table-column
                searchable
                label="Gender"
                field="sex"
                sortable
                :title="props.row.sex"
                >{{ props.row.sex | isEmpty }}</b-table-column
              >

              <b-table-column
                searchable
                label="Course"
                field="course.course_code"
                sortable
                :title="props.row.course.course_code"
                >{{ props.row.course.course_code }}</b-table-column
              >

              <b-table-column
                searchable
                label="Curriculum"
                field="curriculum.curriculum_year"
                sortable
                :title="props.row.curriculum.curriculum_year"
                >{{ props.row.curriculum.curriculum_year }}</b-table-column
              >

              <b-table-column
                searchable
                label="Contact No"
                field="contact_no"
                sortable
                class="wrap-text"
                :title="props.row.contact_no"
                >{{ props.row.contact_no }}</b-table-column
              >

              <b-table-column
                custom-key="actions"
                class="is-actions-cell"
                width="10%"
              >
                <div class="buttons is-right">
                  <b-tooltip label="Click to edit" position="is-top">
                    <router-link
                      class="button is-link is-small"
                      :to="{
                        name: 'students-edit',
                        params: { id: props.row.id }
                      }"
                    >
                      <b-icon icon="pencil" size="is-small" />
                    </router-link>
                  </b-tooltip>
                  <b-tooltip label="Click to Delete" position="is-top">
                    <button
                      class="button is-danger is-small"
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
                <div class="columns">
                  <div class="column">
                    <span>
                      <strong>Date of Birth:</strong>
                      {{ formatDate(props.row.birth_date) }}
                    </span>
                  </div>
                  <div class="column">
                    <span>
                      <strong>Civil Status:</strong>
                      {{ props.row.civil_status | isEmpty }}
                    </span>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <p>
                      <span>
                        <strong>Address:</strong>
                        {{ props.row.address }}
                      </span>

                      <span style="margin-left: 3rem">
                        <strong>Birth Place:</strong>
                        {{ props.row.birth_place | isEmpty }}
                      </span>
                    </p>
                  </div>
                  <div class="column">
                    <p>
                      <span>
                        <strong>Course Description:</strong>
                        {{ props.row.course.description }}
                      </span>
                    </p>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <p>
                      <span>
                        <strong>Guardian Name:</strong>
                        {{ props.row.guardian | isEmpty }}
                      </span>

                      <span style="margin-left: 1rem">
                        <strong>Guardian Contact:</strong>
                        {{ props.row.guardian_contact | isEmpty }}
                      </span>
                    </p>
                  </div>

                  <div class="column">
                    <p>
                      <span>
                        <strong>Nationality:</strong>
                        {{ props.row.nationality | isEmpty }}
                      </span>

                      <span style="margin-left: 3.5rem !important">
                        <strong>Religion:</strong>
                        {{ props.row.religion | isEmpty }}
                      </span>
                    </p>
                  </div>
                </div>
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
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import CardToolbar from "@/components/CardToolbar";
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  components: {
    CardToolbar,
    HeroBar,
    TitleBar,

    CardComponent
  },
  data() {
    return {
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: [],
      isNew: true
    };
  },

  computed: {
    ...mapGetters("students", ["students"])
  },

  created() {
    this.isLoading = true;
    this.fetchStudents();
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  },

  methods: {
    ...mapActions("students", ["fetchStudents", "deleteStudent"]),

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
          message: `Are you sure you want to <b>delete ${trashObject.student_id}</b>? This action cannot be undone.`,
          confirmText: "Delete",
          type: "is-danger",
          hasIcon: true,
          onConfirm: () => {
            this.remove(this.trashObject);
          }
        });
      }
    },

    remove(data) {
      this.deleteStudent(data);
      this.showNotification("Successfully deleted", "info");
    }
  }
};
</script>
