<template>
    <div class="Home">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Home</h1>
            <card :data="cardTestData"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { Card } from '../../components';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      cardTestData: {
        title: 'test title',
      },
    };
  },
};
</script>
