<template>
    <div id='main'>
        <div class="placeholder"></div>
        <nav-bar class='main-bar'>
            <div slot="center">购物街</div>
        </nav-bar>
        <MainSwiper :options="swiperOption" :data="banners" />
        <MainRecommend :recommends="recommends" />
        <img src="@/assets/img/p1.jpg" alt="" style="width:100%;">
        <my-tab-control :titles="['流行','新款','精选']" class="main-tab-control" />

        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
            <div>32</div>
            <div>33</div>
            <div>34</div>
            <div>35</div>
            <div>36</div>
            <div>37</div>
            <div>38</div>
            <div>39</div>
            <div>40</div>
            <div>41</div>
            <div>42</div>
            <div>43</div>
            <div>44</div>
            <div>45</div>
            <div>46</div>
            <div>47</div>
            <div>48</div>
            <div>49</div>
            <div>50</div>
            <div>51</div>
            <div>52</div>
            <div>53</div>
            <div>54</div>
            <div>55</div>
            <div>56</div>
            <div>57</div>
            <div>58</div>
            <div>59</div>
            <div>60</div>
            <div>61</div>
            <div>62</div>
            <div>63</div>
            <div>64</div>
            <div>65</div>
            <div>66</div>
            <div>67</div>
            <div>68</div>
            <div>69</div>
            <div>70</div>
            <div>71</div>
            <div>72</div>
            <div>73</div>
            <div>74</div>
            <div>75</div>
            <div>76</div>
            <div>77</div>
            <div>78</div>
            <div>79</div>
            <div>80</div>
            <div>81</div>
            <div>82</div>
            <div>83</div>
            <div>84</div>
            <div>85</div>
            <div>86</div>
            <div>87</div>
            <div>88</div>
            <div>89</div>
            <div>90</div>
            <div>91</div>
            <div>92</div>
            <div>93</div>
            <div>94</div>
            <div>95</div>
            <div>96</div>
            <div>97</div>
            <div>98</div>
            <div>99</div>
            <div>100</div>
        </div>
    </div>
</template>
<script lang="js">
import NavBar from '@/components/common/navbar/NavBar'
import MainSwiper from './childComps/MainSwiper'
import MainRecommend from './childComps/MainRecommend'

import MyTabControl from '@/components/content/MyTabControl'

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
        MyTabControl,
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
.placeholder {
  height: 44px;
}
.main-bar {
  background-color: pink;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
#main .swiper-container {
  width: 100%;
  height: 195px;
}
#main .swiper-container .swiper-slide {
  width: 100%;
  background: rgba(255, 192, 203, 0.651);
}
.main-tab-control {
  position: sticky;
  top: 44px;
}
</style>