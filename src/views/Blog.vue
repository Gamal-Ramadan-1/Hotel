<template>
  <Slider />
  <CardsInBlog />
</template>
<script>
import Slider from "@/components/Slider Blog/Slider.vue";
import CardsInBlog from "@/components/Cards in Blog Page/CardsInBlog.vue";
export default {
  name: "Blog",
  components: { Slider, CardsInBlog },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>