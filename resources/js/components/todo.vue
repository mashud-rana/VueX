<template>
    <div>
        <h1>This is new export file.</h1>
        <ul>
            <li v-for="(todo,index) in allTodos" :key="index">{{todo.title}}    <a href="" @click.prevent="deleteTodo(todo.id)">Delete</a></li>
        </ul>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default{
    
    methods:{
       ...mapActions(['fetchTodos','deleteTodo']),
    },
    computed:{
        ...mapGetters(['allTodos'])
    },
    created(){
        this.fetchTodos();
    }
    
}
</script>

<style scoped>

</style>
