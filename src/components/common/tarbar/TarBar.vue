<template>
    <div class="tarbar">
        <slot></slot>
    </div>
</template>
<script lang="js">
import Vue from 'vue';
import TarBarItem from './TarBarItem'
export default {
    name: 'TarBar',
    data(){
        return{}
    },
    components:{
        TarBarItem,
    }
}
</script>
<style>

.tarbar{
    display: flex;
    background: #f4f4f4;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
