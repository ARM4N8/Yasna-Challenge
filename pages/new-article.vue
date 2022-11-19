<template>
  <div>
    <a-header title="New article" text="Create new artcile" />
    <div class="container pt-5">
      <div class="col-lg-8 mx-auto">
        <b-card>
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
              <validation-provider
                name="Title"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group>
                  <b-form-input
                    v-model="model.article.title"
                    :state="getValidationState(validationContext)"
                    placeholder="Article title"
                  ></b-form-input>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <validation-provider
                name="Description"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group>
                  <b-form-input
                    v-model="model.article.description"
                    :state="getValidationState(validationContext)"
                    placeholder="What's this article about?"
                  ></b-form-input>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider
                name="Article body"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group>
                  <b-form-textarea
                    :state="getValidationState(validationContext)"
                    v-model="model.article.body"
                    placeholder="Write your article"
                    rows="3"
                  ></b-form-textarea>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <validation-provider v-slot="validationContext">
                <b-form-group>
                  <label for="tags-basic">Type a new tag and press enter</label>
                  <b-form-tags v-model="model.article.tagList"></b-form-tags>

                  <b-form-invalid-feedback>{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <div class="d-flex flex-row justify-content-center mt-4">
                <b-button type="submit" variant="success" class="mb-2"
                  >Publish article</b-button
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
  head: {
    title: `Login`,
  },
  data() {
    return {
      model: {
        article: {
          title: '',
          description: '',
          body: '',
          tagList: [],
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
        const response = await this.$store.dispatch('addArticle', this.model)
        if (response) {
          swal.fire({
            title: 'Success',
            text: `your article was published successfully`,
            type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false,
          })
          this.clearForm()
        }
      } catch (error) {}
    },
    clearForm() {
      this.model = {
        article: {
          title: '',
          description: '',
          body: '',
          tagList: [],
        },
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
