<template lang="pug">
  main#app.flex.justify-center.content-center.my-20
    .flex.flex-wrap.container.px-2
      VideoPlayer(class="w-full md:w-full lg:w-4/6")
      PlayList(class="w-full md:w-full lg:w-2/6")
</template>

<script lang="ts">
import Vue from "vue"
import { PlayList, VideoPlayer } from "./components/containers"

export default Vue.extend({
  name: "App",

  components: {
    PlayList,
    VideoPlayer
  }
})
</script>

<style lang="stylus">

</style>
