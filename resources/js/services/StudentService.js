import apiClient from '../apiClient'

export default {
  getStudents() {
    return apiClient.get('/students')
  },
  getStudent(id) {
    return apiClient.get(`/students/${id}`)
  },
  postStudent(course) {
    return apiClient.post('/students', course)
  },
  deleteStudent(id) {
    return apiClient.delete(`/students/${id}`)
  },

  updateStudent(student) {
    return apiClient.put(`/students/${student.id}`, student)
  }
}
