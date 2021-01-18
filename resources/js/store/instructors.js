import InstructorService from '../services/InstructorService.js'

const state = {
  instructors: [],
  instructor: {},
  instructorSubject: {},
  errors: null,
  instructorSubjects: [],
}

const getters = {
  getInstructorById: state => id => {
    return state.instructors.find(instructor => instructor.id === id);
  },
  instructors: state => state.instructors,
  instructor: state => state.instructor,
  instructorSubjects: state => state.instructorSubjects,
  instructorSubject: state => state.instructorSubject,
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
  REMOVE_INSTRUCTOR(state, data) {
    let index = state.instructors.findIndex(instructor => instructor.id === data.id);
    state.instructors.splice(index, 1);
  },
  UPDATE_INSTRUCTOR(state, data) {
    let index = state.instructors.findIndex(instructor => instructor.id === data.id);
    let instructor = state.instructors[index];
    Object.assign(instructor, data);
  },
  ADD_INSTRUCTOR_SUBJECT(state, data) {
    state.instructorSubjects.unshift(data);
  },
  SET_INSTRUCTOR_SUBJECTS(state, data) {
    state.instructorSubjects = data;
  },
  SET_INSTRUCTOR_SUBJECT(state,
    data) {
    state.instructorSubject = data;
  },
  REMOVE_INSTRUCTOR_SUBJECT(state, data) {
    let index = state.instructorSubjects.findIndex(instructor => instructor.id === data.id);
    state.instructorSubjects.splice(index, 1);
  },
  UPDATE_INSTRUCTOR_SUBJECT(state, data) {
    let index = state.instructorSubjects.findIndex(el => el.id === data.id);
    let subject = state.instructorSubjects[index];
    Object.assign(subject, data);
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
      let {
        data
      } = await InstructorService.postInstructor(payload);
      commit('ADD_INSTRUCTOR', data);
      return data;
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
    await InstructorService.getInstructor(id).then(response => {
      commit('SET_INSTRUCTOR', response.data)
    }).catch(error => {
      return error.response.data;
    })
  },

  deleteInstructor({
    commit
  }, payload) {
    try {
      InstructorService.deleteInstructor(payload.id);
      commit('REMOVE_INSTRUCTOR', payload)

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
  },

  async fetchInstructorSubjects({
    commit,
    dispatch
  }, query) {
    await InstructorService.getInstructorSubjects(query)
      .then(response => {
        commit('SET_INSTRUCTOR_SUBJECTS', response.data)
      })
      .catch(error => {
        return error.response.data;
      })
  },

  async fetchInstructorSubject({
    commit,
    dispatch
  }, id) {
    await InstructorService.getInstructorSubject(id)
      .then(response => {
        commit('SET_INSTRUCTOR_SUBJECT', response.data)
      })
      .catch(error => {
        return error.response.data;
      })
  },

  deleteInstructorSubject({
    commit
  }, payload) {
    try {
      InstructorService.deleteInstructorSubject(payload.id);
      commit('REMOVE_INSTRUCTOR_SUBJECT', payload)

    } catch (error) {
      return error.response.data;
    }
  },

  async updateInstructorSubject({
    commit
  }, payload) {
    try {
      await InstructorService.updateInstructorSubject(payload);
      commit('UPDATE_INSTRUCTOR_SUBJECT', payload);
    } catch (error) {
      return error.response.data
    }
  },

  async createInstructorSubject({
    commit,
    dispatch
  }, payload) {
    try {
      let {
        data
      } = await InstructorService.postInstructorSubject(payload);
      commit('ADD_INSTRUCTOR_SUBJECT', data);
      return data;
    } catch (errors) {
      return errors.response.data
    }
  },

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
