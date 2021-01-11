import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Main from "./Main.vue";

Vue.use(Router);

Router.prototype.open = function (routeObject) {
  const {
    href
  } = this.resolve(routeObject);
  window.open(href, "_blank");
};

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [{
      path: "",
      name: "main",
      redirect: "/home",
      component: Main,
      meta: {
        requiresAuth: true,
        userType: "Super Aadmin"
      },
      children: [{
          path: "/home",
          name: "home",
          component: () => import("./views/Home.vue"),
          meta: {
            userType: "Super Aadmin"
          }
        },
        {
          path: "/users",
          name: "users-list",
          component: () => import("./views/Users.vue"),
          meta: {
            userType: "Super Admin"
          }
        },
        {
          path: "/students/new",
          name: "students-new",
          component: () => import("./views/Students/Form.vue"),
          meta: {
            userType: "Student"
          }
        },

        {
          path: "/students/:id/edit",
          name: "students-edit",
          component: () => import("./views/Students/Form.vue"),
          meta: {
            userType: "Super Admin"
          }
        },
        {
          path: "/subjects",
          name: "subjects-list",
          component: () => import("./views/Subjects.vue"),
          meta: {
            userType: "Super Admin"
          },
          children: [{
              path: "/subjects/new",
              name: "subjects-new",
              meta: {
                userType: "Super Admin"
              }
            },
            {
              path: "/subjects/edit",
              name: "subjects.edit",
              meta: {
                userType: "Super Admin"
              }
            }
          ]
        },

        {
          path: "/academic-years",
          name: "academic-years-list",
          component: () => import("./views/AcademicYear.vue"),
          meta: {
            userType: "Super Admin"
          }
        },
        {
          path: "/semesters",
          name: "semesters",
          component: () => import("./views/Semester.vue"),
          meta: {
            userType: "Super Admin"
          }
        },
        {
          path: "/students",
          name: "students-list",
          component: () => import("./views/Students/Index.vue"),
          meta: {
            userType: "Super Admin"
          }
        },
        {
          path: "/instructors",
          name: "instructors-list",
          component: () => import("./views/Instructors.vue"),
          meta: {
            userType: "Super Admin"
          }
        },
        {
          path: "/courses/curriculums",
          name: "courses-curriculums",
          component: () => import("./views/Curriculums.vue"),
          meta: {
            userType: "Super Admin"
          }
        },
        {
          path: "/courses/curriculums/:curriculum_id/subjects",
          name: "curriculum-subjects-list",
          component: () => import("./views/CoursesSubjects/Index.vue"),
          meta: {
            userType: "Super Admin"
          }
        },
        {
          path: "/sections",
          name: "sections-list",
          component: () => import("./views/Sections.vue"),
          meta: {

            userType: "Super Admin"
          }
        },

        {
          path: "/courses/:id/subjects",
          name: "course-subjects",
          component: () => import("./views/CoursesSubjects/Index.vue"),
          meta: {
            requiresAuth: true,
            userType: "Super Admin"
          }
        },
        {
          path: "/transactions/student/subjects/evaluation",
          name: "subject.evaluation",
          component: () => import("./views/SubjectEvaluation.vue"),
          meta: {
            requiresAuth: true,
            userType: "Super Admin"
          }
        },
        {
          path: "/transactions/grade/entry",
          name: "grade.entry",
          component: () => import("./views/GradeEntry.vue"),
          meta: {
            requiresAuth: true,
            userType: "Super Admin"
          }
        },
        {
          path: "/student/subjects",
          name: "student.subjects",
          component: () => import("./views/Grades.vue"),
          meta: {
            requiresAuth: true,
            userType: "Student"
          }
        },
        {
          path: "/student/curriculum",
          name: "student.curriculum",
          component: () => import("./views/StudentCurriculum.vue"),
          meta: {
            requiresAuth: true,
            userType: "Student"
          }
        },
        {
          path: "/instructors/:id/subjects",
          name: "instructors.subjects",
          component: () => import("./views/InstructorsSubjects.vue"),
          meta: {
            requiresAuth: true,
            userType: "Super Admin"
          }
        },
        {
          path: "/transactions/class-management",
          name: "class.managements",
          component: () => import("./views/GradeEntry.vue"),
          meta: {
            requiresAuth: true,
            userType: "Super Admin"
          }
        },

        {
          path: "/courses",
          name: "courses-list",
          component: () => import("./views/Courses.vue"),
          meta: {
            requiresAuth: true,
            userType: "Super Admin"
          }
        }
      ]
    },
    {
      path: "/login",
      name: "admin.login",
      component: Login,
      meta: {
        requiresAuth: false,
        userType: "Super Admin"
      }
    },

    {
      path: "/portal/login",
      name: "user.",
      component: Login,
      meta: {
        requiresAuth: false,
        userType: "Super Admin"
      }
    },

    {
      path: "/courses/curriculums/:curriculum_id/subjects/print",
      name: "curriculum-subjects-print",
      component: () => import("./views/PrintCurriculum.vue"),
      meta: {
        requiresAuth: true,
        userType: "Super Admin"
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
      path: "/student/:student_id/curriculum/grades",
      name: "student-curriculum-grades",
      component: () => import("./views/PrintCurriculumGrades.vue"),
      meta: {
        userType: "Super Admin"
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

  next()
  // if (
  //   to.matched.some(
  //     record =>
  //     record.meta.userType !== undefined && record.meta.userType !== user.user_type
  //   )
  // ) {
  //   next("/home");
  // } else {
  //   next();
  // }
});

export default router;
