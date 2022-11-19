<template>
  <div>
    <a-header title="Login" text="Welcome to Yasna challenge" />
    <div class="container pt-5">
      <div class="col-lg-4 mx-auto">
        <b-card>
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
              <validation-provider
                name="Email"
                :rules="{ required: true, email: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="example-input-group-1"
                  label="Email"
                  label-for="example-input-1"
                >
                  <b-form-input
                    v-model="model.user.email"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-1-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-1-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <validation-provider
                name="Password"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="example-input-group-1"
                  label="Password"
                  label-for="example-input-1"
                >
                  <b-form-input
                    type="password"
                    v-model="model.user.password"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-1-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-1-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <div class="d-flex flex-column justify-content-center mt-4">
                <b-button type="submit" variant="success" class="mb-2">Login</b-button>
                <n-link to="/signup" class="btn btn-outline-success"> Create account </n-link>
              </div>
            </b-form>
          </validation-observer>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'Layout',
  head: {
    title: `Login`,
  },
  data() {
    return {
      model: {
        user: {
          email: '',
          password: '',
        },
      },
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async onSubmit() {
      try {
        const response = await this.$store.dispatch('userSignin', this.model)
        if (response) this.$router.push('profile')
      } catch (error) {}
    },
  },
}
</script>
<style lang="scss" scoped></style>
