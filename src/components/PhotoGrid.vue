<template>
  <div class="photo-grid">
    <Photo v-for="(post, i) in appData.posts" v-bind:post="post" v-bind:comments="appData.comments" :key="i" />
  </div>
</template>

<script>
import Photo from './Photo.vue'

export default {
  name: 'PhotoGrid',
  components: { Photo },
  props: ['appData']
}
</script>
