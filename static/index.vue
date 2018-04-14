<template>
  <swiper :options="options" ref="mySwiper" class="swiper">
    <swiper-slide v-for="(item,index) in items" class="swiper-slide" :class="item.class" :key="index">
      <img v-for="img in item.imgs" :src="img.src" class="img.class" :key="img.src"/>
      <a v-for="link in item.links" :key="link.src" :href="link.href" :class=link.class>
        <img :src="link.src" />
      </a>
      <div class="button-next" @click="slideNext" ref="button"></div>
    </swiper-slide>

</swiper>

</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper,swiperSlide} from "vue-awesome-swiper"
export default {
  name: 'come',
  components:{
    swiper,swiperSlide
  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.swiper;
  },
  items(){return[
          {
            class:{p1:true,active:this.activeIndex==0},
            imgs:[
                    {src:"p1-1.png",class:"title"},
                    {src:"components/come/p1-4.png",class:"main"},
                    {src:"components/come/p1-2.jpg",class:"bottom-bg"}
            ],
            links:[
              {src:"components/come/p1-3.png",href:"http:www.baidu.com",class:"download"},
              {src:"components/come/p1-5.png",href:"http:www.baidu.com",class:".yydownload"},
            ]
          },
          {
            class:{p2:true,active:this.activeIndex==1},
            imgs:[
              {src:"~components/come/p2-1.png",class:"title"},
              {src:"components/come/p2-2.jpg",class:"main"},
            ]
          },
          {
            class:{p3:true,active:this.activeIndex==2},
            imgs:[
                    {src:"~components/come/p3-1.png",class:"title"},
                    {src:"components/come/p3-2.jpg",class:"main"}
            ]
        },
        {
          class:{p4:true,active:this.activeIndex==3},
          imgs:[
            {src:"~components/come/p4-1.png",class:"title"},
            {src:"components/come/p4-2.jpg",class:"main"},
          ]
        }
      ]}
  },
  methods:{
    slideNext(){
      console.log(this.swiper)
      // this.swiper.slideTo(3, 1000, false)
      this.swiper.slideNext()
    }
  },
  data(){
    return{
        activeIndex:0,
        options:{
          autoplay:false,
          loop:false,
          notNextTick:true,
          direction:"vertical",
          on:{
            slideChangeTransitionEnd:()=>{
              this.activeIndex=this.swiper.activeIndex;
            }
          },

        }
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
@import "~common/less/mixin";
@keyframes arrow{
  from,to{
    opacity:0;
  }
  50%{
    opacity:1;
    transform:translateY(-20px)
  }
}
@keyframes title{
  form{
    opacity:0;
    transform:scale(2);
  }
  to{
    opacity:1;
    transform:scale(1);
  }
}


  .swiper{
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    .swiper-slide{
      .bg-image;
      position:relative;
      &.p1{
        background-image:url("~components/come/p1.jpg")
      }
      &.p2{
        background-image:url("~components/come/p2.jpg")
      }
      &.p3{
        background-image:url("~components/come/p3.jpg")
      }
      &.p4{
        background-image:url("~components/come/p4.jpg")
      }
      &.p5{
        background-image:url("~components/come/p5.jpg")
      }
      .button-next{
          position:absolute;
          top:95%;
          left:50%;
          margin-left:-18px;
          width:36px;
          height:26px;
          .bg-image;
          background-image:url("~components/come/next.png");
      }
      &.active .button-next{
        animation:arrow 1s 1s linear both infinite;


      }
    }


  }
</style>
