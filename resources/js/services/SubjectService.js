import apiClient from '../apiClient'

export default {
  getSubjects() {
    return apiClient.get('/subjects');
  },
  getSubject(id) {
    return apiClient.get(`/subjects/${id}`)
  },
  postSubject(subject) {
    return apiClient.post('/subjects', subject)
  },
  deleteSubject(id) {
    return apiClient.delete(`/subjects/${id}`)
  },

  updateSubject(subject) {
    return apiClient.put(`/subjects/${subject.id}`, subject)
  }
}
