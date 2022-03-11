<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <TodoInput></TodoInput>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "@/components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
});
</script>

<style scoped></style>
