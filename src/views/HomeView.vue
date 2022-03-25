<template>
  <div class="home">
    <phones />
  </div>
</template>

<script>
import phones from "../components/PhonesComp.vue";
export default {
  name: "HomeView",
  components: {
    phones,
  },
};
</script>
