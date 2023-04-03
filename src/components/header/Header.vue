<template>
  <div
    class="cf-flex-row cf-justify-between cf-items-center section_2 nav nav-bar"
  >
    <a class="space-x-5 cf-flex-row cf-items-center nav-logo" href="/">
      <img
        class="cf-shrink-0 image_2"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660603827864674.png"
      />
      <span class="text">AIbrush</span>
    </a>
    <div class="cf-flex-row cf-items-center space-x-41">
      <a href="/" class="font_1">Home</a>
      <a class="space-x-4 cf-flex-row cf-items-center cf-shrink-0">
        <span class="font_1">Features</span>
        <!-- <img
          class="cf-shrink-0 image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660675391305971.png"
        /> -->

        <div class="space-y-24 cf-flex-col section_3_features">
          <div class="cf-flex-row space-x-9">
            <!-- <img
              class="image_4"
              src="../../assets/face.png"
            /> -->
            <!-- <i-mdi-account-box style="font-size: 2em; color: red"/> -->
            <!-- <i-carbon-accessibility/> -->
            <router-link :to="{ name: 'avatar' }">
              <div class="cf-flex-col cf-items-start">
                <span class="font_3 text_2">AI Avatar</span>
                <span class="font_4">Create own avatar from your photo</span>
              </div>
            </router-link>
          </div>
          <div class="cf-flex-row space-x-9">
            <!-- <img
              class="cf-shrink-0 cf-self-start image_5"
              src="../../assets/text.png"
            /> -->
            <router-link to="/text2Art" class="cf-flex-col cf-items-start">
              <span class="font_3 text_2">Text to Art</span>
              <span class="font_4">Turn your word into artwork image</span>
            </router-link>
          </div>

          <div class="cf-flex-row space-x-9">
            <!-- <img
              class="cf-shrink-0 cf-self-start image_6"
              src="../../assets/phonto.png"
            /> -->
            <router-link to="img2Art" class="cf-flex-col cf-items-start">
              <span class="font_3 text_2">Image to Art</span>
              <span class="font_4">Transform image into various style</span>
            </router-link>
          </div>
        </div>
      </a>

      <div class="personWrap" v-if="logined">
        <div
          class="cf-flex-row cf-items-center cf-shrink-0 section_3 space-x-7 person"
        >
          <img
            class="cf-shrink-0 image_4"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/d7dd69554be9be7dd6ddc0f80263461d.png"
          />
          <span class="font_1">{{ paySwapNum }}</span>
          <img
            class="cf-shrink-0 image_3"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/7c18a71485035c30a184cdba8f4a7090.png"
          />
        </div>

        <div class="cf-flex-col cf-items-start section_4_person space-y-14">
          <router-link to="/user">
            <span class="font_3">Profile</span>
          </router-link>
          <router-link to="/payments">
            <span class="font_3">Earn</span>
          </router-link>
          <router-link to="/payments">
            <span class="font_3">Coins</span>
          </router-link>
          <a @click.prevent="logout">
            <span class="font_3">Log Out</span>
          </a>
        </div>
      </div>

      <router-link
        to="/login"
        v-else
        class="cf-flex-col cf-justify-start cf-items-center cf-shrink-0 login-text-wrapper"
      >
        <span class="text">Sign in</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import eventBus from '@/utils/eventBus'
import VueNotifications from 'vue-notifications'

export default {
  name: 'aibrushHeader',
  data() {
    return {
      logined: '',
      ui: '',
      paySwapNum: '',
      userName: '',
      haedImg: '',
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
  watch: {
    $route() {
      this.initData()
      this.getUserInfo()
    },
  },
  methods: {
    initData() {
      this.logined = localStorage.getItem('token') ? true : false
      this.ui = localStorage.getItem('ui')
      this.paySwapNum = localStorage.getItem('paySwapNum')
    },
    async getUserInfo() {
      try {
        const ui = localStorage.getItem('ui')
        const formData = new FormData()
        formData.append('ui', ui)
        const { data } = await this.$axios.post(
          '/api/GetWebUserInfo/interface',
          formData,
        )
        console.log('getUserInfo', data)
        if (!data) return
        this.paySwapNum = data.paySwapNum
        this.userName = data.userName
        this.haedImg = data.haedImg
        // this.ui = data.userId;
      } catch (e) {
        console.log({ e })
      }
    },
    async logout() {
      const logoutToken = localStorage.getItem('token')
      if (!logoutToken) return
      const formData = new FormData()
      formData.append('ui', this.ui)
      formData.append('logoutToken', logoutToken)
      const response = await this.$axios.post(
        '/api/WebLogout/interface',
        formData,
      )
      console.log('WebLogout', response)
      if (response.result === '0') {
        localStorage.removeItem('token')
        localStorage.removeItem('ui')
        localStorage.removeItem('paySwapNum')
        this.initData()
        this.showInfoMsg({ title: 'Logout successfully' })
      }
    },
  },
  mounted() {
    this.initData()
    eventBus.$on('getUserInfo', () => {
      this.getUserInfo()
    })
  },
}
</script>
<style lang="scss" scoped>
.section_2 {
  padding: 0 8.3333vw;
  background-color: #000000;
  border-bottom: solid 0.05208vw #2b2b2b;
  height: 3.28vw;
  .space-x-5 {
    & > *:not(:first-child) {
      margin-left: 0.2604vw;
    }
    .image_2 {
      width: 2.6vw;
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
    position: relative;
    // div {
    //   height: 2.6vw;
    //   padding: 0.3vw;
    // }
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

    .image_5 {
      width: 0.9375vw;
      height: 0.5729vw;
      margin-left: 0.2vw;
    }

    .space-x-4 {
      height: 3.28vw;
    }

    space-x-4 .section_3_features {
      display: none;
    }

    .space-x-4:hover .section_3_features {
      display: block;
    }

    .space-x-7 {
      & > *:not(:first-child) {
        margin-left: 0.3646vw;
      }
    }
  }
}

.space-y-24 {
  & > *:not(:first-child) {
    margin-top: 1.5rem;
  }
}

.section_3_features {
  display: none;
  position: absolute;
  top: 3.28vw;
  left: -8.875vw;
  padding: 0.9375vw 1.9792vw 1.3542vw;
  background-color: #000000cc;
  border-radius: 1.0417vw 0px 1.0417vw 1.0417vw;
  width: 19.375vw;
  height: 11.875vw;
  border: solid 0.05208vw #333333cc;

  z-index: 1000;
  .space-x-9 {
    cursor: pointer;
    justify-content: space-between;
    color: #666666;
    & > *:not(:first-child) {
      margin-left: 0.4688vw;
    }
    .image_4 {
      border-radius: 50%;
      width: 2.5vw;
      height: 2.5vw;
    }
    .text_2 {
    }
    .font_4 {
      font-size: 0.7292vw;
      font-family: 'PingFang SC';
      line-height: 1.0417vw;
    }
  }
  .space-x-9:hover {
    color: #ffffff;
  }

  .font_3 {
    font-size: 0.8333vw;
    font-family: 'PingFang SC';
    line-height: 1.1458vw;
    font-weight: 500;
  }
  .group_4 {
    padding-left: 0.625vw;
    padding-right: 0.3125vw;
    height: 2.2917vw;
    .image_6 {
      margin-top: 0.625vw;
      width: 1.25vw;
      height: 1.0938vw;
    }
    .text_4 {
      margin-left: 2.3958vw;
      margin-top: -1.6667vw;
    }
  }
  .font_5 {
    font-size: 0.7292vw;
    font-family: 'PingFang SC';
    line-height: 1.0417vw;
    color: #666666;
  }
}
.space-y-24 {
  & > *:not(:first-child) {
    margin-top: 1.25vw;
  }
}

.person {
  cursor: pointer;
  padding: 0.2083vw 0.2083vw 0.2083vw 0.4167vw;
  border-radius: 1.0417vw;
  &:hover {
    background-color: #222222;
  }
}

//ok

.personWrap {
  height: 3.28vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  &:hover {
    .section_4_person {
      display: block;
      a {
        display: block;
        width: 6vw;
      }
    }
  }
}

.section_4_person {
  display: none;
  cursor: pointer;
  position: absolute;
  top: 3.28vw;
  right: 0;
  padding: 1.0417vw 1.9792vw;
  background-color: #000000cc;
  border-radius: 1.0417vw 0px 1.0417vw 1.0417vw;
  border: solid 0.05208vw #333333cc;
  z-index: 1000;
  .font_3 {
    font-size: 0.8333vw;
    font-family: 'PingFang SC';
    line-height: 1.1458vw;
    font-weight: 500;
    color: #666666;
    &:hover {
      color: #ffffff;
    }
  }
  // .text {
  //   color: #ffffff;
  // }
}
.space-y-14 {
  & > * {
    margin-top: 0.7292vw;
  }
}

.image_4 {
  width: 2.2396vw;
  height: 1.1979vw;
}

.image_3 {
  border-radius: 50%;
  width: 1.6667vw;
  height: 1.6667vw;
}

.login-text-wrapper {
  padding: 0.3125vw 0;
  border-radius: 1.0417vw;
  width: 5.5208vw;
  height: 2.0833vw;
  border: solid 0.1042vw #555555;
  .text {
    color: #ffffff;
    font-size: 0.9375vw;
    font-family: 'PingFang SC';
    font-weight: 500;
    line-height: 1.3021vw;
  }
}
@media screen and (max-width: 750px) {
  .section_3_features {
    width: 59.375vw;
    height: 29.875vw;
  }
  .section_3_features .font_3 {
    font-size: 14px;
    line-height: 24px;
  }
  .section_3_features .space-x-9 .font_4 {
    font-size: 12px;
  }
  .nav-bar {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .nav-logo {
    transform: scale(2);
  }
  .login-text-wrapper {
    width: auto;
    padding: 5px;
    border: none;
  }
  .section_2 .space-x-41 .font_1 {
    font-size: 24px;
  }
  .login-text-wrapper .text {
    font-size: 20px;
  }
  .section_2 .space-x-41 {
    margin-top: 20px;
  }
}
</style>
