<template>
  <div>
    <Header class="body" />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
.body {
  background: #f7f6f9;
}
</style>
