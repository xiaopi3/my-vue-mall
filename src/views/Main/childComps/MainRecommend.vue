<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.image" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" style="width:85px;margin-bottom:5px">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script lang="js">
import Vue from 'vue';
export default {
  name: 'MainRecommend',
  props: {
    recommends: {
      type: Array,
      default: []
    }
  },
  data(){
    return{}
  }
}
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0;
}
.recommend-item {
  flex: 1;
}
.recommend a {
  text-decoration: none;
  color: black;
}
</style>