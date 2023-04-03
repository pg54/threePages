<template>
  <div v-swiper:mySwiper="swiperOption" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="section_3_a">
          <div class="cf-flex-col cf-self-start group_3">
            <span class="font_4">AIbrush - AI Art Generator</span>
            <span class="text_2"></span>
              AI Avatar Turning your photo into mind-blowing avatar
            </span>
            <router-link to="/avatar">
              <div
                class="cf-flex-col cf-justify-start cf-items-center cf-self-start button text-wrapper"
              >
                <span class="font_5">Try Now</span>
              </div>
            </router-link>
          </div>
          <div class="img-wrap">
                <img src="../assets/banner-txt2img.jpeg"/>
              </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="section_3_a section_3_a_1">
          <div class="cf-flex-col cf-self-start group_3">
            <span class="font_4">Text to Art</span>
            <span class="text_2">Transform your words into stunning image</span>
            <router-link to="/text2Art">
              <div
                class="cf-flex-col cf-justify-start cf-items-center cf-self-start button text-wrapper"
              >
                <span class="font_5">Try Now</span>
              </div>
             
            </router-link>
          </div>
          <div class="img-wrap">
                <img src="../assets/banner-txt2img.jpeg"/>
              </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div class="section_3_a section_3_a_2">
          <div class="cf-flex-col cf-self-start group_3">
            <span class="font_4">Image to Art</span>
            <span class="text_2">
              A whole new look on your photo with style transfer
            </span>
            <router-link to="/img2Art">
              <div
                class="cf-flex-col cf-justify-start cf-items-center cf-self-start button text-wrapper"
              >
                <span class="font_5">Try Now</span>
              </div>
            </router-link>
          </div>
          <div class="img-wrap">
                <img src="../assets/banner-txt2img.jpeg"/>
              </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination my-pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>
<script>
export default {
  name: 'carousel',
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'my-pagination-active',
        },
        // autoplay: {
        //   delay: 7000,
        //   disableOnInteraction: false,
        // },
        loop: true,
      },
      list: [
        {
          logo: 'Webject',
          title: 'Webject',
          tit: 'Webjet:10% off Discount',
          date: '25 Feb,2022',
        },
        {
          logo: 'cottontraders',
          title: 'cottontraders',
          tit: 'Up To 50% Off Outdoor Savings at Cotton Traders',
          date: 'Soon',
        },
        {
          logo: 'Lowes Australia',
          title: 'Lowes Australia',
          tit: '10% Off Your Order',
          date: '23 Jan, 2022',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
}
.swiper-wrapper {
  padding-bottom: 50px;
}

.swiper-pagination-bullet {
  background: #ffffff33;
  width: 2.3958vw;
  height: 0.4167vw;
  border-radius: 0;
  opacity: 1;
}
.my-pagination-active {
  background: #ffffff99;
}

.swiper-button-next {
  border-radius: 0.5208vw 0px 0px 0.5208vw;
  width: 2.6042vw;
  height: 2.6042vw;
  // background: #1b202a;
  color: #ffffff;
}

.swiper-button-prev {
  border-radius: 0px 0.5208vw 0.5208vw 0px;
  width: 2.6042vw;
  height: 2.6042vw;
  // background: #1b202a;
  color: #ffffff;
}

.section_3_a {
  padding: 1.3542vw 10.625vw 2.9167vw;
  background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c605a7e3f0310f411b2/640540e0b98f5d0011592160/30acdf99b609659d4b711301f01cd091.png');
  background-position: 0% 0%;
  background-size: 100vw 35.6vw;
  background-repeat: no-repeat;
  .group_3 {
    padding: 8.9063vw 0;
    width: 26.3542vw;
    .text_2 {
      margin-top: 0.7292vw;
      color: #ffffff66;
      font-size: 1.6667vw;
      font-family: 'PingFang SC';
      line-height: 2.5vw;
      text-align: left;
    }
    .text-wrapper {
      margin-top: 1.4063vw;
    }
  }
  .section_4 {
    padding: 1.0417vw 1.9792vw;
    background-color: #000000cc;
    border-radius: 1.0417vw 0px 1.0417vw 1.0417vw;
    border: solid 0.05208vw #333333cc;
    .font_3 {
      font-size: 0.8333vw;
      font-family: 'PingFang SC';
      line-height: 1.1458vw;
      font-weight: 500;
      color: #666666;
    }
    .text {
      color: #ffffff;
    }
  }
  .space-y-14 {
    & > *:not(:first-child) {
      margin-top: 0.7292vw;
    }
  }
  .pos_2 {
    position: absolute;
    right: 8.3333vw;
    top: 0;
  }

  .font_4 {
    font-size: 2.0833vw;
    font-family: 'PingFang SC';
    line-height: 2.9167vw;
    font-weight: 700;
    color: #ffffff;
  }

  .button {
    padding: 0.7813vw 0;
    background-color: #7116db;
    border-radius: 1.5104vw;
    width: 23.3333vw;
    .font_5 {
      font-size: 1.0417vw;
      font-family: 'PingFang SC';
      line-height: 1.4583vw;
      font-weight: 700;
      color: #ffffff;
    }
  }
  .text-wrapper {
    margin-top: 1.4063vw;
  }
}

.section_3_a_1 {
  padding: 1.3542vw 10.625vw 3.9167vw;
  background-image: url(/src/assets/banner-txt2img.jpeg);
  background-position: right top;
  background-size: 60vw 35.6vw;
  background-repeat: no-repeat;
  background-color: #000000;
}

.section_3_a_2 {
  padding: 1.3542vw 10.625vw 3.9167vw;
  background-image: url('../assets/banner-img2img.jpeg');
  background-position: right top;
  background-size: 60vw 35.6vw;
  background-repeat: no-repeat;
  background-color: #000000;
}
.section_3_a  .img-wrap{display: none;}
@media screen and (max-width:750px) {
  .section_3_a .font_4 {
    font-size: 14px;
    line-height: 14px;
  }
  .section_3_a{
    background-color: #000000;
  }
 .section_3_a{
  width: auto;
  padding:0;
  background-image: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
 }
 .section_3_a .button{
  width:200px;
  height:40px;
  line-height:40px;
  border-radius:5px;
 }
 .section_3_a .group_3{
  margin: 20px;
  width:80%;
  padding: 0;
 }
 .section_3_a  .img-wrap{
  width:100%;
  display: block;
  img{
    width:100%;
    height:auto;
  }
 }
 .section_3_a .button .font_5{
  font-size: 20px;
  line-height: 32px;
 }
}
</style>
