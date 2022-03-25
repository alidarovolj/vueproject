<template>
    <div class="container mx-auto">
        <div v-for="phone of allPhones" :key="phone.id">
            <h3>{{ phone.name }}</h3>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: mapGetters(['allPhones']),
    async mounted() {
        this.fetchPhones();
    },
    methods: mapActions(['fetchPhones'])
}
</script>