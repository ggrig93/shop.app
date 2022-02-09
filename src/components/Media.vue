<template>
  <div class="comment-item" v-if="comment">
    <div class="author-view">
      <div class="author">
        <div class="avt">
          <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/${comment.authorImg}`" alt="img">
        </div>
        <h3 class="name"> {{comment.author}} </h3>
      </div>
      <div class="date-reply-comment">
        <span class="date-comment">{{comment.date}} days ago</span>
      </div>
    </div>
    <div class="comment-body">
      <div class="comment-content">
        <p>{{comment.message}}</p>
      </div>
      <div class="comment-reply-link">
        <span class="Comment">
          <i class="fa fa-commenting" aria-hidden="true"></i>
          Comment
        </span>
        <span class="like">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          9
        </span>
        <span class="dislike">
          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
          1
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Media",
  props: {
    comment: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style scoped>

</style>