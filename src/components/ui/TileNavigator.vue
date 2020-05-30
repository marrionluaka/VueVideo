<template lang="pug" functional>
  div
    a.showNextSlide(href="#" v-on:click="listeners.onShowNextSlide")
    a.showPreviousSlide(href="#" v-on:click="listeners.onShowPreviousSlide")
</template>