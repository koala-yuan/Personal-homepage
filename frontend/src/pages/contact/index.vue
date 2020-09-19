<script>
export default {
  name: 'contact',
  data () {
    return {}
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
.contact
  .map-view map-view
  .my-info
    label 现居地
    p 湖北武汉当代国际花园
    label 常用手机号
    p 15071437560
    label 常用邮箱
    p 973773273@qq.com
    label 微信号
    p Zerocloud-1104
</template>

<style lang="scss">
.contact {
  padding: 0 15%;
  .my-info {
    p {
      font-size: 20px;
      color: #343434
    }
    label {
      font-size: 16px;
      color: #9A9A9A
    }
  }
}
</style>
