<template>
  <div class="container carousel">
    <carousel :autoplay="true" :nav="false" :dots="false" class="marginTop50">
      <div>book search image</div>
      <div>book list click</div>
      <div>posts crud</div>
      <div>login/register</div>
    </carousel>
    <carousel :autoplay="true" :nav="false" :dots="false">
      <img src="@/assets/logo.png" />

      <img src="https://placeimg.com/200/200/any?2" />

      <img src="https://placeimg.com/200/200/any?3" />

      <img src="https://placeimg.com/200/200/any?4" />
    </carousel>

    <div class="htitle">MBP</div>
    <div class="hcontent">
      MBP는 My Book Post의 약자로 책에 대한정보를 자신만의 공간에
      포스팅합니다.<br />
      자신이 원하는 정보의 책을 다양한 조건으로 검색해볼 수 있습니다.<br />
      책에 대한 추가적인 정보를 얻을 수 있습니다.<br />
      본인만의 생각이나 견해를 자유롭게 포스팅합니다.
    </div>

    <div class="stitle">Skills</div>
    <h2>Front-End</h2>
    <hr />
    <div class="skills">
      <div class="skill">
        <img src="@/assets/html5.png" />
        <p class="text">HTML5</p>
      </div>
      <div class="skill">
        <img src="@/assets/css3.png" />
        <p class="text">CSS3</p>
      </div>
      <div class="skill">
        <img src="@/assets/javascript.png" />
        <p class="text">ECMAScript5</p>
      </div>
      <div class="skill">
        <img src="@/assets/vuejs.png" />
        <p class="text">Vue.js</p>
      </div>
      <div class="skill">
        <img src="@/assets/Bootstrap.png" />
        <p class="text">Bootstrap</p>
      </div>
      <div class="skill">
        <img src="@/assets/sass.png" />
        <p class="text">Sass/Scss</p>
      </div>
      <div class="skill">
        <img src="@/assets/babel.png" />
        <p class="text">Babel</p>
      </div>
    </div>
    <h2>Back-End</h2>
    <hr />
    <div class="skills">
      <div class="skill">
        <img src="@/assets/nodejs.png" />
        <p class="text">Node.js</p>
      </div>
      <div class="skill">
        <img src="@/assets/express.png" />
        <p class="text">Express</p>
      </div>
      <div class="skill">
        <img src="@/assets/mongo.png" />
        <p class="text">MongoDB</p>
      </div>
      <div class="skill">
        <img src="@/assets/git.png" />
        <p class="text">Git</p>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
  components: { carousel },
};
</script>

<style></style>
