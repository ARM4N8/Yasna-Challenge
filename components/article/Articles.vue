<template>
  <div>
    <div>
      <article-item
        v-for="(a, index) in articles"
        :key="index"
        :articleData="a"
        :loading="loading"
      ></article-item>
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
}
</script>
<style lang="scss" scoped></style>
