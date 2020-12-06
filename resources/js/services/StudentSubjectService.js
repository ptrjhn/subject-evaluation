import apiClient from '../apiClient'

import { setQueryParams } from '../services/helper'

export default {

  getStudentSubjects(query) {
      return apiClient.get(`/students/${query.id}/subjects?${setQueryParams(query)}`)
  },
  getStudentRemainingSubject(query) {
    return apiClient.get(`/student/subjects/remaining?${setQueryParams(query)}`)
  },

  getStudentSubject(id) {
    return apiClient.get(`/student/subjects/${id}`)
  },

  postStudentSubject(data) {
    return apiClient.post('/student/subjects', data)
  },

  deleteStudentSubject(id) {
    return apiClient.delete(`/student/subjects/${id}`)
  },

  updateStudentSubject(data) {
    return apiClient.put(`/student/subjects/update`, data)
  }
}
