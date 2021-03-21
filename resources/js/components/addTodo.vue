<template>
    <div>
        <form @submit.prevent="submitTodo()">
          <label for="">Create</label>  
          <input type="text" v-model="title" placeholder="Add todo">
          <button>Submit</button>
        </form>    
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        data(){
            return{
                title:''
            }
        },
       methods:{
           ...mapActions(['addTodo']),
           submitTodo(){
               this.addTodo(this.title);
           }
       }
    }
</script>
