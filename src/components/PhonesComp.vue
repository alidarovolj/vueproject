<template>
  <div class="bg-secondBG py-10">
    <div class="container mx-auto">
      <h2 class="text-2xl font-black mb-5">Смартфоны</h2>
      <div class="flex flex-wrap items-start justify-between">
        <div
          class="bg-white rounded-lg p-2 phone mx-1 my-2"
          v-for="phone of allPhones"
          :key="phone.id"
        >
          <img class="my-2 mb-4" :src="phone.images[0].first" alt="" />
          <h3 class="font-medium">{{ phone.name }}</h3>
          <p class="text-2xl font-medium">{{ phone.price }} тг.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["allPhones"]),
  async mounted() {
    this.fetchPhones();
  },
  methods: mapActions(["fetchPhones"]),
};
</script>
