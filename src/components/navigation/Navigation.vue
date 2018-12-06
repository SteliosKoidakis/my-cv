<template>
  <nav class="Navigation padding-m">
    <a class="padding-left-s padding-right-s text-center"
      v-if="isSmallScreen" @click="triggerMobileMenu">
      <font-awesome-icon :icon="getArrow" />
    </a>
    <template v-if="showMenu">
      <router-link
        v-for="item in routes"
        class="padding-s"
        :to="item.path"
        :key="item.name"
      >
          {{item.name}}
      </router-link>
    </template>

  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      mobileMenuStatus: false,
    };
  },
  props: {
    routes: {
      type: Array,
      default: () => [],
      required: true,
    },
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
.Navigation {
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
</style>
