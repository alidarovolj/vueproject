<template>
    <div>
        {{ allPhones[this.$route.params.id - 1].name }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "SingleComp",
    computed: mapGetters(['allPhones']),
    methods: mapActions(['fetchPhones']),
    async mounted() {
        this.fetchPhones();
    }
}
</script>