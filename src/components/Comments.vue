<template>
  <div class="comments">
    <div class="comment"  v-for="(comment, i) in comments" :key="i">
      <p>
        <strong>{{ comment.user }}</strong>
        {{ comment.text }}
        <button class="remove-comment" v-on:click="removeComment(postId, i)">&times;</button>
      </p>
    </div>

    <form class="comment-form" v-on:submit.prevent="handleSubmit(postId, author, comment)">
      <input type="text" v-model="author" placeholder="Author"></input>
      <input type="text" v-model="comment" placeholder="Comment"></input>
      <input type="submit" hidden></input>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Comments',
    props: ['comments'],
    data () {
      return {
        postId: this.$route.params.postId,
        author: '',
        comment: ''
      }
    },
    methods: {
      handleSubmit: function(postId, author, comment){
        this.$emit('handleSubmit', postId, author, comment);
        if(author !== '' && comment != '')
          this.$data.author = this.$data.comment = "";
      },
      removeComment: function(postId, index) {
        this.$emit('removeComment', postId, index)
      }
    }
  }
</script>
