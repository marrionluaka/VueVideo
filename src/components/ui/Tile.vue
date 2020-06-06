<template lang="pug" functional>
  li
    a.flex.flex-row.items-center.p-4.leading-tight(href='#' v-on:click='listeners.onSelected(props.tileIndex, props.tileId)')
      span.pr-10.py-2.m-2 5
      div
        p.py-2 Pass Props Between Components with Vue Slot Scope
        span.text-xs 3:01 - Super Mario
    hr
</template>