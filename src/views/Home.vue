<template>
  <Slider />
  <CheckAvailability />
  <AboutUs />
  <Services BigHead="Explore Our Hotel Services" SmallHead="unwind services" />
  <HotelForVacation />
  <FeaturedRooms BigHead="featured rooms" SmallHead="our rooms" />
  <TakeATour />
  <RestoBarSection SmallHead="resto & bar" BigHead="restaurant & bar" />
  <Testimonial BigHead="happy guests" SmallHead="testimonial" />
  <Counter />
  <OurBlog BigHead="recent blog" SmallHead="our blog" />
  <Gallary />
</template>

<script>
import Slider from "@/components/Slider-Home/Slider.vue";
import CheckAvailability from "@/components/Check-availability/CheckAvailability.vue";
import AboutUs from "@/components/about-us-section/AboutUs.vue";
import Services from "@/components/services-section/Services.vue";
import HotelForVacation from "@/components/hotel-for-vacation/HotelForVacation.vue";
import FeaturedRooms from "@/components/Featured Rooms Section/FeaturedRooms.vue";
import TakeATour from "@/components/take a tour/TakeATour.vue";
import RestoBarSection from "@/components/restobar section/RestoBarSection.vue";
import Testimonial from "@/components/Testimonial/Testimonial.vue";
import Counter from "@/components/Counter/Counter.vue";
import OurBlog from "@/components/Our Blog Sectio/Our-Blog.vue";
import Gallary from "@/components/Gallary/Gallary.vue";
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
    RestoBarSection,
    Testimonial,
    Counter,
    OurBlog,
    Gallary,
  },
};
</script>
