<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <TodoInput
      :item="todoText"
      @input="updateTodoText"
      @add="addTodoItem"
    ></TodoInput>
    <!-- v-model 문법을 적용하려면 @input과 :value로 정의하셔야 합니다. :) -->
    <!-- <TodoInput v-model="todoText" @add="addTodoItem"></TodoInput> -->
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
  methods: {
    updateTodoText(value: any) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
  },
});
</script>

<style scoped></style>
