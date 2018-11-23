<template>
  <div class="Layout">
    <nav class="Layout__nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </nav>
    <main class="Layout__main">
      <slot/>
    </main>
    <footer class="Layout__footer">
      &copy; Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: `Layout`,
};
</script>

