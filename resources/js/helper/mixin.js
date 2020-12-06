import Vue from 'vue';
import Cleave from 'cleave.js'
import {
  mapGetters
} from 'vuex';

import moment from 'moment';

const cleave = {
  name: 'cleave',
  bind(el, binding) {
    const input = el.querySelector('input')
    input._vCleave = new Cleave(input, binding.value)
  },
  unbind(el) {
    const input = el.querySelector('input')
    input._vCleave.destroy()
  }
}


Vue.mixin({
  directives: {
    cleave
  },
  data() {
    return {
      masks: {
        studentId: {
          delimiters: ['-'],
          blocks: [2, 5],
          numericOnly: true
        },
        cp_number: {
          delimiters: ['-'],
          blocks: [4, 3, 4],
          numericOnly: true
        },
      },
       query: {
        sortBy: null,
        orderBy: null,
        active: null,
        pageSize: 0,
        page: 0,
        search: null,
      },
      options: {
        course: {
          selected: {},
          searchText: "",
        },
        subject: {
          selected: {},
          searchText: "",
        },
        academicYear: {
          selected: {},
          searchText: "",
        },
       
      },
    }
  },

  computed: {

    ...mapGetters('courses', ['courses']),
    ...mapGetters('academicYears', ['academicYears']),
    ...mapGetters('subjects', ['subjects']),
    ...mapGetters("students", ['students']),

    currentRouteName() {
      return this.$route.name;
    },
    
    getFilteredCourses() {
      return this.courses.filter((opt) => {
        return (
          opt.description
          .toString()
          .toLowerCase()
          .indexOf(this.options.course.searchText.toLowerCase()) >= 0 ||
          opt.course_code
          .toString()
          .toLowerCase()
          .indexOf(this.options.course.searchText.toLowerCase()) >= 0
        );
      });
    },
    filteredYear() {
      return this.academicYears.filter((opt) => {
        return (
          opt.description
          .toString()
          .toLowerCase()
          .indexOf(this.options.academicYear.searchText.toLowerCase()) >= 0
        );
      });
    },

    filteredSubjects() {
      return this.subjects.filter((opt) => {
        return (
          opt.code
          .toString()
          .toLowerCase()
          .indexOf(this.options.subject.searchText.toLowerCase()) >= 0 ||
          opt.description
          .toString()
          .toLowerCase()
          .indexOf(this.options.subject.searchText.toLowerCase()) >= 0
        );
      });
    },

     
  },
  created() {

  },
  methods: {

    formatDate(date) {
      return moment(date).format('MMMM DD, YYYY');
    },

    formatBDate(date) {
      return moment(date).format('YYYY-MM-DD');
    },

    formatTransactionDate(date) {
      return moment(date).format('MM/DD/YYYY');
    },


    currentDate() {
      return moment().format('MM/DD/YYYY');
    },

    convertToText(value) {
      if (value == null) {
        return 'None'
      }
      var arrays = [].concat(value)
      return arrays.toString().replace(/[\[\]\"']+/g, " ");
    },

    capitalize(text) {
      if (!text) return '';
      text = text.toString();
      return text.charAt(0).toUpperCase() + text.slice(1);
    },

    dateDiff(date) {
      var now = moment();
      var diffInDays = moment(date, 'MM-DD-YYYY').diff(
        moment(now, 'MM-DD-YYYY'),
        'days'
      );

      return diffInDays + 1;
    },

    showErrorMessage(response) {
      let message= "";
      for (let key in response.errors) {
        message += `${response.errors[key][0]}<br/>`;
      }
      this.showNotification(message, "danger");
    },

    isEmptyObject(obj) {
      return Object.keys(obj).length === 0;
    },
    
    showNotification(message, type, position = "is-bottom-right") {
      this.$buefy.notification.open({
        duration: 5000,
        message,
        position,
        type: `is-${type}`,
        hasIcon: true,
        closable: true,
        queue: false,
        autoClose: true,
      });
    },
  },

  filters: {
    truncate(value, length) {
      if (value !== null || value !== '') {
        return value.length > length ? value.substr(0, length) + "..." : value;
      }
    },
    isEmpty(value) {
      return (value === "" || value === null) ? "N/A" : value;
    },
  
    isNone(value) {
      return (value === "" || value === null) ? "None" : value;
    }
  },
 
});
