<template>
  <Slider />
  <AboutUs />
  <HotelForVacation />
  <TakeATour />
  <Testimonial BigHead="happy guests" SmallHead="testimonial" />
  <Gallary />
</template>
<script>
import Slider from "@/components/Slider-About/Slider.vue";
import AboutUs from "@/components/about-us-section/AboutUs.vue";
import HotelForVacation from "@/components/hotel-for-vacation/HotelForVacation.vue";
import TakeATour from "@/components/take a tour/TakeATour.vue";
import Testimonial from "@/components/Testimonial/Testimonial.vue";
import Gallary from "@/components/Gallary/Gallary.vue";
export default {
  name: "About",
  components: {
    Slider,
    AboutUs,
    HotelForVacation,
    TakeATour,
    Testimonial,
    Gallary,
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>