import StudentService from '../services/StudentService.js'

const state = {
  students: [],
  student: {},
  errors: null,
}

const getters = {
  getByStudentId: state => id => {
    return state.students.find(student => student.id === id);
  },
  students: state => state.students,
  student: state => state.student,
  errors: state => state.errors
}

const mutations = {
  ADD_STUDENT(state, data) {
    state.students.unshift(data);
  },
  SET_STUDENTS(state, data) {
    state.students = data;
  },
  SET_STUDENT(state,
    data) {
    state.student = data;
  },
  DELETE_STUDENT(state, data) {
    let index = state.students.findIndex(student => student.id === data.id);
    state.students.splice(index, 1);
  },
  UPDATE_STUDENT(state, data) {
    let index = state.students.findIndex(student => student.id === data.id);
    let student = state.students[index];
    Object.assign(student, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createStudent({
    commit,
    dispatch
  }, payload) {
    let response = null;
    try {
      response = await StudentService.postStudent(payload);
      commit('ADD_STUDENT', response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        return error.response.data;
      }
    }

  },

  async fetchStudents({
    commit
  }) {
    try {
      let response = await StudentService.getStudents();
      commit('SET_STUDENTS', response.data.data);
    } catch (error) {
      return error.response;
    }
  },

  async fetchStudent({
    commit
  }, id) {
    await StudentService.getStudent(id).then(response => {
        commit('SET_STUDENT', response.data.data);
      })
      .catch(error => {
        return error.response.data;
      })
  },

  deleteStudent({
    commit
  }, payload) {
    try {
      StudentService.deleteStudent(payload.id);
      commit('DELETE_STUDENT', payload)

    } catch (error) {
      return error.response.data;
    }
  },

  async updateStudent({
    commit
  }, payload) {
    let response = null;
    try {
      response = await StudentService.updateStudent(payload);
      commit('UPDATE_STUDENT', response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        return error.response.data;
      }
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
