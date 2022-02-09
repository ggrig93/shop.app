<template>
  <div class="main-content main-content-blog single right-sidebar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumbs />
        </div>
      </div>
      <div class="row">
        <div class="content-area content-blog col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <div class="site-main">
            <div class="post-item">
              <div class="post-format">
                <a href="#">
                  <img src="http://ledthanhdat.vn/html/ysera/assets/images/blog1.jpg" alt="img">
                </a>
              </div>
              <div class="post-infor">
                <div class="category-blog">
                  <a href="#">LIFE STYLE</a>
                </div>
                <h3 class="post-title">
                  <a href="#">New Designer Outdoor Items</a>
                </h3>
                <div class="main-info-post">
                  <p>
                    Duis quis porta enim.
                    Nunc molestie porta elit, sit amet mattis lectus mollis et.
                    Phasellus condimentum nulla a arcu lacinia, a
                    venenatis ex congue. Mauris nec ante magna.
                    Duis lacus massa, consequat at mollis gravida, ornare vel mi.
                    Nam dignissim sagittis quam nec consequat.
                    Maecenas vel nulla eleifend, euismod magna sed, tristique velit.
                    Nam sed eleifend dui, eu eleifend leo.
                  </p>
                  <p>
                    Mauris ornare eros quis placerat mollis.
                    Duis ornare euismod risus at dictum.
                    Proin at porttitor metus. Nunc luctus nisl suscipit,
                    hendrerit ligula non, mattis dolor.
                    In sit amet enim in odio viverra maximus luctus vitae orci.
                    Nunc faucibus ipsum vel massa
                    venenatis pretium. Suspendisse volutpat ac nisi at commodo.
                  </p>
                  <blockquote>
                    <p>
                      Maecenas vel nulla eleifend, euismod magna sed, tristique velit.
                      Nam sed eleifend dui, eu eleifend leo.
                      Mauris ornare eros quis placerat mollis.
                      Duis ornare euismod risus at dictum.
                      Proin at porttitor metus.
                      Nunc luctus nisl suscipit, hendrerit ligula non, mattis dolor.
                    </p>
                    <div class="author">
											<span class="name">
												Koan Conella
											</span>
                      <span class="desc">
												Creative Copywriter
											</span>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
            <div class="blog-articles related-articles">
              <h3 class="custom_blog_title">
                Related Articles
              </h3>
              <vue-slick-carousel class="blog-slider style-1 owl-slick" v-bind="settings">
                <template #prevArrow>
                  <span class="fa fa-angle-left"></span>
                </template>
                <div class="blog-item" v-for="i in 5" :key="i">
                  <BlogCart layout="list" :blog="{id: i}" />
                </div>
                <template #nextArrow>
                  <span class="fa fa-angle-right"></span>
                </template>
              </vue-slick-carousel>
              <div class="main-info-post">
                <p class="des">
                  Nam sed eleifend dui, eu eleifend leo.Mauris ornare eros quis placerat mollis. Duis ornare euismod risus at dictum. Proin at porttitor metus. Nunc luctus nisl suscipit, hendrerit ligula non, mattis dolor. In sit amet enim in odio viverra maximus luctus vitae orci. Nunc faucibus ipsum vel massa venenatis pretium. Suspendisse volutpat ac nisi at commodo.
                </p>
                <p class="des">
                  Mauris tempor eros vel velit condimentum venenatis. Aliquam ut viverra sapien. Sed condimentum semper faucibus. Maecenas feugiat purus eget interdum sagittis. Ut pellentesque gravida justo non rhoncus. Nunc ullamcorper tortor id aliquet luctus. Proin varius aliquam consequat. Curabitur a commodo diam, vitae pellentesque urna. Fusce posuere turpis arcu, fringilla varius nunc dictum in. Praesent pulvinar sit amet nulla nec elementum.
                </p>
              </div>
            </div>
            <div class="tags tags-blog">
              <h3 class="widgettitle">
                Tags:
              </h3>
              <ul class="tagcloud">
                <li class="tag-cloud-link" v-for="tag in tags" :key="tag">
                  <a href="#">{{tag}}</a>
                </li>
              </ul>
            </div>
            <div class="view-share">
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
              <div class="share">
                <h3 class="title">share</h3>
                <i class="icon fa fa-facebook-square" aria-hidden="true"></i>
                <i class="icon fa fa-linkedin" aria-hidden="true"></i>
                <i class="icon fa fa-twitter" aria-hidden="true"></i>
              </div>
            </div>
            <div class="comments-area">
              <h3 class="custom_blog_title">
                Comments <span class="count">(2)</span>
              </h3>
              <form class="comment-form">
                <p class="comment-reply-content">
                  <textarea  rows="6" placeholder="Write your comment" class="input-form"></textarea>
                </p>
                <p class="form-submit">
									<span class="controll">
										<i class="icon fa fa-file-image-o" aria-hidden="true"></i>
										<i class="icon fa fa-paperclip" aria-hidden="true"></i>
										<i class="icon fa fa-smile-o" aria-hidden="true"></i>
										<button class="submit button">POST A COMMENT</button>
									</span>
                </p>
              </form>
              <ul class="comment-list">
                <li class="comment" v-for="comment in comments" :key="comment.id">
                  <Media :comment="comment" class="comment-item" />
                  <ul class="children" v-if="comment.children.length">
                    <li v-for="com in comment.children" :key="com.id">
                      <Media :comment="com" class="comment-item" />
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Pagination class="style1" />
          </div>
        </div>
        <div class="sidebar sidebar-single-blog col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <Sidebar
              :socials="socials"
              :categories="categories"
              :articles="articles"
              :tags="tags"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import data from "@/customdata/products";
import BlogCart from "@/components/blogs/BlogCart";
import VueSlickCarousel from "vue-slick-carousel";
import Pagination from "@/components/Pagination";
import Media from '@/components/Media'
import Breadcrumbs from "@/components/Breadcrumbs";

export default {
  name: "Blog",
  components: {Breadcrumbs, Pagination, BlogCart, Sidebar, VueSlickCarousel, Media},
  data() {
    return {
      settings: {
        "autoplay":false,
        "autoplaySpeed":1000,
        "arrows":true,
        "dots":false,
        "infinite":true,
        "speed":800,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        responsive: [{
          "breakpoint": 1200,
          "settings": {"slidesToShow":1 }
        }]
      },
      socials: data.socials,
      categories: data.categories,
      articles: data.articles,
      tags: data.tags,
      comments: data.comments
    }
  }
}
</script>