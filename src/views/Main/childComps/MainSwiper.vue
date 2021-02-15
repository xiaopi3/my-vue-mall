<template>
  <div>
    <div @mouseenter="on_bot_enter()" @mouseleave="on_bot_leave()">
      <swiper ref="mySwiper" class="swiper-container" :options="options">
        <div class="swiper-slide" :key="banner.image" v-for="banner in data">
          <a :href="banner.link"><img :src="banner.image" style="width:100%"></a>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script lang="js">
import Vue from 'vue';
export default {
  name: 'MainSwiper',
  props: ['options','data'],
  data(){
    return{}
  },
  mounted() {
    // console.log("this is current swiper instance object", this.swiper);
  },
  computed: {
    swiper() {
      // console.log(this.$refs)
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    on_bot_enter() { //鼠标移入停止自动播放
      console.log("鼠标进入")
      this.swiper.autoplay.stop()
    },
    on_bot_leave() {//鼠标移出停止自动播放
      console.log("鼠标出去")
      this.swiper.autoplay.start()
    },
  },
}
</script>
<style>
</style>