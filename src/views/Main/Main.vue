<template>
    <div id='main'>
        <nav-bar class='main-bar'>
            <div slot="center">购物街</div>
        </nav-bar>
        <MainSwiper :options="swiperOption" :data="banners" />
        <MainRecommend :recommends="recommends" />
    </div>
</template>
<script lang="js">
import NavBar from '@/components/common/navbar/NavBar'
import MainSwiper from './childComps/MainSwiper'
import MainRecommend from './childComps/MainRecommend'
import {getHomeMultidata} from '@/network/main'

export default {
    name: 'Main',
    data(){
        return{
            banners: [],
            dKeyword: {},
            keywords: {},
            recommends: [],
            swiperOption: {
                speed: 1000,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },  //选择器配置
                autoplay: {
                    delay: 3000, //延迟5秒自动播放
                    stopOnLastSlide: false, //到最后一张图片是否停止自动播放。
                    disableOnInteraction: false  //用户操作后是否停止自动播放。
                },
            },
        }
    },
    components:{
        NavBar,
        MainSwiper,
        MainRecommend,
    },
    created() {
        getHomeMultidata().then(res=>{
            // console.log(res)
            this.banners = res.data.banner.list
            this.dKeyword = res.data.dKeyword
            this.keywords = res.data.keywords
            this.recommends = res.data.recommend.list
        })
    },
    
}
</script>
<style>
.main-bar {
  background-color: pink;
}
#main .swiper-container {
  width: 100%;
  height: 195px;
}
#main .swiper-container .swiper-slide {
  width: 100%;
  background: rgba(255, 192, 203, 0.651);
}
</style>