const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  async getArticles({}, page) {
    try {
      const response = await this.$axios.$get(
        `articles?limit=10&offset=${page * 10}`
      )
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
