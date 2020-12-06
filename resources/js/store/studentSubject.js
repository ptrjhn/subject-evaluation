import StudentSubjectService from '../services/StudentSubjectService.js'

const state = {
  studentSubjects: [],
  remainingSubjects: [],
  studentSubject: {},
  errors: null,
}

const getters = {
  getStudentSubjectById: state => id => {
    return state.studentSubjects.find(sbj => sbj.id === id);
  },
  studentSubjects: state => state.studentSubjects,
  remainingSubjects: state => state.remainingSubjects,
  courseSubject: state => state.courseSubject,
  errors: state => state.errors
}

const mutations = {
  ADD_STUDENT_SUBJECT(state, data) {
    state.studentSubjects.unshift(data);
  },
  SET_REMAINING_SUBJECTS(state, data) {
    state.remainingSubjects = data;
  },
  SET_STUDENT_SUBJECT(state, data) {
    state.studentSubject = data;
  },
   SET_STUDENT_SUBJECTS(state, data) {
    state.studentSubjects = data;
  },
  DELETE_STUDENT_SUBJECT(state, data) {
    let index = state.studentSubjects.findIndex(sbj => sbj.id === data.id);
    state.studentSubjects.splice(index, 1);
  },

  
  UPDATE_STUDENT_SUBJECT(state, data) {
    let index = state.studentSubjects.findIndex(sbj => sbj.id === data.id);
    let subject = state.studentSubjects[index];
    Object.assign(subject, data);
  },

  REMOVE_ADDED_SUBJECT(state, data) {
    let index = state.remainingSubjects.findIndex(sbj => sbj.subject_code === data.subject_code);
    state.remainingSubjects.splice(index, 1);
  },

  ADD_REMOVED_SUBJECT(state, data) {
    let removedSubject = state.studentSubjects.find(sbj => sbj.subject_code === data.subject_code);
    state.remainingSubjects.unshift(removedSubject);
  },
  

  SET_ERRORS(state, errors) {
    state.errors = errors;
  }
}

const actions = {
  async postStudentSubject({
    commit,
    dispatch
  }, payload) {
    let response = null;
    try {
      response = await StudentSubjectService.postStudentSubject(payload);
      commit('ADD_STUDENT_SUBJECT', response.data.data);
    } catch (errors) {
      return response;
    }
  },

   fetchStudentRemainingSubjects({
    commit
  }, query) {
    StudentSubjectService.getStudentRemainingSubject(query)
    .then(response => {
      commit('SET_REMAINING_SUBJECTS', response.data.data)
    }).catch(error => {
      commit('SET_ERRORS', error.response.data)
    })
  },

  async getStudentSubjects({
    commit
  },query) {
    let response = [];
    try {
      response = await StudentSubjectService.getStudentSubjects(query)
      commit('SET_STUDENT_SUBJECTS', response.data)
      return response;
      
    } catch (error) {
      commit('SET_ERRORS', error.response.data) 
      return error;
    }
  },


  getStudentSubject({
    commit
  }, id) {

    let studentSubject = getters.getStudentSubjectById(id);

    if (studentSubject) {
      commit('SET_STUDENT_SUBJECT', studentSubject)
    } else {
      StudentSubjectService.getStudentSubject(id).then(response => {
        commit('SET_STUDENT_SUBJECT', response.data.data)
      }).catch(error => {
        throw error;
      })
    }
  },

  deleteStudentSubject({
    commit
  }, payload) {
    try {
      StudentSubjectService.deleteStudentSubject(payload.id);
      commit('DELETE_STUDENT_SUBJECT', payload);
    } catch (error) {
      return error;

    }
  },

  async updateStudentSubject({
    commit
  }, payload) {
    try {
      let response = await StudentSubjectService.updateStudentSubject(payload)
      commit('SET_STUDENT_SUBJECTS', response.data);
      return response;
    } catch (error) {
      return error.response.data
    }
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
