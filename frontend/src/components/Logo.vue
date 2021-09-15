<template>
  <RouterLink to="/" class="logo">
    <span>MBP</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.logo {
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  span {
    color: $primary;
    font-weight: 800;
  }
}
</style>
