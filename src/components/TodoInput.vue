<template>
  <div>
      <div class="row mb-5">
          <div class="container">
              <form>
                <input v-model="todoName" type="text" class="col-3 mx-2 mt-5" placeholder="Name">
                <input v-model="todoText" type="text" class="col-7 mx-2" placeholder="Todo">
                <button @click.prevent="addTodoI" class="btn btn-success col-1 mx-2">Add</button>
              </form>
            
          </div>  
      </div>
    

    
  </div>
</template>

<script>

export default {
    data(){
        return {
            todoText : "",
            todoName: "",
            todoTime: ""
        
        };
    },
    methods: {
    
    addTodoI(){
        let newtodo = {
            
            name: this.todoName,
            title: this.todoText,
            done: false,
            time: Date.now(),
            doneTime: ""

        }

        this.$store.commit('add_todo', newtodo);
        
            
        }
    }
    
    }

</script>

<style scoped>

</style>