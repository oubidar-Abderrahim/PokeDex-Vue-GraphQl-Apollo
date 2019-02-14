<template>
  <h4 class="loader" v-if="loading">Loading...</h4>
</template>

<script>
export default {
  props: ["loading"]
};
</script>


<style scoped>
h4 {
  text-align: center;
  font-size: 1.2em;
}
</style>
