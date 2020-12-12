<template>
  <div>
    <div class="container mb-6">
      <div class="has-text-centered has-text-weight-bold">
        <img :src="'/images/isu_logo.png'" height="100px" width="100px" />
        <p class="is-uppercase mt-5">Isabela State University</p>
        <p class="is-capitalize">Ilagan Campus</p>
        <p class="is-uppercase">
          {{ studentCourse.description }}
        </p>
        <p class="is-uppercase">Curriculum</p>
        <p class="mt-3">Effective S.Y. {{ curriculum.curriculum_year }}</p>
      </div>

      <div class="container page-content">
      <div class="row mt-5 is-capitalized page-content">
        <div class="columns">
          <div class="column p-2">
            <span class="has-text-weight-bold">Name: </span>
            {{ student.full_name }}
          </div>
          <div class="column p-2">
            <span class="has-text-weight-bold">CP Number: </span>
            {{ student.contact_no }}
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <span class="has-text-weight-bold">Address: </span>
            {{ student.address }}
          </div>
          <div class="column">
            <span class="has-text-weight-bold">Nationality: </span>
            {{ student.nationality | isNone }}
          </div>
        </div>
         <div class="columns">
          <div class="column is-half">
            <span class="has-text-weight-bold">Date of Birth: </span>
            {{ student.birth_date }}
          </div>
          <div class="column">
            <span class="has-text-weight-bold">Gender: </span>
            {{ student.sex | isEmpty }}
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <span class="has-text-weight-bold">Civil Status: </span>
            {{ student.civil_status }}
          </div>
          <div class="column">
            <span class="has-text-weight-bold">Dialect: </span>
            {{ student.dialect | isEmpty }}
          </div>
        </div>
      </div>
    </div>

      <div class="mt-6">
        <div v-for="(yearSem, yearIndex) in yearLevel" :key="yearIndex">
          <table
            class="table is-bordered is-narrowed"
            v-if="studentGrades[yearIndex].length > 0"
          >
            <thead>
              <tr>
                <td colspan="5" class="has-text-weight-bold has-text-centered">
                  {{ yearSem.year }} - {{ yearSem.sem }}
                </td>
              </tr>
              <tr>
                <th>Course No.</th>
                <th>Descriptive Title</th>
                <th>Units</th>
                <th>Prerequisite</th>
                <th>Grades</th>
              </tr>
            </thead>
            <tbody class="is-size-6">
              <tr
                v-for="(subject, index) in studentGrades[yearIndex]"
                :key="index"
              >
                <td width="10%">{{ subject.subject_code }}</td>
                <td style="min-width: 432px;">
                  {{ subject.subject_description }}
                </td>
                <td width="5%">{{ subject.units }}</td>
                <td width="15%">{{ subject.prerequisite | isNone }}</td>
                <td width="15%">{{ subject.grade }}</td>
              </tr>
            </tbody>
          </table>
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
      studentGrades: [],
      studentCourse: {},
      yearLevel: [
        { year: "First Year", sem: "1st Semester" },
        { year: "First Year", sem: "2nd Semester" },
        { year: "First Year", sem: "Summer" },
        { year: "Second Year", sem: "1st Semester" },
        { year: "Second Year", sem: "2nd Semester" },
        { year: "Second Year", sem: "Summer" },
        { year: "Third Year", sem: "1st Semester" },
        { year: "Third Year", sem: "2nd Semester" },
        { year: "Third Year", sem: "Summer" },
        { year: "Fourth Year", sem: "1st Semester" },
        { year: "Fourth Year", sem: "2nd Semester" },
        { year: "Fourth Year", sem: "Summer" },
        { year: "Fifth Year", sem: "1st Semester" },
        { year: "Fifth Year", sem: "2nd Semester" },
        { year: "Fifth Year", sem: "Summer" }
      ]
    };
  },
  async created() {
    document.getElementById("root").className = "";
    await this.fetchStudent(this.id);
    await this.fetchCurriculum(this.student.curriculum_id);

    await this.fetchGrades({
      student_id: this.student.student_id,
      curriculum_id: this.student.curriculum_id
    });

    this.studentCourse = this.curriculum?.course;

    this.groupGradesByYear();

    setTimeout(() => {
      this.print();
    }, 1000);
  },
  computed: {
    ...mapGetters("students", ["student", "grades"]),
    ...mapGetters("curriculums", ["curriculum"])
  },
  methods: {
    ...mapActions("students", ["fetchGrades", "fetchStudent"]),
    ...mapActions("curriculums", ["fetchCurriculum"]),

    print() {
      window.print();
    },

    groupGradesByYear() {
      const firstYearFirstSem = this.grades.filter(
        grade => grade.year_level === "First Year" && grade.semester === "First"
      );
      const firstYearSecondSem = this.grades.filter(
        grade =>
          grade.year_level === "First Year" && grade.semester === "Second"
      );
      const firstYearSummer = this.grades.filter(
        grade =>
          grade.year_level === "First Year" && grade.semester === "Summer"
      );

      const secondYearFirstSem = this.grades.filter(
        grade =>
          grade.year_level === "Second Year" && grade.semester === "First"
      );
      const secondYearSecondSem = this.grades.filter(
        grade =>
          grade.year_level === "Second Year" && grade.semester === "Second"
      );
      const secondYearSummer = this.grades.filter(
        grade =>
          grade.year_level === "Second Year" && grade.semester === "Summer"
      );

      const thirdYearFirstSem = this.grades.filter(
        grade => grade.year_level === "Third Year" && grade.semester === "First"
      );
      const thirdYearSecondSem = this.grades.filter(
        grade =>
          grade.year_level === "Third Year" && grade.semester === "Second"
      );
      const thirdYearSummer = this.grades.filter(
        grade =>
          grade.year_level === "Third Year" && grade.semester === "Summer"
      );

      const fourthYearFirstSem = this.grades.filter(
        grade =>
          grade.year_level === "Fourth Year" && grade.semester === "First"
      );
      const fourthYearSecondSem = this.grades.filter(
        grade =>
          grade.year_level === "Fourth Year" && grade.semester === "Second"
      );
      const fourthYearSummer = this.grades.filter(
        grade =>
          grade.year_level === "Fourth Year" && grade.semester === "Summer"
      );

      const fifthYearFirstSem = this.grades.filter(
        grade => grade.year_level === "Fifth Year" && grade.semester === "First"
      );
      const fifthYearSecondSem = this.grades.filter(
        grade =>
          grade.year_level === "Fifth Year" && grade.semester === "Second"
      );
      const fifthYearSummer = this.grades.filter(
        grade =>
          grade.year_level === "Fifth Year" && grade.semester === "Summer"
      );

      this.studentGrades.push(firstYearFirstSem);
      this.studentGrades.push(firstYearSecondSem);
      this.studentGrades.push(firstYearSummer);

      this.studentGrades.push(secondYearFirstSem);
      this.studentGrades.push(secondYearSecondSem);
      this.studentGrades.push(secondYearSummer);

      this.studentGrades.push(thirdYearFirstSem);
      this.studentGrades.push(thirdYearSecondSem);
      this.studentGrades.push(thirdYearSummer);

      this.studentGrades.push(fourthYearFirstSem);
      this.studentGrades.push(fourthYearSecondSem);
      this.studentGrades.push(fourthYearSummer);

      this.studentGrades.push(fifthYearFirstSem);
      this.studentGrades.push(fifthYearSecondSem);
      this.studentGrades.push(fifthYearSummer);
    }
  },
  filters: {
    isBlank(value) {
      return value === "" || value === null ? "" : value;
    }
  }
};
</script>

<style type="css" scoped>
.table {
  margin-bottom: 0 !important;
}

.no-border-top {
  border-top: 0 !important;
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

.columns:not(:last-child) {
    margin-bottom: calc(.2rem - 0.25rem);
}

@media print {
  table {
    page-break-after: auto;
  }
  tr {
    page-break-inside: avoid;
    page-break-after: auto;
  }
  td {
    page-break-inside: avoid;
    page-break-after: auto;
  }
  thead {
    display: table-header-group;
  }
  tfoot {
    display: table-footer-group;
  }
  @page {
    scale: 100;
    size: "legal";
    margin: 2mm 5mm 11mm 5mm;
  }

}
</style>
