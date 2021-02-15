<template>
    <div class='tarbar-item' @click="itemClick()">
        <slot name="icon"></slot>
        <div :style="activeStyle">
            <slot name="text"></slot>
        </div>
    </div>
</template>
<script lang="js">
import Vue from 'vue';
export default {
    name: 'TarBarItem',
    props:{
        path: String,
        activeColor: {
            type: String,
            default: "red"
        }
    },
    data(){
        return{}
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods: {
        itemClick(){
            // console.log(this.path)
            this.$router.push(this.path)
        }
    },
}
</script>
<style>
.tarbar-item{
    flex: 1;
    height: 54px;
    text-align: center;
}
.tarbar-item img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-top: 3px;
}
</style>
