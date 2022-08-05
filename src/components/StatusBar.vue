<template>
    <div class="status-bar">
        <p>Done</p>
        <ul v-for="todo in doneTodos" :key="todo.id">
            <li>{{ todo.title }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import { mapState } from 'vuex'
    export default {
        name: 'StatusBar',
        computed: mapGetters(['doneTodos'])
    }
</script>

<style scoped>

</style>