'strict'
import Vue from 'vue'
import Vuex from 'vuex'

/* Stores */
import courses from './store/courses';
import students from './store/students'
import subjects from './store/subjects'
import notification from './store/notification'
import instructors from './store/instructors'
import users from './store/users'
import auth from "./store/auth"
import academicYears from './store/academicYears'
import courseSubject from './store/courseSubject'
import studentSubject from './store/studentSubject'
import sections from './store/sections'
import curriculums from './store/curriculums'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    courses,
    students,
    subjects,
    notification,
    instructors,
    users,
    academicYears,
    courseSubject,
    studentSubject,
    auth,
    sections,
    curriculums,
  },
  state: {
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* settings */
    currentSY: null,
    currentSem: null,

    /* NavBar */
    isNavBarVisible: true,

    /* FooterBar */
    isFooterBarVisible: true,

    /* Aside */
    isAsideVisible: true,
    isAsideMobileExpanded: true
  },
  mutations: {
    /* A fit-them-all commit */
    basic(state, payload) {
      state[payload.key] = payload.value
    },

    /* User */
    user(state, payload) {
      if (payload.name) {
        state.userName = payload.name
      }
      if (payload.email) {
        state.userEmail = payload.email
      }
      if (payload.avatar) {
        state.userAvatar = payload.avatar
      }
    },

    currentSY(state, payload) {
      state.currentSY = payload;
    },

    currentSem(state, payload) {
      state.currentSem = payload;
    },

    /* Aside Mobile */
    asideMobileStateToggle(state, payload = null) {
      let htmlClassName = 'has-aside-mobile-expanded'

      let isShow

      if (payload !== null) {
        isShow = payload
      } else {
        isShow = !state.isAsideMobileExpanded
      }

      if (isShow) {
        document.documentElement.classList.add(htmlClassName)
      } else {
        document.documentElement.classList.remove(htmlClassName)
      }

      state.isAsideMobileExpanded = isShow
    }
  },
  actions: {

  }
})
