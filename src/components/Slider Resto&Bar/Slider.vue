<template>
  <section class="slider">
    <Overlay />
    <div class="container-fluid h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-12 text-center fw-bold mt-5">
          <span class="text-uppercase me-3">
            <router-link class="me-1" tag="a" to="/"
              >Home
              <i class="fa-solid fa-angle-right"></i>
            </router-link>
          </span>
          <span class="text-uppercase"
            >resto & bar
            <i class="fa-solid fa-angle-right"></i>
          </span>
          <h1 class="w-100 fw-bold text-light text-capitalize">resto & bar</h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Overlay from "../Overlay/Overlay.vue";

export default {
  name: "Slider",
  components: { Overlay },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
  color: rgb(220, 219, 219);
  transition: all 0.2s linear;
}
.slider {
  background-image: url("@/imgs/xbg_3.jpg.pagespeed.ic.-P-sDxMfPG.webp");
  background-position: center;
  clear: both;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 110vh;
  width: 100%;
  position: relative;
  z-index: 0;
  span {
    font-size: 14px;
    color: rgb(220, 219, 219);
  }
  a:hover {
    color: $Main-Color;
    transition: all 0.2s linear;
  }
  h1 {
    font-size: 60px;
  }
}
</style>