<template>
  <div class="container">
    <input
      class="form-control"
      type="text"
      v-model="title"
      placeholder="책제목을입력하세요"
      @keyup.enter="apply"
    />
    <div class="selects">
      <select
        class="form-select"
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
      >
        <option v-for="item in filter.items" :key="item">
          {{ item }}
        </option>
      </select>

      <!-- <el-select
      v-model="sort"
      placeholder="정확도순"
      size="large"
      style="margin-left: 2%"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="target"
      placeholder="제목"
      size="large"
      style="margin-left: 2%"
    >
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select> -->
    </div>
    <button class="btn btn-outline-primary" @click="apply">검색</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      sort: 'accuracy',
      target: 'title',
      size: 10,
      filters: [
        {
          name: 'sort',
          items: ['accuracy', 'latest'],
        },
        {
          name: 'target',
          items: ['title', 'publisher', 'persion'],
        },
        {
          name: 'size',
          items: [10, 20, 30, 40, 50],
        },
      ],
    };
  },
  // data() {
  //   return {
  //     options: [
  //       {
  //         value: 'accuracy',
  //         label: '정확도순',
  //       },
  //       {
  //         value: 'latest',
  //         label: '발간일순',
  //       },
  //     ],
  //     options2: [
  //       {
  //         value: 'title',
  //         label: '제목',
  //       },
  //       {
  //         value: 'publisher',
  //         label: '출판사',
  //       },
  //       {
  //         value: 'person',
  //         label: '저자',
  //       },
  //     ],

  //     sort: '',
  //     target: '',
  //     title: '',
  //   };
  // },
  methods: {
    async apply() {
      this.$store.dispatch('book/searchBooks', {
        title: this.title,
        sort: this.sort,
        target: this.target,
        size: this.size,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/main.scss';

.container {
  display: flex;
  margin-top: 80px;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style>
