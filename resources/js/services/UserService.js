import apiClient from '../apiClient'

export default {
  getUsers() {
    return apiClient.get('/users')
  },
  getUser(id) {
    return apiClient.get(`/users/${id}`)
  },
  postUser(user) {
    return apiClient.post('/users', user)
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`)
  },

  updateUser(user) {
    return apiClient.put(`/users/${user.id}`, user)
  }
}
