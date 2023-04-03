<template>
  <div class="cf-flex-col page">
    <div class="cf-flex-col section">
      <div
        class="cf-flex-row cf-justify-center cf-items-center group space-x-39"
      >
        <div class="cf-flex-col cf-self-stretch section_4">
          <span class="cf-self-start text_2">Image Style Transform</span>
          <div class="cf-flex-row cf-items-center group_2 view space-x-10">
            <div
              class="cf-flex-row cf-items-center cf-shrink-0 cf-self-stretch section_7 space-x-4"
            >
              <span class="font_3">Step</span>
              <img
                class="cf-shrink-0 image_6"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/a4d5cb4827bd17fcd8455d0dd57b022a.png"
              />
            </div>
            <span class="font_2">Upload Image</span>
            <span class="font_4 text_3"></span>
              The image you select will be used as a reference for the final
              output
            </span>
          </div>
          <label class="cf-flex-col cf-justify-start button uploadBox">
            <div class="cf-flex-row cf-items-center section_8 space-x-17">
              <img class="image_7" v-if="previewImage" :src="previewImage" />
              <img
                class="image_7"
                v-else
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/ca0bb429cb0b8305dc7b4d91f2c36ebb.png"
              />
              <span class="font_2">Upload Image</span>
              <input
                ref="fileInput"
                id="userPhoto"
                type="file"
                style="display: none;"
                @change="handleFileUpload"
              />
            </div>
          </label>
          <div class="cf-flex-row cf-items-center group_2 view_2 space-x-14">
            <img
              class="image_8"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660619366179396.png"
            />
            <span class="font_2">Suggest Images</span>
          </div>
          <div class="cf-flex-row group_2 view_3 space-x-26">
            <img
              v-for="(item, index) in demoItem"
              :key="index"
              class="image_9"
              :src="item.demoImgUrl"
              @click="previewImage = item.demoImgUrl"
            />
          </div>
          <div class="cf-flex-row group_2 view_4 space-x-12">
            <div class="cf-flex-row cf-items-center cf-relative group_3">
              <span class="font_3">Step</span>
              <img
                class="cf-shrink-0 image_6 image_12"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/5612dbfc718407d2df44dc043df82e96.png"
              />
              <div class="cf-shrink-0 section_9 pos"></div>
            </div>
            <span class="font_2">Style</span>
            <span class="font_2 text_4">（available multiple-choice）</span>
          </div>
          <div class="cf-flex-col space-y-20">
            <div class="cf-flex-col cf-justify-start cf-relative group_4">
              <div class="grid">
                <label
                  v-if="noStyleItem"
                  class="cf-flex-col cf-justify-start cf-items-center cf-relative grid-item_2"
                  :class="{
                    gridItemselected: noStyleId === noStyleItem.styleId,
                  }"
                  @click="handleCLick(noStyleItem.styleId)"
                >
                  <input
                    type="checkbox"
                    :value="noStyleItem.styleId"
                    style="display: none;"
                  />
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
                    style="display: none;"
                  />
                  <img class="cf-shrink-0 image_13" :src="item.styleImgUrl" />
                  <div
                    class="cf-flex-col cf-justify-start cf-items-center text-wrapper_2 pos_2"
                  >
                    <span class="font_4">{{ item.styleDes }}</span>
                  </div>
                </label>
              </div>
              <div class="cf-shrink-0 section_10 pos_6"></div>
            </div>
            <div
              class="cf-flex-col cf-items-center cf-self-center button_2"
              @click="generate"
            >
              <span class="font_2">Generate</span>
              <span class="font_4 text_5">
                This creation will cost {{ price }} coin
              </span>
            </div>
          </div>
        </div>
        <div class="cf-flex-col cf-justify-start section_5">
          <div
            class="cf-flex-col cf-items-center cf-justify-center section_6 space-y-18"
          >
            <img
              v-if="uploading"
              class="image_11 shake"
              src="../../assets/shake.png"
            />
            <span v-if="uploading" class="font_2">Art Preview</span>
            <img
              class="previewImg"
              v-if="!uploading && generateImgUrl"
              :src="generateImgUrl"
              alt="preview"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trackEvent from '@/utils/trackEvent'
import eventBus from '@/utils/eventBus'
import { styleResponse } from '@/utils/data'
export default {
  name: 'img2Art',
  components: {},
  data() {
    return {
      previewImage: null,
      noStyleId: null,
      styleId: [],
      consumeNum: 0,
      demoItem: [],
      otherStyleItem: [],
      noStyleItem: null,
      generateImgUrl: '',
      uploading: false,
    }
  },
  computed: {
    paySwapNum() {
      const p = localStorage.getItem('paySwapNum')
      return p ? Number(p) : 0
    },
    ui() {
      return localStorage.getItem('ui')
    },
    logined() {
      return localStorage.getItem('token')
    },
    price() {
      return this.styleId.length > 1
        ? this.consumeNum * this.styleId.length
        : this.consumeNum
    },
  },
  methods: {
    handleCLick(id) {
      this.styleId = []
      this.noStyleId = id
    },
    styleClick() {
      console.log('styleClick')
      this.noStyleId = null
    },
    async asyncData() {
      // const response = await this.$axios.post(
      //   "/api/GetWebImgToImgStyle/interface"
      // );
      const response = styleResponse
      console.log('img2Art', response)
      if (response.result === '0') {
        const { consumeNum, demoItem, styleItem } = response.data
        //增加默认的无样式选项
        this.consumeNum = consumeNum
        this.demoItem = demoItem
        const [noStyle, ...otherStyle] = styleItem
        this.otherStyleItem = otherStyle
        this.noStyleItem = noStyle
        this.noStyleId = this.noStyleItem.styleId
      } else {
        console.error(response.message)
      }
    },
    triggerUpload() {
      this.$refs.fileInput.click()
    },
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.uploadImg(file)
      } else {
        this.previewImage = null
      }
    },
    async uploadImg(file) {
      console.log('uploadImg')
      const formData = new FormData()
      formData.append('file', file)
      formData.append('ui', this.ui)
      console.log('formData', formData)

      const response = await this.$axios.post(
        '/painting/upload/webimgtoimg',
        formData,
      )
      console.log('uploadImg', response)
      if (response.result === '0') {
        const { userImgUrl } = response.data
        this.previewImage = userImgUrl
      } else {
        console.error(response.message)
      }
    },
    async generate() {
      console.log('generate')
      console.log('paySwapNum', this.paySwapNum)
      console.log('consumeNum', this.consumeNum)
      if (!this.logined) {
        this.$router.push('/login')
      }
      const formData = new FormData()
      if (!this.previewImage) return
      if (this.styleId.length === 0 && !this.noStyleId) return
      formData.append('userImgUrl', this.previewImage)
      formData.append('ui', this.ui)
      const styleIds = this.noStyleId ? [this.noStyleId] : this.styleId
      formData.append('styleIds', styleIds.join(','))

      try {
        this.uploading = true
        const response = await this.$axios.post(
          '/api/WebImgToImgHandle/interface',
          formData,
        )
        console.log('generate', response)
        if (response.result === '0') {
          const { generateImgUrl } = response.data
          this.generateImgUrl = generateImgUrl
          trackEvent('create', 'resultShow', {
            styleIds: styleIds.join(','),
            ui: this.ui,
          })
          eventBus.$emit('getUserInfo')
        } else if (response.result === '2020') {
          eventBus.$emit('ctrlDailog', true)
        } else {
          console.error(response.message)
        }
      } catch (error) {
        console.error(error)
      } finally {
        this.uploading = false
      }
    },
  },
  mounted() {
    this.asyncData()
    trackEvent('create', 'pageShow', { ui: this.ui })
  },
}
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
    background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/175ba213640b99b46aabe570f61a685b.png');
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
          font-family: 'PingFang SC';
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
          font-family: 'PingFang SC';
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
          font-family: 'PingFang SC';
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
          .text_3 {
            color: #ffffff66;
          }
          .image_8 {
            width: 1.0938vw;
            height: 1.0938vw;
          }
          .image_9 {
            border-radius: 0.5208vw;
            width: 6.4583vw;
            height: 6.4583vw;
            cursor: pointer;
          }
          .image_10 {
            border-radius: 0.5208vw;
            width: 8.3854vw;
            height: 8.3333vw;
          }
          .group_3 {
            padding-left: 0.4167vw;
            padding-right: 0.2083vw;
            width: 3.4896vw;
            .image_12 {
              margin-left: 0.2083vw;
            }
            .section_9 {
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
            font-family: 'PingFang SC';
            line-height: 1.1458vw;
            font-weight: 700;
            color: #ffffff;
          }
          .image_6 {
            border-radius: 50%;
            width: 0.8333vw;
            height: 0.8333vw;
          }
          .text_4 {
            color: #ffffff99;
            font-weight: unset;
          }
        }
        .view {
          margin-top: 0.8333vw;
        }
        .space-x-10 {
          & > *:not(:first-child) {
            margin-left: 0.5208vw;
          }
        }
        .button {
          margin: 0.5208vw 2.0833vw 0;
          padding: 0.9375vw 0;
          background-color: #000000;
          border-radius: 0.5208vw;
          border: solid 0.1042vw #333333;
          .section_8 {
            margin: 0 0.9375vw;
            padding: 1.3021vw 0;
            background-color: #151515;
            width: 35.4167vw;
            cursor: pointer;
            .image_7 {
              margin-left: 12.6042vw;
              width: 2.8125vw;
              height: 2.8125vw;
            }
          }
          .space-x-17 {
            & > *:not(:first-child) {
              margin-left: 0.8854vw;
            }
          }
        }
        .view_2 {
          margin-top: 1.3542vw;
        }
        .space-x-14 {
          & > *:not(:first-child) {
            margin-left: 0.7292vw;
          }
        }
        .view_3 {
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
        }
        .space-x-26 {
          & > *:not(:first-child) {
            margin-left: 1.3542vw;
          }
        }
        .view_4 {
          margin-top: 1.3542vw;
        }
        .space-x-12 {
          & > *:not(:first-child) {
            margin-left: 0.625vw;
          }
        }
        .space-y-20 {
          & > *:not(:first-child) {
            margin-top: 1.0417vw;
          }
          .group_4 {
            padding-top: 1.0938vw;
            overflow: hidden;
            height: 12.1354vw;
            .grid {
              margin: 0 2.0833vw;
              width: 37.5vw;
              height: 14.2188vw;
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              row-gap: 1.4063vw;
              column-gap: 1.4063vw;
              overflow-y: scroll;
              padding-bottom: 4.6vw;
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
                background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/069212ae9fdcde95f17fd53e403a5f71.png');
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
            .section_10 {
              background-image: linear-gradient(
                180deg,
                #00000000 0%,
                #000000 100%
              );
              height: 4.5833vw;
            }
            .pos_6 {
              position: absolute;
              left: 0;
              right: 0;
              top: 7.5521vw;
            }
          }
          .button_2 {
            padding: 0.4167vw 0;
            background-color: #7116db;
            border-radius: 1.5104vw;
            width: 23.3333vw;
            cursor: pointer;
            .text_5 {
              color: #ffffff99;
            }
          }
        }
        .font_4 {
          font-size: 0.7292vw;
          font-family: 'PingFang SC';
          line-height: 1.0417vw;
          color: #ffffff;
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
          background-color: #151515;
          width: 37.5vw;
          height: 100%;
          .image_11 {
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
        font-family: 'PingFang SC';
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

@media screen and (max-width: 750px) {
  .page .section .group {
    display: flex;
    flex-direction: column;
  }
  .page .section .group .section_4{
    width:100%;
  }
  .page .section .group .section_4 .text_2{
    font-size: 14px;
    line-height: 14px;
  }
  .page .section .group .section_4 .group_2 .image_6{
    width: 3.8333vw;
    height: 3.8333vw;
  }
  .page .section .group .section_4 .view{
    margin-top:20px;
  }
  .page .section .group .section_4 .button .section_8{
    margin: 0 0.9375vw;
    /* padding: 1.3021vw 0; */
    background-color: #151515;
    width: 98%;
    cursor: pointer;
    box-sizing: border-box;
    height:40px;
  }
  .page .section .group .section_4 .button .section_8 .image_7{
    width: 4.8125vw;
    height: 4.8125vw;
  }
  .page .section .group .section_4 .button .space-x-17 > :not(:first-child){
    margin-left: 3.8854vw;
  }
  .page .section .group .font_2{
    font-size:14px;
  }
  .page .section .group .section_4 .space-x-10 > :not(:first-child){
    margin-left:10px;
  }
  .page .section .group .section_4 .view_2{
    margin-top: 20px;
  }
  .page .section .group .section_4 .group_2 .image_8{
    width: 4.0938vw;
    height: 4.0938vw;
  }
  .page .section .group .section_4 .group_2 .image_9{
    width: 14.7683vw;
    height: 14.7683vw
  }
  .page .section .group .section_4 .view_4{
    margin-top:20px;
  }
  .page .section .group .section_4 .group_2 .font_3{
    font-size:14px;
    line-height: 14px;
  }
  .page .section .group .section_4 .group_2 .group_3{
    width: 14.4896vw;
  }
  .page .section .group .section_4 .space-x-12 > :not(:first-child){
    margin-top: 4px;
  }
  .page .section .group .section_4 .space-y-20 .group_4{
    height: 52.1354vw;
  }
  .page .section .group .section_4 .space-y-20 .group_4 .grid{
    width: 79.5vw;
    height: 88.5vh;
  }
  .page .section .group .section_4 .space-y-20 .group_4 .grid .grid-item_2 {
    overflow: hidden;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  .page .section .group .section_4 .space-y-20 .group_4 .grid .grid-item_2 .image_13{
    width:100%;
    height: 100%;
  }
  .page .section .group .section_4 .space-y-20 .group_4 .grid{
    margin: 0 2.0833vw;
    width: 79.5vw;
    height: 174.2188vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1.4063vw;
    column-gap: 1.4063vw;
    overflow-y: scroll;
    padding-bottom: 4.6vw;
  }
  .page .section .group .section_4 .space-y-20 .group_4 .pos_6{
    top: 20.5521vw;
  }
  .page .section .group .section_4 .space-y-20 .button_2{
    padding: 5.4167vw 0;
    background-color: #7116db;
    border-radius: 1.5104vw;
    width: 80.3333vw;
    cursor: pointer;
    margin-top: 10px;
  }
  .page .section .group .section_4 .group_2 .group_3 .section_9{
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    width: 14.4896vw;
    height: 6.25vw;
}
  .page .section .group .section_4 .space-y-20 .group_4 .grid .grid-item_2 .text-wrapper_2 {
    padding: 3.2083vw 0 2.4167vw;
    background-color: rgba(0, 0, 0, 0.6);
    width: 27.4583vw;
  }
  .page .section .group .section_4 .space-y-20 .group_4 .grid .grid-item_2 .pos_2{
    top: 16.7917vw;
  }
  .page .section .group .section_4 .font_4{
    font-size:14px;
  }
  .page .section .group .font_2{
    line-height: 5.4583vw;
  }
  .page .section .space-x-39 > :not(:first-child){
    margin-left: 0;
  }
  .page .section .group .section_5{
    width:100%;
    margin-top:10px;
    height: 94.6354vw;

  }
  .page .section .group .section_5 .section_6{
    width: 81.5vw;
    height: 100%;
  }
} 
</style>
