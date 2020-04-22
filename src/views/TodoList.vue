<template>
  <div class="todo">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList msg="Bienvenido a la TO-DO List App" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";

export default {
  name: "tareas",
  components: {
    TodoList
  }
};
</script>
