import SectionService from '../services/SectionService.js'

const state = {
  sections: [],
  section: {},
  errors: null,
}

const getters = {
  getSectionById: state => id => {
    return state.sections.find(section => section.id === id);
  },
  sections: state => state.sections,
  section: state => state.section,
  errors: state => state.errors
}

const mutations = {
  ADD_SECTION(state, data) {
    state.sections.unshift(data);
  },
  SET_SECTIONS(state, data) {
    state.sections = data;
  },
  SET_SECTION(state, data) {
    state.section = data;
  },
  DELETE_SECTION(state, data) {
    let index = state.sections.findIndex(section => section.id === data.id);
    state.sections.splice(index, 1);
  },
  UPDATE_SECTION(state, data) {
    let index = state.sections.findIndex(section => section.id === data.id);
    let section = state.sections[index];
    Object.assign(section, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createSection({
    commit,
    dispatch
  }, payload) {
    try {
      let response = await SectionService.postSection(payload);
      commit('ADD_SECTION', response.data.data);
    } catch (errors) {
      return errors.response.data
    }
  },

  fetchSections({
    commit
  }) {

    SectionService.getSections().then(response => {
      commit('SET_SECTIONS', response.data.data)
    }).catch(errors => {
      return errors.response.data

    })
  },

  fetchSection({
    commit
  }, id) {

    let section = getters.getSectionById(id);

    if (section) {
      commit('SET_SECTION', section)
    } else {
      SectionService.getSection(id).then(response => {
        commit('SET_SECTION', response.data)
      }).catch(errors => {
        return errors.response.data
      })
    }
  },

  deleteSection({
    commit
  }, payload) {
    try {
      SectionService.deleteSection(payload.id);
      commit('DELETE_SECTION', payload)

    } catch (errors) {
      return errors.response.data;
    }
  },

  async updateSection({
    commit
  }, payload) {
    try {
      await SectionService.putSection(payload);
      commit('UPDATE_SECTION', payload);
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
