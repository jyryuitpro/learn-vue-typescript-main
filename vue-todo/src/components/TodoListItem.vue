<template>
  <li>
    <span class="item complete" @click="toggleItem">{{ todoItem }}</span>
    <button @click="removeItem">삭제</button>
    <!-- <button @click="$emit('delete')">삭제</button> -->
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Todo } from "@/App.vue";

export default Vue.extend({
  props: {
    // props 타입 정의 방법
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  methods: {
    toggleItem() {
      this.$emit("toggle", this.todoItem, this.index);
    },
    removeItem() {
      this.$emit("remove", this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
