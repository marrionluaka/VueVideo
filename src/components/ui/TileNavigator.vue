<template lang="pug" functional>
  .flex.justify-center
    a.showPreviousSlide(
      v-if="props.previousVideo"
      href="#"
      v-on:click="listeners.onShowPreviousSlide"
    ) < {{ props.previousVideo.title }}
    a.showNextSlide(
      v-if="props.nextVideo"
      href="#"
      v-on:click="listeners.onShowNextSlide"
    ) {{ props.nextVideo.title }} > 
</template>

<style lang="stylus" scoped>
  .flex
    justify-content space-between
  a
    text-overflow ellipsis
    overflow hidden
    white-space nowrap
</style>
