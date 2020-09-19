<script>
import contactUrl from '@/assets/how_ contect.png'
import { CONTACT_ITEMS } from '@/constant'

export default {
  name: 'contact-info',
  data () {
    return {
      contactUrl,
      contactItems: CONTACT_ITEMS()
    }
  }
}
</script>

<template lang="pug">
.contact-info.d-flex.justify-content-between.m-auto
  .left.d-flex.pl-3
    img.w-100(:src="contactUrl")
  .line
  .right
    .contact-item(
      v-for="{ name, icon, description } in contactItems"
    )
      i.mr-3(:class="icon")
      span {{ name }}
      small.text-gary.ml-1 {{ description }}
</template>

<style lang="scss">
@import '~@/root.scss';

.contact-info {
  width: 50%;
  min-width: 750px;
  height: 200px;
  .left,
  .right {
    width: 40%;
  }
  .line {
    width: 5px;
    height: 100%;
    background-color: $bg_yellow;
  }
  .contact-item {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
  }
}
</style>
