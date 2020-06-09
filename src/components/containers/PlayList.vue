<template lang="pug">
  .playlist.rounded.overflow-hidden
    .playlist-playing-banner.flex.flex-row.items-center.px-2.py-4
      img.w-20.mr-3(src="../../assets/logo.png" alt="Vue logo")
      p.text-xl Build a responsive video player with Tailwind and Vue 3 composition api

    PlayListMeta(
      :progress="progress"
      :lessonsWatched="lessonsWatched"
      :numberOfLessons="numberOfLessons"
      :autoPlayEnabled="autoPlayEnabled"
      @onChange="setAutoPlay"
    )

    ul.playlist-tile-container
      li(v-for="(video, index) in playList" :key="video.id")
        Tile(
          :video="video"
          :watched="false"
          :tileIndex="index"
          @onSelected="selectVideo"
        )
        //- :nowPlaying="video.id === videoId"
            :nextUp="tileIndex + 1 === index"
</template>

<script lang="ts">
import * as R from 'ramda'
import { defineComponent, computed, ref } from '@vue/composition-api'

import { useVideos } from '@/hooks/useVideos'
import { Tile, PlayListMeta, PlayListProgressBar } from '../ui'

export default defineComponent({
  components: {
    Tile,
    PlayListMeta,
    PlayListProgressBar
  },

  setup() {
    const { playList, selectVideo } = useVideos()
    const numberOfLessons = computed(() => playList.value.length)
    const autoPlayEnabled = ref(localStorage.getItem('autoPlay') === "true")
    const lessonsWatched = computed(() => playList.value.filter((p:any) => p.watched).length)

    return {
      playList,
      lessonsWatched,
      numberOfLessons,
      autoPlayEnabled,
      selectVideo,
      setAutoPlay: (e: any) => {
        autoPlayEnabled.value = e.target.checked
        localStorage.setItem('autoPlay', String(e.target.checked))
      },
      progress: computed(() => (lessonsWatched.value / numberOfLessons.value) * 100),
    }
  }
})
</script>

<style lang="stylus" scoped>
  .playlist
    background #fafafa

    &-tile-container
      max-height 470px
      overflow hidden
      overflow-y scroll

    &-playing-banner
      background #cccccc
</style>