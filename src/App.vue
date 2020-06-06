<template lang="pug">
  main#app.flex.justify-center.content-center.my-20
    .flex.flex-wrap.container
      VideoPlayer(class="w-full md:w-full lg:w-4/6")
      PlayList(:videos="test" class="w-full md:w-full lg:w-2/6")
</template>

<script lang="ts">
import Vue from "vue"
import { PlayList, VideoPlayer } from "./components/containers"

export default Vue.extend({
  name: "App",

  computed: {
    test() {
      return [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 }
      ]
    }
  },

  components: {
    PlayList,
    VideoPlayer
  }
})
</script>

<style lang="stylus">

</style>
