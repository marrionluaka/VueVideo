<template lang="pug" functional>
  .play-progress
    span.play-progress-watched {{ props.watchedItems }}
    span.play-progress-bar
    span.play-progress-list {{ props.playListLength }}
</template>