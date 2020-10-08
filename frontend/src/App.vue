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
    },
    routeName () {
      return this.$route.name
    }
  },
  components: {
    Home,
    NavBar,
    Foot
  },
  watch: {
    routeName () {
      window.scrollTo(0, 0)
    }
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
