<script setup lang="ts">
interface Props {
  name: string
}

const props = defineProps<Props>();
</script>

<template>
  <div class="hello-container">
    <p class="hello-message">Hello, {{ props.name }}!!</p>
  </div>
</template>

<style scoped lang="scss">
.hello-container {
  border: 2px solid #3e3e3e;
  border-radius: 2px;
  width: 300px;
  text-align: center;
  margin: 3px;

  .hello-message {
    font-size: 20px;
  }
}
</style>