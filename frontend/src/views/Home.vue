<template>
  <div class="container">
    <carousel :autoplay="true" :nav="false" :dots="false" class="marginTop50">
      <div>Your Content1</div>
      <div>Your Content2</div>
      <div>Your Content3</div>
      <div>Your Content4</div>
    </carousel>
    <carousel :autoplay="true" :nav="false" :dots="false">
      <img src="@/assets/logo.png" />

      <img
        src="https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg"
      />

      <img
        src="https://mblogthumb-phinf.pstatic.net/MjAxODA4MjlfMzUg/MDAxNTM1NTA5OTQ1NjY5.aZf6k9FXHp2Hs1WobXccbC9i2lv49P09CmqGCIsK4Vcg.Bn76ZrRmvjoBNpOC4ppvM6lscit14Fw7KyWawBcOADkg.PNG.thisme73/%ED%9D%B0%ED%86%A0%EB%81%BC.png?type=w800"
      />

      <img src="https://placeimg.com/200/200/any?4" />
    </carousel>
    홈페이지에 대한 간단한소개가 들어간다.<br />
    사용 스킬을 이미지와 함께 나타낸다.
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  components: { carousel },
};
</script>

<style></style>
