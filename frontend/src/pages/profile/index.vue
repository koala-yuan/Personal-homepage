<script>
import { WORK_EXPERIENCE, BASE_ASSETS_URL } from '@/constant'

export const avatarUrl = BASE_ASSETS_URL + '/avatar.png'
export const skillsUrl = BASE_ASSETS_URL + '/profileIcon/skills.png'
export const oneUrl = BASE_ASSETS_URL + '/profileIcon/NO1.png'
export const twoUrl = BASE_ASSETS_URL + '/profileIcon/NO2.png'
export const threeUrl = BASE_ASSETS_URL + '/profileIcon/NO3.png'

export default {
  name: 'profile',
  data () {
    return {
      workExperiences: WORK_EXPERIENCE(),
      avatarUrl,
      skillsUrl,
      oneUrl,
      twoUrl,
      threeUrl
    }
  }
}
</script>

<template lang="pug">
.profile
  .profile-base-info.d-flex.justify-content-center
    .d-flex.align-items-center
      .bubble-box 短发是我最近才剪的，人生第一次剪这么短，希望有一个新的开始，嘻嘻～
      .my-photo
        img(:src="avatarUrl")
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
      .number.number-one
        img.w-100(:src="oneUrl")
      .number.number-two
        img.w-100(:src="twoUrl")
      p.chapter-title
        span 个人技能
        span PERSONAL SKILLS
      .skills-img.text-center
       img.h-100(:src="skillsUrl")
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
          .icon-img.text-center
            img.w-100(v-if="item.iconUrl", :src="item.iconUrl")
            .ellipsis(v-else) ......
          span.ml-2 {{ item.text }}
        .right(v-if="item.description")
          .bubble-box.right {{ item.description }}
    .number.number-three
      img.w-100(:src="threeUrl")
</template>

<style lang="scss">
@import '~@/root.scss';

.profile {
  .profile-base-info {
    margin: 80px 0;
    padding: 0 12%;
    .my-info {
       width: 500px;
       min-width: 500px;
       margin-left: 50px;
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
    .my-photo {
      margin: 0 50px 0 40px;
    }
  }

  .profile-skills {
    position: relative;
    .chapter-title {
      margin-bottom: 0;
      color: $font_white;
      padding-top: 30px;
    }
    .number {
      position: absolute;
      width: 8%;
    }
    .number-one {
      top: -20px;
      transform: translateY(-100%);
    }
    .number-two {
      bottom: 20px;
      right: 22%;
      width: 10%;
    }
    .skills-img {
      height: calc(100% - 120px);
    }
  }

  .work-experience {
    position: relative;
    margin-top: 80px;
    padding: 0 20%;
    .number-three {
      position: absolute;
      bottom: -10px;
      right: 25%;
      width: 9%;
    }
    .experience-item-list {
      margin-top: 50px;
    }
    .experience-item {
      align-items: flex-end;
      position: relative;
      height: 100px;
      color: $font_light;
      .icon-img {
        width: 80px;
        min-width: 80px;
      }
      .right {
        position: absolute;
      }
      span:nth-child(1) {
        color: $font_light;
        font-size: 24px;
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
      .right {
        right: -10px;
        top: 0px;
      }
    }
    .experience-item:nth-child(3) {
      height: 170px;
      .right {
        width: 500px;
        right: -110px;
        top: -15px;
      }
    }
    .experience-item:nth-child(4) {
      height: 120px;
    }
    .experience-item:nth-child(5) {
      height: 250px;
      .right {
        width: 600px;
        right: -110px;
        top: 12px;
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
