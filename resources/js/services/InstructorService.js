import apiClient from '../apiClient'
import {
  setQueryParams
} from './helper'


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
  updateInstructor(data) {
    return apiClient.put(`/instructors/${data.id}`, data)
  },

  getInstructorSubjects(query) {
    return apiClient.get(`/instructor/subjects?` + setQueryParams(query))
  },

  getInstructorSubject(id) {
    return apiClient.get(`/instructor/subjects/${id}`)
  },

  postInstructorSubject(data) {
    return apiClient.post('/instructor/subjects', data)
  },

  deleteInstructorSubject(id) {
    return apiClient.delete(`/instructor/subjects/${id}`)
  },

  updateInstructorSubject(data) {
    return apiClient.put(`/instructor/subjects/${data.id}`, data)
  }
}
