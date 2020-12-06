import CourseSubjectService from '../services/CourseSubjectService.js'

const state = {
  coursesSubjects: [],
  courseSubject: {},
  errors: null,
}

const getters = {
  getCourseSubjectById: state => id => {
    return state.courses.find(courseSubject => courseSubject.id === id);
  },
  coursesSubjects: state => state.coursesSubjects,
  courseSubject: state => state.courseSubject,
  errors: state => state.errors
}

const mutations = {
  ADD_COURSE_SUBJECT(state, data) {
    state.coursesSubjects.unshift(data);
  },
  SET_COURSES_SUBJECTS(state, data) {
    state.coursesSubjects = data;
  },
  SET_COURSE_SUBJECT(state, data) {
    state.courseSubject = data;
  },
  DELETE_COURSE_SUBJECT(state, data) {
    let index = state.coursesSubjects.findIndex(courseSubject => courseSubject.id === data.id);
    state.coursesSubjects.splice(index, 1);
  },
  UPDATE_COURSE_SUBJECT(state, data) {
    let index = state.coursesSubjects.findIndex(courseSubject => courseSubject.id === data.id);
    let courseSubject = state.coursesSubjects[index];
    Object.assign(courseSubject, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createCourseSubject({
    commit,
    dispatch
  }, payload) {
    try {
      let response = await CourseSubjectService.postCourseSubject(payload);
      commit('ADD_COURSE_SUBJECT', response.data.data[0]);
    } catch (errors) {
      return errors.response.data
    }
  },

   fetchCoursesSubjects({
    commit
  }, query) {
    CourseSubjectService.getCoursesSubjects(query)
    .then(response => {
      commit('SET_COURSES_SUBJECTS', response.data.data)
    }).catch(error => {
      commit('SET_ERRORS', error.response.data)
    })
  },

  fetchCourseSubject({
    commit
  }, id) {

    let courseSubject = getters.getCourseSubjectById(id);

    if (courseSubject) {
      commit('SET_COURSE_SUBJECT', courseSubject)
    } else {
      CourseSubjectService.getCourseSubject(id).then(response => {
        commit('SET_COURSE_SUBJECT', response.data.data)
      }).catch(error => {
        throw error;
      })
    }
  },

  deleteCourseSubject({
    commit
  }, payload) {
    try {
      CourseSubjectService.deleteCourseSubject(payload.id);
      commit('DELETE_COURSE_SUBJECT', payload)

    } catch (error) {
      throw error;

    }
  },

  async updateCourseSubject({
    commit
  }, payload) {
    try {
      let response = await CourseSubjectService.updateCourseSubject(payload)
      commit('UPDATE_COURSE_SUBJECT', response.data.data[0]);
    } catch (error) {
      return error.response.data
    }
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
