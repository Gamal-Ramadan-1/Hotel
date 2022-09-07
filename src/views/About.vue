<template>
  <Slider />
  <AboutUs />
</template>
<script>
import Slider from "@/components/Slider-About/Slider.vue";
import AboutUs from "@/components/about-us-section/AboutUs.vue";
export default {
  name: "About",
  components: { Slider, AboutUs },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>