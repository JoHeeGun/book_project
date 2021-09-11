<template>
  <div class="contents">
    <div class="form-wrapper test">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title" class="form-label">제목</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <div class="mb-3">
          <label for="contents" class="form-label">내용</label>
          <textarea
            class="form-control"
            id="contents"
            rows="3"
            v-model="contents"
          ></textarea>
          <p
            v-if="!isContentsValid"
            class="validation-text warning isContentTooLong"
          >
            내용의 길이는 250자 미만이어야 합니다
          </p>
        </div>
        <button type="submit" class="btn btn-outline-primary">글 수정</button>
      </form>
    </div>
  </div>
</template>

<script>
import { editPost, fetchPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/posts');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style></style>
