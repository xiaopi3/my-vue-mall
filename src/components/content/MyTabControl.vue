<template>
  <div class="my-tab-control">
    <div class="control-item" v-for="(item,index) in titles" :key="item" @click="tabClick(index)" :class="{active: index===currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script lang="js">
import Vue from 'vue';
export default {
  name: 'MyTabControl',
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data(){
    return{
      currentIndex: 0,
    }
  },
  methods: {
    tabClick(index){
      this.currentIndex = index;
    }
  },
}
</script>
<style scoped>
.my-tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  background-color: #fff;
}
.control-item {
  flex: 1;
}

.active {
  color: rgb(255, 173, 186);
}

.active span {
  border-bottom: 2px solid rgb(255, 173, 186);
  padding-bottom: 2px;
}
</style>