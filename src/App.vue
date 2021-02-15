<template>
  <div id="app">
    <router-view></router-view>
    <my-tar-bar/>
  </div>
</template>

<script>
import MyTarBar from './components/content/MyTarBar'

export default {
  name: "App",
  components:{
    MyTarBar
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
