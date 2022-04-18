<template>
  <div class="pagination clearfix">
    <div class="nav-link">
      <a href="javascript:void(0)" class="page-numbers">
        <button
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
        >
          <i class="icon fa fa-angle-left" aria-hidden="true"></i>
          <i class="icon fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </a>
      <a href="javascript:void(0)" class="page-numbers">
        <button
          @click.prevent="onClickPreviousPage"
          :disabled="isInFirstPage"
        >
          <i class="icon fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </a>
      <a href="javascript:void(0)" class="page-numbers" v-for="page in pages" :key="page.name" :class="{ current: isPageActive(page.name) }">
        <button
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
        >
          {{ page.name }}
        </button>
      </a>
      <a href="javascript:void(0)" class="page-numbers">
        <button
          @click.prevent="onClickNextPage"
          :disabled="isInLastPage"
        >
          <i class="icon fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </a>
      <a href="javascript:void(0)" class="page-numbers">
        <button
          @click="onClickLastPage"
          :disabled="isInLastPage"
        >
          <i class="icon fa fa-angle-right" aria-hidden="true"></i>
          <i class="icon fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pageination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      if (this.totalPages > this.maxVisibleButtons) {
        for (
            let i = this.startPage;
            i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
            i++
        ) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage
          });
        }
      } else {
        for (
            let i = 1;
            i <= this.totalPages;
            i++
        ) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage
          });
        }
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
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
      this.$emit('pagechanged', this.totalPages);
    }
  }
}
</script>

<style scoped>
  button {
    background-color: transparent;
    padding: 0;
    height: inherit;
    width: inherit;
    color: inherit;
  }
</style>