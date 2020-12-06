import InstructorService from '../services/InstructorService.js'

const state = {
  instructors: [],
  instructor: {},
  errors: null,
}

const getters = {
  getInstructorById: state => id => {
    return state.instructors.find(instructor => instructor.id === id);
  },
  instructors: state => state.instructors,
  instructor: state => state.instructor,
  errors: state => state.errors
}

const mutations = {
  ADD_INSTRUCTOR(state, data) {
    state.instructors.unshift(data);
  },
  SET_INSTRUCTORS(state, data) {
    state.instructors = data;
  },
  SET_INSTRUCTOR(state,
    data) {
    state.instructor = data;
  },
  DELETE_INSTRUCTOR(state, data) {
    let index = state.instructors.findIndex(instructor => instructor.id === data.id);
    state.instructors.splice(index, 1);
  },
  UPDATE_INSTRUCTOR(state, data) {
    let index = state.instructors.findIndex(instructor => instructor.id === data.id);
    let instructor = state.instructors[index];
    Object.assign(instructor, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createInstructor({
    commit,
    dispatch
  }, payload) {
    try {
      await InstructorService.postInstructor(payload);
      commit('ADD_INSTRUCTOR', payload);
    } catch (errors) {
      return errors.response.data
    }
  },

  fetchInstructors({
    commit
  }) {

    InstructorService.getInstructors().then(response => {
      commit('SET_INSTRUCTORS', response.data.data)
    }).catch(error => {

    })
  },

  async fetchInstructor({
    commit
  }, id) {

    let instructor = getters.getInstructorById(id);

    if (instructor) {
      commit('SET_INSTRUCTOR', instructor)
    } else {
      await InstructorService.getInstructor(id).then(response => {
        commit('SET_INSTRUCTOR', response.data)
      }).catch(error => {
        return error.response.data;
      })
    }
  },

  deleteInstructor({
    commit
  }, payload) {
    try {
      InstructorService.deleteInstructor(payload.id);
      commit('DELETE_INSTRUCTOR', payload)

    } catch (error) {
      return error.response.data;
    }
  },

  async updateInstructor({
    commit
  }, payload) {
    try {
      await InstructorService.updateInstructor(payload);
      commit('UPDATE_INSTRUCTOR', payload);
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
