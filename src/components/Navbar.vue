<template>
    <div class="navbar">
        <h1>My Vuex App todos</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li v-if="auth.isAuthenticated">Total todo: {{ todos.length }}
                <button @click="TOGGLE_AUTH">log out</button>
            </li>
            <button v-else @click="TOGGLE_AUTH">Log in</button>
        </ul>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        name: 'NavBar',
        data () {
            return {
                total: 0
            }
        },
        computed: mapState(['todos', 'auth']),
        methods: mapMutations(['TOGGLE_AUTH'])
    }
</script>

<style scoped>

</style>