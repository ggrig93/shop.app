<template>
  <div class="wrapper-sidebar">
    <div class="widget woof_Widget sidebar-filters_wrap">
      <div class="widget widget-categories sidebar-filter" v-if="categories">
        <h3 class="widgettitle">Ընտրել ըստ տեսակի</h3>
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
      <div class="widget widget_filter_price sidebar-filter" v-if="price">
        <h4 class="widgettitle">
          Ընտրել ըստ գնի
        </h4>
        <div class="price-slider-wrapper">
          <div class="price-input">
<!--            <label for="min">Մինիմալ գին</label><br>-->
            <input id="min" placeholder="Մինիմալ գին" :value="filters.minPrice" @change="filters.minPrice = $event.target.value" />
          </div>
          <div class="line">-</div>
          <div class="price-input">
<!--            <label for="max">Մաքսիմալ գին</label><br>-->
            <input id="max" placeholder="Մաքսիմալ գին" :value="filters.maxPrice" @change="filters.maxPrice = $event.target.value" />
          </div>
        </div>
      </div>
      <div class="widget widget-brand sidebar-filter" v-if="brands">
        <h3 class="widgettitle">Ընտրել ըստ բրենդի</h3>
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
      <div class="widget widget_filter_size sidebar-filter" v-if="sizes">
        <h4 class="widgettitle">Ընտրել ըստ չափի</h4>
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
      <div class="widget widget-color sidebar-filter" v-if="colors">
        <h4 class="widgettitle">
          Ընտրել ըստ գույնի
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
      <div class="widget widget-tags sidebar-filter" v-if="tags && tags.length">
        <h3 class="widgettitle">
<!--          Popular Tags-->
          Հաճախ հարցվողները
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
  </div>
</template>

<script>
import Checkbox from "@/components/custom-input/Checkbox";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Sidebar",
  components: {Checkbox},
  props: {
    categories: {
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
        minPrice: "",
        maxPrice: "",
      },
    }
  },
  computed: {
    ...mapGetters(["search", "by_price", "per_page", "page", "category", "otherFilters"]),
  },
  watch: {
    filters: {
      deep: true,
      handler() {
        this.filterProduct()
        this.setPage(1)
      }
    },
    otherFilters: {
      immediate: true,
      deep: true,
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
        if(val['filter[per_page]']) {
          this.setPerPage(val['filter[per_page]'])
        }
        if(val['filter[page]']) {
          this.setPage(val['filter[page]'])
        }
        if(val['filter[min_price]']) {
          this.filters.minPrice =  this.queryToArray(val['filter[min_price]'])
        }
        if(val['filter[max_price]']) {
          this.filters.maxPrice =  this.queryToArray(val['filter[max_price]'])
        }
      }
    }
  },
  methods: {
    ...mapMutations(["setSearch", "setByPrice", "setPage", "setPerPage"]),
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
        'filter[categories]': this.category.length ? this.category : this.filters.selectedCategories,
        'filter[brands]': this.filters.selectedBrands,
        'filter[colors]': this.filters.selectedColors,
        'filter[sizes]': this.filters.selectedSizes,
        'filter[tags]': this.filters.selectedTags,
        'filter[by_price]': this.by_price,
        'filter[per_page]': this.per_page,
        'filter[min_price]': this.filters.minPrice,
        'filter[max_price]': this.filters.maxPrice,
        search: this.search,
        'filter[page]': this.page,
      }
      if(this.category.length) {
        this.filters.selectedCategories = this.category
      }
      const queryData = {...data }
      const params = new URLSearchParams(queryData).toString();
      window.history.replaceState(null, null, '?' + params);
      this.$store.dispatch('getFilteredProducts', data)
    }
  }
}
</script>

<style lang="scss">
.widget_filter_price {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.price-slider-wrapper {
  display: flex;
  align-items: center;
  width: 100%;

  .line {
    margin: 0 8px;
  }

  .price-input {
    width: 50%;

    label {
      margin: 0;
      color: #555;
    }
    input {
      width: 100%;
      color: #555;
      border: 1px solid #c9c9c9;
      border-radius: 10px;
      padding: 5px;
    }
    input::placeholder {
      color: #c9c9c9;
    }
  }
}
</style>