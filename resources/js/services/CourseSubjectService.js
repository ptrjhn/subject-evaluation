import apiClient from '../apiClient'
import { setQueryParams } from '../services/helper'

export default {

  getCoursesSubjects(query) {
    return apiClient.get('/courses-subjects?' + setQueryParams(query))
  },

  getCourseSubject(id) {
    return apiClient.get(`/courses-subjects/${id}`)
  },

  postCourseSubject(courseSubject) {
    return apiClient.post('/courses-subjects', courseSubject)
  },

  deleteCourseSubject(id) {
    return apiClient.delete(`/courses-subjects/${id}`)
  },

  updateCourseSubject(data) {
    return apiClient.put(`/courses-subjects/${data.id}`, data)
  }
}
