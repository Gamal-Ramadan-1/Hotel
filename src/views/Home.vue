<template>
  <Slider />
  <CheckAvailability />
</template>

<script>
import Slider from "@/components/Slider-Home/Slider.vue";
import CheckAvailability from "@/components/Check-availability/CheckAvailability.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: { Slider, CheckAvailability },
};
</script>
