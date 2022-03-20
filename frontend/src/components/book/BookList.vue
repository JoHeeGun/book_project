<template>
  <div class="container">
    <div :class="{ 'no-result': !books.length }" class="inner">
      <div v-if="message" class="message">
        {{ message }}
      </div>
      <div v-else class="books">
        <BookItem v-for="book in books" :key="book.isbn" :book="book" />
      </div>
      <div>
        <el-pagination
          layout="prev, pager, next"
          :total="searchs.total_count"
          :current-page.sync="pages"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from '@/components/book/BookItem.vue';

export default {
  components: {
    BookItem,
  },
  computed: {
    books() {
      return this.$store.state.book.books;
    },
    message() {
      return this.$store.state.book.message;
    },
    message2() {
      return this.$store.state.book.message2;
    },
    message3() {
      return this.$store.state.book.message3;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.container {
  margin-top: 30px;
  .inner {
    background-color: $gray-100;
    padding: 10px 0;
    border-radius: 4;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
  }
  .message {
    color: $gray-400;
    font-size: 20px;
  }
  .books {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
