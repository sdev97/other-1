<template>
    <div>
        Done: {{ progress }} %.
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'ProgressBar',
        computed: mapGetters(['progress'])
    }
</script>

<style scoped>

</style>