<template>
  <div class="container py-3 border-bottom">
    <p v-html="articleData.body.replace(/(?:\r\n|\r|\\n)/g, '<br>')"></p>
    <div class="mt-3">
      <span class="tag" v-for="(t, index) in articleData.tagList" :key="index">
        {{ t }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['articleData'],
}
</script>
<style lang="scss" scoped>
.tag {
  border: 1px solid rgb(169, 169, 169);
  color: rgb(169, 169, 169);
  font-size: 0.7rem;
  padding: 4px 6px;
  margin-right: 4px;
  border-radius: 16px;
}
</style>
