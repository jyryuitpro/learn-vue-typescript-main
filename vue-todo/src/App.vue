<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <TodoInput
        :item="todoText"
        @input="updateTodoText"
        @add="addTodoItem"
      ></TodoInput>
      <!-- v-model 문법을 적용하려면 @input과 :value로 정의하셔야 합니다. :) -->
      <!-- <TodoInput v-model="todoText" @add="addTodoItem"></TodoInput> -->
      <div>
        <ul>
          <TodoListItem></TodoListItem>
          <!-- <li>아이템 1</li> -->
          <!-- <li>아이템 2</li> -->
          <!-- <li>아이템 3</li> -->
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoListItem from "@/components/TodoListItem.vue";

const STORAGE_KEY = "vue-todo-ts-1";
const storage = {
  fetch() {
    const todoItems = localStorage.getItem(STORAGE_KEY) || [];
    const result = JSON.parse(todoItems);
    return result;
  }
};

export default Vue.extend({
  components: { TodoListItem, TodoInput },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    updateTodoText(value: string) {
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
