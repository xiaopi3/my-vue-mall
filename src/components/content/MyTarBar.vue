<template>
    <tar-bar>
      <tar-bar-item path='/main' activeColor="deepPink">
        <img slot="icon" src="@/assets/img/tarbar/shouye.png" alt="">
        <div slot="text">首页</div>
      </tar-bar-item>
      <tar-bar-item path='/message' activeColor="deepPink">
        <img slot="icon" src="@/assets/img/tarbar/xiaoxi.png" alt="">
        <div slot="text">消息</div>
      </tar-bar-item>
      <tar-bar-item path='/profile' activeColor="deepPink">
        <img slot="icon" src="@/assets/img/tarbar/gerenzhongxin.png" alt="">
        <div slot="text">个人中心</div>
      </tar-bar-item>
      <tar-bar-item path='/setting' activeColor="deepPink">
        <img slot="icon" src="@/assets/img/tarbar/shezhi.png" alt="">
        <div slot="text">设置</div>
      </tar-bar-item>
    </tar-bar>
</template>
<script lang="js">
import Vue from 'vue';
import TarBar from '@/components/common/tarbar/TarBar'
import TarBarItem from '@/components/common/tarbar/TarBarItem'
export default {
    name: 'MyTarBar',
    components:{
        TarBar,
        TarBarItem
    }
}
</script>
<style>
</style>