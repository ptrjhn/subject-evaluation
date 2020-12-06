<template>
  <div>
    <b-table
      :checked-rows.sync="checkedRows"
      :loading="isLoading"
      :paginated="true"
      :per-page="perPage"
      :checkable="true"
      :hoverable="true"
      default-sort="name"
      :data="courses"
    >
      <template slot-scope="props">
        <b-table-column
          searchable
          label="Course Code"
          field="course_code"
          sortable
        >
          {{ props.row.course_code }}
        </b-table-column>

        <b-table-column
          searchable
          label="Course Description"
          field="description"
          sortable
        >
          {{ props.row.description }}
        </b-table-column>

        <b-table-column custom-key="actions" class="is-actions-cell">
          <div class="buttons is-right">
            <b-tooltip label="Click to edit" position="is-left">
              <button class="button is-link " @click="editCourse(props.row)">
                <b-icon icon="pencil" size="is-small" />
              </button>
            </b-tooltip>
            <b-tooltip label="Click to Delete" position="is-left">
              <button
                class="button is-danger"
                type="button"
                @click.prevent="trashModal(props.row)"
              >
                <b-icon icon="trash-can" size="is-small" />
              </button>
            </b-tooltip>
          </div>
        </b-table-column>
      </template>

      <section class="section" slot="empty">
        <div class="content has-text-grey has-text-centered">
          <template v-if="isLoading">
            <p>
              <b-icon icon="dots-horizontal" size="is-large" />
            </p>
            <p>Fetching data...</p>
          </template>
          <template v-else>
            <p>Nothing's here&hellip;</p>
          </template>
        </div>
      </section>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    checkable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isModalActive: false,
      trashObject: null,
      clients: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    };
  },
  computed: {
    trashObjectName() {
      if (this.trashObject) {
        return this.trashObject.name;
      }

      return null;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    trashModal(trashObject) {
      this.trashObject = trashObject;
      this.isModalActive = true;
    },
    trashConfirm() {
      this.isModalActive = false;

      axios
        .delete(`/clients/${this.trashObject.id}/destroy`)
        .then(r => {
          this.getData();

          this.$buefy.snackbar.open({
            message: `Deleted ${this.trashObject.name}`,
            queue: false
          });
        })
        .catch(err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: "is-danger",
            queue: false
          });
        });
    }
  }
};
</script>
