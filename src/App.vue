<template>
  <Navbar />
  <Footer />
  <Up />
</template>
<script>
import Navbar from "./components/Header/NavbarComp.vue";
import Footer from "./components/footer/Footer.vue";
import Up from "./components/Up To Top/Up.vue";
export default {
  name: "App",
  components: { Navbar, Footer, Up },
};
</script>
<style lang="scss">
</style>