<template>
  <div v-if="blog">
    <template v-if="layout === 'grid'">
      <div class="post-thumb">
        <router-link :to="{name: 'Blog', params: {id: blog.id}}">
          <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/slider-blog-thumb-${blog.id}.jpg`" alt="img">
        </router-link>
        <div class="category-blog">
          <ul class="list-category">
            <li class="category-item">
              <a href="#">Skincare</a>
            </li>
          </ul>
        </div>
        <div class="post-item-share">
          <a href="#" class="icon">
            <i class="fa fa-share-alt" aria-hidden="true"></i>
          </a>
          <div class="box-content">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i class="fa fa-pinterest"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="blog-info">
        <div class="blog-meta">
          <div class="post-date">
            Agust 17, 09:14 am
          </div>
          <span class="view">
											<i class="icon fa fa-eye" aria-hidden="true"></i>
											631
										</span>
          <span class="comment">
											<i class="icon fa fa-commenting" aria-hidden="true"></i>
											84
										</span>
        </div>
        <h2 class="blog-title">
          <a href="#">We bring you the best </a>
        </h2>
        <div class="main-info-post">
          <p class="des">
            Phasellus condimentum nulla a arcu lacinia, a venenatis ex congue.
            Mauris nec ante magna.
          </p>
          <a class="readmore" href="#">Read more</a>
        </div>
      </div>
    </template>
    <template v-if="layout === 'list'">
      <div class="post-format">
        <router-link :to="{name: 'Blog', params: {id: blog.id}}">
          <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/blog-item-list-${blog.id}.jpg`" alt="img">
        </router-link>
      </div>
      <div class="post-info">
        <div class="category-blog">
          <a href="#">ACCESSORIES</a>
        </div>
        <h3 class="post-title">
          <a href="#">Fast-Track Your lorem ipsum<span>[...]</span></a>
        </h3>
        <div class="main-info-post">
          <p class="des">
            Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat
          </p>
        </div>
        <div class="author-view">
          <div class="author">
            <div class="avt">
              <img src="http://ledthanhdat.vn/html/ysera/assets/images/avt-blog1.png" alt="img">
            </div>
            <h3 class="name">
              Adam Smith
            </h3>
          </div>
          <div class="review">
            <div class="view">
              <span class="icon-view">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </span>
              <span class="count">
                631
              </span>
            </div>
            <div class="s-comments">
              <span class="icon-cmt">
                <i class="fa fa-commenting" aria-hidden="true"></i>
              </span>
              <span class="count">
                82
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "BlogCart",
  props: {
    layout: {
      type: String,
      default: 'grid'
    },
    blog: {
      type: Object,
      default: () => null
    }
  }
}
</script>