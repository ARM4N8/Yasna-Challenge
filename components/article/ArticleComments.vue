<template>
  <div class="container mt-4">
    <h3 class="text-center">Comments</h3>
    <p v-if="!$auth.loggedIn" class="text-center">
      <n-link to="signIn"> Login</n-link> or
      <n-link to="signUp"> Sign up</n-link> to add comments on this article.
    </p>
    <div v-else class="col-lg-8 mx-auto">
      <b-card>
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
          <b-form @submit.stop.prevent="handleSubmit(onSubmit)">
            <validation-provider
              name="Comment"
              :rules="{ required: true, min: 20 }"
              v-slot="validationContext"
            >
              <b-form-group
                id="example-input-group-1"
                label-for="example-input-1"
              >
                <b-form-textarea
                  :state="getValidationState(validationContext)"
                  v-model="model.comment"
                  placeholder="Write a comment..."
                  rows="3"
                ></b-form-textarea>

                <b-form-invalid-feedback id="input-1-live-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <div class="d-flex flex-row justify-content-between">
              <img
                class="profile-image"
                :src="$auth.user.image"
                alt="profile picture"
              />
              <b-button type="submit" variant="success">Post comment</b-button>
            </div>
          </b-form>
        </validation-observer>
      </b-card>
    </div>
    <div class="d-flex flex-column align-items-center mt-3">
      <article-comment-item
        class="mb-3"
        v-for="(c, index) in comments"
        :key="index"
        :comment="c"
        :loading="loading"
      >
      </article-comment-item>
    </div>
  </div>
</template>
<script>
import ArticleCommentItem from '@/components/article/ArticleCommentItem.vue'
import swal from 'sweetalert2'
export default {
  props: {
    comments: {
      type: Array,
      default() {
        return ['', '', '', '', '', '', '', '', '', '']
      },
      description: 'Articles array',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: { ArticleCommentItem },
  data() {
    return {
      model: {
        slug: this.$route.params.slug,
        comment: '',
      },
    }
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async onSubmit() {
      try {
        const response = await this.$store.dispatch(
          'addArticleComment',
          this.model
        )
        if (response) {
          swal.fire({
            title: 'Success',
            text: `your comment was sent successfully`,
            type: 'success',
            confirmButtonClass: 'btn btn-success btn-fill',
            buttonsStyling: false,
          })
          this.clearForm()
          this.$emit('onCommentResponse', response)
        }
      } catch (error) {}
    },
    clearForm() {
      this.model.comment = ''
      this.$nextTick(() => {
        this.$refs.observer.reset()
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.profile-image {
  width: 35px;
  height:35px;
  border-radius: 50%;
  margin-right: 4px;
}
</style>
