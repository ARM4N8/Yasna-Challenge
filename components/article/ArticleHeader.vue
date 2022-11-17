<template>
  <div class="wrapper">
    <div class="container mb-4">
      <h1>
        {{ articleData.title }}
      </h1>
    </div>
    <div class="author-container">
      <div class="container">
        <div class="d-flex flex-row flex-wrap">
          <div
            class="mr-3 d-flex align-items-center justify-content-center px-0"
          >
            <img
              class="rounded-circle img-fluid"
              :src="articleData.author.image"
            />
          </div>
          <div class="mr-4 d-flex flex-column">
            <span class="author">{{ articleData.author.username }}</span>
            <small class="date"
              >{{ articleData.createdAt | dateFormat }}
            </small>
          </div>
          <div class="pt-2">
            <b-button
              class="mr-1"
              size="sm"
              :variant="
                articleData.author.followeing ? 'light' : 'outline-light'
              "
            >
              <i
                v-if="articleData.author.followeing"
                class="fa-regular fa-check"
              ></i>
              <i v-else class="fa-regular fa-plus"></i>
              {{ ` follow ${articleData.author.username}` }}
            </b-button>
            <b-button
              size="sm"
              :variant="articleData.favorited ? 'success' : 'outline-light'"
            >
              <i class="fa-regular fa-heart"></i>
              {{ ` favorite article (${articleData.favoritesCount})` }}
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['articleData'],
  filters: {
    dateFormat(date) {
      return new Date(Date.parse(date)).toLocaleDateString()
    },
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: #37944a;
  padding: 1.5rem 0 0;
  h1 {
    font-size: 2rem;
    color: rgb(237, 237, 237);
  }
}
.author-container {
  background-color: #164c20;
  padding: 1rem 0;
  .author {
    color: white;
  }
  .date {
    color: rgb(168, 168, 168);
  }
}
</style>
