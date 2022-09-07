<template>
  <Slider />
  <CheckAvailability />
  <RoomsOfRoomsPage />
</template>
<script>
import Slider from "@/components/Slider-Room/Slider.vue";
import CheckAvailability from "@/components/Check-availability/CheckAvailability.vue";
import RoomsOfRoomsPage from "@/components/Rooms Of Rooms Page/RoomsOfRoomsPage.vue";
export default {
  name: "Rooms",
  components: { Slider, CheckAvailability, RoomsOfRoomsPage },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>