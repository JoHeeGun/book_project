<template>
  <a
    :href="book.url"
    target="_blank"
    class="book"
    :style="{ backgroundImage: `url(${book.thumbnail})` }"
  >
    <div class="info">
      <div class="title">
        {{ book.title }}
      </div>
      <div class="authors">
        {{ book.authors }}
      </div>
      <div class="authors">{{ book.price }}원</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.book {
  $width: 200px;
  width: $width;
  height: $width * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  position: relative;
  .info {
    background-color: $gray-800;
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 14px;
    font-size: 14px;
    text-align: center;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    .title {
      color: $primary;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .authors {
      color: $white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
