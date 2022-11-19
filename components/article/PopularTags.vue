<template>
  <div>
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton class="mb-2" type="button" width="85%"></b-skeleton>
          <b-skeleton class="mb-2" type="button" width="55%"></b-skeleton>
          <b-skeleton class="mb-2" type="button" width="70%"></b-skeleton>
        </b-card>
      </template>

      <div class="tag-container">
        <p class="col-12 px-0">Popular tags:</p>
        <div class="col-12 d-flex flex-row flex-wrap">
          <div
            @click="setTag(t)"
            class="tag"
            v-for="(t, index) in tags"
            :key="index"
          >
            {{ t }}
          </div>
        </div>
      </div>
    </b-skeleton-wrapper>
  </div>
</template>
<script>
export default {
  props: ['tags', 'loading'],
  methods: {
    setTag(tag) {
      this.$router.push({
        query: {
          tag: tag,
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.tag-container {
  background-color: rgb(240, 240, 240);
  border-radius: 8px;
  padding: 16px;
}
.tag {
  color: rgb(255, 255, 255);
  background-color: rgb(120, 120, 120);
  font-size: 0.7rem;
  padding: 6px 8px;
  margin-right: 4px;
  margin-bottom: 6px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(73, 73, 73);
  }
}
</style>
