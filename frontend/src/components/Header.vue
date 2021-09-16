<template>
  <header>
    <Logo />
    <template v-if="!isLogin">
      <div class="nav nav-pills">
        <div v-for="nav in navigations" :key="nav.name" class="nav-item">
          <router-link :to="nav.href" active-class="active" class="nav-link">
            {{ nav.name }}
          </router-link>
        </div>
        <div class="auth nav nav-pills">
          <div v-for="nav in auth" :key="nav.name" class="nav-item">
            <router-link :to="nav.href" active-class="active" class="nav-link">
              {{ nav.name }}
            </router-link>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="nav nav-pills">
        <div v-for="nav in auth_navigations" :key="nav.name" class="nav-item">
          <router-link :to="nav.href" active-class="active" class="nav-link">
            {{ nav.name }}
          </router-link>
        </div>
        <div class="auth nav nav-pills">
          <div class="nav-item">
            <a href="javascript:;" @click="logout" class="nav-link">
              로그아웃
            </a>
          </div>
        </div>
      </div>
    </template>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
import Logo from '@/components/Logo';
import { mapGetters } from 'vuex';

export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigations: [
        {
          name: '책 검색',
          href: '/book',
        },
      ],
      auth_navigations: [
        {
          name: '책 검색',
          href: '/book',
        },
        {
          name: '나만의 포스트',
          href: '/posts',
        },
      ],
      auth: [
        {
          name: '로그인',
          href: '/login',
        },
        {
          name: '회원가입',
          href: '/signup',
        },
      ],
    };
  },
  computed: {
    ...mapGetters('auth', ['isLogin']),
  },
  methods: {
    logout() {
      this.$store.commit('auth/clearUsername');
      this.$store.commit('auth/clearToken');
      deleteCookie('jhg_auth');
      deleteCookie('jhg_user');
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;
}
.logo {
  margin-right: 40px;
}
.auth {
  margin-left: 40px;
}
</style>
