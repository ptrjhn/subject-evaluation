<template>
  <div>
    <div class="container">
      <div class="has-text-centered has-text-weight-bold">
        <img :src="'/images/isu_logo.png'" height="100px" width="100px" />
        <p class="is-uppercase mt-5">Isabela State University</p>
        <p class="is-capitalize">Ilagan Campus</p>
        <p class="is-uppercase">
          {{ curriculum.course.description }}
        </p>  
        <p class="is-uppercase">Curriculum</p>
        <p class="mt-3">Effective S.Y. {{ curriculum.curriculum_year }}</p>
      </div>
      <div class="">
        <table class="table is-bordered is-narrowed">
          <thead>
            <tr>
              <th>Code</th>
              <th>Descriptive Title</th>
              <th>Units</th>
              <th>Year</th>
              <th>Sem</th>
              <th>Prerequisite</th>
            </tr>
          </thead>
          <tbody class="is-size-6">
            <tr v-for="(subject, index) in coursesSubjects" :key="index">
              <td width="10%">
                {{ subject.subject_code }}
              </td>
              <td width="45%">{{ subject.subject_description}}</td>
              <td width="5%">{{ subject.units }}</td>
              <td width="10%">{{ subject.year_level }}</td>
              <td width="5%">{{ subject.semester }}</td>
              <td width="15%">{{ subject.prerequisite | isNone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  async created() {
    document.getElementById("root").className = "";
    await this.fetchCoursesSubjects({
      curriculum_id: this.$route.params.curriculum_id
    });
    await this.fetchCurriculum(this.$route.params.curriculum_id);
  },
  computed: {
    ...mapGetters("courseSubject", ["coursesSubjects", "courseSubject"]),
    ...mapGetters("curriculums", ["curriculum"])
  },
  mounted() {
    window.print();
  },
  methods: {
    ...mapActions("courseSubject", [
      "fetchCoursesSubjects",
    ]),

    ...mapActions("curriculums", ["fetchCurriculum"])
  }
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

@media print {
  body {
    margin: 25mm 25mm 25mm 25mm;
  }

  .page-footer {
    position: fixed;
    bottom: 10px;
  }

  @page {
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
