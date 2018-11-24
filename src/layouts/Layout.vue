<template>
  <div class="Layout">
    <nav class="Layout__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/education">Education</router-link>
    </nav>
    <main class="Layout__main container">
      <slot/>
    </main>
    <footer class="Layout__footer">
      &copy; Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style lang="scss" scoped>
.Layout {
  &_nav {
    padding: 20px;
  }
}
</style>
