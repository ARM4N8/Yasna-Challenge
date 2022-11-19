<template>
  <div>
    <a-header :title="$auth.user.username" text="Profile" />
    <div class="container d-flex flex-row pb-5 pt-3">
      <div class="col-12 col-lg-8">
        <h3>
          Favorite articles
        </h3>
        <articles
          :loading="loading"
          :articles="articleResponse.articles"
          class="mb-4"
        />
        <div
          v-if="articleResponse.articlesCount > 0"
          class="d-flex flex-row justify-content-center"
        >
          <b-pagination
            v-model="filter.currentPage"
            pills
            :per-page="10"
            :total-rows="articleResponse.articlesCount"
            @change="pageChange"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Articles from '@/components/article/Articles.vue'
export default {
  layout: 'Layout',
  middleware: 'auth',
  head: {
    title: `Profile`,
  },
  components: { Articles },
  data() {
    return {
      filter: { currentPage: 1, tag: null, username: this.$auth.user.username },
      loading: true,
      articleResponse: [],
    }
  },
  async mounted() {
    await this.getData()
  },
  methods: {
    pageChange() {
      this.getData()
    },
    async getData() {
      this.loading = true
      this.articleResponse.articles = ['', '', '', '', '', '', '', '', '', '']
      this.scrollToTop()
      this.articleResponse = await this.$store.dispatch(
        'getFavoriteArticles',
        this.filter
      )
      this.loading = false
    },
    scrollToTop() {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  },
}
</script>
<style lang="scss" scoped></style>
