<script>
import Wokr from '@/common/work'
import { WORK_TYPES } from '@/constant'

import { bhtImgs, lllcImgs, myyyImgs, allWorkList, bannerImgs, webImgs } from './constant'

import oneUrl from '@/assets/profileIcon/NO1.png'
import twoUrl from '@/assets/profileIcon/NO2bg.png'
import threeUrl from '@/assets/profileIcon/NO3.png'

import lllcLogo from '@/assets/work/lllc/logo.png'
import myyyLogo from '@/assets/work/myyy/logo.png'

export default {
  name: 'work',
  data () {
    return {
      workTypes: WORK_TYPES(),
      activeTab: 'all',
      currentAll: '',
      bhtImgs,
      lllcImgs,
      myyyImgs,
      oneUrl,
      twoUrl,
      threeUrl,
      lllcLogo,
      myyyLogo,
      allWorkList,
      bannerImgs,
      webImgs
    }
  },
  computed: {
    query () {
      return this.$route.query
    },
    contentTitle () {
      const { activeTab, workTypes, currentAll, allWorkList } = this
      const current = workTypes.find(item => item.name === activeTab) || {}
      let ret = current.label + '设计'

      if (activeTab === 'all' && currentAll) {
        const current = allWorkList.find(item => item.name === currentAll) || {}
        const { title, subTitle } = current
        ret += `-${title} ${subTitle}`
      }
      return ret
    },
    isShowSubWork () {
      const { currentAll, allWorkList } = this
      return currentAll && allWorkList.find(item => item.name === currentAll)
    },
    showColors () {
      return [
        {
          name: '主色',
          lllcColor: '#F6565A',
          myyyColor: '#6818E1'
        },
        {
          name: '辅色',
          lllcColor: '#D4D4D4',
          myyyColor: '#343434'
        },
        {
          name: '辅色',
          lllcColor: '#FF7E52',
          myyyColor: '#DF5CF1'
        },
        {
          name: '点缀色',
          lllcColor: '#7266F5',
          myyyColor: '#FF8834'
        }
      ]
    }
  },
  methods: {
    handelTab (val) {
      this.activeTab = val
      this.$router.push({ query: { active: val } })

      this.currentAll = ''
    },
    handelAll (item) {
      const { name } = item
      const { query } = this.$route
      this.$router.push({ query: { ...query, currentAll: name } })
    },
    initCurrentAll () {
      const { query: { currentAll } } = this.$route
      const isExist = currentAll && this.allWorkList.find(item => item.name === currentAll)
      if (isExist) {
        this.currentAll = currentAll
      }
    },
    handelScrollToTypes () {
      const dom = this.$refs.workTypesDom
      window.scrollTo(0, dom.offsetTop || 0)
    }
  },
  mounted () {
    this.activeTab = this.query.active || 'all'
    this.initCurrentAll()
  },
  components: {
    Wokr
  },
  watch: {
    query: {
      handler (val) {
        this.activeTab = val.active || 'all'
        this.initCurrentAll()
      },
      deep: true
    },
    activeTab () {
      this.handelScrollToTypes()
    },
    currentAll (val) {
      val && this.handelScrollToTypes()
    }
  }
}
</script>

<template lang="pug">
mixin bht
  .bht-view.d-flex
    .img-box(
      v-for="src in bhtImgs",
      :key="src"
    )
      img.w-100(:src="src")
    .description-text 一开始的设计采用的是简约风格，是考虑到预警系统包含的大量信息，所以把看得清楚作为主要的设计目标。但是因为项目紧急，最开始的版本并没有拿到甲方具体的需求。于是了解了甲方的喜好以及规定的主色调后，进行了第二版的设计。
    .start-text
      span 第一版·白鹤滩大坝温控预警系统
      span.text-gary (部分页面)
    .end-text
      span 第二版·白鹤滩大坝温控预警系统
      span.text-gary (部分页面)

mixin lllc
  .lllc-view.d-flex
    .img-box(
      v-for="src in lllcImgs",
      :key="src"
    )
      img.w-100(:src="src")
    .info-box.text-center
      .logo
        img(:src="lllcLogo")
        p.title 龙龙理财APP
      p 龙龙理财APP主要参考的是原软件的LOGO以及LOGO上面的主色调。
      .color-view.d-flex
        .color-item(
          v-for="{ name, lllcColor } in showColors",
          :key="lllcColor",
          :style="{ 'color': lllcColor }"
        )
          .right(:style="{ 'background-color': lllcColor }")
          .left
            .text-left {{ name }}
            .text-left {{ lllcColor }}

mixin myyy
  .myyy-view.d-flex
    .info-box.text-center
      .logo
        img(:src="myyyLogo")
        p.title 妙悦音乐APP
      p 妙悦APP主要参考的是原软件的LOGO以及LOGO上面的主色调。
      .color-view.d-flex
        .color-item(
          v-for="{ name, myyyColor } in showColors",
          :key="myyyColor",
          :style="{ 'color': myyyColor }"
        )
          .right(:style="{ 'background-color': myyyColor }")
          .left
            .text-left {{ name }}
            .text-left {{ myyyColor }}
    .img-box(
      v-for="src in myyyImgs",
      :key="src"
    )
      img.w-100(:src="src")

mixin banner
  .banner-view
    p BANNER设计主要是从花瓣网上面收集产品，然后为该产品进行BANNER设计。我尽量选择的是不同风格的产品，并且用不同的风格展示出来。
    img.w-100(
      v-for="src in bannerImgs",
      :key="src",
      :src="src"
    )

mixin web1
  .web-view1.d-flex
    .left
      img.w-100(:src="webImgs[0]")
      .description 【虚拟项目】龙龙理财APP做的配套网页，主色调与APP保持一致。
    .right
      img.w-100(:src="webImgs[1]")
      img.w-100(:src="webImgs[2]")

mixin web2
  .web-view2
    img.w-100.mb-4(:src="webImgs[3]")
    .d-flex
      .description 【临摹项目】后台管理系统练习，参考网络图片。
      img(:src="webImgs[5]")
    img.float-img(:src="webImgs[4]")

.work-view
  Wokr
  .work-types.d-flex(ref="workTypesDom")
    .work-type.mr-5(
      v-for="item in workTypes",
      :key="item.name",
      :class="activeTab === item.name ? 'is-active' : ''",
      @click="handelTab(item.name)"
    )
      i.mr-2(:class="item.icon")
      span {{ item.label }}
  .work-content
    .work-content-title {{ contentTitle }}
    .work-tab-all(v-show="activeTab === 'all'")
      .current-sub-work(v-if="isShowSubWork")
        .bht(v-if="currentAll === 'bht'")
          +bht
        .lllc(v-if="currentAll === 'lllc'")
          .title
            span 龙龙理财APP
            span.text-gary （部分页面）
          +lllc
          .title.mb-5
            span 龙龙理财网页设计
            span.text-gary （部分页面）
          +web1
        .myyy(v-if="currentAll === 'myyy'")
          +myyy
        .bht(v-if="currentAll === 'banner'")
          +banner
        .bht(v-if="currentAll === 'web'")
          +web2
      .work-tab-all-item.d-flex(
        v-else,
        v-for="(item, index) in allWorkList",
        :key="item.subTitle",
        @click="handelAll(item)"
      )
        .left
          img.w-100(:src="item.imgUrl")
        .right
          .title.mb-2 {{ item.title }}
          .sub-title
            span {{ item.subTitle }}
            span.text-gary(v-if="!index") （手机端推送）
          p {{ item.description }}
          .small {{ item.date }}
    .work-tab-app(v-show="activeTab === 'app'")
      .one
        +bht
        .number-box.text-right
          img.w-100(:src="oneUrl")
      .two
        .number-box.text-right
          img.w-100(:src="twoUrl")
        +lllc
      .three
        .number-box.text-right
          img.w-100(:src="threeUrl")
        +myyy
    .work-tab-web(v-show="activeTab === 'web'")
      .one
        +web1
        .number-box
          img.w-100(:src="oneUrl")
      .two
        .number-box
          img.w-100(:src="twoUrl")
        +web2
    .work-tab-banner(v-show="activeTab === 'banner'")
      +banner
  .work-foot(v-if="activeTab !== 'all'")
</template>

<style lang="scss">
@import '~@/root.scss';

.work-view {
  position: relative;
  .my-work {
    overflow: hidden;
    .work-bg-box {
      border-radius: 0;
      position: relative;
      .work-tabs {
        width: 65%;
      }
      &::after {
        position: absolute;
        content: ' ';
        width: 0;
        height: 0;
        border: calc(50vw - 3px) solid transparent;
        border-top: 8vw solid $bg_black;
        bottom: calc(-58vw + 3px);
        z-index: -1;
        left: 0;
      }
    }
  }

  .work-types {
    padding: 0 19%;
    justify-content: space-between;
    .work-type {
      color: $font_light;
      font-size: 26px;
      cursor: pointer;
      position: relative;
      &.is-active {
        color: $bg_yellow;
        &::after {
          position: absolute;
          content: ' ';
          width: 85%;
          height: 5px;
          background-color: $bg_yellow;
          left: 50%;
          transform: translateX(-50%);
          bottom: -15px;
        }
      }
    }
  }

  .work-content {
    padding: 0 19% 50px;
    .work-content-title {
      font-size: 30px;
      font-weight: 700;
      margin: 60px 0 40px;
    }
    .work-tab-all {
      .current-sub-work {
        .title {
          font-size: 20px;
          font-weight: bold;
        }
      }
      .work-tab-all-item {
        margin-bottom: 40px;
        cursor: pointer;
        .left {
          width: 45%;
          min-width: 45%;
          margin-right: 30px;
        }
        .right {
          .title {
            font-size: 26px;
            color: $bg_black;
            font-weight: 700;
            transform: translateX(-15px);
          }
          .sub-title {
            font-size: 24px;
          }
          p {
            margin: 40px 0 65px;
            font-size: 18px;
            color: #666666;
          }
          .small {
            font-size: 16px;
            color: #999999;
          }
        }
      }
    }

    .work-tab-app,
    .work-tab-web {
      > div {
        background-color: #fff;
        box-shadow: 1px 7px 69px 11px rgba(55, 55, 55, 0.13);
        padding: 10px 20px 100px;
        margin-bottom: 100px;
        position: relative;
        .number-box {
          width: 13%;
          float: right;
        }
        &.two {
          padding-top: 100px;
          .number-box {
            position: absolute;
            left: 20px;
            top: 20px;
          }
        }
        &.three {
          padding: 80px 20px 50px;
          .number-box {
            position: absolute;
            right: 20px;
            top: 20px;
          }
        }
      }
    }

    .work-tab-web {
      .one {
        padding-top: 100px;
        .number-box {
          position: absolute;
          right: 20px;
          top: 20px;
        }
      }
    }

    .bht-view,
    .lllc-view,
    .myyy-view {
      justify-content: space-between;
      flex-wrap: wrap;
      position: relative;
      padding-top: 50px;
      .img-box {
        width: 22%;
        margin-bottom: 50px;
        img {
          box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.13);
          transition: all 0.3s;
          &:hover {
            transform: scale(1.04);
          }
        }
      }
      .description-text {
        position: absolute;
        color: #666666;
        font-size: 20px;
        width: 74%;
        top: calc(50% - 130px);
        line-height: 40px;
      }
      .start-text{
        position: absolute;
        top: 0;
        right: 0;
        color: #343434;
        font-size: 20px;
      }
      .end-text {
        position: absolute;
        bottom: 60px;
        left: 0;
        color: #343434;
        font-size: 20px;
      }
    }

    .lllc-view,
    .myyy-view {
      .img-box {
        width: 18%;
      }
      .info-box {
        width: 38%;
        padding: 0 4%;
        transform: translateY(-50px);
        .logo {
          p {
            color: #2C2C2C;
            font-weight: 600;
            margin: 8px 0;
          }
          img {
            width: 18%;
          }
        }
        >p {
          margin-top: 20px;
          text-align: left;
          font-size: 18px;
          line-height: 35px;
          color: #666666;
        }
        .color-view {
          flex-wrap: wrap;
          padding: 0 5%;
          justify-content: center;
          margin-top: 30px;
          .color-item {
            width: 45%;
            min-width: 100px;
            display: flex;
            margin-bottom: 30px;
            .right {
              width: 30px;
              height: 30px;
              margin-right: 10px;
              border-radius: 5px;
            }
            .left {
              font-size: 12px;
            }
          }
        }
      }
    }

    .myyy-view {
      .info-box {
        transform: translateY(0);
      }
      .logo img {
        border-radius: 5px;
        box-shadow: 0px 0px 38px 0px rgba(114, 66, 246, 0.2);
      }
      .img-box img {
        box-shadow: 1px 7px 69px 11px rgba(130, 40, 229, 0.13);
      }
    }

    .banner-view {
      >p {
        color: #666666;
        font-size: 18px;
      }
      img {
        box-shadow: 1px 8px 48px 15px rgba(0, 0, 0, 0.13);
        margin-bottom: 80px;
      }
    }

    .web-view1 {
      justify-content: space-between;
      .description {
        color: #666666;
        font-size: 18px;
        margin-top: 30px;
      }
      > div {
        width: calc(50% - 20px);
        img {
          box-shadow: 1px 3px 46px 0px rgba(89, 89, 89, 0.18);
          margin-bottom: 40px;
        }
      }
    }

    .web-view2 {
      position: relative;
      padding-bottom: 150px;
      .description {
        color: #666666;
        font-size: 18px;
        margin-top: 30px;
        line-height: 30px;
      }
      .d-flex {
        img {
          width: 60%;
        }
      }
      img.float-img {
        width: 60%;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }

  .work-foot {
    background-color: $bg_black;
    height: 300px;
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: -1;
    &::before {
      position: absolute;
      content: ' ';
      width: 0;
      height: 0;
      border: calc(50vw - 3px) solid transparent;
      border-bottom: 8vw solid $bg_black;
      top: calc(-58vw + 3px);
      left: 0;
    }

  }
}
</style>
