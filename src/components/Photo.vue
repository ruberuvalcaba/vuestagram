<template>
  <figure class="grid-figure">
    <div class="grid-photo-wrap">
      <router-link  :to="{path: `view/${post.code}`}">
        <img
          v-bind:src="post.display_src"
          v-bind:alt="post.caption"
          class="grid-photo" />
      </router-link>

      <!-- <CSSTransitionGroup transitionName="like"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <span :key="post.likes" class="likes-heart">{{ post.likes }}</span>
      </CSSTransitionGroup> -->

      <figcaption>
        <p>{{ post.caption }}</p>
        <div class="control-buttons">
          <button v-on:click="increment(post)" class="likes">
            &hearts; {{ post.likes }}
          </button>
          <router-link class="button" :to="{path: `/view/${post.code}`}">
            <span class="comment-count">
              <span class="speech-bubble"></span>
                {{ comments[post.code] ? comments[post.code].length : 0 }}
            </span>
          </router-link>
        </div>
      </figcaption>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'Photo',
  props: ['post', 'comments'],
  // props: {
  //   post: {
  //     type: Object,
  //     required: true
  //   },
  //   comments: [Object, Array]
  // },
  methods: {
    increment: function(post) {
      //console.log(post.likes += 1);

      return post.likes += 1

    }
  }
}
</script>
