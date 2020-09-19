<script>
import Wokr from '@/common/work'
import ContactInfo from '@/common/contactInfo'

import bannerUrl from '@/assets/banner.png'
import profileUrl from '@/assets/profile.png'

export default {
  name: 'home',
  data () {
    return {
      bannerUrl,
      profileUrl
    }
  },
  methods: {
    initBanner () {
      const img = new Image()
      img.src = bannerUrl
      img.onload = () => {
        const box = this.$refs.bannerBox
        box.appendChild(img)
      }
    }
  },
  mounted () {
    // this.initBanner()
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
