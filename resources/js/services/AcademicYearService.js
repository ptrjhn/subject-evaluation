import apiClient from '../apiClient'

export default {
  getYears() {
    return apiClient.get('/academic-years')
  },
  getYear(id) {
    return apiClient.get(`/academic-years/${id}`)
  },
  postAY(ay) {
    return apiClient.post('/academic-years', ay)
  },
  deleteAY(id) {
    return apiClient.delete(`/academic-years/${id}`)
  },

  updateAY(ay) {
    return apiClient.put(`/academic-years/${ay.id}`, ay)
  }
}
