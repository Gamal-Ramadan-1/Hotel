<template>
  <Slider />
  <CheckAvailability />
  <RoomsOfRoomsPage />
  <Services BigHead="explore our hotel services" SmallHead="unwind services" />
</template>
<script>
import Slider from "@/components/Slider-Room/Slider.vue";
import CheckAvailability from "@/components/Check-availability/CheckAvailability.vue";
import RoomsOfRoomsPage from "@/components/Rooms Of Rooms Page/RoomsOfRoomsPage.vue";
import Services from "@/components/services-section/Services.vue";
export default {
  name: "Rooms",
  components: { Slider, CheckAvailability, RoomsOfRoomsPage, Services },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>