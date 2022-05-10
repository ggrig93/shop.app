<template>
  <div class="pagination clearfix">
    <div class="nav-link">
      <!--      <a href="javascript:void(0)" class="page-numbers">-->
      <!--        <button-->
      <!--          @click="onClickFirstPage"-->
      <!--          :disabled="isInFirstPage"-->
      <!--        >-->
      <!--          <i class="icon fa fa-angle-left" aria-hidden="true"></i>-->
      <!--          <i class="icon fa fa-angle-left" aria-hidden="true"></i>-->
      <!--        </button>-->
      <!--      </a>-->
      <a
          v-for="(page, i) in pages"
          :key="i"
          class="page-numbers"
          :class="{
            current: isPageActive(page.label),
             'page-arrow': page.label.includes('Prev') || page.label.includes('Next')
          }">
        <button
            v-if="page.label.includes('Prev')"
            @click.prevent="onClickPreviousPage"
            :disabled="isInFirstPage"
        >
          <i class="icon fa fa-angle-left" aria-hidden="true"></i>
        </button>
        <button
            v-else-if="page.label.includes('Next')"
            @click.prevent="onClickNextPage"
            :disabled="isInLastPage"
        >
          <i class="icon fa fa-angle-right" aria-hidden="true"></i>
        </button>
        <button v-else
            @click="onClickPage(page.label)"
        >
          {{ page.label }}
        </button>
      </a>
<!--      <a href="javascript:void(0)" class="page-numbers">-->
<!--        <button-->
<!--            @click="onClickLastPage"-->
<!--            :disabled="isInLastPage"-->
<!--        >-->
<!--          <i class="icon fa fa-angle-right" aria-hidden="true"></i>-->
<!--          <i class="icon fa fa-angle-right" aria-hidden="true"></i>-->
<!--        </button>-->
<!--      </a>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Pageination",
  props: {
    paginate: {
      type: Object,
      default: () => {
      }
    },
    totalPages: {
      type: Number,
    },
    perPage: {
      type: Number,
    },
  },
  computed: {
    currentPage() {
      return this.paginate?.current_page
    },
    lastPage() {
      return this.paginate?.last_page
    },
    pages() {
      return this.paginate?.links
    },
    isInFirstPage() {
      return parseInt(this.currentPage) === 1;
    },
    isInLastPage() {
      return parseInt(this.currentPage) === parseInt(this.lastPage);
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === parseInt(page);
    },
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.currentPage);
    }
  }
}
</script>

<style scoped lang="scss">
button {
  background-color: transparent;
  padding: 0;
  height: inherit;
  width: inherit;
  color: inherit;
}
.page-arrow {
  button:disabled,
  button[disabled]{
    color: #f1f1f1;
  }

  &:hover {
    color: unset;
    border-color: #F1F1F1;
    background-color: unset;
  }
}
</style>