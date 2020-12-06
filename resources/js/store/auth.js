import apiClient from '../apiClient';
const state = {
  user: {},
  token: localStorage.getItem('token') || null,
  isLoggedIn: !!localStorage.getItem('token'),
  access: [],
};

const mutations = {
  SET_USER: (state, data) => {
    localStorage.setItem('user', JSON.stringify(data))
    state.user = data;
  },
  CLEAR_USER_DATA: () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  },
  SET_TOKEN: (state, data) => {
    localStorage.setItem('token', data);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${data}`;
    state.token = data;
  },
  SET_ACCESS: (state, data) => {
    state.access = data;
  }

};

const actions = {
  async login({
    commit,
    dispatch
  }, payload) {
    try {
      let response = await apiClient.post('/auth/login', payload);
      const token = response.data.access_token;
      commit('SET_USER', response.data.user);
      commit('SET_TOKEN', token);

    } catch (error) {
      throw error;
    }
  },

  logout({ commit }) {
    commit('CLEAR_USER_DATA'); 
    location.reload();
  },
  
  access({commit}, payload) {
    commit('SET_ACCESS', payload);
  },
};

const getters = {
  user: state => state.user,
  token: state => state.token,
  isLoggedIn: state => !!state.token,
};

export default  {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
