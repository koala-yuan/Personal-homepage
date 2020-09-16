<script>
import LoadingMask from '@/components/loading'
import Home from '@/pages/home'

export default {
  name: 'app',
  components: {
    LoadingMask,
    Home
  }
}
</script>

<template lang="pug">
#app
  .app-root
    Home
  LoadingMask
</template>
