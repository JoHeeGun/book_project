<template>
  <div class="container"><BookSearch /> <BookList /></div>
</template>

<script>
import BookSearch from '@/components/book/BookSearch.vue';
import BookList from '@/components/book/BookList.vue';

export default {
  components: {
    BookSearch,
    BookList,
  },
};
</script>

<style></style>
