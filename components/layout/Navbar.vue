<template>
  <b-navbar :sticky="true" fixed="top" toggleable="lg" type="dark" variant="dark">
<div class="container">
      <b-navbar-brand>
      <img class="logo" src="/yasna.png" alt="yasna logo" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Articles</b-nav-item>
        <b-nav-item to="/about-us">About us</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <span>ARM4N</span>
          </template>
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
</div>
  </b-navbar>
</template>
<script>
export default {
  methods: {
    signOut() {
      try {
        console.log('signout')
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
</style>
