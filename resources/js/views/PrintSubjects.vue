<template>
  <div>
    <div class="container">
      <div class="has-text-centered mt-1 has-text-weight-bold page-header">
        <img :src="'/images/isu_logo.png'" height="96px" width="96px" />
        <p class="is-uppercase mt-2">Isabela State University</p>
        <p class="is-capitalize">Ilagan Campus</p>
        <p class="is-capitalize">S.Y. {{ sy }}</p>
      </div>
    </div>
    <div class="container page-content">
      <div class="row mt-5 is-capitalized page-content">
        <div class="columns">
          <div class="column p-2 is-half">
            <span class="has-text-weight-bold">Name: </span>
            {{ student.full_name }}
          </div>
          <div class="column p-2">
            <span class="has-text-weight-bold">ID Number: </span>
            {{ student.student_id }}
          </div>
          <div class="column p-2">
            <span class="has-text-weight-bold">Semester: </span> {{ semester }}
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <span class="has-text-weight-bold">Course: </span>
            {{ student.course.description }}
          </div>
          <div class="column">
            <span class="has-text-weight-bold">Year Level: </span>
            _________
          </div>
          <div class="column">
            <span class="has-text-weight-bold">Section: </span> _________
          </div>
          <!-- <div class="column">
            <span class="has-text-weight-bold">[ ]: </span> New
            <span class="has-text-weight-bold">[ ]: </span> Old
            <span class="has-text-weight-bold">[ ]: </span> Transferee
          </div> -->
        </div>
      </div>
      <div class="row mt-5">
        <table class="table is-bordered is-narrowed">
          <thead>
            <tr>
              <th>Class Code</th>
              <th>Subject Code</th>
              <th>Subject Description</th>
              <th>Units</th>
              <th>Proffesor</th>
              <th>Schdule</th>
            </tr>
          </thead>
          <tbody class="is-size-6">
            <tr v-for="(subject, index) in studentSubjects" :key="index">
              <td width="10%"></td>
              <td width="5%">{{ subject.subject_code }}</td>
              <td width="20%">
                {{
                  subject.subject_description
                    | truncate(subject.subject_description, 30)
                }}
              </td>
              <td width="2%">{{ subject.units }}</td>
              <td width="15%"></td>
              <td width="15%"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="columns mt-4">
        <div class="column is-two-fifths">
          <span class="has-text-weight-bold">Chairman: </span>
          ____________________________________
        </div>
        <div class="column is-one-fifth ml-3">
          <span class="has-text-weight-bold">Total Units: </span> __________
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Dean: </span>
          ___________________________________
        </div>
      </div>
      <h4 class="title is-6 mt-4">PERSONAL DATA</h4>
      <div class="columns">
        <div class="column is-half">
          <span class="has-text-weight-bold">Sex: </span>
          {{ student.sex | isEmpty }}
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Civil Status: </span>
          {{ student.civil_status | isEmpty }}
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <span class="has-text-weight-bold">Birth Place: </span>
          {{ student.birth_place | isEmpty }}
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Birth Date: </span>
          {{ student.birth_date | isEmpty }}
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <span class="has-text-weight-bold">Religion: </span>
          {{ student.religion | isEmpty }}
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Nationality: </span>
          {{ student.nationality | isEmpty }}
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-quarter">
          <span class="has-text-weight-bold">Dialect: </span>
          ___________________
        </div>
        <div class="column is-one-quarter">
          <span class="has-text-weight-bold">Living w/Family?: </span>
          <label class="checkbox">
            <input type="checkbox" />
            YES
          </label>
          <label class="checkbox">
            <input type="checkbox" />
            NO
          </label>
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Specify (If NO): </span>
          ______________________________________
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <span class="has-text-weight-bold">Father's Name: </span>
          _______________________________________
        </div>
        <div class="column is-half">
          <span class="has-text-weight-bold">Occupation: </span>
          _________________________________________
        </div>
      </div>

      <div class="columns">
        <div class="column is-half">
          <span class="has-text-weight-bold">Mother's Name: </span>
          ______________________________________
        </div>
        <div class="column is-half">
          <span class="has-text-weight-bold">Occupation: </span>
          _________________________________________
        </div>
      </div>

      <h4 class="title is-6 mt-4">EDUCATIONAL BACKGORUND</h4>
      <div class="columns">
        <div class="column is-half">
          <span class="has-text-weight-bold">Primary: </span>
          ______________________________________________
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Year Graduated: </span>
          ______________________________________
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <span class="has-text-weight-bold">Intermediate: </span>
          _________________________________________
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Year Graduated: </span>
          ______________________________________
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <span class="has-text-weight-bold">Secondary: </span>
          ___________________________________________
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Year Graduated: </span>
          ______________________________________
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <span class="has-text-weight-bold">Collegiate: </span>
          ____________________________________________
        </div>
        <div class="column">
          <span class="has-text-weight-bold">Year Graduated: </span>
          ______________________________________
        </div>
      </div>
      <div class="columns mt-6">
        <div class="column is-two-thirds"></div>
        <div class="column mt-6">
          __________________________________
          <p class="has-text-weight-bold has-text-centered mr-6">Signature</p>
        </div>
      </div>
    </div>
    <div class="page-footer">
      <div class="columns">
        <div class="column">
          Enrollment Form No.<span class="has-text-weight-bold">
            ISU-CvE-Preg-015</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.student_id,
      semester: this.$route.params.semester,
      sy: this.$route.params.sy,
    };
  },
  async created() {
    document.getElementById("root").className = "";
    await this.getStudentSubjects({
      id: this.id,
      semester: this.semester,
      sy: this.sy,
    });
    await this.fetchStudent(this.id);

    this.print();
  },
  computed: {
    ...mapGetters("studentSubject", ["studentSubjects"]),
    ...mapGetters("students", ["student"]),
  },
  methods: {
    ...mapActions("studentSubject", ["getStudentSubjects"]),
    ...mapActions("students", ["fetchStudent"]),

    print() {
      window.print();
    },
  },
  filters: {
    isBlank(value) {
      return value === "" || value === null ? "" : value;
    },
  },
};
</script>

<style type="css" scoped>
.border-line {
  border: 1px solid hsl(0, 0%, 14%);
  width: 20px;
}

.table td,
.table th {
  border: 1px solid #e0cccc;
  padding: 0.2em 0.4em;
}
.column {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.page-footer {
  position: fixed;
  bottom: 5px;
}
.line {
  border: #e0cccc 1px solid;
  width: 100%;
}
@media print {
  body {
    margin: 25mm 25mm 25mm 25mm;
  }
  @page {
    scale: 80;
    margin: 5mm 4mm 7mm 7mm;
  }

  html,
  body {
    /* height: 297mm; */
    height: 150mm;
    font-size: 8px;
    background: #fff;
  }
}
</style>