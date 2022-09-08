<template>
  <section class="hotel-leaving">
    <div class="overlay"></div>
    <div class="container py-5">
      <div class="row align-items-center" data-aos="fade-up" data-aos-duration="1500">
        <div class="col-md-8 text-capitalize hotel-leaving-text">
          <span class="ms-lg-5 ps-lg-5">find best hotel for leaving</span>
          <h1 class="text-light fw-bold ms-lg-5 ps-lg-5">
            find the best hotel in your
            <span class="d-md-block text-light"> next vacation</span>
          </h1>
        </div>
        <div class="col-md-4">
          <Button title="book now" class="text-uppercase fw-bold px-5 py-4" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../button-project/button.vue";
export default {
  name: "HotelForVacation",
  components: { Button },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.hotel-leaving {
  background-image: url("@/imgs/xbg_1.jpg.pagespeed.ic.OPAhN-pmOO.webp");
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  clear: both;
  margin-top: 50px;
  position: relative;
  z-index: 0;
  span {
    color: $Main-Color;
    font-weight: bold;
  }
}
.overlay {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: $Black-Color;
  opacity: 0.9;
}
@media (max-width: 768px) {
  .hotel-leaving-text {
    text-indent: 0px;
  }
}
@media (min-width: 1025px) {
  .hotel-leaving-text {
    text-indent: 120px;
  }
}
</style> 