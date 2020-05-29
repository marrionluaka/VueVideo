<template lang="pug">
  main#app
    Tile(@onSelected='test')
</template>

<script lang="ts">
import Vue from "vue"
import { Tile } from "./components/ui"

export default Vue.extend({
  name: "App",
  components: {
    Tile
  },

  methods: {
    test() {
      console.log('called')
    }
  }
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
