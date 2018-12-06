<template>
  <div class="Layout">
    <navigation
      :routes="routes"
    />
    <main class="Layout__main">
      <slot/>
    </main>
    <footer class="Layout__footer padding-l">
      &copy; Footer
    </footer>
  </div>
</template>

<script>
import { Navigation } from '../components';

import { routesItems } from '../router';

export default {
  name: 'Layout',
  data() {
    return {
      mobileMenuStatus: false,
      routes: routesItems,
    };
  },
  components: {
    Navigation,
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
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  &__nav {
    display: flex;
    flex: 1;
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
  &__main {
    display: flex;
    flex: 1;
    & > div {
      width: 100%;
    }
  }
}
</style>
