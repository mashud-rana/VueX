import axios from 'axios'

const state={
    todos:[]
};

const getters={
    allTodos:function(state){
        return state.todos
    }
};

const actions={
    async fetchTodos({commit}){
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('setTodos',response.data);
    },
    async addTodo({commit},title){
        const newTodo=await axios.post('https://jsonplaceholder.typicode.com/posts',{
            title,camplete:false
        });
        commit('setNewTodo',newTodo.data)
    },
    async deleteTodo({commit},id){
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        commit('deleteSetTodo',id);
    }
};

const mutations={
    setTodos(state,todos){
       return state.todos=todos;
    },
    setNewTodo(state,newTodo){
        state.todos.push(newTodo);
    },
    deleteSetTodo(state,id){
        state.todos=state.todos.filter(function(todo){
            return todo.id!==id;
        })
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}