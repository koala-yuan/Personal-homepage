<script>
import { BASE_ASSETS_URL } from '@/constant'

import Wokr from '@/common/work'
import ContactInfo from '@/common/contactInfo'

export const bannerUrl = BASE_ASSETS_URL + '/banner.png'
export const profileUrl = BASE_ASSETS_URL + '/profile.png'

export default {
  name: 'home',
  data () {
    return {
      bannerUrl,
      profileUrl
    }
  },
  components: {
    Wokr,
    ContactInfo
  }
}
</script>

<template lang="pug">
.home(v-if="bannerUrl && profileUrl")
  .banner-box(ref="bannerBox")
    img.w-100(:src="bannerUrl")
  .profile-box.p-4.mt-2.mb-2
    img.w-100(:src="profileUrl")
  Wokr
  ContactInfo
</template>

<style lang="scss">
.banner-box {
  min-height: 400px;
}
</style>
