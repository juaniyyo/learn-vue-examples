<template>
  <div class="task-list">
    <h1>{{ msg }}</h1>
    <form class="form" @submit.prevent="createTask">
      <label class="label" for="task">Nueva Tarea</label>
      <input class="input" type="text" v-model="newTask" id="task" />
      <input class="button" type="submit" value="Crear tarea" />
    </form>
    <ul class="list">
      <li
        class="task"
        v-for="task in tasks"
        :key="task.id"
        :class="{ completed: task.completed }"
      >
        {{ task.text | ucase }}
        | <button @click="completedTask(task.text)">Completa</button> |
        <button @click="deleteTask(task.id)">
          X
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
let taskId = 1;

export default {
  props: {
    msg: String
  },
  data: () => ({
    newTask: "",
    tasks: []
  }),
  methods: {
    createTask() {
      let task = {
        id: taskId++,
        text: this.newTask,
        completed: false
      };
      this.tasks.push(task);
      this.newTask = "";
    },
    completedTask(taskText) {
      for (let i = 0; i < this.tasks.length; i++) {
        let task = this.tasks[i];
        if (taskText === task.text) {
          task.completed = !task.completed;
        }
      }
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== taskId;
      });
    }
  }
};
</script>

<style scoped lang="stylus">
#hello
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

.task-list
  width 800px
  max-width 100%
  margin 0px auto

.form
  padding 30px
  margin-top 10px

.label
  display block
  margin-bottom 10px
  font-size 1.2em
  font-weight bold

.input
  height 25px
  width 300px

.button
  font-size 1em
  margin-left 20px
  height 35px
  padding 0px 20px
  border none
  border-radius 3px
  box-shadow 0 1px 4px 1px rgba(0, 0, 0, .2)
  background-color #2ecc71
  color #ecf0f1
  cursor pointer

.list
  margin-top 40px

.task
  cursor pointer
  margin 10px 0

.completed
  text-decoration line-through
  color lightgrey
</style>
