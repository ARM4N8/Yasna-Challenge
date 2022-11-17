<template>
  <div class="col-12 px-0 my-3">
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton
            class="mx-auto mb-4"
            type="button"
            width="100%"
          ></b-skeleton>
          <b-skeleton width="100%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="35%"></b-skeleton>
          <b-skeleton width="40%"></b-skeleton>
          <b-skeleton width="90%"></b-skeleton>
          <b-skeleton width="20%"></b-skeleton>
          <b-skeleton width="60%"></b-skeleton>
          <b-skeleton
            class="mx-auto mt-3"
            type="button"
            width="10%"
          ></b-skeleton>
        </b-card>
      </template>
      <b-card v-if="articleData">
        <div slot="header" class="d-flex flex-row">
          <div
            class="col-auto d-flex align-items-center justify-content-center px-0"
          >
            <img
              class="rounded-circle img-fluid"
              :src="articleData.author.image"
            />
          </div>
          <div class="col d-flex flex-column">
            <span>{{ articleData.author.username }}</span>
            <small class="text-muted"
              >{{ articleData.createdAt | dateFormat }}
            </small>
          </div>
          <div
            class="col-auto d-flex align-items-center justify-content-center px-0"
          >
            <b-button
              :variant="articleData.favorited ? 'success' : 'outline-success'"
              size="sm"
              ><i class="fa-regular fa-heart"></i>
              {{ articleData.favoritesCount }}</b-button
            >
          </div>
        </div>
        <div>
          <p class="mb-3">
            {{ articleData.title }}
          </p>
          <small class="text-muted">
            {{ articleData.description }}
          </small>
          <div class="col-12 px-0 mt-3">
            <span class="mr-1"> tags: </span>

            <span
              class="tag"
              v-for="(t, index) in articleData.tagList"
              :key="index"
            >
              {{ t }}
            </span>
          </div>
          <div class="col-12 text-center mt-3">
            <n-link :to="`/article/${articleData.slug}`">
              Read more ...
            </n-link>
          </div>
        </div>
      </b-card>
    </b-skeleton-wrapper>
  </div>
</template>
<script>
export default {
  props: ['articleData', 'loading'],
  filters: {
    dateFormat(date) {
      return new Date(Date.parse(date)).toLocaleDateString()
    },
  },
}
</script>
<style lang="scss" scoped>
.tag {
  border: 1px solid rgb(169, 169, 169);
  color: rgb(169, 169, 169);
  font-size: 0.7rem;
  padding: 4px 6px;
  margin-right: 4px;
  border-radius: 16px;
}
</style>
