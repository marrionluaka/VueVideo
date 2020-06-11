<template lang="pug" functional>
  .playlist-meta.flex.flex-row.flex-wrap.justify-between.pb-2
    div.flex.flex-1.items-center.text-xs
      span.pl-4.pr-3 {{ props.lessonsWatched }}
      .playlist-meta-progress-bar.flex-1.rounded-full.overflow-hidden
        .playlist-meta-progress-bar-filled(:style="{ width: `${props.progress}%` }")
      span.pl-3.pr-3 {{ props.numberOfLessons }} videos

    div.text-xs.flex.flex-row.items-center
      span.pr-2 Autoplay
      div.pr-4.auto-play
        label.switch
          input(type="checkbox" v-on:change="listeners.onChange" :checked="props.autoPlayEnabled")
          span.slider.round
</template>

<style lang="stylus">
  .playlist-meta
    background #cccccc

    &-progress-bar
      top 0
      left 0
      height 5px
      width 100%
      position relative
      max-width 160px
      background #fafafa

      &-filled
        top 0
        left 0
        width 0
        z-index 2
        height 100%
        position absolute
        background rgb(120, 202, 149)

    .auto-play
      position relative
      top 1px

      .switch
        width 38px
        height 14px
        position relative
        display inline-block

        input
          width 0
          height 0
          opacity 0

        input:checked + .slider
          background-color: #333


        input:checked + .slider:before
          -webkit-transform translateX(20px)
          -ms-transform translateX(20px)
          transform translateX(20px)
          background rgb(64, 155, 107)

        .slider
          top 0
          left 0
          right 0
          bottom 0
          transition .4s
          cursor pointer
          position absolute
          background-color #333
          -webkit-transition .4s

          &.round
            border-radius 34px

            &::before
              border-radius 50%

          &::before
            content ""
            top -4px
            left 4px
            bottom 4px
            width 20px
            height 20px
            transition .4s
            position absolute
            background #f0624d
            -webkit-transition .4s
            -webkit-transform translateX(-8px)
            -ms-transform translateX(-8px)
            transform translateX(-8px)
</style>