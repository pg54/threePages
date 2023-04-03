<template>
  <div class="cf-flex-col page">
    <div class="cf-flex-col cf-justify-start group">
      <div class="cf-flex-row group_2 space-x-800 pos">
        <img
          class="cf-shrink-0 image_4"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660713049716897.png"
        />
        <img
          class="cf-shrink-0 image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660713081614226.png"
        />
      </div>
      <div class="cf-flex-col cf-justify-start cf-items-start section_2 pos_2">
        <div class="cf-flex-col cf-justify-start cf-items-end pos_3">
          <div class="cf-flex-col section_3">
            <span class="cf-self-center text_3">Log in to AIbrush</span>
            <div class="cf-flex-col group_3">
              <div class="space-x-10 cf-flex-row cf-items-end group_4 flex-cloum">
                <span class="font_3 text_4">Don't have an account?</span>
                <router-link :to="{ name: 'register' }"></router-link>
                  <span class="font_2 signup">Sign up for free</span>
                </router-link>
              </div>
            </div>
            <div class="cf-flex-col group_5 space-y-42">
              <div
                class="space-x-12 cf-flex-row cf-items-center cf-self-center button"
              >
                <img
                  class="cf-shrink-0 image_6"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/17c6af47efa2642231aa47aa4d4fe0a5.png"
                />
                <a :href="googleAuth">
                  <span class="font_4">Continue with Goolge</span>
                </a>
              </div>
              <div class="space-x-12 cf-flex-row cf-items-center">
                <div class="section_5 view"></div>
                <span class="font_3">or</span>
                <div class="section_5"></div>
              </div>
              <div class="cf-flex-col">
                <div class="cf-flex-col space-y-11">
                  <span class="cf-self-start font_3 text_5">Email</span>
                  <!-- <div class="cf-flex-col cf-justify-start cf-items-start cf-self-center text-wrapper_3">
                  <span class="font_2 text_6">cofocola@hotmail.com</span>
                </div> -->
                  <input
                    class="text-wrapper_3"
                    type="text"
                    placeholder="email"
                    v-model="email"
                  />
                </div>
                <div class="cf-flex-col group_6 space-y-11">
                  <span class="cf-self-start font_3 text_7">Password</span>
                  <!-- <div class="cf-flex-col cf-justify-start cf-items-start cf-self-center text-wrapper_3">
                  <span class="font_2 text_6">********</span>
                </div> -->
                  <input
                    class="text-wrapper_3"
                    type="password"
                    v-model="password"
                    placeholder="6+ characters"
                  />
                </div>
                <div
                  class="cf-flex-col cf-justify-start cf-items-center cf-self-center button_2"
                  @click="submit"
                >
                  <span class="font_4">Continue with email</span>
                </div>
                <router-link
                  to="/forgetPassword"
                  class="cf-self-center font_3 text_8"
                >
                  Forgot password?
                </router-link>
                <div class="cf-self-center section_6"></div>
              </div>
            </div>
          </div>
          <div
            class="cf-flex-col cf-justify-start cf-items-center text-wrapper_2 pos_4"
            v-show="errorMsg"
          >
            <span class="font_2">
              {{ errorMsg }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import queryString from 'query-string'
import trackEvent from '@/utils/trackEvent'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      emailErrorMessage: '',
      passwordErrorMessage: '',
      errorMsg: '',
      gAccessToken: '',
      googleAuth: '',
    }
  },
  computed: {
    emailError() {
      if (this.$refs.email) {
        return !this.$refs.email.checkValidity()
      }
      return false
    },
    passwordError() {
      if (this.$refs.password) {
        return !this.$refs.password.checkValidity()
      }
      return false
    },
    ch() {
      return this.$route.query.ch || sessionStorage.getItem('ch') || 'default'
    },
    subchannel() {
      return (
        this.$route.query.subchannel ||
        sessionStorage.getItem('subchannel') ||
        'default'
      )
    },
  },
  methods: {
    async submit() {
      if (!this.email) {
        this.errorMsg = 'Please enter your email'
        return
      }
      if (
        !this.email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
      ) {
        this.errorMsg = 'Please enter a valid email address'
        return
      }
      if (!this.password) {
        this.errorMsg = 'Please enter your password'
        return
      }
      if (this.password.length < 6) {
        this.errorMsg = 'Password must be at least 6 characters'
        return
      }
      const data = {
        loginEmail: this.email,
        password: this.password,
        ch: this.ch,
        subchannel: this.subchannel,
        //1 注册 2 登录
        loginType: '2',
      }
      let formData = new FormData()
      for (let key in data) {
        formData.append(key, data[key])
      }
      try {
        const response = await this.$axios.post(
          '/api/WebLogin/interface',
          formData,
        )
        console.log({ response })
        if (response.result === '0') {
          const { token, paySwapNum, userId: ui } = response.data
          localStorage.setItem('token', token)
          localStorage.setItem('ui', ui)
          localStorage.setItem('paySwapNum', paySwapNum)
          this.$router.push({ path: '/loginSuc' })
        } else {
          this.errorMsg = response.message
        }
      } catch (e) {
        console.log({ e })
      }
    },
    async getUserInfo(ui) {
      try {
        const formData = new FormData()
        formData.append('ui', ui)
        //todo 后端没有返回userName， haedImg
        const response = await this.$axios.post(
          '/api/GetWebUserInfo/interface',
          formData,
        )
        console.log({ response })
      } catch (e) {
        console.log({ e })
      }
    },
    async googleLogin() {
      try {
        if (!this.gAccessToken) return
        const formData = new FormData()
        formData.append('accessToken', this.gAccessToken)
        formData.append('ch', this.ch)
        formData.append('subchannel', this.subchannel)
        const response = await this.$axios.post(
          '/api/GoogleLogin/interface',
          formData,
        )
        if (response.result === '0') {
          const { token, paySwapNum, userId: ui } = response.data
          localStorage.setItem('token', token)
          localStorage.setItem('ui', ui)
          localStorage.setItem('paySwapNum', paySwapNum)
          // await this.getUserInfo(ui);
          this.$router.push({ path: '/' })
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
  async mounted() {
    trackEvent('login', 'pageShow', { ui: localStorage.getItem('ui') })
    const hash = window.location.hash.substring(1)
    const hashObject = queryString.parse(hash)
    console.log('hashObject', hashObject)
    this.gAccessToken = hashObject.access_token
    if (this.gAccessToken) {
      this.googleLogin()
    }
  },
}
</script>
<style lang="scss" scoped>
.signup {
  text-decoration: underline;
}
.page {
  background-color: #000000;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .image {
    width: 100vw;
    height: 4.0625vw;
  }
  .group {
    padding-bottom: 48.8021vw;
    overflow-x: hidden;
    .section {
      padding: 0.3125vw 8.3333vw;
      background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660760883145281.png');
      background-position: 0% 0%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
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
      .space-x-40 {
        & > *:not(:first-child) {
          margin-left: 2.0833vw;
        }
        .font_1 {
          font-size: 1.0417vw;
          font-family: 'PingFang SC';
          line-height: 1.4583vw;
          font-weight: 500;
          color: #ffffff;
        }
        .space-x-4 {
          & > *:not(:first-child) {
            margin-left: 0.2083vw;
          }
          .image_3 {
            width: 0.9375vw;
            height: 0.5729vw;
          }
        }
        .text-wrapper {
          padding: 0.3125vw 0;
          border-radius: 1.0417vw;
          width: 5.5208vw;
          height: 2.0833vw;
          border: solid 0.1042vw #555555;
          .text_2 {
            color: #ffffff;
            font-size: 0.9375vw;
            font-family: 'PingFang SC';
            font-weight: 500;
            line-height: 1.3021vw;
          }
        }
      }
    }
    .group_2 {
      overflow-x: hidden;
      .image_4 {
        width: 50vw;
        height: 48.8542vw;
      }
      .image_5 {
        width: 41.6667vw;
        height: 48.8542vw;
      }
    }
    .space-x-800 {
      & > *:not(:first-child) {
        margin-left: 41.6667vw;
      }
    }
    .pos {
      position: absolute;
      left: 0;
      right: 0;
    }
    .section_2 {
      padding-top: 45.3125vw;
      background-color: #00000066;
      height: 48.8021vw;
      .image_7 {
        width: 50.0521vw;
        height: 33.3854vw;
      }
      .pos_3 {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .section_3 {
          margin-right: 8.3333vw;
          padding: 4.6875vw 0 7.9687vw;
          background-color: #000000;
          width: 41.6667vw;
          .text_3 {
            color: #ffffff;
            font-size: 2.0833vw;
            font-family: 'PingFang SC';
            font-weight: 700;
            line-height: 2.9167vw;
          }
          .group_3 {
            margin-top: 1.1979vw;
            .group_4 {
              padding-bottom: 0.1563vw;
              .text_4 {
                margin-left: 10.9896vw;
              }
            }
            .space-x-10 {
              & > *:not(:first-child) {
                margin-left: 0.5208vw;
              }
            }
            .section_4 {
              margin-right: 10.9896vw;
              background-color: #ffffff;
              width: 7.7083vw;
              height: 0.05208vw;
            }
          }
          .group_5 {
            margin-top: 2.4479vw;
            .button {
              padding: 0.7813vw 3.6458vw;
              background-color: #7116db;
              border-radius: 1.5104vw;
              .image_6 {
                width: 1.0677vw;
                height: 1.0938vw;
              }
            }
            .space-x-12 {
              & > *:not(:first-child) {
                margin-left: 0.625vw;
              }
              .section_5 {
                background-color: #ffffff33;
                width: 8.6979vw;
                height: 0.05208vw;
              }
              .view {
                margin-left: 10.9896vw;
              }
            }
            .space-y-11 {
              & > *:not(:first-child) {
                margin-top: 0.5729vw;
              }
              .text_5 {
                margin-left: 10.9896vw;
              }
            }
            .group_6 {
              margin-top: 1.0938vw;
              .text_7 {
                margin-left: 10.9896vw;
              }
            }
            .text-wrapper_3 {
              padding: 0.7813vw;
              background-color: #ffffff66;
              border-radius: 0.5208vw;
              width: 19.6875vw;
              margin-left: 10.9896vw;
              border: none;
              outline: none;
              color: #ffffff;
              // &:active {
              //   background-color: #ffffff66;
              //   color: #ffffff;
              // }
              &::placeholder {
                color: #00000033;
                opacity: 1;
              }
              .text_6 {
                margin-left: 1.0417vw;
              }
            }
            .button_2 {
              margin-top: 2.0833vw;
              padding: 0.7813vw 0;
              background-color: #7116db;
              border-radius: 1.5104vw;
              width: 19.6875vw;
              cursor: pointer;
            }
            .font_4 {
              font-size: 1.0417vw;
              font-family: 'PingFang SC';
              line-height: 1.4583vw;
              font-weight: 700;
              color: #ffffff;
            }
            .text_8 {
              margin-top: 1.0938vw;
            }
            .section_6 {
              margin-top: 0.1563vw;
              background-color: #ffffff33;
              width: 8.75vw;
              height: 0.05208vw;
            }
          }
          .space-y-42 {
            & > *:not(:first-child) {
              margin-top: 2.1875vw;
            }
          }
          .font_3 {
            font-size: 1.0417vw;
            font-family: 'PingFang SC';
            line-height: 1.4583vw;
            color: #ffffff66;
          }
        }
        .text-wrapper_2 {
          padding: 0.9375vw 0;
          background-color: #c63229;
        }
        .pos_4 {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
        }
        .font_2 {
          font-size: 1.0417vw;
          font-family: 'PingFang SC';
          line-height: 1.4583vw;
          color: #ffffff;
        }
      }
    }
    .pos_2 {
      position: absolute;
      left: 0;
      right: 0;
    }
  }
}
@media screen and (max-width: 750px) {
  .page .group .section_2 .pos_3 {
    display: flex;
    justify-content: center;
  }
  .page .group .section_2 .pos_3 .section_3{
    width: 81.6667vw;
    padding: 24.6875vw 0 7.9687vw;
  }
  .page .group .section_2 .pos_3 .section_3 .text_3{
    font-size: 14px;
    line-height: 20px;
  }
  .page .group .section_2 .pos_3 .section_3 .group_5 .text-wrapper_3{
    padding: 3.7813vw;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 0.5208vw;
    width: 60.6875vw;
    margin-left: 10.9896vw
  }
  .page .group{
    padding-bottom: 168.8021vw;
    overflow-x: hidden;
  }
  .page .group .section_2 .pos_3 .section_3 .group_5 .button_2 {
    margin-top: 2.0833vw;
    padding: 3.7813vw 0;
    background-color: #7116db;
    border-radius: 1.5104vw;
    width: 60.6875vw;
    cursor: pointer;
}
.page .group .section_2 .pos_3 .section_3 .group_5 .font_4{
  font-size: 14px;
}
.page .group .section_2 .pos_3 .section_3 .group_5 .text_8 {
    margin-top: 11.0938vw;
}

.page .group .section_2 .pos_3 .section_3 .font_3 {
    font-size: 14px;
    font-family: "PingFang SC";
    line-height: 20px;
    color: rgba(255, 255, 255, 0.4);
}
.page .group .section_2 .pos_3 .section_3 .group_3{
  margin-top: 35.1979vw;
}
.page .group .section_2 .pos_3 .section_3 .group_5 .space-x-12 .section_5{
  width: 27.6979vw;
}
.flex-cloum{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page .group .section_2 .pos_3 .section_3 .group_3 .group_4 .text_4{
  margin: 0;
}
.page .group .group_2 .image_4{
    width: 50vw;
    height: 158.8542vw;
}
.page .group .group_2 .image_5 {
    width: 41.6667vw;
    height: 158.8542vw;
}
}
</style>
