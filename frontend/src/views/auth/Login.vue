<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/auth/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style></style>
