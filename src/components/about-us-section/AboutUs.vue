<template>
  <section class="about-us">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6 col-md-12 col-sm-12" data-aos="fade-up"  data-aos-duration="1000">
          <div class="row gy-4">
            <div class="col-lg-6 col-md-6 col-sm-12 cozy-room">
              <div
                class="cozy-room-content w-100 text-center px-2 py-4 mb-md-3"
              >
                <i class="fa-sharp fa-solid fa-person-booth mb-3"></i>
                <h4 class="text-capitalize mt-2">cozy room</h4>
                <p class="pt-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </div>
              <img
                src="@/imgs/xf-services.jpg.pagespeed.ic.IxF7ec37W1.webp"
                class="w-100"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 spicial-offers">
              <img
                src="@/imgs/xf-services-2.jpg.pagespeed.ic.6n-lib9nKI.webp"
                class="w-100 mb-md-3"
              />
              <div class="spicial-offers-content w-100 text-center px-2 py-4">
                <i class="fa-solid fa-star mb-3"></i>
                <h4 class="text-capitalize mt-2">spicial offers</h4>
                <p class="pt-3">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center" data-aos="fade-up"  data-aos-duration="2500">
          <div class="about-us-text ms-md-3">
            <span class="text-uppercase d-block mt-3 mb-1 fw-bold">about us</span>
            <h1 class=" fw-bold">
              Unwind A Hotel <span class="d-md-block text-dark"> Booking Agency </span>
            </h1>
            <p class="my-2">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <Button
              title="book your room now"
              class="text-uppercase fw-bold my-5 px-4 py-3"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../button-project/button.vue";
export default {
  name: "AboutUs",
  components: { Button },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.about-us {
  padding-top: 150px;
  padding-bottom: 150px;
  img {
    border-radius: 10px;
  }
}
.cozy-room-content,
.spicial-offers-content {
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  background-color: white;
  h4 {
    font-size: 20px;
    transition: all 0.4s ease-in-out;
  }
  i {
    color: $Main-Color;
    font-size: 50px;
  }
  p {
    color: #bbb;
    font-weight: bolder;
  }
}

.cozy-room:hover {
  .cozy-room-content {
    background-color: $Black-Color;
    transition: all 0.2s ease-in-out;
    h4 {
      color: white;
      transition: all 0.4s ease-in-out;
    }
  }
}
.spicial-offers:hover {
  .spicial-offers-content {
    background-color: $Black-Color;
    transition: all 0.2s ease-in-out;
    h4 {
      color: white;
      transition: all 0.4s ease-in-out;
    }
  }
}
.about-us-text {
  span:first-of-type {
    color: $Main-Color;
  }
  h1 {
    font-size: 50px;
    line-height: 1.5;
  }
  p{
    color: #bbb;
    font-weight: bolder;
    line-height: 1.7;
  }
}
</style>