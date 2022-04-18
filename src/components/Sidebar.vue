<template>
  <div class="wrapper-sidebar">
    <div class="widget widget-socials" v-if="socials">
      <h3 class="widgettitle">
        Follow us
      </h3>
      <div class="content-socials">
        <div class="social-list">
          <a :href="social.url" target="_blank" v-for="social in socials" :key="social.id" class="social-item">
            <i :class="['fa', social.icon]" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="widget woof_Widget">
      <div class="widget widget-categories" v-if="categories">
        <h3 class="widgettitle">Categories</h3>
        <ul class="list-categories">
          <li v-for="cat in categories" :key="cat">
            <Checkbox id="category" :label="cat" :input-value="cat" v-model="selectedCategories" />
          </li>
        </ul>
      </div>
      <div class="widget widget-post" v-if="articles">
        <h3 class="widgettitle">Popular Articles</h3>
        <ul class="ysera-posts">
          <li class="widget-post-item" v-for="article in articles" :key="article.id">
            <div class="thumb-blog">
              <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/${article.img}`" alt="img">
            </div>
            <div class="post-content">
              <div class="cat">
                <a href="#">{{article.category}}</a>
              </div>
              <h5 class="post-title"><router-link :to="{name: 'Blog', params: {id: article.id}}">{{ article.title }} <span>[...]</span></router-link></h5>
            </div>
          </li>
        </ul>
      </div>
      <div class="widget widget_filter_price" v-if="price">
        <h4 class="widgettitle">
          Price
        </h4>
        <div class="price-slider-wrapper">
          <div data-label-reasult="Range:" :data-min="price.min" :data-max="price.max" data-unit="$"
               class="slider-range-price " data-value-min="0" data-value-max="1000">
          </div>
          <div class="price-slider-amount">
            <span class="from">$45</span>
            <span class="to">$215</span>
          </div>
        </div>
      </div>
      <div class="widget widget-brand" v-if="brands">
        <h3 class="widgettitle">Brand</h3>
        <ul class="list-brand">
          <li v-for="brand in brands" :key="brand.id">
            <Checkbox id="brand" :label="brand.name" :input-value="brand.name" v-model="selectedBrands"/>
          </li>
        </ul>
      </div>
      <div class="widget widget_filter_size" v-if="sizes">
        <h4 class="widgettitle">Size</h4>
        <ul class="list-brand">
          <li v-for="size in sizes" :key="size">
            <Checkbox id="size" :label="size" :input-value="size" v-model="selectedSizes"/>
          </li>
        </ul>
      </div>
      <div class="widget widget-color" v-if="colors">
        <h4 class="widgettitle">
          Color
        </h4>
        <div class="list-color">
          <a href="#" v-for="color in colors"
             :key="color.id"
             :style="{backgroundColor: color.code}"
          ></a>
        </div>
      </div>
      <div class="widget widget-tags" v-if="tags">
        <h3 class="widgettitle">
          Popular Tags
        </h3>
        <ul class="tagcloud">
          <li class="tag-cloud-link active" v-for="tag in tags" :key="tag">
            <a href="#">{{tag}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="widget newsletter-widget">
      <div class="newsletter-form-wrap ">
        <h3 class="title">Subscribe to Our Newsletter</h3>
        <div class="subtitle">
          More special Deals, Events & Promotions
        </div>
        <input type="email" class="email" placeholder="Your email letter">
        <button type="submit" class="button submit-newsletter">Subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "@/components/custom-input/Checkbox";
export default {
  name: "Sidebar",
  components: {Checkbox},
  props: {
    socials: {
      type: Array,
      default: () => null
    },
    categories: {
      type: Array,
      default: () => null
    },
    articles: {
      type: Array,
      default: () => null
    },
    brands: {
      type: Array,
      default: () => null
    },
    colors: {
      type: Array,
      default: () => null
    },
    sizes: {
      type: Array,
      default: () => null
    },
    tags: {
      type: Array,
      default: () => null
    },
    price: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      selectedCategories: [],
      selectedBrands: [],
      selectedColors: [],
      selectedSizes: []
    }
  }
}
</script>

<style scoped>

</style>