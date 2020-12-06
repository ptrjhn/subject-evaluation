import UserService from '../services/UserService.js'

const state = {
  users: [],
  student: {},
  errors: null,
}

const getters = {
  getUserById: state => id => {
    return state.users.find(user => user.id === id);
  },
  users: state => state.users,
  user: state => state.user,
  errors: state => state.errors
}

const mutations = {
  ADD_USER(state, data) {
    state.users.unshift(data);
  },
  SET_USERS(state, data) {
    state.users = data;
  },
  SET_USER(state,
    data) {
    state.user = data;
  },
  DELETE_USER(state, data) {
    let index = state.users.findIndex(user => user.id === data.id);
    state.users.splice(index, 1);
  },
  UPDATE_USER(state, data) {
    let index = state.users.findIndex(user => user.id === data.id);
    let user = state.users[index];
    Object.assign(user, data);
  },
  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async createUser({
    commit,
    dispatch
  }, payload) {
    try {
      await UserService.postUser(payload);
      commit('ADD_USER', payload);
    } catch (errors) {
      return errors.response.data
    }
  },

  fetchUsers({
    commit
  }) {

    UserService.getUsers().then(response => {
      commit('SET_USERS', response.data.data)
    }).catch(error => {

    })
  },

  async fetchUser({
    commit
  }, id) {

    let user = getters.getUserById(id);

    if (user) {
      commit('SET_USER', user)
    } else {
      await UserService.getUser(id).then(response => {
        commit('SET_USER', response.data)
      }).catch(error => {
        return error.response.data;
      })
    }
  },

  deleteUser({
    commit
  }, payload) {
    try {
      UserService.deleteUser(payload.id);
      commit('DELETE_USER', payload)

    } catch (error) {
      return error.response.data;
    }
  },

  async updateUser({
    commit
  }, payload) {
    try {
      await UserService.updateUser(payload);
      commit('UPDATE_USER', payload);
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
