<template>
  <div class="home container">
    <todo-input />
    <todo-list  />
  </div>
</template>

<script>
import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"


export default {
  name: 'Home',
  components: {
    'todo-input' : TodoInput,
    'todo-list'  : TodoList
  }
}
</script>
