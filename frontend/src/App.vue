<script>
import LoadingMask from '@/components/loading'
import Home from '@/pages/home'
import NavBar from '@/common/navbar'

export default {
  name: 'app',
  components: {
    LoadingMask,
    Home,
    NavBar
  }
}
</script>

<template lang="pug">
#app
  .app-root
    NavBar
    router-view
</template>
