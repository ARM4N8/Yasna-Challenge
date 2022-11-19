<template>
  <div class="col-lg-8">
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="35%"></b-skeleton>
          <b-skeleton width="20%"></b-skeleton>
          <b-skeleton width="60%"></b-skeleton>
          <b-skeleton class="mt-3" type="button" width="100%"></b-skeleton>
        </b-card>
      </template>
      <b-card v-if="comment">
        <p class="comment-body">
          {{ comment.body }}
        </p>
        <div slot="footer" class="d-flex flex-row flex-wrap">
          <div
            class="mr-3 d-flex align-items-center justify-content-center px-0"
          >
            <img class="comment-image rounded-circle img-fluid" :src="comment.author.image" />
          </div>
          <span class="author mr-auto pt-1">{{ comment.author.username }}</span>
          <span class="date text-muted"
            >{{ comment.createdAt | dateFormat }}
          </span>
        </div>
      </b-card>
    </b-skeleton-wrapper>
  </div>
</template>
<script>
export default {
  props: ['comment', 'loading'],
  filters: {
    dateFormat(date) {
      return new Date(Date.parse(date)).toLocaleDateString()
    },
  },
}
</script>
<style lang="scss" scoped>
.comment-body {
    font-size: .9rem;
}
.comment-image {
  width: 32px;
  height: 32px;
}
</style>
