<template>
  <section class="take-tour">
    <Overlay />
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-lg-12 text-center text-light fw-bold" data-aos="fade-up">
          <span class="text-uppercase">watch our luxurious hotel</span>
          <h1 class="text-capitalize display-1 fw-bold mb-3">take a tour</h1>
          <a href="#">
            <i class="fa-solid fa-play text-light ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Overlay from "../Overlay/Overlay.vue";
export default {
  name: "TakeATour",
  components: { Overlay },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
  font-size: 40px;
  background-color: $Main-Color;
  padding: 15px 25px;
  border-radius: 50%;
  animation: 2s play infinite;
}
@keyframes play {
  0% {
    box-shadow: 0 0 0 0 rgb(197 168 128 / 40%);
  }
  70% {
    box-shadow: 0 0 0 30px rgb(197 168 128 / 0%);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(197 168 128 / 0%);
  }
}
.take-tour {
  background-image: url("@/imgs/xbg_2.jpg.pagespeed.ic.UXXZKOuCEo.webp");
  position: relative;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  clear: both;
  z-index: 0;
  height: 85vh;
  margin-bottom: 50px;
}
</style>