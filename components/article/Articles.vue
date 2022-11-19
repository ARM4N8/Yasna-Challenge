<template>
  <div>
    <div>
      <div class="mt-3 mb-4 h3" v-if="$route.query.tag">
        <span class="text-muted"> filter: </span>
        <span class="text-primary mr-3">
          {{ ` #${$route.query.tag}` }}
        </span>
        <b-button @click="removeFilter" variant="outline-secondary" size="sm"
          >Remove filter</b-button
        >
      </div>
      <template v-if="articles.length > 0">
        <article-item
          v-for="(a, index) in articles"
          :key="index"
          :articleData="a"
          :loading="loading"
        ></article-item>
      </template>
      <template v-else>
        <p class="text-center my-5">No articles are here... yet.</p>
      </template>
    </div>
  </div>
</template>
<script>
import ArticleItem from '@/components/article/ArticleItem'
export default {
  props: {
    articles: {
      type: Array,
      default() {
        return ['', '', '', '', '', '', '', '', '', '']
      },
      description: 'Articles array',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    ArticleItem,
  },
  methods: {
    removeFilter() {
      this.$router.push({
        query: null,
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
