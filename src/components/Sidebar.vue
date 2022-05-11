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
          <li v-for="cat in categories" :key="cat.id">
            <Checkbox
                id="category"
                :label="cat.name"
                :input-value="cat.id"
                v-model="filters.selectedCategories"
            />
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
                <a href="#">{{ article.category }}</a>
              </div>
              <h5 class="post-title">
                <router-link :to="{name: 'Blog', params: {id: article.id}}">{{ article.title }} <span>[...]</span>
                </router-link>
              </h5>
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
            <Checkbox
                id="brand"
                :label="brand.name"
                :input-value="brand.id"
                v-model="filters.selectedBrands"
            />
          </li>
        </ul>
      </div>
      <div class="widget widget_filter_size" v-if="sizes">
        <h4 class="widgettitle">Size</h4>
        <ul class="list-brand">
          <li v-for="size in sizes" :key="size.id">
            <Checkbox
                id="size"
                :label="size.name"
                :input-value="size.id"
                v-model="filters.selectedSizes"
            />
          </li>
        </ul>
      </div>
      <div class="widget widget-color" v-if="colors">
        <h4 class="widgettitle">
          Color
        </h4>
        <div class="list-color">
          <a v-for="color in colors"
             :key="color.id"
             :style="{backgroundColor: color.code}"
             :class="{
               active: filters.selectedColors.includes(color.id),
               'black-check': color.name === 'White'
             }"
             class="pointer"
             @click="selectColor(color)"
          ></a>
        </div>
      </div>
      <div class="widget widget-tags" v-if="tags">
        <h3 class="widgettitle">
          Popular Tags
        </h3>
        <ul class="tagcloud">
          <li
              class="tag-cloud-link pointer"
              v-for="tag in tags"
              :key="tag.id"
              :class="{active: filters.selectedTags.includes(tag.id) }"
              @click="selectTag(tag)"
          >
            <a class="pointer">{{ tag.name }}</a>
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
import {mapGetters, mapMutations} from "vuex";

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
      filters: {
        selectedCategories: [],
        selectedBrands: [],
        selectedColors: [],
        selectedSizes: [],
        selectedTags: [],
      }
    }
  },
  computed: {
    ...mapGetters(["search", "by_price", "page"]),
  },
  watch: {
    filters: {
      deep: true,
      handler() {
        this.filterProduct()
      }
    },
    search: {
      immediate: true,
      handler() {
        this.filterProduct()
      }
    },
    by_price: {
      immediate: true,
      handler() {
        this.filterProduct()
      }
    },
    page: {
      immediate: true,
      handler() {
        this.filterProduct()
      }
    },
    '$route.query': {
      immediate: true,
      deep: true,
      handler(val) {
        if(val['filter[categories]']) {
          this.filters.selectedCategories = this.queryToArray(val['filter[categories]'])
        }
        if(val['filter[brands]']) {
          this.filters.selectedBrands = this.queryToArray(val['filter[brands]'])
        }
        if(val['filter[colors]']) {
          this.filters.selectedColors = this.queryToArray(val['filter[colors]'])
        }
        if(val['filter[sizes]']) {
          this.filters.selectedSizes = this.queryToArray(val['filter[sizes]'])
        }
        if(val['filter[tags]']) {
          this.filters.selectedTags = this.queryToArray(val['filter[tags]'])
        }
        if(val.search) {
          this.setSearch(val.search.trim())
        }
        if(val['filter[by_price]']) {
          this.setByPrice(val['filter[by_price]'])
        }
        if(val['filter[page]']) {
          this.setPage(val['filter[page]'])
        }
      }
    }
  },
  methods: {
    ...mapMutations(["setSearch", "setByPrice", "setPage"]),
    queryToArray(val) {
      return typeof val === 'string' ? val.split(",").map(item => parseInt(item)) : val
    },
    selectColor(color) {
      if (this.filters.selectedColors.includes(color.id)) {
        this.filters.selectedColors = this.filters.selectedColors.filter(item => item !== color.id)
      } else {
        this.filters.selectedColors.push(color.id)
      }
    },
    selectTag(tag) {
      if (this.filters.selectedTags.includes(tag.id)) {
        this.filters.selectedTags = this.filters.selectedTags.filter(item => item !== tag.id)
      } else {
        this.filters.selectedTags.push(tag.id)
      }
    },
    filterProduct() {
      const data = {
        'filter[categories]': this.filters.selectedCategories,
        'filter[brands]': this.filters.selectedBrands,
        'filter[colors]': this.filters.selectedColors,
        'filter[sizes]': this.filters.selectedSizes,
        'filter[tags]': this.filters.selectedTags,
        'filter[by_price]': this.by_price,
        search: this.search,
        'filter[page]': this.page,
      }
      const queryData = {...data }
      const params = new URLSearchParams(queryData).toString();
      window.history.replaceState(null, null, '?' + params);
      this.$store.dispatch('getFilteredProducts', data)
    }
  }
}
</script>

<style scoped>

</style>