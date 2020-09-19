<script>
import LoadingMask from '@/components/loading'
import Home from '@/pages/home'
import NavBar from '@/common/navbar'
import Foot from '@/common/foot'

export default {
  name: 'app',
  components: {
    LoadingMask,
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
    Foot
</template>
