<template>
  <Slider />
  <RestoBarSection />
</template>
<script>
import Slider from "@/components/Slider Resto&Bar/Slider.vue";
import RestoBarSection from "@/components/restobar section/RestoBarSection.vue";
export default {
  name: "Reseto&Bar",
  components: { Slider, RestoBarSection},
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>