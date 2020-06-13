<template lang="pug">
  main#app.flex.justify-center.content-center.my-20
    .flex.flex-wrap.container.px-2
      VideoPlayer(class="px-2 w-full md:w-full lg:w-4/6")
      PlayList(class="w-full md:w-full lg:w-2/6")
</template>

<script lang="ts">
import Vue from "vue"
import { defineComponent } from '@vue/composition-api'

import { provideStore } from './hooks/useStore'
import { PlayList, VideoPlayer } from "./components/containers"

export default defineComponent({
  name: "App",

  components: {
    PlayList,
    VideoPlayer
  },

  setup(_, { root: { $store } }) {
    provideStore($store)
  }
})
</script>
