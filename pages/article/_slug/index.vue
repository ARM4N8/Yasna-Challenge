<template>
  <div class="pb-5">
    <article-header :articleData="articleResponse.article"></article-header>
    <article-body :articleData="articleResponse.article"></article-body>
    <article-comments
      :comments="commentsResponse.comments"
      :loading="loading"
    ></article-comments>
  </div>
</template>
<script>
import ArticleHeader from '@/components/article/ArticleHeader.vue'
import ArticleBody from '@/components/article/ArticleBody.vue'
import ArticleComments from '@/components/article/ArticleComments.vue'
export default {
  layout: 'Layout',
  head() {
    return {
      title: `article | ${this.articleResponse.article.title}`,
    }
  },
  components: { ArticleHeader, ArticleBody, ArticleComments },
  data() {
    return {
      loading: true,
      commentsResponse: [],
    }
  },
  async asyncData({ store, params }) {
    const articleResponse = await store.dispatch('getArticle', params.slug)

    return { articleResponse }
  },
  async mounted() {
    this.commentsResponse = await this.$store.dispatch(
      'getArticleComments',
      this.$route.params.slug
    )
    this.loading = false
  },
}
</script>
<style lang=""></style>
