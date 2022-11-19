<template>
  <div>
    <a-header title="Sign up" text="Create your account" />
    <div class="container pt-5">
      <div v-if="step == 'signUp'" class="col-lg-4 mx-auto">
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
                name="Username"
                :rules="{ required: true, min: 5 }"
                v-slot="validationContext"
              >
                <b-form-group label="Username" label-for="example-input-2">
                  <b-form-input
                    autocomplete="off"
                    v-model="model.user.username"
                    :state="getValidationState(validationContext)"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-1-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <validation-provider
                name="Password"
                :rules="{ required: true, min: 6 }"
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
                <b-button type="submit" variant="success" class="mb-2"
                  >Create</b-button
                >
              </div>
            </b-form>
          </validation-observer>
        </b-card>
      </div>
      <div class="col-lg-6 mx-auto" v-else>
        <b-card>
          <h4 class="text-center">Your account has been created</h4>
          <div class="d-flex flex-row justify-content-center mt-4">
            <n-link class="btn btn-success" to="/login"> Login </n-link>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'Layout',
  head: {
    title: `Sign up`,
  },
  data() {
    return {
      step: 'signUp', //signUp - finished
      model: {
        user: {
          email: '',
          password: '',
          username: '',
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
        const response = await this.$store.dispatch('userSignup', this.model)
        if (response) this.step = 'finished'
      } catch (error) {}
    },
  },
}
</script>
<style lang="scss" scoped></style>
