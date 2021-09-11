<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="mb-3">
      <label for="username" class="form-label">아이디</label>
      <input
        id="username"
        type="text"
        v-model="username"
        class="form-control"
      />
      <p>
        <span v-if="!isUsernameValid && username" class="warning">
          이메일 형식으로 작성해주세요
        </span>
      </p>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">비밀번호</label>
      <input
        id="password"
        type="password"
        v-model="password"
        class="form-control"
      />
    </div>
    <button
      :disabled="!isUsernameValid || !password"
      type="submit"
      class="btn btn-outline-primary"
    >
      로그인
    </button>
    <p class="warning">{{ logMessage }}</p>
  </form>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('auth/LOGIN', userData);
        this.$router.push('/');
      } catch (error) {
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
