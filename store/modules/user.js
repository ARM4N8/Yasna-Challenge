const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  async userSignup({}, payload) {
    const response = await this.$axios.$post('users', payload)
    return response
  },
  async userSignin({}, payload) {
    try {
      const response = await this.$auth.loginWith('userLogin', {
        data: payload,
      })
      return response
    } catch (error) {
      return false
    }
  },
  async followProfile({}, username) {
    try {
      console.log('follow', username)
      const response = await this.$axios.$post(
        `profiles/${username}/follow`
      )
      return response
    } catch (error) {}
  },
  async unfollowProfile({}, username) {
    try {
      const response = await this.$axios.$delete(
        `profiles/${username}/follow`
      )
      return response
    } catch (error) {}
  },
  async getUserProfile() {
    try {
      const response = await this.$axios.$get('/user')
      return response
    } catch (error) {}
  },
  async updateProfile({}, payload) {
    try {
      const response = await this.$axios.$put('/user', { user: payload })
      return response
    } catch (error) {}
  },
  async logout() {
    try {
      await this.$auth.logout()
    } catch (error) {}
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
