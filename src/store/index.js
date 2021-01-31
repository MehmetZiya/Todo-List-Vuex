import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos : [
      { 
        name : 'Niclas',
        title: 'Study Spanish',
        done: false,
        time: new Date(2021, 0, 16, 10, 33, 30, 0),
        doneTime: ""
      },
      {
        name: 'Jack',
        title: 'Read the book of Eli',
        done: false,
        time: new Date(2021, 0, 19, 18, 12, 23, 0),
        donetime: ""
      },
      {
        name: 'Hanna',
        title: 'Go Shoping',
        done: false,
        time: new Date(2021, 0, 24, 9, 5, 36, 0),
        doneTime: ""
      },
      {
        name: 'Rosa',
        title: 'Write an essay',
        done: false,
        time: new Date(2021, 0, 26, 14, 11, 56, 0),
        doneTime: ""
      }

    ],
    
  },

  getters: {
    allTodos : (state) => state.todos 

  },
  mutations: {
    add_todo(state, todo){   
      state.todos.unshift(todo);
    },

    delete_todo(state, data){
      state.todos = state.todos.filter((todo) => todo.time !== data.time);
    },
    done_todo(state,data) {
      data.done = !data.done;
    }
  },

  actions: {
    
    
  },
  modules: {
  }
})
