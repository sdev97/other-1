import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [],
        auth: {
            isAuthenticated: true
        }
    },
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.completed),
        progress: state => {
            let doneTodos = state.todos.filter(todo => todo.completed).length
            let allTodos = state.todos.length
            return Math.floor(100 * (doneTodos / allTodos))
        }
    },
    mutations: {
        TOGGLE_AUTH(state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        },
        MARK_COMPLETE(state, todoId) {
            state.todos.map(todo => {
                if (todo.id == todoId) todo.completed = !todo.completed
                return todo
            })
        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
            console.log('statetodos: ', state.todos)
        },
        ADD_TODO(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        GET_TODOS(state, todos) {
            this.state = todos
        }
    },
    actions: {
        deleteTodo( {commit}, todoId) {
            commit('DELETE_TODO', todoId)
        },
        addTodo({commit}, newTodo) {
            commit('ADD_TODO', newTodo)
        },
        async getTodos({commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                commit('GET_TODOS', response.data)
                console.log('check response data: ', response.data)
            } catch (error) {
                console.log(error)
            }
            
        }
    },
}

const store = new Vuex.Store(storeData)

export default store