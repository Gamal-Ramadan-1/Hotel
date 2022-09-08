<template>
  <Slider />
  <ContactUs/>
</template>
<script>
import Slider from "@/components/Slider Contact/Slider.vue";
import ContactUs from "@/components/ContactUs/ContactUs.vue";
export default {
  name: "Contact",
  components: { Slider, ContactUs },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
</style>