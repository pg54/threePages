<template>
  <div class="cf-flex-col page">
    <div class="cf-flex-col section">
      <div
        class="cf-flex-row cf-justify-center cf-items-center group space-x-39"
      >
        <div class="cf-flex-col section_4">
          <span class="cf-self-start text_2">AI Avatar</span>
          <div class="space-x-12 cf-flex-row cf-items-center group_2">
            <div
              class="space-x-4 cf-flex-row cf-items-center cf-self-stretch section_7"
            >
              <span class="font_3">Step</span>
              <img
                class="cf-shrink-0 image_6"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/a4d5cb4827bd17fcd8455d0dd57b022a.png"
              />
            </div>
            <span class="font_2">Upload Selfie</span>
            <span class="font_4 text_3"
              >Create mind-booming avatar from your photo</span
            >
          </div>
          <label class="cf-flex-col cf-justify-start cf-relative section_8">
            <div
              for="userPhoto"
              class="cf-flex-col cf-justify-start cf-items-center image-wrapper"
            >
              <img
                class="image_8 userPhoto"
                v-if="previewImage"
                :src="previewImage"
                alt="Preview"
              />
              <input
                ref="fileInput"
                id="userPhoto"
                type="file"
                style="display: none"
                @change="handleFileUpload"
              />
            </div>
            <img
              v-if="previewImage"
              @click.stop="clearImage"
              class="image_7_pos"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/b14907fa9de0dfa115068db4b43fd40b.png"
            />
          </label>
          <div class="cf-flex-row cf-items-center group_3 space-x-14">
            <img
              class="image_12"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660619366179396.png"
            />
            <span class="font_2">Demo Images</span>
          </div>
          <div class="space-x-24 cf-flex-row group_4">
            <img
              v-for="(item, index) in demoItem"
              :key="index"
              class="image_13"
              :src="item.demoImgUrl"
              @click="handleDemoImage(item)"
            />
          </div>
          <div class="space-x-12 cf-flex-row group_5">
            <div class="cf-flex-row cf-items-center cf-relative group_6">
              <span class="font_3">Step</span>
              <img
                class="cf-shrink-0 image_6 image_14"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/5612dbfc718407d2df44dc043df82e96.png"
              />
              <div class="cf-shrink-0 section_9 pos_3"></div>
            </div>
            <span class="font_2">Select Your Gender</span>
          </div>
          <div class="space-x-20 cf-flex-row equal-division">
            <label
              for="one"
              class="cf-flex-row cf-items-center equal-division-item space-x-22"
              :class="{ genderSelect: sex === 'female' }"
            >
              <input
                v-show="false"
                id="one"
                type="radio"
                :value="1"
                v-model="sex"
              />
              <img
                class="image_15"
                :src="sex === 1 ? checkedImg : uncheckedImg"
              />
              <span class="font_5">Female</span>
            </label>

            <label
              for="two"
              class="cf-flex-row cf-items-center equal-division-item_2 space-x-22"
              :class="{ genderSelect: sex === 'male' }"
            >
              <input
                v-show="false"
                id="two"
                type="radio"
                :value="2"
                v-model="sex"
              />
              <img
                class="image_16"
                :src="sex === 2 ? checkedImg : uncheckedImg"
              />
              <span class="font_5">Male</span>
            </label>

            <label
              for="three"
              class="cf-flex-row cf-items-center equal-division-item_2 space-x-22"
              :class="{ genderSelect: sex === 'other' }"
            >
              <input
                v-show="false"
                id="three"
                type="radio"
                :value="3"
                v-model="sex"
              />
              <img
                class="image_16"
                :src="sex === 3 ? checkedImg : uncheckedImg"
              />
              <span class="font_5">Other</span>
            </label>
          </div>
          <div
            class="cf-flex-col cf-items-center cf-self-center button"
            @click="generate"
          >
            <span class="font_2">Generate</span>
            <span class="font_4 text_4"
              >This creation will cost {{ consumeNum }} coin</span
            >
          </div>
        </div>
        <div class="cf-flex-col cf-justify-start section_5">
          <div class="cf-flex-col section_6 space-y-116">
            <div
              class="cf-flex-col cf-justify-start cf-items-center cf-relative"
            >
              <!-- <img
              class="image_9"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c605a7e3f0310f411b2/640540e0b98f5d0011592160/16780703489457250543.png"
            /> -->
              <div class="image_9">
                <avatarCarousel
                  :items="uploadImgs"
                  @index-change="handleIndexChange"
                />
              </div>
            </div>

            <a
              v-if="uploadImgs.length"
              :href="uploadImgs[currentIndex]"
              :download="uploadImgs[currentIndex]"
              class="space-x-16 cf-flex-row cf-items-center cf-self-center section_10"
            >
              <img
                class="cf-shrink-0 image_17"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/1e3d316b3ef4703195d7f1f830a6eb96.png"
              />
              <span class="font_5">Download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import avatarCarousel from "@/components/avatarCarousel.vue";
import trackEvent from "@/utils/trackEvent";
import eventBus from "@/utils/eventBus";

export default {
  name: "avatar",
  components: {
    avatarCarousel,
  },

  data() {
    return {
      sex: 1,
      genders: [
        { value: 1, label: "Female" },
        { value: 2, label: "Male" },
        { value: 3, label: "Other" },
      ],
      noDiamonds: true,
      previewImage: null,
      ui: localStorage.getItem("ui"),
      paySwapNum: localStorage.getItem("paySwapNum") || 0,
      consumeNum: 0,
      demoItem: [],
      uncheckedImg:
        "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660674607121300.png",
      checkedImg:
        "https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/d73d0309a1996224aa64881dd6782e22.png",
      uploadImgs: [],
      currentIndex: 0,
    };
  },
  computed: {
    logined() {
      return localStorage.getItem("token");
    },
  },
  methods: {
    async asyncData() {
      const response = await this.$axios.post(
        "/api/GetWebHeadImgStyle/interface"
      );
      console.log("avatar", response);
      if (response.result === "0") {
        const { consumeNum, demoItem } = response.data;
        this.consumeNum = consumeNum;
        this.demoItem = demoItem;
      } else {
        console.error(response.message);
      }
    },
    async generate() {
      console.log("generate");
      console.log("paySwapNum", this.paySwapNum);
      console.log("consumeNum", this.consumeNum);
      console.log("ui", this.ui);
      if (!this.logined) {
        this.$router.push("/login");
      }

      const formData = new FormData();
      formData.append("userImgUrl", this.previewImage);
      formData.append("ui", this.ui);
      formData.append("generateType", this.sex);
      console.log("formData", formData);

      const response = await this.$axios.post(
        "/api/WebImgToImgHeadHandle/interface",
        formData
      );
      console.log("generate", response);
      if (response.result === "0") {
        const { generateImgUrl } = response.data;
        this.uploadImgs.push(generateImgUrl);
        trackEvent("create", "resultShow", {
          ui: this.ui,
          gender: this.sex, 
        });
        eventBus.$emit("getUserInfo");
      } else if (response.result === "2020") {
        eventBus.$emit("ctrlDailog", true);
      } else {
        console.error(response.message);
      }
    },
    triggerUpload() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadImg(file);
      } else {
        this.previewImage = null;
      }
    },
    clearImage(event) {
      this.previewImage = null;
      event.stopPropagation();
      event.preventDefault();
    },
    async uploadImg(file) {
      console.log("uploadImg");
      const formData = new FormData();
      formData.append("file", file);
      formData.append("ui", this.ui);
      console.log("formData", formData);

      const response = await this.$axios.post(
        "/painting/upload/webimgtoimg",
        formData
      );
      console.log("uploadImg", response);
      if (response.result === "0") {
        const { userImgUrl } = response.data;
        this.previewImage = userImgUrl;
      } else {
        console.error(response.message);
      }
    },
    handleDemoImage(item) {
      console.log("handleDemoImageClick", item);
      this.previewImage = item.demoImgUrl;
    },
    handleIndexChange(index) {
      console.log("current index: ", index);
      this.currentIndex = index;
    },
  },
  created() {
    this.asyncData();
    trackEvent("create", "pageShow", {ui: this.ui});
  },
};
</script>
<style lang="scss" scoped>
.page {
  background-color: #222222;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .image {
    width: 100vw;
    height: 4.0625vw;
  }
  .section {
    background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/175ba213640b99b46aabe570f61a685b.png");
    background-position: 0% 0%;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .group {
      padding: 0 8.3333vw;
      .section_4 {
        padding: 2.0833vw;
        background-color: #000000;
        width: 41.6667vw;
        height: 48.8021vw;
        .text_2 {
          color: #ffffff;
          font-size: 2.0833vw;
          font-family: "PingFang SC";
          font-weight: 700;
          line-height: 2.9167vw;
        }
        .group_2 {
          margin-top: 0.8333vw;
          .section_7 {
            padding-left: 0.4167vw;
            padding-right: 0.2083vw;
            background-color: #ffffff33;
            border-radius: 0.625vw;
            height: 1.25vw;
          }
          .text_3 {
            color: #ffffff66;
          }
        }
        .space-x-12 {
          & > *:not(:first-child) {
            margin-left: 0.625vw;
          }
        }
        .section_8 {
          margin-top: 0.5208vw;
          padding: 0.9375vw 0;
          background-color: #000000;
          border-radius: 0.5208vw;
          border: solid 0.1042vw #333333;
          height: 16.26vw;
          .image-wrapper {
            margin: 0 0.9375vw;
            background-color: #151515;
            width: 35.4167vw;
            height: 14.2188vw;
            display: flex;
            justify-content: center;
            .image_8 {
              max-width: 100%;
              max-height: 100%;
            }
          }
          .image_7_pos {
            border-radius: 0.625vw;
            width: 1.25vw;
            height: 1.25vw;
            position: absolute;
            right: 0.3125vw;
            top: 0.3125vw;
          }
        }
        .group_3 {
          margin-top: 1.3542vw;
          .image_12 {
            width: 1.0938vw;
            height: 1.0938vw;
          }
        }
        .space-x-14 {
          & > *:not(:first-child) {
            margin-left: 0.7292vw;
          }
        }
        .font_2 {
          font-size: 1.0417vw;
          font-family: "PingFang SC";
          line-height: 1.4583vw;
          font-weight: 700;
          color: #ffffff;
        }
        .group_4 {
          margin-top: 1.0417vw;
          overflow-x: auto;
          &::-webkit-scrollbar {
            display: none;
            // height: 8px; /* 滚动条高度 */
            // background-color: #F5F5F5; /* 滚动条背景色 */
          }
          &::-webkit-scrollbar-thumb {
            // border-radius: 10px;
            // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            // background-color: #D3D3D3; /* 滚动条里面小方块的颜色 */
          }
          &::-webkit-scrollbar-track {
            // -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            // border-radius: 10px;
            // background-color: #F5F5F5; /* 滚动条里面轨道的颜色 */
          }
          .image_13 {
            border-radius: 0.5208vw;
            width: 6.4583vw;
            height: 6.4583vw;
            cursor: pointer;
          }
        }
        .space-x-24 {
          & > *:not(:first-child) {
            margin-left: 1.25vw;
          }
        }
        .group_5 {
          margin-top: 1.3542vw;
          .group_6 {
            padding-left: 0.4167vw;
            padding-right: 0.2083vw;
            width: 3.4896vw;
            .image_14 {
              margin-left: 0.2083vw;
            }
            .section_9 {
              background-color: #ffffff33;
              border-radius: 0.625vw;
              width: 3.4896vw;
              height: 1.25vw;
            }
            .pos_3 {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
            }
          }
        }
        .font_3 {
          font-size: 0.8333vw;
          font-family: "PingFang SC";
          line-height: 1.1458vw;
          font-weight: 700;
          color: #ffffff;
        }
        .image_6 {
          border-radius: 50%;
          width: 0.8333vw;
          height: 0.8333vw;
        }
        .equal-division {
          margin-top: 1.0417vw;

          .equal-division-item {
            padding: 0.7292vw 1.0417vw;
            border-radius: 0.5208vw;
            width: 11.7708vw;
            height: 3.125vw;
            border: solid 0.1042vw #333333;
            .image_15 {
              border-radius: 0.5208vw;
              width: 1.0417vw;
              height: 1.0417vw;
            }
          }
          .space-x-22 {
            & > *:not(:first-child) {
              margin-left: 1.1458vw;
            }
          }
          .equal-division-item_2 {
            padding: 0.7292vw 1.0417vw;
            border-radius: 0.5208vw;
            width: 11.7708vw;
            height: 3.125vw;
            border: solid 0.1042vw #333333;
            .image_16 {
              width: 1.0417vw;
              height: 1.0417vw;
            }
          }

          .genderSelect {
            border: solid 0.1042vw #ffffff;
          }
        }
        .space-x-20 {
          & > *:not(:first-child) {
            margin-left: 1.0417vw;
          }
        }
        .button {
          margin-top: 2.0833vw;
          padding: 0.4167vw 0;
          background-color: #7116db;
          border-radius: 1.5104vw;
          width: 23.3333vw;
          cursor: pointer;
          .text_4 {
            color: #ffffff99;
          }
        }
        .font_4 {
          font-size: 0.7292vw;
          font-family: "PingFang SC";
          line-height: 1.0417vw;
        }
      }
      .section_5 {
        padding: 1.0417vw 0;
        background-color: #000000;
        border-radius: 0.5208vw;
        width: 39.5833vw;
        height: 44.6354vw;
        border: solid 0.05208vw #333333;
        .section_6 {
          margin: 0 1.0417vw;
          padding-top: 8.8021vw;
          background-color: #151515;
          overflow: hidden;
          width: 37.5vw;
          height: 100%;
          .image_9 {
            width: 37.5vw;
            height: 25vw;
            overflow: hidden;
          }
          .space-x-620 {
            & > *:not(:first-child) {
              margin-left: 32.2917vw;
            }
            .image_10 {
              border-radius: 0px 0.5208vw 0.5208vw 0px;
              width: 2.6042vw;
              height: 2.6042vw;
            }
            .image_11 {
              border-radius: 0.5208vw 0px 0px 0.5208vw;
              width: 2.6042vw;
              height: 2.6042vw;
            }
          }
          .pos_2 {
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          .section_10 {
            padding: 0.625vw 1.0417vw 0.625vw 1.3542vw;
            background-color: #00000099;
            border-radius: 0.5208vw 0.5208vw 0px 0px;
            .image_17 {
              width: 0.8594vw;
              height: 1.0417vw;
            }
          }
          .space-x-16 {
            & > *:not(:first-child) {
              margin-left: 0.8333vw;
            }
          }
        }
        .space-y-116 {
          & > *:not(:first-child) {
            margin-top: 6.0417vw;
          }
        }
      }
      .font_5 {
        font-size: 1.0417vw;
        font-family: "PingFang SC";
        line-height: 1.4583vw;
        color: #ffffff;
      }
    }
    .space-x-39 {
      & > *:not(:first-child) {
        margin-left: 2.0313vw;
      }
    }
    .space-x-4 {
      & > *:not(:first-child) {
        margin-left: 0.2083vw;
      }
      .image_5 {
        width: 0.9375vw;
        height: 0.5729vw;
      }
    }
  }
}
</style>
