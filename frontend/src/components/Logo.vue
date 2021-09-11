<template>
  <RouterLink to="/" class="logo">
    <span>Book_Project</span>
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
  }
}
</style>
