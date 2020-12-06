import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Main from "./Main.vue";

Vue.use(Router);

Router.prototype.open = function(routeObject) {
  const { href } = this.resolve(routeObject);
  window.open(href, "_blank");
};

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      path: "",
      name: "main",
      redirect: "/home",
      component: Main,
      meta: {
        requiresAuth: true,
        userType: undefined
      },
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("./views/Home.vue"),
          meta: {
            userType: undefined
          }
        },
        {
          path: "/users",
          name: "users-list",
          component: () => import("./views/Users.vue"),
          meta: {
            userType: "Administrator"
          }
        },
        {
          path: "/students/new",
          name: "students-new",
          component: () => import("./views/Students/Form.vue"),
          meta: {
            userType: undefined
          }
        },

        {
          path: "/students/:id/edit",
          name: "students-edit",
          component: () => import("./views/Students/Form.vue"),
          meta: {
            userType: undefined
          }
        },
        {
          path: "/subjects",
          name: "subjects-list",
          component: () => import("./views/Subjects.vue"),
          meta: {
            userType: undefined
          },
          children: [
            {
              path: "/subjects/new",
              name: "subjects-new",
              meta: {
                userType: undefined
              }
            },
            {
              path: "/subjects/edit",
              name: "subjects.edit",
              meta: {
                userType: undefined
              }
            }
          ]
        },

        {
          path: "/academic-years",
          name: "academic-years-list",
          component: () => import("./views/AcademicYear.vue"),
          meta: {
            userType: "Administrator"
          }
        },
        {
          path: "/semesters",
          name: "semesters",
          component: () => import("./views/Semester.vue"),
          meta: {
            userType: "Administrator"
          }
        },
        {
          path: "/students",
          name: "students-list",
          component: () => import("./views/Students/Index.vue"),
          meta: {
            userType: undefined
          }
        },
        {
          path: "/instructors",
          name: "instructors-list",
          component: () => import("./views/Instructors.vue"),
          meta: {
            userType: "Administrator"
          }
        },
        {
          path: "/courses/curriculums",
          name: "courses-curriculums",
          component: () => import("./views/Curriculums.vue"),
          meta: {
            userType: undefined
          }
        },
        {
          path: "/courses/curriculums/:curriculum_id/subjects",
          name: "curriculum-subjects-list",
          component: () => import("./views/CoursesSubjects/Index.vue"),
          meta: {
            userType: undefined
          }
        },
        {
          path: "/sections",
          name: "sections-list",
          component: () => import("./views/Sections.vue"),
          meta: {
            userType: "Administrator"
          }
        },

        {
          path: "/courses/:id/subjects",
          name: "course-subjects",
          component: () => import("./views/CoursesSubjects/Index.vue"),
          meta: {
            userType: undefined
          }
        },
        {
          path: "/transactions/student/subjects/evaluation",
          name: "subject.evaluation",
          component: () => import("./views/SubjectEvaluation.vue"),
          meta: {
            userType: undefined
          }
        },
        {
          path: "/transactions/grade/entry",
          name: "grade.entry",
          component: () => import("./views/GradeEntry.vue"),
          meta: {
            userType: undefined
          }
        },

        {
          path: "/courses",
          name: "courses-list",
          component: () => import("./views/Courses.vue"),
          meta: {
            userType: "Administrator"
          }
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false,
        userType: undefined
      }
    },

    {
      path: "/courses/curriculums/:curriculum_id/subjects/print",
      name: "curriculum-subjects-print",
      component: () => import("./views/PrintCurriculum.vue"),
      meta: {
        requiresAuth: true,
        userType: undefined
      }
    },

    {
      path: "/transaction/evaluation/:sy/:semester/student/:student_id",
      name: "student-form-print",
      component: () => import("./views/PrintSubjects.vue"),
      meta: {
        requiresAuth: true,
        userType: undefined
      }
    },

    {
      path: "*",
      name: "not-found",
      component: () => import("./views/PageNotFound.vue"),
      meta: {
        userType: undefined
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  }
});

router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    next("/login");
  }
  if (to.name == "login" && user) {
    next("/home");
  }
  if (
    to.matched.some(
      record =>
        record.meta.userType === "Administrator" &&
        user.user_type !== "Administrator"
    )
  ) {
    next("/home");
  } else {
    next();
  }
});

export default router;
