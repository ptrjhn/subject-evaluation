<template>
  <div>
    <nav-bar />

    <aside-menu :menu="modules" />

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
    NavBar
  },
  data() {
    return {
      isActive: true,
      menu: [],
     
    };
  },
  
  computed: {
    ...mapGetters('auth', ['user']),
    modules() {
      return [
        "General",
        [
          {
            to: { name: "home" },
            icon: "desktop-mac",
            label: "Dashboard",
            adminAccess: false,
          }
        ],
        "Master Files",
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
            icon: "cogs"
          }
        ],
        "Transactions",
        [
          // {
          //   to: { name: "subject.offering" },
          //   label: "Subject Offering",
          //   icon: "cogs",
          //   adminAccess: false,
          // },
          // {
          //   to: { name: "section.class" },
          //   label: "Section Class",
          //   icon: "cogs",
          //   adminAccess: false,
          // },
          {
            to: { name: "subject.evaluation" },
            label: "Subject Evaluation",
            icon: "book-search",
            adminAccess: false,
          },
          // {
          //   to: "/students/subjects",
          //   label: "Students Subjects",
          //   icon: "folder-account-outline"
          // },

          // {
          //   to: "/transactions/credited-subjects",
          //   label: "Credit Subject",
          //   icon: "folder-plus"
          // },
          {
            to: { name: "grade.entry" },
            label: "Grade Entry",
            icon: "table-large-plus",
            adminAccess: false,
          }
          // {
          //   label: "Submenus",
          //   subLabel: "Submenus Example",
          //   icon: "view-list",
          //   menu: [
          //     {
          //       href: "#void",
          //       icon: "view-list",

          //       label: "Sub-item One"
          //     },
          //     {
          //       href: "#void",
          //       label: "Sub-item Two",
          //       icon: "view-list"
          //     }
          //   ]
          // }
        ]
      ];
    }
  },
  created() {
    document.getElementById("root").className = "has-spinner-active has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded";
    this.currentAY();
    this.currentSem();
  },
  methods: {
    userAccess() {
      if (this.user.user_type !== 'Administrator') {
        this.menu = this.modules.filter(m => m.adminAccess == false);
      } else {
      }
    },
    currentAY() {
      apiClient
        .get("/sy/current")
        .then(response => {
          this.$store.commit("currentSY", response.data.data[0]);
        })
        .catch(error => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger"
          });
        });
    },
    currentSem() {
      apiClient
        .get("/settings/semesters/current")
        .then(response => {
          this.$store.commit("currentSem", response.data.data[0]);
        })
        .catch(error => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger"
          });
        });
    }
  }
};
</script>
