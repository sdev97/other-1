<template>
  <form @submit="onSubmit">
    <input type="text" v-model="title"/>
    <input type="submit" value="Add" />
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'TodoForm',
    data () {
        return {
            title: ""
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit (event) {
            event.preventDefault()
            this.addTodo({
                id: 4,
                title: this.title,
                completed: false
            })
            this.title = ''
        }
    }
}
</script>

<style>

</style>