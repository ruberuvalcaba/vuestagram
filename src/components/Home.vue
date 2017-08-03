<template>
  <div>
    <img src="../assets/logo.png" alt="" class="img-logo"/>
    <h1><router-link to="/">ueStagram</router-link></h1>
    <PhotoGrid v-bind:appData="defaultState" />
  </div>
</template>

<script>
import PhotoGrid from './PhotoGrid.vue'
import posts from '../data/posts.js'
import comments from '../data/comments.js'

export default {
  name: 'home',
  components: { PhotoGrid },
  data () {
    return {
      defaultState: {
        posts,
        comments
      }
    }
  }
}
</script>
