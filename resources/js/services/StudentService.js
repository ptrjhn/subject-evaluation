import apiClient from '../apiClient'
import { setQueryParams } from '../services/helper'


export default {
  getStudents() {
    return apiClient.get('/students')
  },
  getStudent(id) {
    return apiClient.get(`/students/${id}`)
  },

  getGrades(query) {
    return apiClient.get(`/student/curriculum/grades?${setQueryParams(query)}`)
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
