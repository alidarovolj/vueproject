<template>
  <div class="home">
    <sliders />
    <phones />
  </div>
</template>

<script>
import phones from "../components/PhonesComp.vue";
import sliders from "../components/SlidersComp.vue"
export default {
  name: "HomeView",
  components: {
    phones,
    sliders
  },
};
</script>
