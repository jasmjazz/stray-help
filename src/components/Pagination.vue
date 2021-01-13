<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{'disabled': !pages.has_pre}">
          <a class="page-link" aria-label="Previous"
            @click.prevent="clickPage(pages.current_page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page"
          :class="{'active': pages.current_page === page}">
          <a class="page-link" @click.prevent="clickPage(page)">{{ page }}</a></li>
        <li class="page-item" :class="{'disabled': !pages.has_next}">
          <a class="page-link" aria-label="Next"
            @click.prevent="clickPage(pages.current_page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pages'],
  methods: {
    clickPage(page) {
      this.$emit('changePage', page);
    },
  },
};
</script>
