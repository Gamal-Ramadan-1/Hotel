<template>
  <section class="resto-bar">
    <div class="container-fluid">
      <HeaderSetions :BigHead="BigHead" :SmallHead="SmallHead" />
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 col-sm-12">
          <div class="img-cuisine">
            <div class="overlay"></div>
            <div
              class="
                img-cuisine-icon
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <i class="fa-solid fa-kitchen-set"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12 col-sm-12">
          <div class="row ms-lg-4 gy-3">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div
                class="
                  pricing
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-nowrap
                  p-4
                "
              >
                <img
                  src="@/imgs/xmenu-1.jpg.pagespeed.ic.yC-EI1C2Sl.webp"
                  class="me-3"
                />
                <h5 class="fw-bold">Grilled Beef with potatoes</h5>
                <span class="fw-bold">$20.00</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div
                class="
                  pricing
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-nowrap
                  p-4
                "
              >
                <img
                  src="@/imgs/xmenu-2.jpg.pagespeed.ic.xuS6fI649R.webp"
                  class="me-3"
                />
                <h5 class="fw-bold">Grilled Beef with potatoes</h5>
                <span class="fw-bold">$49.00</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div
                class="
                  pricing
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-nowrap
                  p-4
                "
              >
                <img
                  src="@/imgs/xmenu-3.jpg.pagespeed.ic.uGV1uE0TVM.webp"
                  class="me-3"
                />
                <h5 class="fw-bold">Grilled Beef with potatoes</h5>
                <span class="fw-bold">$29.00</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div
                class="
                  pricing
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-nowrap
                  p-4
                "
              >
                <img
                  src="@/imgs/xmenu-4.jpg.pagespeed.ic._eupGZGDhZ.webp"
                  class="me-3"
                />
                <h5 class="fw-bold">Grilled Beef with potatoes</h5>
                <span class="fw-bold">$50.00</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div
                class="
                  pricing
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-nowrap
                  p-4
                "
              >
                <img
                  src="@/imgs/xmenu-5.jpg.pagespeed.ic.AjEzQKSqtq.webp"
                  class="me-3"
                />
                <h5 class="fw-bold">Grilled Beef with potatoes</h5>
                <span class="fw-bold">$34.00</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div
                class="
                  pricing
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-nowrap
                  p-4
                "
              >
                <img
                  src="@/imgs/xmenu-6.jpg.pagespeed.ic.SSID_aLKfC.webp"
                  class="me-3"
                />
                <h5 class="fw-bold">Grilled Beef with potatoes</h5>
                <span class="fw-bold">$17.50</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div
                class="
                  pricing
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-nowrap
                  p-4
                "
              >
                <img
                  src="@/imgs/xmenu-7.jpg.pagespeed.ic.E5AmxrGlDY.webp"
                  class="me-3"
                />
                <h5 class="fw-bold">Grilled Beef with potatoes</h5>
                <span class="fw-bold">$70.00</span>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div
                class="
                  pricing
                  d-flex
                  justify-content-center
                  align-items-center
                  flex-nowrap
                  p-4
                "
              >
                <img
                  src="@/imgs/xmenu-8.jpg.pagespeed.ic.qnCVD_wbaQ.webp"
                  class="me-3"
                />
                <h5 class="fw-bold">Grilled Beef with potatoes</h5>
                <span class="fw-bold">$40.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderSetions from "../Header to all sections/HeaderSetions.vue";
export default {
  name: "RestoBarSection",
  components: { HeaderSetions },
  props: {
    BigHead: String,
    SmallHead: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.resto-bar {
  padding-top: 100px;
  padding-bottom: 100px;
  .img-cuisine {
    background-image: url("@/imgs/xresto-bar.jpg.pagespeed.ic.CvcoWGJzLg.webp");
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
    .overlay {
      position: absolute;
      z-index: -1;
      height: 100%;
      width: 100%;
      background-color: $Black-Color;
      opacity: 0.4;
    }
    .img-cuisine-icon {
      position: absolute;
      width: 100px;
      height: 120px;
      background-color: $Main-Color;
      border-radius: 5px;
      color: white;
      i {
        font-size: 50px;
      }
    }
  }
}
.pricing {
  background-color: white;
  border-radius: 5px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  span {
    color: $Main-Color;
    font-size: 20px;
    margin-bottom: 35px;
  }
}
.pricing:hover {
  background-color: $Black-Color;
  color: white;
}
@media (min-width: 768px) {
  .img-cuisine-icon {
    right: -50px;
    top: 40%;
  }
  .img-cuisine {
    height: 650px;
  }
}
@media (max-width: 767px) {
  .img-cuisine-icon {
    right: 38%;
    top: 35%;
  }
  .img-cuisine {
    height: 300px;
  }
}
@media (width: 768px) {
  .img-cuisine-icon {
    right: 44%;
  }
  .img-cuisine {
    height: 300px;
  }
}
</style>