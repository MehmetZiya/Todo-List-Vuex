<template>
  <div>
      <div class="row my-3 justify-content-between">
        
        <h5 class="col-sm-2" >{{todo.name}}</h5>
        <h5 class="col-sm-4" :class="{completed: this.todo.done}">{{todo.title}}</h5>
        <p class="col-sm-2">{{new Date(todo.time).toLocaleString()}}</p>
        <p class="col-sm-2" v-show="todo.doneTime">{{new Date(todo.doneTime).toLocaleString()}}</p>



        <div class="col-sm-1">
            <button @click="doneTodo" class="btn btn-sm btn-primary">Done!</button>   
        </div>

        <div class="col-sm-1">
            <button @click="deleteTodo" class="btn btn-sm btn-danger">Delete</button>
        </div>
        
        
      </div>
  </div>
</template>

<script>

export default {
    props: {
        todo : {},
     
    },
    methods: {
        deleteTodo(){
            this.$store.commit('delete_todo', this.todo)
        },
        doneTodo(){
            this.$store.commit('done_todo', this.todo)
            this.todo.doneTime = Date.now();
            
            
        }
    }

}
</script>

<style scoped>
    .completed{
        color: green;
        text-decoration:line-through;
    }

</style>