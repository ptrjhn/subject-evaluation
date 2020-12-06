import CurriculumService from '../services/CurriculumService.js'

const state = {
  curriculums: [],
  curriculum: {},
  errors: null,
}

const getters = {
  getCurriculumById: state => id => {
    return state.curriculums.find(curriculum => curriculum.id === id);
  },

  curriculums: state => state.curriculums,
  curriculum: state => state.curriculum,
  errors: state => state.errors
}

const mutations = {
  ADD_CURRICULUM(state, data) {
    state.curriculums.unshift(data);
  },
  SET_CURRICULUMS(state, data) {
    state.curriculums = data;
  },
  SET_CURRICULUM(state, data) {
    state.curriculum = data;
  },
  DELETE_CURRICULUM(state, data) {
    let index = state.curriculums.findIndex(curriculum => curriculum.id === data.id);
    state.curriculums.splice(index, 1);
  },
  UPDATE_CURRICULUM(state, data) {
    let index = state.curriculums.findIndex(curriculum => curriculum.id === data.id);
    let curriculum = state.curriculums[index];
    Object.assign(curriculum, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createCurriculum({
    commit,
    dispatch
  }, payload) {
    try {
      let response = await CurriculumService.postCurriculum(payload);
      commit('ADD_CURRICULUM', response.data);
    } catch (errors) {
      return errors.response.data
    }
  },

  async fetchCurriculums({
    commit
  }, query) {

    await CurriculumService.getCurriculums(query).then(response => {
      commit('SET_CURRICULUMS', response.data)
    }).catch(errors => {
      return errors.response.data

    })
  },

  fetchCurriculum({
    commit
  }, id) {

    let curriculum = getters.getCurriculumById(id);
    
    CurriculumService.getCurriculum(id).then(response => {
        commit('SET_CURRICULUM', response.data)
      }).catch(errors => {
        return errors.response.data
      })
  },

  deleteCurriculum({
    commit
  }, payload) {
    try {
      CurriculumService.deleteCurriculum(payload.id);
      commit('DELETE_CURRICULUM', payload)

    } catch (errors) {
      return errors.response.data;
    }
  },

  async updateCurriculum({
    commit
  }, payload) {
    try {
      let response = await CurriculumService.updateCurriculum(payload);
      commit('UPDATE_CURRICULUM', response.data);
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
