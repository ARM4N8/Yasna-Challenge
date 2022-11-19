<template>
  <b-navbar
    :sticky="true"
    fixed="top"
    toggleable="lg"
    type="dark"
    variant="dark"
  >
    <div class="container">
      <b-navbar-brand>
        <img class="logo" src="/yasna.png" alt="yasna logo" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Articles</b-nav-item>
          <b-nav-item v-if="$auth.loggedIn" to="/my-articles">My articles</b-nav-item>
          <b-nav-item v-if="$auth.loggedIn" to="/new-article"
            ><i class="fa-light fa-pen mr-1"></i>New article</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-if="$auth.loggedIn" right>
            <template #button-content>
              <img
                class="profile-image"
                :src="$auth.user.image"
                alt="profile picture"
              />
              <span>
                {{ $auth.user.username }}
              </span>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item to="/setting">Setting</b-dropdown-item>
            <b-dropdown-item @click="logOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item v-else to="/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
export default {
  methods: {
    logOut() {
      try {
        this.$store.dispatch('logout')
      } catch (error) {}
    },
  },
}
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 60px;
  margin-right: 12px;
}
.profile-image {
  width: 100%;
  max-width: 35px;
  border-radius: 50%;
  margin-right: 4px;
}
</style>
