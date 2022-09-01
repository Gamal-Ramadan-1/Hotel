<template>
  <Slider />
  <CheckAvailability />
  <AboutUs />
</template>

<script>
import Slider from "@/components/Slider-Home/Slider.vue";
import CheckAvailability from "@/components/Check-availability/CheckAvailability.vue";
import AboutUs from "@/components/about-us-section/AboutUs.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: { Slider, CheckAvailability, AboutUs },
};
</script>
