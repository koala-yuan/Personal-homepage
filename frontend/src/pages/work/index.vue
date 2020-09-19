<script>
import Wokr from '@/common/work'
import { WORK_TYPES } from '@/constant'

export default {
  name: 'work',
  data () {
    return {
      workTypes: WORK_TYPES(),
      activeTab: 'all'
    }
  },
  props: {},
  computed: {
    allWorkList () {
      return [
        {
          title: '【真实项目】',
          subTitle: '白鹤滩大坝温控预警系统',
          description: '该项目属于中清控（武汉）科技有限公司。该项目前后一共做了两版（深色版和浅色版），最终敲定的是深色版。',
          date: '2020年8月15号',
          imgUrl: ''
        }
      ]
    }
  },
  methods: {},
  mounted () {},
  components: {
    Wokr
  }
}
</script>

<template lang="pug">
.work-view
  Wokr
  .work-types.d-flex
    .work-type(
      v-for="item in workTypes",
      :key="item.name"
    )
      i.mr-2(:class="item.icon")
      span {{ item.label }}
  .work-content
</template>

<style lang="scss">
@import '~@/root.scss';

.work-view {
  .my-work {
    overflow: hidden;
  }
  .work-bg-box {
    border-radius: 0;
    position: relative;
    &::after {
      position: absolute;
      content: ' ';
      width: 0;
      height: 0;
      border: calc(50vw - 3px) solid transparent;
      border-top: 8vw solid $bg_black;;
      bottom: calc(-58vw + 3px);
      z-index: -1;
      left: 0;
    }
  }
  .work-types {
    padding: 0 25%;
    justify-content: space-between;
    .work-type {
      width: 150px;
      color: $font_light;
      font-size: 24px;
      cursor: pointer;
    }
  }
}
</style>
