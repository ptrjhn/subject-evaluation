<template>
  <div>
    <title-bar :title-stack="['Master Files', 'Semesters', 'List']" />
    <hero-bar> Semesters </hero-bar>
    <section class="section is-main-section">
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="Semesters"
      >
        <b-table :hoverable="true" :data="semesters">
          <template slot-scope="props">
            <b-table-column
              searchable
              label="Semesters"
              field="semester"
              sortable
              >{{ props.row.semester }}</b-table-column
            >

            <b-table-column label="Description" field="description" sortable>{{
              props.row.description
            }}</b-table-column>

            <b-table-column
              searchable
              label="Status"
              field="is_active"
              sortable
            >
              <b-switch
                @input="setSemester(props.row)"
                :value="props.row.is_active"
                type="is-success"
              >
              </b-switch>
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
      </card-component>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from "@/components/CardComponent";
import ModalBox from "@/components/ModalBox";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import CardToolbar from "@/components/CardToolbar";
import apiClient from "../apiClient";

export default {
  components: {
    CardToolbar,
    HeroBar,
    TitleBar,
    ModalBox,
    CardComponent
  },
  data() {
    return {
      isLoading: true,
      semesters: [],
      formData: {
        id: 0,
        semester: "",
        description: "",
        is_active: ""
      }
    };
  },
  computed: {},

  created() {
    this.getSemesters();
  },

  methods: {
    setSemester(sem) {
      this.isLoading = true;

      apiClient.get(`/settings/semesters/set/${sem.id}`).then(({ data }) => {
        this.$store.commit("currentSem", data.data);
      });
      this.getSemesters();
    },

    getSemesters() {
      apiClient.get("/settings/semesters").then(response => {
        this.semesters = response.data.data;
        this.isLoading = false;
      });
    }
  }
};
</script>
