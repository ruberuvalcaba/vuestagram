<template>
  <div class="single-photo">
    <Photo v-bind:post="post" v-bind:comments="comments" />
    <Comments v-bind:comments="postComments" v-on:handleSubmit="handleSubmitComment" v-on:removeComment="removeComment"/>
  </div>
</template>

<script>
import Photo from './Photo.vue'
import Comments from './Comments.vue'
import posts from '../data/posts.js'
import comments from '../data/comments.js'

export default {
  name: 'Single',
  components: { Photo, Comments },
  data () {
    return {
      post: posts[posts.findIndex((post) => post.code === this.$route.params.postId)],// get us the post
      postComments: comments[this.$route.params.postId] || [],
      comments
    }
  },
  methods: {
    handleSubmitComment: function (postId, author, comment) {
      const action = {
        author,
        comment
      }
      if(author !== '' && comment != '') {
        return this.postComments.push({
          user: author,
          text: comment
        });
      } else {
        return false;
      }
    },
    removeComment: function(postId, i) {
      return this.postComments.splice(i, 1);
    }
  }
}
</script>
