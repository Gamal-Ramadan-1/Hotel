<template>
  <Slider />
  <CheckAvailability />
</template>
<script>
import Slider from "@/components/Slider-Room/Slider.vue";
import CheckAvailability from "@/components/Check-availability/CheckAvailability.vue";
export default {
  name: "Rooms",
  components: { Slider, CheckAvailability },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>