<template lang="pug" functional>
  div
    a.flex.flex-row.items-center.p-4.leading-tight(href='#' v-on:click='listeners.onSelected(props.video.id, props.tileIndex)')
      span.pr-3.py-2 5
      div
        font-awesome-icon.mr-3.p-1.checkmark.rounded-full(v-if="props.watched" icon="check")
        div(v-else).text-sm.pr-3.py-2
          font-awesome-icon(icon="play")

      div
        p.py-2 {{ props.video.title }}
        span.text-xs 3:01 - {{ props.video.author }}
    hr
</template>

<style lang="stylus" scoped>
  svg
    color #409b6b

  .checkmark
    color #ffffff
    background #409b6b
</style>