<template>
  <div class="cf-flex-col page">
    <div class="cf-flex-col section">
      <div
        class="cf-flex-row cf-justify-center cf-items-center group space-x-39"
      >
        <div class="cf-flex-col section_4">
          <span class="cf-self-start text_2">Create Image</span>
          <div class="cf-flex-row group_2 view space-x-12">
            <div class="cf-flex-row cf-items-center section_7 space-x-4">
              <span class="font_3">Step</span>
              <img
                class="cf-shrink-0 image_6"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/a4d5cb4827bd17fcd8455d0dd57b022a.png"
              />
            </div>
            <span class="font_2">Enter Prompt</span>
          </div>
          <!-- <div class="cf-flex-col cf-justify-start cf-items-start search">
          <span class="font_4 text_3">You can type any thing to AI</span>
        </div> -->
          <textarea
            class="cf-flex-col cf-justify-start cf-items-start search"
            rows="3"
            v-model="userText"
            placeholder="You can type any thing to AI"
          />
          <div class="cf-flex-row cf-items-center group_3 space-x-12">
            <img
              class="image_7"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/0e8c52ee215d6ad76a37ee406d418dcd.png"
            />
            <span class="font_2">Popular</span>
          </div>
          <div class="pages-wrapper">
            <template v-for="(item, index) in textItem">
              <input type="radio" :id="'text' + index" v-model="textSelected" :value="index" style="display: none;">
              <label
                :for="'text' + index"
                class="cf-flex-col cf-justify-start text-wrapper"
                @click="selectPrompt(item.textContext)"
              >
                <span class="font_4 text_4">{{ item.textContext }}</span>
              </label>
            </template>
          </div>
          <div class="cf-flex-row group_2 view_2 space-x-12">
            <div class="cf-flex-row cf-items-center cf-relative group_5">
              <span class="font_3">Step</span>
              <img
                class="cf-shrink-0 image_6 image_8"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/5612dbfc718407d2df44dc043df82e96.png"
              />
              <div class="cf-shrink-0 section_8 pos"></div>
            </div>
            <span class="font_2">Style</span>
            <span class="font_2 text_10">（available multiple-choice）</span>
          </div>
          <div class="cf-flex-col group_2 view_3 space-y-25">
            <div class="grid">
              <label
                v-if="noStyleItem"
                class="cf-flex-col cf-justify-start cf-items-center cf-relative grid-item_2"
                :class="{
                  gridItemselected: noStyleId === noStyleItem.styleId,
                }"
                @click="noStyleClick(noStyleItem.styleId)"
              >
                <input type="checkbox" :value="noStyleItem.styleId" style="display: none" />
                <img
                  class="cf-shrink-0 image_13"
                  :src="noStyleItem.styleImgUrl"
                />
                <div
                  class="cf-flex-col cf-justify-start cf-items-center text-wrapper_2 pos_2"
                >
                  <span class="font_4">{{ noStyleItem.styleDes }}</span>
                </div>
              </label>

              <label
                v-for="(item, index) in otherStyleItem"
                :key="index"
                :id="item.styleId"
                class="cf-flex-col cf-justify-start cf-items-center cf-relative grid-item_2"
                :class="{
                  gridItemselected: styleId.includes(item.styleId),
                }"
                @click="styleClick"
              >
                <input
                  type="checkbox"
                  :id="item.styleId"
                  :value="item.styleId"
                  v-model="styleId"
                  style="display: none"
                />
                <img class="cf-shrink-0 image_13" :src="item.styleImgUrl" />
                <div
                  class="cf-flex-col cf-justify-start cf-items-center text-wrapper_2 pos_2"
                >
                  <span class="font_4">{{ item.styleDes }}</span>
                </div>
              </label>
            </div>
          </div>
          <div class="cf-flex-col space-y-20">
            <div
              class="cf-flex-col cf-items-center cf-self-center button"
              @click="submit"
            >
              <span class="font_2">Generate</span>
              <span class="font_4 text_11"
                >This creation will cost {{  price }} coin</span
              >
            </div>
          </div>
        </div>
        <div class="cf-flex-col cf-justify-start section_5">
          <div
            class="cf-flex-col cf-justify-center cf-items-center section_6 space-y-18"
          >
            <img
              v-if="uploading"
              class="image_9 shake"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c605a7e3f0310f411b2/640540e0b98f5d0011592160/16780703479600087778.png"
            />
            <span v-if="uploading" class="font_2">Art Preview</span>
            <img class="previewImg" v-if="!uploading && generateImgUrl" :src="generateImgUrl" alt="preview">

            <!-- <a
              v-if="generateImgUrl"
              :href="generateImgUrl"
              download
              class="space-x-16 cf-flex-row cf-items-center cf-self-center section_10"
            >
              <img
                class="cf-shrink-0 image_17"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/1e3d316b3ef4703195d7f1f830a6eb96.png"
              />
              <span class="font_5">Download</span>
            </a> -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/utils/eventBus";
import trackEvent from "@/utils/trackEvent";
import VueNotifications from "vue-notifications";

export default {
  name: "text2Art",
  components: {},

  data() {
    return {
      text: "",
      demoImages: [
        {
          title: "Item 1 Description",
          description: "Description 1",
          cover: "https://via.placeholder.com/145x149",
        },
        {
          title: "Item 2 Description",
          description: "Description 2",
          cover: "https://via.placeholder.com/145x149",
        },
        {
          title: "Item 3 Description",
          description: "Description 3",
          cover: "https://via.placeholder.com/145x149",
        },
        {
          title: "Item 3 Description Description Description Description",
          description: "Description 3",
          cover: "https://via.placeholder.com/145x149",
        },
      ],
      consumeNum: 0,
      otherStyleItem: [],
      noStyleItem: null,
      textItem: [],
      noStyleId: null,
      styleId: [],
      userText: "",
      generateImgUrl: "",
      uploading: false,
      textSelected: "",
    };
  },
  computed: {
    paySwapNum() {
      const p = localStorage.getItem("paySwapNum");
      return p ? Number(p) : 0;
    },
    ui() {
      return localStorage.getItem("ui");
    },
    logined() {
      return localStorage.getItem("token");
    },
    price() {
      return this.styleId.length > 1 ? this.consumeNum * this.styleId.length : this.consumeNum;
    }
  },
  notifications: {
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: '',
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: '',
    },
  },
  methods: {
    noStyleClick(id) {
      this.styleId = [];
      this.noStyleId = id;
    },
    styleClick() {
      console.log("styleClick");
      this.noStyleId = null;
    },
    selectPrompt(text) {
      this.userText = text;
    },
    async submit(e) {
      if (!this.userText) {
        this.showErrorMsg({ title: 'Please enter your prompts'});
        return;
      }
      if (!this.styleId.length && !this.noStyleId) {
        this.showErrorMsg({ title: 'Please select a style'});
        return;
      }
      const formData = new FormData();
      formData.append("ui", this.ui);
      formData.append("userText", this.userText);
      const styleIds = this.noStyleId ? [this.noStyleId] : this.styleId;
      formData.append("styleIds", styleIds.join(","));
      console.log("formData", formData);

      if (!this.logined) {
        this.$router.push("/login");
      }

      try {
        this.uploading = true;
        const response = await this.$axios.post(
          "/api/WebTextToImgHandle/interface",
          formData
        );
        console.log({ response });
        if (response.result === "0") {
          const { generateImgUrl } = response.data;
          this.generateImgUrl = generateImgUrl;
          trackEvent("create", "resultShow", {
            styleIds: styleIds.join(","),
            ui: this.ui,
          });
          eventBus.$emit("getUserInfo");
        } else if (response.result === "2020") {
          eventBus.$emit("ctrlDailog", true);
        } else {
          console.error(response.message);
        }
      } catch (e) {
        console.log({ e });
      } finally {
        this.uploading = false;
      }
    },
    async asyncData() {
      const response = await this.$axios.post(
        "/api/GetWebTextToImgStyle/interface"
      );
      console.log("text2Art", response);
      const { consumeNum, styleItem, textItem } = response.data;
      this.consumeNum = consumeNum;
      const [noStyle, ...otherStyle] = styleItem;
      this.otherStyleItem = otherStyle;
      this.noStyleItem = noStyle;
      this.noStyleId = this.noStyleItem.styleId;
      this.textItem = textItem;
    },
  },
  mounted() {
    this.asyncData();
    trackEvent("create", "pageShow", {ui: this.ui});
  },
};
</script>

<style lang="scss" scoped>
.gridItemselected {
  border: solid 0.1042vw #7116db;
}

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
    .section_2 {
      padding: 0.3125vw 8.3333vw;
      background-color: #000000;
      border-bottom: solid 0.05208vw #2b2b2b;
      .space-x-5 {
        & > *:not(:first-child) {
          margin-left: 0.2604vw;
        }
        .image_2 {
          width: 2.6042vw;
          height: 2.6042vw;
        }
        .text {
          color: #ffffff;
          font-size: 1.4583vw;
          font-family: "PingFang SC";
          font-weight: 500;
          line-height: 2.0833vw;
        }
      }
      .space-x-41 {
        & > *:not(:first-child) {
          margin-left: 2.1354vw;
        }
        .font_1 {
          font-size: 1.0417vw;
          font-family: "PingFang SC";
          line-height: 1.4583vw;
          font-weight: 500;
          color: #ffffff;
        }
        .section_3 {
          padding: 0.2083vw 0.2083vw 0.2083vw 0.4167vw;
          background-color: #222222;
          border-radius: 1.0417vw;
          height: 2.0833vw;
          .image_4 {
            width: 2.2396vw;
            height: 1.1979vw;
          }
          .image_3 {
            border-radius: 50%;
            width: 1.6667vw;
            height: 1.6667vw;
          }
        }
        .space-x-7 {
          & > *:not(:first-child) {
            margin-left: 0.3646vw;
          }
        }
      }
    }
    .group {
      padding: 0 8.3333vw;
      .section_4 {
        padding: 2.0833vw 0;
        background-color: #000000;
        width: 41.6667vw;
        // height: 48.8021vw;
        .text_2 {
          margin-left: 2.0833vw;
          color: #ffffff;
          font-size: 2.0833vw;
          font-family: "PingFang SC";
          font-weight: 700;
          line-height: 2.9167vw;
        }
        .group_2 {
          padding: 0 2.0833vw;
          .section_7 {
            padding-left: 0.4167vw;
            padding-right: 0.2083vw;
            background-color: #ffffff33;
            border-radius: 0.625vw;
            height: 1.25vw;
          }
          .group_5 {
            padding-left: 0.4167vw;
            padding-right: 0.2083vw;
            width: 3.4896vw;
            .image_8 {
              margin-left: 0.2083vw;
            }
            .section_8 {
              background-color: #ffffff33;
              border-radius: 0.625vw;
              width: 3.4896vw;
              height: 1.25vw;
            }
            .pos {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
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
          .text_10 {
            color: #ffffff99;
            font-weight: unset;
          }
          .space-x-24 {
            & > *:not(:first-child) {
              margin-left: 1.25vw;
            }
            .section_9 {
              background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/069212ae9fdcde95f17fd53e403a5f71.png");
              background-position: 0% 0%;
              background-size: 6.4583vw 6.4583vw;
              background-repeat: no-repeat;
              width: 6.4583vw;
              height: 6.4583vw;
              .text-wrapper_5 {
                padding: 4.8958vw 0 0.3125vw;
                border-radius: 0.5208vw;
                width: 6.4583vw;
                // border: solid 0.1042vw #7116db;
              }
            }
            .group_6 {
              overflow: hidden;
              border-radius: 0.5208vw;
              width: 6.4583vw;
              height: 6.4583vw;
              .image_10 {
                width: 6.4583vw;
                height: 6.4583vw;
              }
              .text-wrapper_6 {
                padding: 0.2083vw 0 0.4167vw;
                background-color: #00000099;
                width: 6.4583vw;
              }
              .pos_2 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_3 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_4 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_5 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .text-wrapper_7 {
                padding: 0.2083vw 0 0.4167vw;
                background-color: #00000080;
                width: 6.4583vw;
              }
              .pos_6 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_7 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_8 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_9 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_10 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
            }
            .group_6--active {
              border: solid 0.1042vw #7116db;
            }
          }
        }
        .view {
          margin-top: 0.8333vw;
        }
        .space-x-12 {
          & > *:not(:first-child) {
            margin-left: 0.625vw;
          }
          .text-wrapper {
            padding: 0.5208vw 0;
            background-color: #7116db4d;
            border-radius: 1.0417vw;
            height: 2.0833vw;
            border: solid 0.1042vw #7116db;
            cursor: pointer;
            .text_4 {
              margin: 0 0.9375vw;
            }
          }
          .text-wrapper_2 {
            padding: 0.5208vw 0;
            background-color: #7116db4d;
            border-radius: 1.0417vw;
            width: 6.8229vw;
            height: 2.0833vw;
          }
          .text-wrapper_3 {
            padding: 0.5208vw 0;
            background-color: #7116db4d;
            border-radius: 1.0417vw;
            height: 2.0833vw;
            .text_5 {
              margin: 0 1.0417vw;
            }
            .text_6 {
              margin: 0 1.0417vw;
            }
            .text_7 {
              margin: 0 1.0417vw;
            }
            .text_8 {
              margin-left: 1.0417vw;
              margin-right: 0.7813vw;
            }
            .text_9 {
              margin: 0 1.0417vw;
            }
          }
          .text-wrapper_4 {
            padding: 0.5208vw 0;
            background-color: #7116db4d;
            border-radius: 1.0417vw;
            width: 8.4375vw;
            height: 2.0833vw;
          }
        }
        .search {
          margin: 0.625vw 2.0833vw 0;
          padding: 0.415vw 0.625vw;
          background-color: #ffffff33;
          border-radius: 0.5208vw;
          width: 37.5vw;
          border: none;
          outline: none;
          color: #ffffff;
          resize: none;
          .text_3 {
            margin-left: 0.625vw;
            color: #ffffff66;
          }
        }
        .group_3 {
          padding: 1.3542vw 2.0833vw 1.0417vw;
          .image_7 {
            width: 1.25vw;
            height: 1.25vw;
          }
        }
        .group_4 {
          margin: 0 2.0833vw;
          overflow: hidden;
        }
        .space-y-12 {
          & > *:not(:first-child) {
            margin-top: 0.625vw;
          }
        }
        .font_4 {
          font-size: 0.7292vw;
          font-family: "PingFang SC";
          line-height: 1.0417vw;
          color: #ffffff;
        }
        .view_2 {
          margin-top: 1.3542vw;
        }
        .view_3 {
          margin-top: 1.0417vw;

          .grid {
            // margin: 0 2.0833vw;
            width: 37.5vw;
            height: 18.8vw;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            row-gap: 1.3vw;
            column-gap: 1.3vw;
            overflow-y: scroll;
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
            .grid-item {
              background-image: url("https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/069212ae9fdcde95f17fd53e403a5f71.png");
              background-position: 0% 0%;
              background-size: 6.4583vw 6.4583vw;
              background-repeat: no-repeat;
              width: 6.4583vw;
              height: 6.4583vw;
              .text-wrapper {
                padding: 4.8958vw 0 0.3125vw;
                border-radius: 0.5208vw;
                width: 6.4583vw;
                border: solid 0.1042vw #7116db;
              }
            }
            .grid-item_2 {
              overflow: hidden;
              border-radius: 0.5208vw;
              width: 6.4583vw;
              height: 6.4583vw;
              text-align: center;
              .image_13 {
                width: 6.4583vw;
                height: 6.4583vw;
              }
              .text-wrapper_2 {
                padding: 0.2083vw 0 0.4167vw;
                background-color: #00000099;
                width: 6.4583vw;
              }
              .pos_2 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_3 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_4 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
              .pos_5 {
                position: absolute;
                left: 0;
                right: 0;
                top: 4.7917vw;
              }
            }
            .grid-item_3 {
              padding-bottom: 3.1771vw;
              overflow: hidden;
              border-radius: 0.5208vw;
              width: 6.4583vw;
              .image_14 {
                width: 6.4583vw;
                height: 3.2813vw;
              }
            }
          }
        }
        .space-y-25 {
          & > *:not(:first-child) {
            margin-top: 1.3021vw;
          }
        }
        .space-y-20 {
          & > *:not(:first-child) {
            margin-top: 1.0417vw;
          }
          .section_10 {
            background-image: linear-gradient(
              180deg,
              #00000000 0%,
              #000000 100%
            );
            height: 4.5833vw;
          }
          .button {
            padding: 0.4167vw 0;
            background-color: #7116db;
            border-radius: 1.5104vw;
            width: 23.3333vw;
            cursor: pointer;
            .text_11 {
              color: #ffffff99;
            }
          }
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
          // padding: 18.75vw 0 18.5417vw;
          background-color: #151515;
          width: 37.5vw;
          height: 100%;
          .image_9 {
            width: 2.8646vw;
            height: 2.8646vw;
          }
          .previewImg {
            max-height: 100%;
            max-width: 100%;
          }
        }
        .space-y-18 {
          & > *:not(:first-child) {
            margin-top: 0.9375vw;
          }
        }
      }
      .font_2 {
        font-size: 1.0417vw;
        font-family: "PingFang SC";
        line-height: 1.4583vw;
        font-weight: 700;
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

.shake {
  animation: shake 0.5s linear;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

.pages-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow: auto;
  padding-right: 50px;
  padding: 0 2.0833vw;
  height: 5.5vw;
  overflow-y: scroll;
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

  .cf-flex-col {
    padding: 0.5208vw;
    background-color: #7116db4d;
    border-radius: 1.0417vw;
    // border: solid 0.1042vw #7116db;
    margin: 0.3125vw;
    cursor: pointer;

  }

  input[type="radio"]:checked + .cf-flex-col {
    border: solid 0.1042vw #7116db;
  }
}
</style>
