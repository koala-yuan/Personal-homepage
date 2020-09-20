<script>
import Home from '@/pages/home'
import NavBar from '@/common/navbar'
import Foot from '@/common/foot'

export default {
  name: 'app',
  computed: {
    isShowFoot () {
      const { name, query: { active } } = this.$route
      return name !== 'work' || active === 'all'
    }
  },
  components: {
    Home,
    NavBar,
    Foot
  }
}
</script>

<template lang="pug">
#app
  .app-root
    NavBar
    router-view
    Foot(v-show="isShowFoot")
</template>
