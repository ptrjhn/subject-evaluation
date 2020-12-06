import apiClient from '../apiClient'

export default {
  getCourses() {
    return apiClient.get('/courses')
  },
  getCourse(id) {
    return apiClient.get(`/courses/${id}`)
  },
  postCourse(course) {
    return apiClient.post('/courses', course)
  },
  deleteCourse(id) {
    return apiClient.delete(`/courses/${id}`)
  },

  putCourse(course) {
    return apiClient.put(`/courses/${course.id}`, course)
  }
}
