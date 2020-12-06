<template>
  <div>
    <section class="hero is-fullheight is-error-section">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-two-fifths">
              <div class="column has-text-centered">
                <h1 class="title">404 Page Not Found</h1>
                <p class="subtitle">
                  An unexpected error has occurred. Please contact the site
                  owner.
                </p>
                <a class="button" href="/home">Back to Homepage</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "page-not-found",
  created() {
    document.getElementById("root").className = "has-spinner-active has-aside-mobile-transition has-aside-expanded";
  },
};
</script>