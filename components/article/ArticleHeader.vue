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
              class="author-image rounded-circle img-fluid"
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
              @click="followProfile"
              class="mr-1 mb-2 mb-md-0"
              size="sm"
              :variant="following ? 'light' : 'outline-light'"
            >
              <i v-if="following" class="fa-regular fa-check"></i>
              <i v-else class="fa-regular fa-plus"></i>
              {{
                ` ${following ? 'unfollow' : 'follow'} ${
                  articleData.author.username
                }`
              }}
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
  data() {
    return {
      following: this.articleData.author.following,
    }
  },
  watch: {
    articleData(newValue, oldValue) {
      if (newValue != oldValue) {
        this.following = newValue.author.following
      }
    },
  },
  methods: {
    followProfile() {
      try {
        if (!this.$auth.loggedIn) {
          this.$toasted.error('You have to be logged in')
          return
        }
        console.log(this.following)
        if (this.following) {
          const response = this.$store.dispatch(
            'unfollowProfile',
            this.articleData.author.username
          )
          if (response) {
            this.following = false
          }
        } else {
          const response = this.$store.dispatch(
            'followProfile',
            this.articleData.author.username
          )
          if (response) {
            this.following = true
          }
        }
      } catch (error) {}
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
  .author-image {
    width: 32px;
    height: 32px;
  }
}
</style>
