<template>
 <div>
  <b-modal :active.sync="isModalActive" has-modal-card>
   <div class="modal-card">
    <header class="modal-card-head">
     <p class="modal-card-title">{{ modalTitle }}</p>
    </header>
    <section class="modal-card-body">
     <slot />
    </section>
    <footer class="modal-card-foot">
     <button type="submit" :class="confirmButtonClass">{{ isNew ? "Save" : "Update" }}</button>
     <button class="button" @click="cancel()">Cancel</button>
    </footer>
   </div>
  </b-modal>
 </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
 name: "Modal",
 props: {
  isActive: {
   type: Boolean,
   default: false,
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
  default: "is-primary",
 },

 data() {
  return {
   isModalActive: false,
   modalTitle: this.isNew ? "Create Course" : "Update Course",
  };
 },

 computed: {
  confirmButtonClass() {
   return `button ${this.buttonType}`;
  },
 },

 watch: {
  isActive(newValue) {
   this.isModalActive = newValue;
  },
  isModalActive(newValue) {
   this.isModalActive = newValue;
  },
 },

 methods: {
  cancel() {
   this.$emit("cancel");
  },
  confirm() {
   this.$emit("confirm");
  },
 },
};
</script>
