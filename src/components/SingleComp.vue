<template>
    <div class="singlePage">
        <div class="container">
            <div class="flex items-start justify-between my-5">
                <div class="block bg-white p-6 rounded-lg w-3/4 mr-4">
                    <h1 class="text-3xl font-semibold mb-2">{{ allPhones[curID].name }}</h1>
                    <p class="text-xs text-grayText">Артикул: {{ allPhones[curID].article }}</p>
                    <div class="flex items-start justify-between mt-5">
                        <div class="w-1/2">
                            <div v-for="(fimages, index) of allPhones[curID].images[0]" :key="fimages">
                                <img v-if="setImg == index" :src="fimages" alt="">
                            </div>
                            <div class="flex justify-center items-center">
                                <div v-for="(simages, index) of allPhones[curID].images[0]" :key="simages">
                                    <img @click="setImg = index" class="w-12 h-12" :src="simages" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <p class="text-xs font-semibold bg-orange-400 text-white w-max p-1 rounded-md">0 - 0 - 12</p>
                            <h2 class="text-xl font-semibold my-3">Описание</h2>
                            <div class="flex justify-between items-center mb-2 border-b border-dashed border-gray-300">
                                <p>Модельный год</p>
                                <p>{{ allPhones[curID].year }}</p>
                            </div>
                            <div class="flex justify-between items-center mb-2 border-b border-dashed border-gray-300">
                                <p>Диагональ дисплея, дюйм</p>
                                <p>{{ allPhones[curID].diagonal }}</p>
                            </div>
                            <div class="flex justify-between items-center mb-2 border-b border-dashed border-gray-300">
                                <p>Разрешение дисплея</p>
                                <p>{{ allPhones[curID].resolution }}</p>
                            </div>
                            <div class="flex justify-between items-center mb-2 border-b border-dashed border-gray-300">
                                <p>Объем оперативной памяти, ГБ</p>
                                <p>{{ allPhones[curID].ram }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block bg-white p-6 rounded-lg w-1/4">
                    {{ allPhones[curID].price }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "SingleComp",
    data() {
        return {
            curID: this.$route.params.id - 1,
            setImg: 'first'
        }
    },
    computed: mapGetters(['allPhones']),
    methods: mapActions(['fetchPhones']),
    async mounted() {
        this.fetchPhones();
    }
}
</script>