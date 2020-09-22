<script>
import { BASE_ASSETS_URL } from '@/constant'

export const footTextUrl = BASE_ASSETS_URL + '/foot_text.png'
export const footCallmeUrl = BASE_ASSETS_URL + '/foot_callme.png'

export default {
  name: 'foot',
  data () {
    return {
      footTextUrl,
      footCallmeUrl
    }
  }
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
  margin-top: 230px;
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
