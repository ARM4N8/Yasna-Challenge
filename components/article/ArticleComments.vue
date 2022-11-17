<template>
  <div class="container mt-4">
    <h3 class="text-center">Comments</h3>
    <p class="text-center mb-3">
      <n-link to="signIn"> Sign in</n-link> or
      <n-link to="signUp"> Sign up</n-link> to add comments on this article.
    </p>
    <div class="d-flex flex-column align-items-center">
      <article-comment-item
        class="mb-3"
        v-for="(c, index) in comments"
        :key="index"
        :comment="c"
        :loading="loading"
      >
      </article-comment-item>
    </div>
  </div>
</template>
<script>
import ArticleCommentItem from '@/components/article/ArticleCommentItem.vue'
export default {
  props: {
    comments: {
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
  components: { ArticleCommentItem },
}
</script>
<style lang="scss" scoped></style>
