<template>
  <div class="Layout">
    <nav class="Layout__nav padding-m">
      <a class="padding-s text-center" v-if="isSmallScreen" @click="triggerMobileMenu">
        <font-awesome-icon :icon="getArrow" />
      </a>
      <template v-if="showMenu">
        <router-link class="padding-s" to="/">Home</router-link>
        <router-link class="padding-s" to="/experience">Experience</router-link>
        <router-link class="padding-s" to="/projects">Projects</router-link>
        <router-link class="padding-s" to="/skills">Skills</router-link>
        <router-link class="padding-s" to="/education">Education</router-link>
      </template>

    </nav>
    <main class="Layout__main container">
      <slot/>
    </main>
    <footer class="Layout__footer padding-l">
      &copy; Footer
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      mobileMenuStatus: false,
    };
  },
  computed: {
    isSmallScreen() {
      return this.$mq === 'mobile' || this.$mq === 'tablet';
    },
    showMenu() {
      return !this.isSmallScreen || this.mobileMenuStatus;
    },
    getArrow() {
      return this.showMenu ? 'angle-double-up' : 'angle-double-down';
    },
  },
  methods: {
    triggerMobileMenu() {
      this.mobileMenuStatus = !this.mobileMenuStatus;
    },
  },
};
</script>

<style lang="scss" scoped>
.Layout {
  &__nav {
    background-color: black;
    a {
      font-weight: 700;
      color: white;
      @media (max-width:680px) {
        display: block;
      }
    }
    a:hover {
      text-decoration: none;
      color: white;
      cursor: pointer;
      background-color: darkslategray;
    }
  }
}
</style>
