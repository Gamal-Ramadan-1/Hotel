<template>
  <section class="slider" id="slider">
    <Overlay />
    <div class="container h-100">
      <div
        class="row h-100 justify-content-center align-items-center text-light"
      >
        <div class="col-lg-12 text-center content-clider">
          <p class="mt-5 pt-5 mb-0">
            ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!
          </p>
          <h1>Most Relaxing Place</h1>
          <div
            class="
              d-flex
              justify-content-center
              align-item-center
              text-uppercase
              mt-4
            "
          >
            <Button
              title="take a tour"
              class="text-uppercase fw-bold"
              ClassIcon="fa-solid fa-arrow-right ms-2"
            />
            <div
              class="
                btn btn-outline-light
                mx-2
                px-4
                py-3
                text-uppercase
                learn-more-btn
              "
            >
              <span>
                learn more
                <i class="fa-solid fa-arrow-right ms-2"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../button-project/button.vue";
import Overlay from "../Overlay/Overlay.vue";
export default {
  name: "Slider",
  components: { Button, Overlay },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.slider {
  position: relative;
  z-index: 0;
  top: 0px;
  height: 100vh;
  width: 100%;
  background-image: url("@/imgs/xbg_1.jpg.pagespeed.ic.OPAhN-pmOO.webp");
  background-position: 50%;
  background-size: cover;
  clear: both;
  background-attachment: fixed;
}
.content-clider {
  h1 {
    font-weight: 900;
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }
}
.learn-more-btn {
  border-radius: 0px;
  font-size: 12px;
}
@media (min-width: 425px) {
  .content-clider {
    h1 {
      font-size: 40px;
    }
  }
}
@media (min-width: 768px) {
  .content-clider {
    h1 {
      font-size: 80px;
    }
  }
}
</style>