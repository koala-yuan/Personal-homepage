<script>
import footTextUrl from '@/assets/foot_text.png'
import footCallmeUrl from '@/assets/foot_callme.png'

export default {
  name: 'foot',
  data () {
    return {
      footTextUrl,
      footCallmeUrl
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
.foot
  .text-img.text-center
    img(:src="footTextUrl")
    p 设计源于生活
  .call-me
    img(:src="footCallmeUrl")
</template>

<style lang="scss">
@import '~@/root.scss';

.foot {
  position: relative;
  height: 250px;
  margin-top: 300px;
  background-color: $bg_black;
  color: $font_white;
  padding-top: 80px;
  font-size: 20px;
  .call-me {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -157px;
    img {
      transform: scale(0.8);
    }
  }
}
</style>
