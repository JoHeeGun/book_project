<template>
  <div>
    <div class="main list-container contents">
      <Loading v-if="isLoading"></Loading>
      <ul v-else>
        <Postlist
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
          @refresh="fetchData"
        ></Postlist>
      </ul>
    </div>
    <router-link to="/posts/postcreate" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api/posts';
import Postlist from '@/components/posts/Postlist.vue';
import Loading from '@/components/Loading.vue';

export default {
  components: {
    Postlist,
    Loading,
  },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
