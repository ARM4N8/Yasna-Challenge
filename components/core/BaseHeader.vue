<template>
  <div class="header-wrapper">
    <h1>
      {{ title }}
    </h1>
    <p>
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'a-header',
  props: ['title', 'text'],
}
</script>
<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: #37944a;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  p{
    color: rgb(218, 218, 218);
  }
}
</style>
