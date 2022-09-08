<template>
  <Slider />
  <RestoBarSection />
  <Gallary />
</template>
<script>
import Slider from "@/components/Slider Resto&Bar/Slider.vue";
import RestoBarSection from "@/components/restobar section/RestoBarSection.vue";
import Gallary from "@/components/Gallary/Gallary.vue";
export default {
  name: "Reseto&Bar",
  components: { Slider, RestoBarSection, Gallary },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>