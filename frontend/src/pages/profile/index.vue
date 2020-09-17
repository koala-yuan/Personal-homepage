<script>
import { WORK_EXPERIENCE } from '@/constant'

export default {
  name: 'profile',
  data () {
    return {
      workExperiences: WORK_EXPERIENCE()
    }
  },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
  components: {},
  watch: {}
}
</script>

<template lang="pug">
.profile
  .profile-base-info.d-flex.justify-content-center
    .left
      .bubble-box 短发是我最近才剪的，人生第一次剪这么短，希望有一个新的开始，嘻嘻～
    .my-photo img
    .my-info
      p.chapter-title
        span 个人信息
        span ENFORMATION
      el-form.info-form.w-100.d-flex.mt-4
        el-form-item.d-flex(label="姓名：")
          span 周凌云
        el-form-item.d-flex(label="专业：")
          span 应用心理学
        el-form-item.d-flex(label="生日：")
          span 1996.11.04
        el-form-item.d-flex(label="电话：")
          span 15071437560
        el-form-item.d-flex(label="学历：")
          span 本科
        el-form-item.d-flex(label="邮箱：")
          span 973773273@qq.com
        el-form-item.d-flex(label="毕业院校：")
          span 湖北第二师范学院
        el-form-item.d-flex(label="现居：")
          span 湖北武汉（当代国际花园）
  .profile-skills
    .balck-bg-box
      h1.number-title NO.1
      p.chapter-title
        span 个人技能
        span PERSONAL SKILLS
  .work-experience
    p.chapter-title
      span 工作经历
      span EXPERIENCE
    .experience-item-list
      .experience-item.d-flex(
        v-for="item in workExperiences",
        :key="item.text"
      )
        .left.h-100.d-flex.align-items-center
          span.h-100.d-flex.align-items-center {{ item.time }}
          span {{ item.icon }}
          span {{ item.text }}
        .bubble-box.right(v-if="item.description") {{ item.description }}
</template>

<style lang="scss">
@import '~@/root.scss';

.profile {
  .profile-base-info {
    margin-top: 80px;
    .my-info {
       width: 500px;
      .info-form {
        flex-wrap: wrap;
        .el-form-item {
          width: 50%;
          height: 45px;
          color: $font_light;
          .el-form-item__label {
            font-weight: Bold;
          }
        }
      }
    }
  }

  .profile-skills {
    .chapter-title {
      color: $font_white;
      padding-top: 30px;
    }
    .number-title {
      position: absolute;
      top: -100px;
    }
  }

  .work-experience {
    margin-top: 80px;
    padding: 0 20%;
    .experience-item-list {
      margin-top: 50px;
    }
    .experience-item {
      align-items: flex-end;
      position: relative;
      height: 80px;
      span:nth-child(1) {
        color: $font_light;
        font-size: 26px;
        margin-right: 20px;
        position: relative;
        width: 110px;
        min-width: 110px;
        &::after {
          content: ' ';
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top: 10px solid #D0D0D0;
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
        }
        &::before {
          content: ' ';
          width: 5px;
          height: 100%;
          background-color: #D0D0D0;
          position: absolute;
          right: 0px;
        }
      }
    }
    .experience-item:nth-child(1) {
      height: 120px;
    }
    .experience-item:nth-child(3) {
      height: 250px;
      .bubble-box {
        width: 500px;
        transform: translate(7px, -60px);
        transform: translate(7px, -150px);
      }
    }
    .experience-item:nth-child(4) {
      height: 120px;
    }
    .experience-item:nth-child(5) {
      height: 200px;
      .bubble-box {
        width: 600px;
        transform: translate(7px, -100px);
      }
    }
    .experience-item:nth-child(6),
    .experience-item:nth-child(7),
    .experience-item:nth-child(8) {
      span:nth-child(1) {
        &::before {
          background-color: $bg_yellow !important;
        }
         &::after {
          border-top: 10px solid $bg_yellow !important;
        }
      }
    }
    .bubble-box {
      transform: translate(7px, -60px);
    }
  }
}
</style>
