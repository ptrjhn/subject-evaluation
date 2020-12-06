<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      {{ isNew ? "New Student" : "Edit Student" }}
      <router-link slot="right" :to="{ name: 'students-list' }" class="button"
        >List</router-link
      >
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Forms" icon="ballot">
        <div class="container">
          <form @submit.prevent="submit" novalidate>
            <b-field label="ID Number" horizontal>
              <b-field
                :type="errors.student_id == null ? '' : 'is-danger'"
                :message="errors.student_id == null ? '' : errors.student_id"
              >
                <b-input
                  icon="id-card"
                  v-cleave="masks.studentId"
                  :value="form.student_id"
                  @input.native="onInput"
                  placeholder="Enter School ID Number | e.g 20-XXXXX"
                  required
                />
              </b-field>
            </b-field>

            <b-field label="Student Name" horizontal>
              <b-field
                :type="errors.last_name == null ? '' : 'is-danger'"
                :message="errors.last_name == null ? '' : errors.last_name"
              >
                <b-input
                  icon="account"
                  v-model="form.last_name"
                  placeholder="Enter Last Name"
                  required
                />
              </b-field>
              <b-field
                :type="errors.first_name == null ? '' : 'is-danger'"
                :message="errors.first_name == null ? '' : errors.first_name"
              >
                <b-input
                  icon="account"
                  v-model="form.first_name"
                  placeholder="Enter First Name"
                  required
                />
              </b-field>

              <b-field
                :type="errors.middle_name == null ? '' : 'is-danger'"
                :message="errors.middle_name == null ? '' : errors.middle_name"
              >
                <b-input
                  icon="account"
                  v-model="form.middle_name"
                  required
                  placeholder="Enter Middle Name"
                />
              </b-field>
            </b-field>

            <b-field
              label="Address"
              :type="errors.address == null ? '' : 'is-danger'"
              :message="errors.address == null ? '' : errors.address"
              horizontal
            >
              <b-input
                icon="map-marker"
                v-model="form.address"
                placeholder="Enter Permanent Address"
              />
            </b-field>

            <b-field>
              <b-field
                :type="errors.sex == null ? '' : 'is-danger'"
                :message="errors.sex == null ? '' : errors.sex"
                horizontal
                label="Gender"
              >
                <div class>
                  <b-radio v-model="form.sex" name="sex" native-value="Male">
                    Male
                  </b-radio>
                  <b-radio v-model="form.sex" name="sex" native-value="Female">
                    Female
                  </b-radio>
                </div>
              </b-field>
            </b-field>

            <b-field
              :type="errors.civil_status == null ? '' : 'is-danger'"
              :message="errors.civil_status == null ? '' : errors.civil_status"
              label="Civil Status"
              horizontal
            >
              <b-select
                icon="clipboard-list"
                expanded
                placeholder="Select Course"
                v-model="form.civil_status"
                required
              >
                <option
                  v-for="(status, index) in civilStatus"
                  :key="index"
                  :value="status"
                >
                  {{ status }}
                </option>
              </b-select>
            </b-field>

            <b-field
              label="Date of Birth"
              :type="errors.birth_date == null ? '' : 'is-danger'"
              :message="errors.birth_date == null ? '' : errors.birth_date"
              horizontal
            >
              <b-datepicker
                v-model="bday"
                placeholder="Type or select a date..."
                icon="calendar-today"
                editable
              >
              </b-datepicker>
            </b-field>

            <b-field
              label="Contact Number"
              :type="errors.contact_no == null ? '' : 'is-danger'"
              :message="errors.contact_no == null ? '' : errors.contact_no"
              horizontal
            >
              <b-field>
                <b-input
                  icon="contact-phone"
                  type="text"
                  v-cleave="masks.cp_number"
                  :value="form.contact_no"
                  @change="onInputContactNumber"
                  @blur="onInputContactNumber"
                  v-model="form.contact_no"
                  name="phone"
                  expanded
                />
              </b-field>
            </b-field>
            <b-field label="Course/Curriculum" horizontal>
              <b-field
                :type="errors.course_id == null ? '' : 'is-danger'"
                :message="errors.course_id == null ? '' : errors.course_id"
              >
                <b-autocomplete
                  icon="clipboard-list"
                  expanded
                  v-model="options.course.searchText"
                  required
                  placeholder="e.g. Bachelor of Science in Information Technology"
                  :data="getFilteredCourses"
                  field="description"
                  :open-on-focus="true"
                  @select="option => getCurriculumsByCourse(option.id)"
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

              <b-field
                :type="errors.curriculum_id == null ? '' : 'is-danger'"
                :message="
                  errors.curriculum_id == null ? '' : errors.curriculum_id
                "
              >
                <b-select
                  icon="calendar-account"
                  expanded
                  placeholder="Select Curriculum Year"
                  v-model="form.curriculum_id"
                  required
                >
                  <option
                    v-for="(curriculum, index) in curriculums"
                    :key="index"
                    :value="curriculum.id"
                  >
                    {{ curriculum.curriculum_year }}
                  </option>
                </b-select>
              </b-field>
            </b-field>
            <hr />
            <b-field label="Place of Birth" horizontal>
              <b-input
                icon="map-marker"
                v-model="form.birth_place"
                placeholder="Enter Place of Birth (Optional)"
              />
            </b-field>
            <b-field label="Guardian Name/Contact" horizontal>
              <b-field
                :type="errors.guardian_name == null ? '' : 'is-danger'"
                :message="
                  errors.guardian_name == null ? '' : errors.guardian_name
                "
              >
                <b-input
                  icon="account"
                  v-model="form.guardian_name"
                  placeholder="Enter Guardian Name (Optional)"
                />
              </b-field>
              <b-field
                :type="errors.guardian_contact == null ? '' : 'is-danger'"
                :message="
                  errors.guardian_contact == null ? '' : errors.guardian_contact
                "
              >
                <b-input
                  v-cleave="masks.cp_number"
                  :value="form.guardian_contact"
                  @change="onInputGuardianContact"
                  @blur="onInputGuardianContact"
                  icon="contact-phone"
                  v-model="form.guardian_contact"
                  placeholder="Enter Guardian Contact No. (Optional)"
                />
              </b-field>
            </b-field>
            <b-field label="Nationality/Religion" horizontal>

              <b-field>
                <b-input
                  icon="translate"
                  v-model="form.nationality"
                  placeholder="Enter Nationality (Optional)"
                />
              </b-field>
              <b-field>
                <b-input
                  icon="christianity"
                  v-model="form.religion"
                  placeholder="Enter Religion (Optional)"
                />
              </b-field>
            </b-field>
            <hr />
            <b-field horizontal>
              <b-field grouped>
                <div class="control">
                  <b-button native-type="submit" type="is-primary"
                    >Submit</b-button
                  >
                </div>
                <div class="control">
                  <b-button type="is-primary is-outlined" @click="reset"
                    >Reset</b-button
                  >
                </div>
              </b-field>
            </b-field>
          </form>
        </div>
      </card-component>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
import apiClient from "../../apiClient";
import TitleBar from "@/components/TitleBar";
import CardComponent from "@/components/CardComponent";
import mapValues from "lodash/mapValues";
import HeroBar from "@/components/HeroBar";
export default {
  name: "Forms",
  components: {
    HeroBar,
    CardComponent,
    TitleBar
  },
  data() {
    return {
      curriculums: [],
      errors: {},
      isNew: true,
      paramId: this.$route.params.id,
      isLoading: false,
      bday: new Date(),
      form: {
        id: "",
        student_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        guardian_contact: "",
        contact_no: "",
        curriculum_year: "",
        birth_place: "",
        guardian_name: "",
        nationality: "",
        religion: "",
        curriculum_id: "",
        address: "",
        civil_status: "",
        course_id: "",
        birth_date: "",
        sex: ""
      },

      civilStatus: ["Single", "Married", "Widow"]
    };
  },
  computed: {
    titleStack() {
      return this.isNew
        ? ["Master Files", "Students", "New"]
        : ["Master Files", "Students", "Edit"];
    },
    ...mapGetters("students", ["student"])
  },
  async created() {
    this.fetchCourses();
    if (this.$route.params.id !== undefined) {
      this.isNew = false;
      await this.fetchStudent(this.$route.params.id);
      Object.assign(this.form, this.student);
      this.getCurriculumsByCourse(this.student.course_id);
      this.options.course.searchText = this.student.course.description;
    }
  },

  methods: {
    ...mapActions("courses", ["fetchCourses"]),
    ...mapActions("students", [
      "updateStudent",
      "createStudent",
      "fetchStudent"
    ]),

    getCurriculumsByCourse(id) {
      this.form.course_id = id === null ? 0 : id;
      apiClient
        .get(`/curriculums?course_id=${id}`)
        .then(response => {
          this.curriculums = response.data.map(cur => {
            return cur;
          });
        });
    },

    onInput(event) {
      this.form.student_id = event.target._vCleave.getFormattedValue();
    },
    onInputContactNumber(event) {
      this.form.contact_no = event.target._vCleave.getFormattedValue();
    },

    onInputGuardianContact(event) {
      this.form.guardian_contact = event.target._vCleave.getFormattedValue();
    },
    async submit() {
      this.errors = {};
      let response = null;
      this.form.birth_date = moment(this.bday).format("YYYY-MM-DD");
      if (this.isNew) {
        response = await this.createStudent(this.form);

        if (response == undefined || response == null) {
          this.showNotification("Successfully Saved.", "success");
        } else {
          this.errors = response.errors;
        }
      } else {
        await this.update();
      }
    },

    async update() {
      let response = null;
      response = await this.updateStudent(this.form);
      if (response == undefined || response == null) {
        this.showNotification("Successfully updated", "success");
      } else {
        this.errors = response.errors;
      }
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
