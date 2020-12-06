import CourseService from '../services/CourseService.js'

const state = {
  courses: [],
  course: {},
  errors: null,
}

const getters = {
  getCourseById: state => id => {
    return state.courses.find(course => course.id === id);
  },

  courses: state => state.courses,
  course: state => state.course,
  errors: state => state.errors
}

const mutations = {
  ADD_COURSE(state, data) {
    state.courses.unshift(data);
  },
  SET_COURSES(state, data) {
    state.courses = data;
  },
  SET_COURSE(state, data) {
    state.course = data;
  },
  DELETE_COURSE(state, data) {
    let index = state.courses.findIndex(course => course.id === data.id);
    state.courses.splice(index, 1);
  },
  UPDATE_COURSE(state, data) {
    let index = state.courses.findIndex(course => course.id === data.id);
    let course = state.courses[index];
    Object.assign(course, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createCourse({
    commit,
    dispatch
  }, payload) {
    try {
      let response = await CourseService.postCourse(payload);
      commit('ADD_COURSE', response.data.data);
    } catch (errors) {
      return errors.response.data
    }
  },

  fetchCourses({
    commit
  }) {

    CourseService.getCourses().then(response => {
      commit('SET_COURSES', response.data.data)
    }).catch(errors => {
      return errors.response.data

    })
  },

  fetchCourse({
    commit
  }, id) {

    let course = getters.getCourseById(id);

    if (course) {
      commit('SET_COURSE', course)
    } else {
      CourseService.getCourse(id).then(response => {
        commit('SET_COURSE', response.data)
      }).catch(errors => {
        return errors.response.data
      })
    }
  },

  deleteCourse({
    commit
  }, payload) {
    try {
      CourseService.deleteCourse(payload.id);
      commit('DELETE_COURSE', payload)

    } catch (errors) {
      return errors.response.data;
    }
  },

  async updateCourse({
    commit
  }, payload) {
    try {
      await CourseService.putCourse(payload);
      commit('UPDATE_COURSE', payload);
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
