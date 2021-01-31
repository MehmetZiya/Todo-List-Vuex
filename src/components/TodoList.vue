<template>
  <div>
      <div v-for="(todo, index) in allTodos" :key="index">
          <todo-item :todo ="todo" />
      </div>
      
      
  </div>
</template>

<script>
 import TodoItem from "../components/TodoItem"
 import {mapGetters} from 'vuex' ;

export default {
    components : {
        'todo-item' : TodoItem
    },
    computed : {
        ...mapGetters(["allTodos"]),
    }
}
</script>

<style scoped>

</style>