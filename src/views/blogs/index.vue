<template>
  <div class="main-content main-content-blog list right-sidebar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <Breadcrumbs/>
        </div>
      </div>
      <div class="row">
        <div class="content-area content-blog col-lg-9 col-md-8 col-sm-12 col-xs-12">
          <div class="site-main">
            <h3 class="custom_blog_title">
              Our Blog
            </h3>
            <div class="blog-list list-style">
              <div class="blog-item" v-for="i in 5" :key="i">
                <BlogCart layout="list" :blog="{id: i}" />
              </div>
            </div>
            <Pagination class="style2"/>
          </div>
        </div>
        <router-view></router-view>
        <div class="sidebar sidebar-blog col-lg-3 col-md-4 col-sm-12 col-xs-12">
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
import Pagination from "@/components/Pagination";
import BlogCart from "@/components/blogs/BlogCart";
import Sidebar from "@/components/Sidebar";
import data from '@/customdata/products'
import Breadcrumbs from "@/components/Breadcrumbs";
export default {
  name: "List",
  components: {Breadcrumbs, Sidebar, BlogCart, Pagination},
  data() {
    return {
      socials: data.socials,
      categories: data.categories,
      articles: data.articles,
      tags: data.tags
    }
  }
}
</script>

<style scoped>

</style>