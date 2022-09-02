<template>
  <Slider />
  <CheckAvailability />
  <AboutUs />
  <Services />
  <HotelForVacation />
  <FeaturedRooms />
  <TakeATour />
</template>

<script>
import Slider from "@/components/Slider-Home/Slider.vue";
import CheckAvailability from "@/components/Check-availability/CheckAvailability.vue";
import AboutUs from "@/components/about-us-section/AboutUs.vue";
import Services from "@/components/services-section/Services.vue";
import HotelForVacation from "@/components/hotel-for-vacation/HotelForVacation.vue";
import FeaturedRooms from "@/components/Featured Rooms Section/FeaturedRooms.vue";
import TakeATour from "@/components/take a tour/TakeATour.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    Slider,
    CheckAvailability,
    AboutUs,
    Services,
    HotelForVacation,
    FeaturedRooms,
    TakeATour,
  },
};
</script>
