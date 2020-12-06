const state = {
  notify: {},
};

const mutations = {
  NOTIFY: (state, data) => (state.notify = data),
};

const actions = {
  notify({
    commit
  }, payload) {
    commit('NOTIFY', payload);
  },
};

const getters = {
  notify: (state) => state.notify,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
