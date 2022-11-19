<template>
  <div>
    <a-header :title="$auth.user.username" text="Setting" />
    <div class="container pb-5 pt-3">
      <div class="col-lg-8 mx-auto">
        <b-card>
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
              <validation-provider
                name="Username"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group label="Username">
                  <b-form-input
                    v-model="model.username"
                    :state="getValidationState(validationContext)"
                    placeholder="Username"
                  ></b-form-input>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider
                name="Email"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group label="Email">
                  <b-form-input
                    v-model="model.email"
                    :state="getValidationState(validationContext)"
                    placeholder="Email"
                  ></b-form-input>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider name="Password" v-slot="validationContext">
                <b-form-group label="New password">
                  <b-form-input
                    type="password"
                    v-model="model.password"
                    :state="getValidationState(validationContext)"
                    placeholder="New password"
                  ></b-form-input>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider name="Bio" v-slot="validationContext">
                <b-form-group label="Bio">
                  <b-form-textarea
                    :state="getValidationState(validationContext)"
                    v-model="model.bio"
                    placeholder="Short bio about you"
                    rows="3"
                  ></b-form-textarea>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider
                name="Profile picture"
                v-slot="validationContext"
              >
                <b-form-group label="Profile picture">
                  <b-form-input
                    v-model="model.image"
                    :state="getValidationState(validationContext)"
                    placeholder="url of your ptofile picture"
                  ></b-form-input>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <div class="d-flex flex-row justify-content-center mt-4">
                <b-button type="submit" variant="success" class="mb-2"
                  >Save</b-button
                >
              </div>
            </b-form>
          </validation-observer>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert2'
export default {
  layout: 'Layout',
  middleware: 'auth',
  head: {
    title: `Profile`,
  },
  data() {
    return {
      model: {
        bio: '',
        email: '',
        image: '',
        password: '',
        username: '',
      },
    }
  },
  async asyncData({ store }) {
    const profile = await store.dispatch('getUserProfile')
    return {
      profile: profile.user,
    }
  },
  mounted() {
    this.model = {
      bio: this.profile.bio,
      email: this.profile.email,
      image: this.profile.image,
      password: '',
      username: this.profile.username,
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async onSubmit() {
      try {
        const response = await this.$store.dispatch('updateProfile', this.model)
        if (response) {
          this.$router.push('/profile')
        }
      } catch (error) {}
    },
  },
}
</script>
<style lang="scss" scoped></style>
