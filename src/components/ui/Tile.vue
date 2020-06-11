<template lang="pug" functional>
  div(:class="{ 'now-playing': props.nowPlaying }")
    span.text-xs.uppercase.pl-2.pt-3(v-if="props.nowPlaying") Now playing
    span.text-xs.uppercase.pl-2.pt-3(v-if="props.upNext") Up next
    a.flex.flex-row.items-center.p-4.leading-tight(
      :class="{ 'pt-0': !!props.nowPlaying || !!props.upNext }"
      href='#'
      v-on:click='listeners.onSelected(props.video.id, props.tileIndex)'
    )
      span.pr-3.py-2 {{ props.tileIndex + 1 }}
      div
        font-awesome-icon.mr-3.p-1.checkmark.rounded-full(v-if="props.video.watched" icon="check")
        div(v-else).text-sm.pr-3.py-2
          font-awesome-icon(icon="play")

      div
        p.py-2 {{ props.video.title }}
        span.text-xs 3:01 - {{ props.video.author }}
    hr
</template>

<style lang="stylus" scoped>
  .now-playing
    background-color #e8e8e8

  svg
    color #409b6b

  .checkmark
    color #ffffff
    background #409b6b
</style>