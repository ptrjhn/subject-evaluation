<template>
  <section class="section is-title-bar">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <ul>
            <li v-for="(title,index) in titleStack" :key="index">{{ title }}</li>
          </ul>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <slot/>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

.section.section.is-title-bar {
  padding: 1rem;
}
  
</style>

<script>
export default {
  name: 'TitleBar',
  props: {
    titleStack: {
      type: Array,
      default: () => []
    }
  }
}
</script>
