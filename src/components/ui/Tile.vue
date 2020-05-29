<template lang="pug" functional>
  li
    a(href='#' v-on:click='listeners.onSelected(props.tileIndex, props.tileId)')
      div 5
      div |>
      div
        p Pass Props Between Components with Vue Slot Scope
        span 3:01 - Super Mario
</template>
