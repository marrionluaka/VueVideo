<template lang="pug" functional>
  div
    a.showPreviousSlide(href="#" v-on:click="listeners.onShowPreviousSlide") <
    a.showNextSlide(href="#" v-on:click="listeners.onShowNextSlide") >
</template>