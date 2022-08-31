<template>
  <Navbar />
  <Footer />
</template>
<script>
import Navbar from "./components/Header/NavbarComp.vue";
import Footer from "./components/footer/Footer.vue";
export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>
<style lang="scss">
</style>