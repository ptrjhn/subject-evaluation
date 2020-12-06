<template>
  <section class="hero is-fullheight is-error-section">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  <span class="icon"><i class="mdi mdi-lock"></i></span>
                  <span>Login</span>
                </p>
              </header>

              <div class="card-content">
                <form @submit.prevent="onSubmit" novalidate>
                  <b-field
                    label="Email Address"
                    :type="errors.email == null ? '' : 'is-danger'"
                    :message="errors.email == null ? '' : errors.email"
                  >
                    <b-input
                      placeholder="Email Address"
                      type="email"
                      v-model="form.email"
                      required
                    ></b-input>
                  </b-field>
                  <p class="help is-danger" v-if="errors.error">
                    {{ errors.error }}
                  </p>
                  <b-field
                    label="Password"
                    :type="errors.password == null ? '' : 'is-danger'"
                    :message="errors.password == null ? '' : errors.password"
                  >
                    <b-input
                      placeholder="Password"
                      type="password"
                      v-model="form.password"
                      required
                    ></b-input>
                  </b-field>

                  <hr />
                  <div class="field is-form-action-buttons">
                    <button type="submit" v-bind:class="[buttonType, loading]">
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <footer class="card-footer"></footer>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot has-text-centered">
      <div class="logo"></div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      errors: {},
      buttonType: "button is-dark",
      loading: "",
      form: {
        email: "",
        password: ""
      }
    };
  },
  created() {
    document.getElementById("root").className =
      "has-spinner-active has-aside-mobile-transition has-aside-expanded";
  },

  methods: {
    ...mapActions("auth", ["login"]),

    onSubmit() {
      this.errors = {};
      this.loading = "is-loading";

      this.login(this.form)
        .then(response => {
          this.errors = {};
          setTimeout(() => {
            this.$router.push("/home");
          }, 1000);
        })
        .catch(errors => {
          this.errors = {};
          this.loading = "";

          if (errors.response.status === 401) {
            this.$buefy.snackbar.open({
              message: "Invalid Credentials. Try again",
              queue: false,
              position: "is-top"
            });
          } else {
            this.errors = errors.response.data;
          }
        });
    }
  }
};
</script>
