import apiClient from '../apiClient'
import { setQueryParams } from './helper'

export default {

  getCurriculums(query) {
    return apiClient.get('/curriculums?' + setQueryParams(query))
  },

  getCurriculum(id) {
    return apiClient.get(`/curriculums/${id}`)
  },

  postCurriculum(data) {
    return apiClient.post('/curriculums', data)
  },

  deleteCurriculum(id) {
    return apiClient.delete(`/curriculums/${id}`)
  },

  updateCurriculum(data) {
    return apiClient.put(`/curriculums/${data.id}`, data)
  }
}
