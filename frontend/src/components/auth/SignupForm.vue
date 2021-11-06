<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username" class="form-label">아이디 </label>
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
    <div>
      <label for="password" class="form-label">비밀번호 </label>
      <input
        id="password"
        type="text"
        v-model="password"
        class="form-control"
      />
    </div>
    <div>
      <label for="nickname" class="form-label">닉네임 </label>
      <input
        id="nickname"
        type="text"
        v-model="nickname"
        class="form-control"
      />
    </div>
    <br />
    <button type="submit" class="btn btn-outline-primary">회원 가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { validateEmail } from '@/utils/validation';
import { registerUser } from '@/api/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
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
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      this.logMessage = `${data.username} 님이 가입되었습니다`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
