import apiClient from '../apiClient'

export default {
  getInstructors() {
    return apiClient.get('/instructors')
  },
  getInstructor(id) {
    return apiClient.get(`/instructors/${id}`)
  },
  postInstructor(instructor) {
    return apiClient.post('/instructors', instructor)
  },
  deleteInstructor(id) {
    return apiClient.delete(`/instructors/${id}`)
  },

  updateInstructor(instructor) {
    return apiClient.put(`/instructors/${instructor.id}`, instructor)
  }
}
