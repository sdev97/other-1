<template>
    <div class="todo-list">
        <TodoForm />
        <ul v-if="auth.isAuthenticated">
            <li v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'completed' : '' " >
            {{ todo.title }}
            <input type="checkbox" :checked="todo.completed" @change="MARK_COMPLETE(todo.id)"/>
            <button @click="deleteTodo(todo.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script> 
import { mapState, mapMutations, mapActions } from 'vuex'
import TodoForm from '@/components/TodoForm.vue'


    export default {
        name: 'TodoList',
        components: {
            TodoForm
        },
        created() {
            this.getTodos()
        },
        computed: mapState(['todos', 'auth']),
        methods: {
            ...mapMutations(['MARK_COMPLETE']),
            ...mapActions(['getTodos']),
            deleteTodo (todoId) {
                this.$store.dispatch('deleteTodo', todoId)
            }
        }
    }
</script>

<style scoped>

</style>