<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <TodoInput :item="todoText"></TodoInput>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "@/components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: "",
    };
  },
});
</script>

<style scoped></style>
