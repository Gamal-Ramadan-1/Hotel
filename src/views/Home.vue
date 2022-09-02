<template>
  <Slider />
  <CheckAvailability />
  <AboutUs />
  <Services />
  <HotelForVacation />
</template>

<script>
import Slider from "@/components/Slider-Home/Slider.vue";
import CheckAvailability from "@/components/Check-availability/CheckAvailability.vue";
import AboutUs from "@/components/about-us-section/AboutUs.vue";
import Services from "@/components/services-section/Services.vue";
import HotelForVacation from "@/components/hotel-for-vacation/HotelForVacation.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    Slider,
    CheckAvailability,
    AboutUs,
    Services,
    HotelForVacation,
  },
};
</script>
