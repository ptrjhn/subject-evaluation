import apiClient from '../apiClient'
import { setQueryParams } from './helper'

export default {
  getSections() {
    return apiClient.get('/sections')
  },
  getSection(id) {
    return apiClient.get(`/sections/${id}`)
  },
  postSection(section) {
    return apiClient.post('/sections', section)
  },
  deleteSection(id) {
    return apiClient.delete(`/sections/${id}`)
  },

  putSection(section) {
    return apiClient.put(`/sections/${section.id}`, section)
  }
}
