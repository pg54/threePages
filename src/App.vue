<template>
  <div id="app">
    <VmHeader v-if="!noHeader" />
    <router-view />
    <div
      class="cf-flex-col cf-justify-start cf-items-center section-dailog pos"
      v-show="showDailog"
    >
      <div class="cf-flex-col cf-relative section_7">
        <div class="cf-flex-row cf-items-center group_4">
          <div class="cf-flex-row cf-items-center">
            <img
              class="image_10"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/2a1895de68682f6c3bca299993e86d93.png"
            />
            <img
              class="image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/2cab78f55a5062cdcc38c67085234ae9.png"
            />
          </div>
          <img
            class="image_10 image_11"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/2a1895de68682f6c3bca299993e86d93.png"
          />
        </div>
        <div class="cf-flex-col group_5">
          <span class="font_5 text_4"
            >Not enough diamonds to create. Come to earn diamonds</span
          >
          <div
            @click="goPayment"
            class="cf-flex-col cf-justify-start cf-items-center button"
            ><span class="font_2">Continue</span></div>
        </div>
        <img
          class="image_8 pos_2"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/3ffd9f7a34ab100f3dc69f29791e8508.png"
          @click="closeDailog"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VmHeader from "@/components/header/Header.vue";
import eventBus from "@/utils/eventBus";
export default {
  name: "App",
  components: {
    VmHeader,
  },
  data() {
    return {
      showDailog: false,
    };
  },
  computed: {
    noHeader() {
      return this.$route.meta.noHeader;
    },
  },
  methods: {
    closeDailog() {
      this.showDailog = false;
    },
    goPayment() {
      this.showDailog = false;
      this.$router.push("/payments");
    },
  },
  mounted() {
    eventBus.$on("ctrlDailog", (value) => {
      this.showDailog = value;
    });
  },
};
</script>

<style lang="scss" scoped>
.section-dailog {
  z-index: 100;
  transition: all 0.3s ease-in;
  padding: 12.2396vw 0 20.2604vw;
  background-color: #00000099;
  .section_7 {
    padding: 2.3958vw 3.2292vw 2.0833vw;
    background-color: #d8d8d8;
    border-radius: 1.0417vw;
    width: 29.1667vw;
    .group_4 {
      padding: 0 5.5729vw;
      .image_10 {
        width: 3.6458vw;
        height: 3.5937vw;
      }
      .image_9 {
        margin-left: -0.4167vw;
        width: 5.0521vw;
        height: 5vw;
      }
      .image_11 {
        margin-left: -0.4167vw;
      }
    }
    .group_5 {
      margin-top: 2.0833vw;
      .font_5 {
        font-size: 1.0417vw;
        font-family: "PingFang SC";
        line-height: 1.4583vw;
        color: #ffffff;
      }
      .text_4 {
        color: #000000;
        line-height: 1.5625vw;
        text-align: left;
      }
      .button {
        margin: 2.1875vw 1.5625vw 0;
        padding: 0.7813vw 0;
        background-color: #7116db;
        border-radius: 1.5104vw;
        width: 19.6875vw;
        cursor: pointer;
        .font_2 {
          font-size: 1.0417vw;
          font-family: "PingFang SC";
          line-height: 1.4583vw;
          font-weight: 700;
          color: #ffffff;
        }
      }
    }
    .image_8 {
      border-radius: 50%;
      width: 1.4583vw;
      height: 1.4583vw;
    }
    .pos_2 {
      position: absolute;
      right: 1.0417vw;
      top: 1.0417vw;
    }
  }
}
.pos {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
