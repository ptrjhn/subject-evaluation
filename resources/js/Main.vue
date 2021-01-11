<template>
  <div>
    <nav-bar />

    <aside-menu :menu="access" />

    <router-view />

    <footer-bar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import AsideMenu from "@/components/AsideMenu";
import FooterBar from "@/components/FooterBar";
import apiClient from "./apiClient";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    FooterBar,
    AsideMenu,
    NavBar,
  },
  data() {
    return {
      isActive: true,
      menu: [],
    };
  },

  computed: {
    ...mapGetters("auth", ["user"]),

    access() {
      if (this.user.user_type === "Student") return this.studentAccess();
      if (this.user.user_type === "Super Admin") return this.superAdminAccess();
      // if (this.user.user_type === "Instructor") this.instructorAccess();
    },
  },
  created() {
    document.getElementById("root").className =
      "has-spinner-active has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded";
    this.currentAY();
    this.currentSem();
  },
  methods: {
    userAccess() {
      if (this.user.user_type !== "Super Admin") {
        this.menu = this.modules.filter((m) => m.adminAccess == false);
      } else {
      }
    },

    studentAccess() {
      return [
        [
          {
            to: { name: "home" },
            icon: "desktop-mac",
            label: "Dashboard",
            adminAccess: false,
          },
        ],
        [
          {
            to: { name: "student.subjects" },
            label: "Subjects",
            icon: "book-search",
            adminAccess: false,
          },
          {
            to: { name: "student.curriculum" },
            label: "Curriculum",
            icon: "book",
            adminAccess: false,
          },
        ],
      ];
    },

    superAdminAccess() {
      return [
        [
          {
            to: { name: "home" },
            icon: "desktop-mac",
            label: "Dashboard",
            adminAccess: false,
          },
        ],

        [
          {
            to: { name: "students-list" },
            label: "Students",
            icon: "account-multiple",
            updateMark: true,
            adminAccess: false,
          },

          {
            to: { name: "academic-years-list" },
            label: "Academic Year",
            icon: "calendar-month",
            updateMark: true,
            adminAccess: true,
          },
          {
            to: { name: "subjects-list" },
            label: "Subjects",
            icon: "bookshelf",
            adminAccess: false,
          },
          {
            to: { name: "instructors-list" },
            label: "Instructors",
            icon: "account-tie",
            adminAccess: true,
          },
          {
            to: { name: "users-list" },
            label: "Users",
            icon: "account-details",
            adminAccess: true,
          },
          {
            to: { name: "courses-list" },
            label: "Courses",
            icon: "book-multiple",
            adminAccess: true,
          },
          {
            to: { name: "courses-curriculums" },
            label: "Curriculums",
            icon: "notebook",
            adminAccess: false,
          },
          {
            to: { name: "sections-list" },
            label: "Sections",
            icon: "cogs",
            adminAccess: true,
          },
          {
            to: { name: "semesters" },
            label: "Settings",
            adminAccess: true,
            icon: "cogs",
          },
        ],

        [
          {
            to: { name: "class.managements" },
            label: "Class Management",
            icon: "book-search",
            adminAccess: true,
          },
          {
            to: { name: "subject.evaluation" },
            label: "Subject Evaluation",
            icon: "book-search",
            adminAccess: false,
          },

          {
            to: { name: "grade.entry" },
            label: "Grade Entry",
            icon: "table-large-plus",
            adminAccess: false,
          },
        ],
      ];
    },

    adminAccess() {
      [
        [
          {
            to: { name: "home" },
            icon: "desktop-mac",
            label: "Dashboard",
            adminAccess: false,
          },
        ],

        [
          {
            to: { name: "students-list" },
            label: "Students",
            icon: "account-multiple",
            updateMark: true,
            adminAccess: false,
          },

          {
            to: { name: "academic-years-list" },
            label: "Academic Year",
            icon: "calendar-month",
            updateMark: true,
            adminAccess: true,
          },
          {
            to: { name: "subjects-list" },
            label: "Subjects",
            icon: "bookshelf",
            adminAccess: false,
          },
          {
            to: { name: "instructors-list" },
            label: "Instructors",
            icon: "account-tie",
            adminAccess: true,
          },
          {
            to: { name: "users-list" },
            label: "Users",
            icon: "account-details",
            adminAccess: true,
          },
          {
            to: { name: "courses-list" },
            label: "Courses",
            icon: "book-multiple",
            adminAccess: true,
          },
          {
            to: { name: "courses-curriculums" },
            label: "Curriculums",
            icon: "notebook",
            adminAccess: false,
          },
          {
            to: { name: "sections-list" },
            label: "Sections",
            icon: "cogs",
            adminAccess: true,
          },
          {
            to: { name: "semesters" },
            label: "Settings",
            adminAccess: true,
            icon: "cogs",
          },
        ],

        [
          {
            to: { name: "class.managements" },
            label: "Class Management",
            icon: "book-search",
            adminAccess: true,
          },
          {
            to: { name: "subject.evaluation" },
            label: "Subject Evaluation",
            icon: "book-search",
            adminAccess: false,
          },
          {
            to: { name: "grade.entry" },
            label: "Grade Entry",
            icon: "table-large-plus",
            adminAccess: false,
          },
        ],
      ];
    },

    currentSem() {
      apiClient
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
    currentAY() {
      apiClient
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
  },
};
</script>
