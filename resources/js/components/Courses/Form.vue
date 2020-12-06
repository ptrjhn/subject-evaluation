<template>
 <div>
  <modal
   :is-active.sync="isActive"
   :data="formData"
   has-modal-card
   @confirm="confirm"
   @cancel="cancel"
  >
   <form @submit.prevent="save()">
    <b-field label="Course Code">
     <b-input
      placeholder="Course Code"
      type="text"
      v-model="formData.course_code"
      required
      minlength="3"
      maxlength="5"
     ></b-input>
    </b-field>

    <b-field label="Course Description">
     <b-input
      placeholder="Course Description"
      type="text"
      v-model="formData.description"
      required
      minlength="10"
      maxlength="100"
     ></b-input>
    </b-field>
   </form>
  </modal>
 </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Modal from "./Modal";
export default {
 components: {
  Modal,
 },
 props: {
  isActive: {
   type: Boolean,
   default: false,
  },

  data: {
   type: Object,
   default: {},
  },

  isNew: {
   type: Boolean,
   default: true,
  },
 },

 modalTitle: {
  type: String,
  default: "New",
 },

 buttonType: {
  type: String,
  default: "button is-primary",
 },

 data() {
  return {
   isLoading: false,
   isModalActive: false,
   formData: {
    id: this.data.id,
    course_code: this.data.course_code,
    description: this.data.description,
   },
   modalTitle: this.isNew ? "Create Course" : "Update Course",
  };
 },
 computed: {
  confirmButtonClass() {
   return `button ${this.buttonType}`;
  },
  ...mapGetters("courses", ["courses", "course"]),
  ...mapState("courses", ["errors"]),
 },

 methods: {
  ...mapActions("courses", ["createCourse", "updateCourse"]),

  async save() {
   let response = null;
   if (this.isNew) {
    response = await this.createCourse(this.formData);
    if (response == undefined) {
     this.isModalActive = false;
    } else {
     alert("Error: Something went wrong");
    }
   } else {
    let response = await this.updateCourse(this.formData);
    if (response == undefined) {
     this.isModalActive = false;
    } else {
     alert("Error: Something went wrong");
    }
   }
  },
  cancel() {
   this.$emit("cancel");
  },
  confirm() {
   this.$emit("confirm");
  },
 },
};
</script>
