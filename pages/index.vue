<template>
  <div>
    <a-header title="Article" text="Global feeds" />
    <div class="container d-flex flex-row flex-wrap-reverse  pb-5">
      <div class="col-12 col-lg-8">
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
      <div class="col-12 col-lg-4 mt-3">
        <popular-tags
          class="position-sticky"
          :tags="popularTags.tags"
          :loading="tagsLoading"
        ></popular-tags>
      </div>
    </div>
  </div>
</template>

<script>
import Articles from '@/components/article/Articles.vue'
import PopularTags from '@/components/article/PopularTags.vue'
export default {
  layout: 'Layout',
  head: {
    title: 'articles',
  },
  components: { Articles, PopularTags },
  data() {
    return {
      filter: { currentPage: 1, tag: null },
      loading: true,
      tagsLoading: true,
      articleResponse: [],
      popularTags: [],
    }
  },
  watch: {
    '$route.query.tag'(newValue, oldValue) {
      if (newValue != oldValue) {
        if (newValue) this.filter.tag = newValue
        else this.filter.tag = null
        this.getData()
      }
    },
  },
  async mounted() {
    if (this.$route.query.tag) this.filter.tag = this.$route.query.tag
    else this.filter.tag = null
    await this.getTags()
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
        'getArticles',
        this.filter
      )
      this.loading = false
    },
    async getTags() {
      this.tagsLoading = true
      this.popularTags = await this.$store.dispatch('getPopularTags')
      this.tagsLoading = false
    },
    scrollToTop() {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  },
}
</script>
