<script>
import { WORK_ITEMS } from '@/constant'

export default {
  name: 'my-work',
  data () {
    return {
      workItems: WORK_ITEMS()
    }
  },
  methods: {
    toWork (name) {
      this.$router.push({
        name: 'work',
        query: { active: name }
      })
    }
  }
}
</script>

<template lang="pug">
.my-work
  .work-bg-box.balck-bg-box
    .info
      .d-flex.justify-content-between
        p.chapter-title
          span 我的作品
          span MY WORK
        span.title-box 2020
      p 包括自己离职这几个月再加自学设计的虚拟项目，以及上个月兼职接单的第一个真实项目。我知道自己的经验不足，但是每个作品都是自己自学，从无到有设计出来的。
    .work-tabs.d-flex.justify-content-between
      .work-item(
        v-for="{ name, imgUrl, value } in workItems",
        :key="name",
        @click="toWork(value)"
      )
        p.text-center {{ name }}
        .img-box.w-100
          img.w-100(:src="imgUrl")
          .more-btn 查看更多
</template>

<style lang="scss">
@import '~@/root.scss';

.my-work {
  height: calc(50vw + 50px);
  color: $font_white;
  .work-bg-box {
    .info {
      padding-top: 30px;
      span {
        font-size: 38px;
      }
      >p {
        width: 65%;
        font-size: 18px;
      }
    }

    .work-tabs {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 55%);
      width: 55%;
      z-index: 9;
      .work-item {
        width: 28%;
        p {
          font-size: 24px;
          font-weight: 500;
        }
        .img-box {
          cursor: pointer;
          position: relative;
          box-shadow: 1px 8px 48px 15px rgba(0, 0, 0, 0.13);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s;
          &:hover {
            transform: scale(1.05);
            .more-btn {
              display: block;
            }
          }
          .more-btn {
            display: none;
            position: absolute;
            transition: all 0.4s;
            bottom: 0px;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
            text-align: center;
            background-color: $bg_yellow;
          }
        }
      }
    }
  }
}
</style>
