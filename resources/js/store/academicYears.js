import AcademicYearService from '../services/AcademicYearService.js'

const state = {
  academicYears: [],
  academicYear: {},
  errors: null,
}

const getters = {
  getAYbyId: state => id => {
    return state.academicYears.find(academicYear => academicYear.id === id);
  },
  academicYears: state => state.academicYears,
  academicYear: state => state.academicYear,
  errors: state => state.errors
}

const mutations = {
  ADD_YEAR(state, data) {
    state.academicYears.unshift(data);
  },
  SET_ACADEMIC_YEARS(state, data) {
    state.academicYears = data;
  },
  SET_YEAR(state,
    data) {
    state.academicYear = data;
  },
  DELETE_YEAR(state, data) {
    let index = state.academicYears.findIndex(ay => ay.id === data.id);
    state.academicYears.splice(index, 1);
  },
  UPDATE_YEAR(state, data) {
    let index = state.academicYears.findIndex(ay => ay.id === data.id);
    let ay = state.academicYears[index];
    Object.assign(ay, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createAY({
    commit,
    dispatch
  }, payload) {
    try {
      await AcademicYearService.postAY(payload);
      commit('ADD_YEAR', payload);
    } catch (errors) {
      return errors.response.data
    }
  },

  fetchAcademicYears({
    commit
  }) {

    AcademicYearService.getYears().then(response => {
      commit('SET_ACADEMIC_YEARS', response.data.data)
    }).catch(error => {

    })
  },

  async fetchAcademicYear({
    commit
  }, id) {

    let user = getters.getAYbyId(id);

    if (user) {
      commit('SET_YEAR', user)
    } else {
      await AcademicYearService.getYear(id).then(response => {
        commit('SET_YEAR', response.data)
      }).catch(error => {
        return error.response.data;
      })
    }
  },

  deleteAY({
    commit
  }, payload) {
    try {
      AcademicYearService.deleteAY(payload.id);
      commit('DELETE_YEAR', payload)

    } catch (error) {
      return error.response.data;
    }
  },

  updateAY({
    commit
  }, payload) {
    try {
      AcademicYearService.updateAY(payload);
      commit('UPDATE_YEAR', payload);
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
