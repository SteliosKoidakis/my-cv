<template>
  <div class="Card">
    <div class="Card__wrapper">
      <div v-if="data.image" class="Card__header">
        <div class="Card__image">
          {{ data.image }}
        </div>
      </div>
      <div class="Card__body">
        <div v-if="data.title" class="Card__title">
          {{ data.title }}
        </div>
        <div v-if="data.subTitle" class="Card__subtitle">
          {{ data.subTitle }}
        </div>
        <div v-if="data.label" class="Card__label">
          {{ data.label }}
        </div>
        <div v-if="data.description" class="Card__description">
          {{ data.description }}
        </div>
      </div>
      <div v-if="data.footer" class="Card__footer">
        {{ data.footer }}
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.Card {
}
</style>
