<script>
import { TABS } from '@/constant'

export default {
  name: 'nav-bar',
  data () {
    return {
      tabs: TABS(),
      activeTab: ''
    }
  },
  computed: {
    currentRoute () {
      return this.$route.name
    }
  },
  methods: {
    handelTab (value) {
      this.$router.push({
        name: value
      })
      this.activeTab = value
    }
  },
  mounted () {
    this.activeTab = this.currentRoute
  },
  watch: {
    currentRoute (val) {
      this.activeTab = val
    }
  }
}
</script>

<template lang="pug">
.nav-bar.d-flex
  .logo.text-center LOGO
  .tab-list.d-flex.h-100
    .tab-item.h-100(
      v-for="{ value, label } in tabs",
      :key="value",
      :class="activeTab === value ? 'is-active' : ''",
      @click="handelTab(value)"
    ) {{ label }}
</template>

<style lang="scss">
@import '~@/root.scss';

$nheight: 60px;

.nav-bar {
  height: $nheight;
  background-color: $bg_black;
  color: $font_white;
  padding: 0 8%;
  .logo {
    flex: 2.3;
  }
  .tab-list {
    flex: 3;
    justify-self: end;
    .tab-item {
      cursor: pointer;
      line-height: $nheight;
      border-radius: 10px;
      width: 100px;
      text-align: center;
      margin-right: $nheight;
      font-size: 20px;
      &.is-active {
        background-color: $bg_yellow;
        color: $bg_black;
      }
    }
  }
}
</style>
