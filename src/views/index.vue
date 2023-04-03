<template>
  <div class="cf-flex-col page">
    <div class="cf-flex-col group">
      <div class="cf-flex-col cf-justify-start cf-relative group_2">
        <div class="cf-flex-col cf-justify-start cf-relative section_5">
          <div class="cf-flex-col cf-justify-start cf-relative group_4">
            <div class="section_8"></div>
            <img
              class="image_6 pos_3"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c605a7e3f0310f411b2/640540e0b98f5d0011592160/16780739385790550596.png"
            />
          </div>
          <span class="font_4 pos_4">AI</span>
          <span class="font_4 pos_5">Avatar</span>

          <h1 class="text-title">AI Avatar</h1>
          <span class="font_6 text_3 pos_6">
            AI-powered feature that generate beautiful AI avatars using your
            selfie. AI Avatar transform you into your alter egos. Discover a
            world where you can take on a different style in seconds. Perfect
            for profile pictures, avatars, or merely seeing yourself in a whole
            new way.
          </span>
          <router-link to="/avatar" class="cf-flex-col section_9 pos_7">
            <div class="cf-flex-row cf-items-center space-x-14">
              <img
                class="image_7"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660619366179396.png"
              />
              <span class="font_7">Demo Images</span>
            </div>
            <div class="cf-flex-row cf-justify-between equal-division">
              <img
                class="equal-division-item"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660604610180688.png"
              />
              <img
                class="equal-division-item"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660604763106255.png"
              />
              <img
                class="equal-division-item"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660604997879618.png"
              />
              <img
                class="equal-division-item"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660618614860414.png"
              />
            </div>
            <div class="cf-flex-row cf-items-center group_5 space-x-14">
              <img
                class="image_8"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/12defe8956d326ec5777427ec2afe52c.png"
              />
              <span class="font_7">Select Your Gender</span>
            </div>
            <div class="cf-flex-row group_6 space-x-8">
              <div
                class="cf-flex-row cf-justify-center cf-items-center cf-relative section_10"
              >
                <img
                  class="image_9 pos_8"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/d73d0309a1996224aa64881dd6782e22.png"
                />
                <span class="font_8">Female</span>
              </div>
              <div class="cf-flex-row cf-items-center section_11 space-x-22">
                <img
                  class="image_10"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660674607121300.png"
                />
                <span class="font_8">Male</span>
              </div>
              <div
                class="cf-flex-row cf-justify-center cf-items-center cf-relative section_11"
              >
                <img
                  class="image_10 pos_9"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660674607121300.png"
                />
                <span class="font_8">Other</span>
              </div>
            </div>
            <div
              class="cf-flex-col cf-justify-start cf-items-center cf-self-center button text-wrapper_2"
            >
              <span class="font_5">Generate</span>
            </div>
          </router-link>
        </div>

        <div class="pos">
          <div class="cf-flex-col">
            <Carousel />
          </div>
        </div>
      </div>
      <div class="cf-flex-col cf-justify-start cf-relative group_7">
        <div class="cf-flex-col section_16 space-y-78">
          <div
            class="cf-flex-row cf-justify-center cf-items-end group_15 space-x-60"
          >
            <div
              class="cf-flex-col cf-justify-start cf-items-end cf-relative group_18"
            >
              <div class="section_17"></div>
              <img
                class="image_13 pos_12"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660653141892804.png"
              />
            </div>
            <div class="cf-flex-col cf-items-start group_16">
              <div class="cf-flex-col group_17">
                <span class="cf-self-start font_4">Image to Art</span>
                <span class="font_6 text_9">
                  With AIbrush you can become an artist with no art tools or
                  supplies, all you need is your imagination. Let your fantasy
                  guide you while you explore new ideas and art styles. Choose
                  the art style that suits your dream mood best. Spread your
                  creativity and inspire others to create!
                </span>
              </div>
              <router-link
                to="/img2Art"
                class="cf-flex-col section_18 space-y-52"
              >
                <div class="cf-flex-col group_10">
                  <div class="cf-flex-row cf-items-center space-x-14">
                    <img
                      class="image_14"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/302e6a34d435c13126e596861f057efa.png"
                    />
                    <span class="font_7">Suggest Images</span>
                  </div>
                  <div class="cf-flex-row group_11 space-x-10 img-item">
                    <img
                      class="equal-division-item2"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660604610180688.png"
                    />
                    <img
                      class="equal-division-item2"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660604763106255.png"
                    />
                    <img
                      class="equal-division-item2"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660604997879618.png"
                    />
                    <img
                      class="equal-division-item2"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660618614860414.png"
                    />
                  </div>
                  <div class="cf-flex-row cf-items-center group_13 space-x-14">
                    <img
                      class="image_7"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660619366179396.png"
                    />
                    <span class="font_7">
                      Style（available multiple-choice）
                    </span>
                  </div>
                  <div class="cf-flex-row equal-division_2 space-x-22">
                    <img
                      class="equal-division-item_4"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660621548084950.png"
                    />
                    <img
                      class="equal-division-item_4"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660621548084950.png"
                    />
                    <img
                      class="equal-division-item_4"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660621504858296.png"
                    />
                    <img
                      class="equal-division-item_4"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660623628422557.png"
                    />
                    <img
                      class="equal-division-item_4"
                      src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660623669508258.png"
                    />
                  </div>
                </div>
                <div
                  class="cf-flex-col cf-justify-start cf-items-center cf-self-center button"
                >
                  <span class="font_5">Generate</span>
                </div>
              </router-link>
            </div>
          </div>
          <div class="cf-flex-row cf-justify-between cf-items-start section_19">
            <div class="cf-flex-row cf-items-center flex-colum-dir">
              <img
                class="cf-shrink-0 image_2"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660603827864674.png"
              />
              <span class="font_1 text_10">AIbrush</span>
              <img
                class="cf-shrink-0 image_15"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660632663508255.png"
              />
              <span class="font_7 text_11">
                Inspiration never dries up, design without repetition
              </span>
            </div>
            <div class="cf-flex-row group_19 space-x-121">
              <div class="cf-flex-row space-x-64 space-x-121">
                <div class="cf-flex-row">
                  <img
                    class="image_16"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660632502739776.png"
                  />
                  <div class="cf-flex-col group_20">
                    <span class="cf-self-start font_5">FEATURES</span>
                    <router-link
                      to="/text2Art"
                      class="cf-self-start font_11 text_12"
                    >
                      Text to image
                    </router-link>
                    <router-link
                      to="img2Art"
                      class="cf-self-start font_11 text_15"
                    >
                      Image to image
                    </router-link>
                    <router-link
                      to="avatar"
                      class="cf-self-start font_11 text_15"
                    >
                      AI avatar generator
                    </router-link>
                  </div>
                </div>
                <div class="cf-flex-row space-x-20">
                  <img
                    class="image_16"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660632502739776.png"
                  />
                  <div class="cf-flex-col cf-items-start cf-self-start">
                    <span class="font_5">PRODUCTS</span>
                    <a
                      href="https://apps.apple.com/app/id6443746634"
                      class="font_11 text_13"
                    >
                      iPhone/iPad
                    </a>
                    <router-link to="/" class="font_11 text_16">
                      Website
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="cf-flex-row space-x-20">
                <img
                  class="image_16"
                  src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660632502739776.png"
                />
                <div class="cf-flex-col cf-items-start">
                  <span class="font_5">ABOUT US</span>
                  <a
                    href="https://www.facebook.com/AI-Art-Generation-108444385420598"
                    class="font_11 text_14"
                  >
                    Facebook
                  </a>
                  <router-link to="/privacyPolicy" class="font_11 text_17">
                    Privacy Policy
                  </router-link>
                  <router-link to="/termsOfService" class="font_11 text_18">
                    Terms of Service
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cf-flex-row cf-justify-center section_12 space-x-52 pos_10">
          <div class="cf-flex-col group_8">
            <div class="cf-flex-col group_9">
              <span class="cf-self-start font_4">Text to Art</span>
              <span class="font_7 text_4">
                Dive into your fantasy world and turn your dreams into
                captivating masterpieces thanks to the power of AI. Unleash your
                imagination and creativity, the rest is on AIbrush: enter a
                prompt, select an art style and watch your dream come true
                within seconds.
              </span>
            </div>
            <router-link
              to="/text2Art"
              class="cf-flex-col section_13 space-y-52"
            >
              <div class="cf-flex-col group_10">
                <div class="cf-flex-row cf-self-start space-x-12">
                  <img
                    class="cf-shrink-0 image_12"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/0e8c52ee215d6ad76a37ee406d418dcd.png"
                  />
                  <span class="font_7">Popular</span>
                </div>
                <div class="cf-flex-row group_11 space-x-11">
                  <div class="cf-flex-col space-y-12">
                    <div class="cf-flex-row space-x-12">
                      <div class="cf-flex-col cf-justify-start text-wrapper_4">
                        <span class="font_10 text_6">
                          Valentine's Day wishes to you
                        </span>
                      </div>
                      <div
                        class="cf-flex-col cf-justify-start cf-items-center text-wrapper_5"
                      >
                        <span class="font_10">Black Panther</span>
                      </div>
                    </div>
                    <div class="cf-flex-row space-x-12">
                      <div class="cf-flex-col cf-justify-start text-wrapper_4">
                        <span class="font_10 text_6">
                          Love song in early spring
                        </span>
                      </div>
                      <div
                        class="cf-flex-col cf-justify-start cf-items-center text-wrapper_7"
                      >
                        <span class="font_10">Will Of The People</span>
                      </div>
                    </div>
                  </div>
                  <div class="cf-flex-col cf-relative">
                    <div
                      class="cf-flex-col cf-justify-start cf-self-start text-wrapper_6"
                    >
                      <span class="font_10 text_7">
                        Vin Diesel VS Steve Granitz
                      </span>
                    </div>
                    <div
                      class="cf-flex-col cf-justify-start text-wrapper_6 view"
                    >
                      <span class="font_10 text_8">
                        Gorgeous crystal palace of red roses
                      </span>
                    </div>
                    <div class="section_14 pos_11"></div>
                  </div>
                </div>
                <div
                  class="cf-flex-row cf-items-center cf-self-start group_13 space-x-14"
                >
                  <img
                    class="cf-shrink-0 image_7"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660619366179396.png"
                  />
                  <span class="font_7">Style（available multiple-choice）</span>
                </div>
                <div class="cf-flex-row group_14 space-x-22">
                  <img
                    class="equal-division-item_3"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660621548084950.png"
                  />
                  <img
                    class="equal-division-item_3"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660621548084950.png"
                  />
                  <img
                    class="equal-division-item_3"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660621504858296.png"
                  />
                  <img
                    class="equal-division-item_3"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660623628422557.png"
                  />
                  <img
                    class="equal-division-item_3"
                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660623669508258.png"
                  />
                </div>
              </div>
              <div
                class="cf-flex-col cf-justify-start cf-items-center cf-self-center button"
              >
                <span class="font_5">Generate</span>
              </div>
            </router-link>
          </div>
          <div class="cf-flex-col">
            <div class="cf-flex-row space-x-20">
              <img
                class="image_11"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660633832236350.png"
              />
              <img
                class="image_11"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660638729938231.png"
              />
              <img
                class="image_11"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660640663993625.png"
              />
            </div>
            <div class="cf-flex-row space-x-20">
              <div
                class="cf-flex-col cf-justify-start cf-shrink-0 text-wrapper_3"
              >
                <span class="font_9 text_5">
                  Key words Architectural photo of maximalist pink solar green
                </span>
              </div>
              <div
                class="cf-flex-col cf-justify-start cf-shrink-0 text-wrapper_3"
              >
                <span class="font_9 text_5">
                  Key words Architectural photo of maximalist pink solar green
                </span>
              </div>
              <div
                class="cf-flex-col cf-justify-start cf-shrink-0 text-wrapper_3"
              >
                <span class="font_9 text_5">
                  Key words Architectural photo of maximalist pink solar green
                </span>
              </div>
            </div>
            <div class="cf-flex-row group_12 space-x-20">
              <img
                class="image_11"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660637715038330.png"
              />
              <img
                class="image_11"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660637814000436.png"
              />
              <img
                class="image_11"
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660638651332234.png"
              />
            </div>
            <div class="cf-flex-row space-x-20">
              <div
                class="cf-flex-col cf-justify-start cf-shrink-0 text-wrapper_3"
              >
                <span class="font_9 text_5">
                  Key words Architectural photo of maximalist pink solar green
                </span>
              </div>
              <div
                class="cf-flex-col cf-justify-start cf-shrink-0 text-wrapper_3"
              >
                <span class="font_9 text_5">
                  Key words Architectural photo of maximalist pink solar green
                </span>
              </div>
              <div
                class="cf-flex-col cf-justify-start cf-shrink-0 text-wrapper_3"
              >
                <span class="font_9 text_5">
                  Key words Architectural photo of maximalist pink solar green
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import trackEvent from '@/utils/trackEvent.js'

export default {
  name: 'index',
  components: {
    Carousel,
  },
  computed: {
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
    ui() {
      return localStorage.getItem('ui')
    },
  },
  methods: {
    async initUserInfo() {
      if (!this.ch && !this.subchannel) return
      const formData = new FormData()
      if (this.ch) formData.append('ch', this.ch)
      if (this.subchannel) formData.append('subchannel', this.subchannel)
      if (this.ui) formData.append('ui', this.ui)
      const response = await this.$axios.post(
        '/api/WebInitUserInfo/interface',
        formData,
      )
      console.log('initUserInfo', response)
    },
  },
  async mounted() {
    this.initUserInfo()
    trackEvent('home', 'pageShow')
  },
}
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
    padding: 0.3125vw 8.3333vw;
    background-color: #000000;
    border-bottom: solid 0.05208vw #2b2b2b;
    .space-x-5 {
      & > *:not(:first-child) {
        margin-left: 0.2604vw;
      }
    }
    .space-x-41 {
      & > *:not(:first-child) {
        margin-left: 2.1354vw;
      }
      .font_2 {
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
        .image_5 {
          width: 0.9375vw;
          height: 0.5729vw;
        }
      }
      .section_2 {
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
    // height: 194.6354vw;
    .group_2 {
      padding-top: 30.625vw;
      .section_5 {
        padding-top: 4.7917vw;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660527319421972.png');
        background-position: 0% 0%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        height: 67.1094vw;
        .group_4 {
          padding-bottom: 57.2396vw;
          .section_8 {
            background-color: #000000;
            height: 7.2917vw;
          }
          .image_6 {
            width: 30.7813vw;
            height: 64.0104vw;
          }
          .pos_3 {
            position: absolute;
            left: 15.3646vw;
            bottom: 0;
          }
        }
        .pos_4 {
          position: absolute;
          right: 47.7083vw;
          top: 16.3802vw;
        }
        .pos_5 {
          position: absolute;
          right: 39.974vw;
          top: 16.3802vw;
        }
        .text_3 {
          text-align: justify;
          width: 31.9271vw;
        }
        .pos_6 {
          position: absolute;
          right: 17.7083vw;
          top: 19.401vw;
        }
        .section_9 {
          padding: 0.9375vw 0.7292vw 1.9792vw 0.9375vw;
          overflow: hidden;
          border-radius: 1.0417vw;
          background-color: #000000;
          width: 32.8125vw;
          border: solid 0.1042vw #ffffff1a;
          .equal-division {
            margin-right: 0.2083vw;
            margin-top: 1.0417vw;
          }
          .group_5 {
            margin-top: 1.3542vw;
            .image_8 {
              width: 1.0677vw;
              height: 1.0677vw;
            }
          }
          .group_6 {
            margin-top: 1.0417vw;
            .section_10 {
              padding: 0.7292vw 1.0417vw;
              flex: 1 1 9.8958vw;
              border-radius: 0.5208vw;
              width: 9.8958vw;
              height: 3.125vw;
              border: solid 0.1042vw #ffffff;
              .image_9 {
                border-radius: 0.5208vw;
                width: 1.0417vw;
                height: 1.0417vw;
              }
              .pos_8 {
                position: absolute;
                left: 1.1458vw;
                top: 50%;
                transform: translateY(-50%);
              }
            }
            .section_11 {
              flex: 1 1 9.8958vw;
              padding: 0.7292vw 1.0417vw;
              border-radius: 0.5208vw;
              width: 9.8958vw;
              height: 3.125vw;
              border: solid 0.05208vw #666666;
              .image_10 {
                width: 1.0417vw;
                height: 1.0417vw;
              }
              .pos_9 {
                position: absolute;
                left: 1.0938vw;
                top: 50%;
                transform: translateY(-50%);
              }
            }
            .font_8 {
              font-size: 1.0417vw;
              font-family: 'PingFang SC';
              line-height: 1.4583vw;
              color: #ffffff;
            }
          }
          .space-x-8 {
            & > *:not(:first-child) {
              margin-left: 0.4167vw;
            }
          }
          .text-wrapper_2 {
            margin-top: 2.0833vw;
          }
        }
        .pos_7 {
          position: absolute;
          right: 16.9271vw;
          top: 27.7344vw;
        }
      }
      .section_3 {
        padding: 1.3542vw 10.625vw 2.9167vw;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c605a7e3f0310f411b2/640540e0b98f5d0011592160/30acdf99b609659d4b711301f01cd091.png');
        background-position: 0% 0%;
        background-size: 100vw 35.4167vw;
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
      }
      .pos {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      }
    }
    .group_7 {
      margin-top: -10.2083vw;
      padding-top: 37.2917vw;
      .section_16 {
        padding-top: 12.8125vw;
        background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660527344925332.png');
        background-position: 0% 0%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .group_15 {
          padding: 0 8.125vw;
          .group_18 {
            width: 39.0104vw;
            .section_17 {
              filter: drop-shadow(0px 0.1042vw 0.5208vw #00000080);
              background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660652475272383.png');
              background-position: 0% 0%;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              width: 30.7813vw;
              height: 39.2708vw;
            }
            .image_13 {
              filter: drop-shadow(0px 0.1042vw 0.5208vw #00000080);
              width: 21.3542vw;
              height: 27.2917vw;
            }
            .pos_12 {
              position: absolute;
              left: 0;
              bottom: 0;
            }
          }
          .group_16 {
            width: 41.5104vw;
            .group_17 {
              padding-bottom: 2.0833vw;
              width: 31.9271vw;
              .text_9 {
                text-align: justify;
              }
            }
            .section_18 {
              padding: 0 0.7292vw 1.9792vw 0.9375vw;
              overflow: hidden;
              border-radius: 1.0417vw;
              background-color: #000000;
              width: 32.8125vw;
              border: solid 0.1042vw #ffffff1a;
            }
          }
        }
        .space-x-60 {
          & > *:not(:first-child) {
            margin-left: 3.125vw;
          }
        }
        .section_19 {
          padding: 1.9792vw 8.3333vw 2.1354vw;
          background-color: #000000;
          border-top: solid 0.05208vw #2b2b2b;
          .text_10 {
            margin-left: 0.2604vw;
          }
          .image_15 {
            margin-left: 0.5729vw;
            width: 0.05208vw;
            height: 1.4583vw;
          }
          .text_11 {
            margin-left: 0.625vw;
          }
          .group_19 {
            margin-right: 7.1875vw;
            margin-top: 0.5729vw;
            a:hover {
              color: #ffffff;
            }
            .space-x-64 {
              & > *:not(:first-child) {
                margin-left: 3.3333vw;
              }
              .group_20 {
                padding: 0 1.0417vw;
                .text_12 {
                  margin-top: 0.8333vw;
                }
                .text_15 {
                  margin-top: 0.4167vw;
                }
                .group_21 {
                  margin-top: 0.4167vw;
                }
              }
            }
            .image_16 {
              width: 0.05208vw;
              height: 6.5625vw;
            }
            .font_11 {
              font-size: 0.8333vw;
              font-family: 'PingFang SC';
              line-height: 1.1458vw;
              color: #ffffff66;
            }
          }
          .space-x-121 {
            & > *:not(:first-child) {
              margin-left: 6.3021vw;
            }
          }
        }
      }
      .space-y-78 {
        & > *:not(:first-child) {
          margin-top: 4.0625vw;
        }
      }
      .section_12 {
        padding: 4.1667vw 10.2083vw 4.1667vw 10.625vw;
        background-color: #000000;
        .group_8 {
          width: 32.8125vw;
          .group_9 {
            margin-right: 0.8333vw;
            padding-bottom: 2.0833vw;
            .text_4 {
              line-height: 1.5625vw;
              text-align: justify;
            }
          }
          .section_13 {
            padding-left: 0.9375vw;
            padding-bottom: 1.9792vw;
            overflow: hidden;
            border-radius: 1.0417vw;
            background-color: #000000;
            border: solid 0.1042vw #ffffff1a;
          }
        }
        .group_12 {
          margin-top: 1.0417vw;
        }
      }
      .space-x-52 {
        & > *:not(:first-child) {
          margin-left: 2.7083vw;
        }
      }
      .pos_10 {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      }
      .space-y-52 {
        & > *:not(:first-child) {
          margin-top: 2.7083vw;
        }
      }
      .group_10 {
        padding: 0.9375vw 0;
        .group_11 {
          margin-top: 1.0417vw;
          .space-y-12 {
            & > *:not(:first-child) {
              margin-top: 0.625vw;
            }
          }
          .text-wrapper_6 {
            padding: 0.5208vw 0;
            background-color: #ffffff33;
            border-radius: 1.0417vw;
            .text_7 {
              margin: 0 1.0417vw;
            }
            .text_8 {
              margin-left: 1.0417vw;
              margin-right: 0.7813vw;
            }
          }
          .view {
            margin-top: 0.625vw;
          }
          .section_14 {
            background-image: linear-gradient(
              90deg,
              #000000 0%,
              #00000000 100%
            );
            width: 6.25vw;
            height: 4.7917vw;
          }
          .pos_11 {
            position: absolute;
            right: 2.9688vw;
            top: 0;
            display: none;
          }
        }
        .group_13 {
          margin-top: 1.3542vw;
        }
        .equal-division_2 {
          margin-right: 0.2083vw;
          margin-top: 1.0417vw;
        }
        .space-x-12 {
          & > *:not(:first-child) {
            margin-left: 0.625vw;
          }
          .image_12 {
            width: 1.25vw;
            height: 1.25vw;
          }
          .text-wrapper_4 {
            padding: 0.5208vw 0;
            background-color: #ffffff33;
            border-radius: 1.0417vw;
            height: 2.0833vw;
            .text_6 {
              margin: 0 1.0417vw;
            }
          }
          .text-wrapper_5 {
            padding: 0.5208vw 0;
            background-color: #ffffff33;
            border-radius: 1.0417vw;
            width: 6.8229vw;
            height: 2.0833vw;
          }
          .text-wrapper_7 {
            padding: 0.5208vw 0;
            background-color: #ffffff33;
            border-radius: 1.0417vw;
            width: 8.4375vw;
            height: 2.0833vw;
          }
        }
        .space-x-11 {
          & > *:not(:first-child) {
            margin-left: 0.5729vw;
          }
        }
        .font_10 {
          font-size: 0.7292vw;
          font-family: 'PingFang SC';
          line-height: 1.0417vw;
          color: #ffffff;
        }
        .group_14 {
          margin-right: 1.1458vw;
          margin-top: 0.9375vw;
        }
        .equal-division-item_2 {
          border-radius: 0.5208vw;
          background-image: url('https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/64053c035a7e3f0310f40af8/640540e0b98f5d0011592160/16780660620220392104.png');
          background-size: 100% 100%;
          background-repeat: no-repeat;
          width: 5.2083vw;
          height: 5.2083vw;
          .section_15 {
            border-radius: 0.5208vw;
            height: 5.2083vw;
            border: solid 0.1042vw #7116db;
          }
        }
        .equal-division-item_3 {
          border-radius: 0.5208vw;
          width: 5.2083vw;
          height: 5.2083vw;
        }
      }
      .space-x-20 {
        & > *:not(:first-child) {
          margin-left: 1.0417vw;
        }
        .text_13 {
          margin-top: 0.8333vw;
        }
        .text_16 {
          margin-top: 0.4167vw;
        }
        .text_14 {
          margin-top: 0.8333vw;
        }
        .text_17 {
          margin-top: 0.4167vw;
        }
        .text_18 {
          margin-top: 0.4167vw;
        }
        .text-wrapper_3 {
          padding: 0.8333vw 0 1.1458vw;
          background-color: #222222;
          border-radius: 0px 0px 1.0417vw 1.0417vw;
          width: 13.8542vw;
          height: 4.375vw;
          .font_9 {
            font-size: 0.8333vw;
            font-family: 'PingFang SC';
            line-height: 1.25vw;
            color: #ffffff66;
          }
          .text_5 {
            margin-left: 0.8333vw;
            margin-right: 0.6771vw;
            text-align: left;
          }
        }
      }
      .image_11 {
        border-radius: 1.0417vw 1.0417vw 0px 0px;
        width: 13.8542vw;
        height: 13.8542vw;
      }
    }
    .font_4 {
      font-size: 2.0833vw;
      font-family: 'PingFang SC';
      line-height: 2.9167vw;
      font-weight: 700;
      color: #ffffff;
    }
    .font_6 {
      font-size: 1.0417vw;
      font-family: 'PingFang SC';
      line-height: 1.5625vw;
      color: #ffffff;
    }
    .space-x-14 {
      & > *:not(:first-child) {
        margin-left: 0.7292vw;
      }
      .image_14 {
        border-radius: 0.2083vw;
        width: 1.0417vw;
        height: 0.9375vw;
      }
    }
    .font_7 {
      font-size: 1.0417vw;
      font-family: 'PingFang SC';
      line-height: 1.4583vw;
      color: #ffffff66;
    }
    .space-x-10 {
      & > *:not(:first-child) {
        margin-left: 0.5208vw;
      }
      .section_6 {
        background-color: #ffffff99;
        width: 2.3958vw;
        height: 0.4167vw;
      }
      .section_7 {
        background-color: #ffffff33;
        width: 2.3958vw;
        height: 0.4167vw;
      }
    }
    .equal-division-item {
      border-radius: 0.5208vw;
      width: 7.2917vw;
      height: 7.2917vw;
    }
    .image_7 {
      width: 1.0938vw;
      height: 1.0938vw;
    }
    .space-x-22 {
      & > *:not(:first-child) {
        margin-left: 1.1458vw;
      }
    }
    .button {
      padding: 0.7813vw 0;
      background-color: #7116db;
      border-radius: 1.5104vw;
      width: 23.3333vw;
    }
    .font_5 {
      font-size: 1.0417vw;
      font-family: 'PingFang SC';
      line-height: 1.4583vw;
      font-weight: 700;
      color: #ffffff;
    }
  }
  .image_2 {
    width: 2.6042vw;
    height: 2.6042vw;
  }
  .font_1 {
    font-size: 1.4583vw;
    font-family: 'PingFang SC';
    line-height: 2.0833vw;
    font-weight: 500;
    color: #ffffff;
  }
}
.text-title {
  display: none;
}
@media screen and (max-width: 600px) {
  .page .group .group_2 {
    padding-top: 91.625vw;
  }
  .page .group .group_2 .section_5 .group_4 .section_8 {
    display: none;
  }
  .page .group .group_2 .section_5 .group_4 {
    padding-bottom: 0.2396vw;
  }
  .page .group .group_2 .section_5 .group_4 .pos_3 {
    left: 37.3646vw;
  }
  .page .group .group_2 .section_5 {
    height: 176vw;
  }
  .page .group .group_2 .section_5 .pos_4 {
    position: static;
    display: inline-block;
  }
  .page .group .group_2 .section_5 .pos_5 {
    position: static;
    display: inline-block;
  }
  .page .group .group_2 .section_5 .pos_6 {
    position: static;
    z-index: 2;
  }
  .page .group .group_2 .section_5 .pos_7 {
    position: static;
  }
  .page .group .group_2 .section_5 .section_9 {
    width: 100%;
  }
  .page .group .equal-division-item {
    width: 23.2917vw;
    height: 23.2917vw;
  }
  .page .group .group_2 .section_5 .font_4 {
    display: none;
  }
  .page .group .group_2 .section_5 .text_3 {
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    padding: 0px 40px 40px 40px;
  }
  .text-title {
    color: #fff;
    padding: 50px 40px 10px 40px;
    display: block;
  }
  .page .group .group_2 .section_5 .group_4 .pos_3 {
    bottom: -340px;
  }
  .page .group .font_7 {
    font-size: 14px;
    padding: 10px 0;
  }
  .page .group .group_2 .section_5 .section_9 .group_6 .section_10 {
    height: 40px;
    border: 1px solid #ffffff;
  }
  .page .group .group_2 .section_5 .section_9 .group_6 .font_8 {
    font-size: 14px;
  }
  .page .group .group_2 .section_5 .section_9 .group_6 .section_10 .image_9 {
    width: 20px;
    height: 20px;
  }
  .page .group .group_2 .section_5 .section_9 .group_6 .section_11 {
    height: 40px;
    border: 1px solid #ffffff;
  }
  .page .group .group_2 .section_5 .section_9 .group_6 .font_9 {
    font-size: 14px;
  }
  .page .group .group_2 .section_5 .section_9 .group_6 .section_11 .image_10 {
    width: 20px;
    height: 20px;
  }
  .page .group .image_7 {
    width: 20px;
    height: 20px;
  }
  .page .group .group_2 .section_5 .section_9 .group_5 .image_8 {
    width: 20px;
    height: 20px;
  }
  .page .group .group_7 .group_10 .space-x-12 .image_12 {
    width: 20px;
    height: 20px;
  }
  .page .group .space-x-14 .image_14 {
    width: 20px;
    height: 20px;
  }
  .page .group .button {
    width: 100px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
  .page .group .font_5 {
    line-height: 28px;
    font-size: 14px;
  }
  .page .group .group_7 .pos_10 {
    display: flex;
    flex-direction: column;
  }
  .page .group .group_7 .section_12 .group_8 {
    width: 100%;
  }
  .page .group .group_7 .section_12 .group_8 .group_9 .text_4 {
    font-size: 14px;
    line-height: 20px;
  }
  .page .group .font_4 {
    font-size: 14px;
  }
  .page .group .group_7 .group_10 .space-x-12 .text-wrapper_4 {
    padding: 10px 0;
    height: auto;
  }
  .page .group .group_7 .group_10 .space-x-12 .text-wrapper_5 {
    padding: 10px;
    width: auto;
    height: auto;
  }
  .page .group .group_7 .group_10 .space-x-12 .text-wrapper_6 {
    padding: 10px;
    width: auto;
    height: auto;
  }
  .page .group .group_7 .group_10 .space-x-12 .text-wrapper_7 {
    padding: 10px;
    width: auto;
    height: auto;
  }

  .page .group .group_7 .group_10 .space-x-12 .text-wrapper_8 {
    padding: 10px;
    width: auto;
    height: auto;
  }
  .page .group .group_7 .group_10 .space-x-12 .text-wrapper_9 {
    padding: 10px;
    width: auto;
    height: auto;
  }
  .page .group .group_7 .group_10 .font_10 {
    font-size: 12px;
  }
  .page .group .group_7 .group_10 .group_11 .text-wrapper_6 {
    padding: 10px;
    width: auto;
    height: auto;
  }
  .page .group .group_7 .group_10 .group_11 .text-wrapper_7 {
    padding: 10px;
    width: auto;
    height: auto;
  }
  .page .group .group_7 .group_10 .space-x-11 > :not(:first-child) {
    margin-top: 3px;
  }
  .page .group .group_7 .group_10 .equal-division-item_3 {
    width: 14.2083vw;
    height: 14.2083vw;
  }
  .page .group .group_7 .image_11 {
    width: 23.8542vw;
    height: 23.8542vw;
  }
  .page .group .group_7 .space-x-20 .text-wrapper_3 {
    height: auto;
    width: 23.8542vw;
  }
  .page .group .group_7 .space-x-20 .text-wrapper_3 .font_9 {
    font-size: 12px;
    line-height: 11px;
  }
  .cf-flex-row {
    flex-wrap: wrap;
  }
  .page .group .group_7 .section_16 {
    padding-top: 182.8125vw;
  }
  .page .group .font_6 {
    font-size: 14px;
    line-height: 14px;
  }
  .page .group .group_7 .section_16 .group_15 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page .group .group_7 .section_16 .group_15 .group_16 {
    width: 100%;
  }
  .page .group .group_7 .section_16 .group_15 .group_16 .group_17 {
    width: 100%;
  }
  .page .group .group_7 .section_16 .group_15 .group_16 .section_18 {
    width: 100%;
  }
  .equal-division-item2 {
    width: 20vw;
    height: 11vh;
  }
  .equal-division-item_4 {
    width: 15.2083vw;
    height: 14.2083vw;
  }
  .flex-colum-dir {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .page .image_2 {
    width: 7.6042vw;
    height: 7.6042vw;
  }
  .page .group .group_7 .section_16 .section_19 {
    padding: 0;
  }
  .space-x-121 {
    padding-left: 4vw;
  }
  .page .group .group_7 .section_16 .section_19 .group_19 .font_11 {
    font-size: 14px;
    line-height: 14px;
  }
  .page .group .group_7 .section_16 .section_19 .group_19 {
    display: flex;
    flex-direction: column;
  }
  .page .group .group_7 .section_16 .section_19 .space-x-121 {
    margin-left: 4.3021vw;
    margin: 12px 0;
  }
}
</style>
