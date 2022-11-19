const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  async getArticles({}, filter) {
    try {
      let url = `articles?limit=10&offset=${filter.page * 10}`
      if (filter.tag) url += `&tag=${filter.tag}`
      const response = await this.$axios.$get(url)
      return response
    } catch (error) {}
  },
  async getMyArticles({}, filter) {
    try {
      let url = `articles?limit=10&offset=${filter.page * 10}&author=${
        filter.username
      }`
      if (filter.tag) url += `&tag=${filter.tag}`
      const response = await this.$axios.$get(url)
      return response
    } catch (error) {}
  },
  async getFavoriteArticles({}, filter) {
    try {
      let url = `articles?limit=10&offset=${filter.page * 10}&favorited=${
        filter.username
      }`
      if (filter.tag) url += `&tag=${filter.tag}`
      const response = await this.$axios.$get(url)
      return response
    } catch (error) {}
  },
  async getArticle({}, slug) {
    try {
      const response = await this.$axios.$get(`articles/${slug}`)
      return response
    } catch (error) {}
  },
  async getArticleComments({}, slug) {
    try {
      const response = await this.$axios.$get(`articles/${slug}/comments`)
      return response
    } catch (error) {}
  },
  async addArticle({}, payload) {
    try {
      const response = await this.$axios.$post(`articles`, payload)
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async addArticleComment({}, payload) {
    try {
      const response = await this.$axios.$post(
        `articles/${payload.slug}/comments`,
        { comment: { body: payload.comment } }
      )
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async favoriteArticle({}, slug) {
    try {
      const response = await this.$axios.$post(`/articles/${slug}/favorite`)
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async unFavoriteArticle({}, slug) {
    try {
      const response = await this.$axios.$delete(`/articles/${slug}/favorite`)
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async getPopularTags() {
    try {
      const response = await this.$axios.$get(`tags`)
      return response
    } catch (error) {}
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
