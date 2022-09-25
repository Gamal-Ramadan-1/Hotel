<template>
  <section class="Testimonial">
    <div class="container">
      <HeaderSetions
        :BigHead="BigHead"
        :SmallHead="SmallHead"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div class="swiper mySwiper" data-aos="zoom-in" data-aos-duration="1000">
        <div class="swiper-wrapper mb-5">
          <div class="swiper-slide px-4 py-5">
            <div class="info-item-in-testimonial d-flex flex-nowrap">
              <div class="img-item">
                <img
                  src="@/imgs/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                  class="me-3"
                />
                <a href="#" class="text-center">
                  <i class="fa-solid fa-quote-left"></i>
                </a>
              </div>

              <div class="text w-100">
                <h5 class="fw-bold text-capitalize mt-1 mb-3">roger scott</h5>
                <span class="fw-bold text-uppercase">markiting manager</span>
              </div>
            </div>

            <p class="pt-3 fw-bold">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="swiper-slide px-4 py-5">
            <div class="info-item-in-testimonial d-flex flex-nowrap">
              <div class="img-item">
                <img
                  src="@/imgs/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp"
                  class="me-3"
                />
                <a href="#" class="text-center">
                  <i class="fa-solid fa-quote-left"></i>
                </a>
              </div>

              <div class="text w-100">
                <h5 class="fw-bold text-capitalize mt-1 mb-3">roger scott</h5>
                <span class="fw-bold text-uppercase">markiting manager</span>
              </div>
            </div>

            <p class="pt-3 fw-bold">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="swiper-slide px-4 py-5">
            <div class="info-item-in-testimonial d-flex flex-nowrap">
              <div class="img-item">
                <img
                  src="@/imgs/xperson_3.jpg.pagespeed.ic.Cln-jaM1jK.webp"
                  class="me-3"
                />
                <a href="#" class="text-center">
                  <i class="fa-solid fa-quote-left"></i>
                </a>
              </div>

              <div class="text w-100">
                <h5 class="fw-bold text-capitalize mt-1 mb-3">roger scott</h5>
                <span class="fw-bold text-uppercase">markiting manager</span>
              </div>
            </div>

            <p class="pt-3 fw-bold">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="swiper-slide px-4 py-5">
            <div class="info-item-in-testimonial d-flex flex-nowrap">
              <div class="img-item">
                <img
                  src="@/imgs/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                  class="me-3"
                />
                <a href="#" class="text-center">
                  <i class="fa-solid fa-quote-left"></i>
                </a>
              </div>

              <div class="text w-100">
                <h5 class="fw-bold text-capitalize mt-1 mb-3">roger scott</h5>
                <span class="fw-bold text-uppercase">markiting manager</span>
              </div>
            </div>

            <p class="pt-3 fw-bold">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="swiper-slide px-4 py-5">
            <div class="info-item-in-testimonial d-flex flex-nowrap">
              <div class="img-item">
                <img
                  src="@/imgs/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp"
                  class="me-3"
                />
                <a href="#" class="text-center">
                  <i class="fa-solid fa-quote-left"></i>
                </a>
              </div>

              <div class="text w-100">
                <h5 class="fw-bold text-capitalize mt-1 mb-3">roger scott</h5>
                <span class="fw-bold text-uppercase">markiting manager</span>
              </div>
            </div>

            <p class="pt-3 fw-bold">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div class="swiper-slide px-4 py-5">
            <div class="info-item-in-testimonial d-flex flex-nowrap">
              <div class="img-item">
                <img
                  src="@/imgs/xperson_3.jpg.pagespeed.ic.Cln-jaM1jK.webp"
                  class="me-3"
                />
                <a href="#" class="text-center">
                  <i class="fa-solid fa-quote-left"></i>
                </a>
              </div>

              <div class="text w-100">
                <h5 class="fw-bold text-capitalize mt-1 mb-3">roger scott</h5>
                <span class="fw-bold text-uppercase">markiting manager</span>
              </div>
            </div>

            <p class="pt-3 fw-bold">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import HeaderSetions from "../Header to all sections/HeaderSetions.vue";
export default {
  name: "Testimonial",
  components: { HeaderSetions },
  props: {
    SmallHead: String,
    BigHead: String,
  },
  setup() {
    onMounted(() => {
      let swiper = new Swiper(".mySwiper", {
        slidesPerGroup: 1,
        speed: 500,
        loop: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        },
      });
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.Testimonial {
  padding-bottom: 70px;
  padding-top: 100px;
  .swiper-slide {
    background-color: white !important;
  }
  .info-item-in-testimonial {
    .img-item {
      position: relative;

      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        z-index: 0;
      }
      a {
        position: absolute;
        z-index: 1;
        width: 24px;
        height: 23px;
        background-color: #c5a880;
        bottom: 0px;
        right: 15px;
        color: white;
        text-decoration: none;
        border-radius: 50%;
      }
    }
    span {
      color: $Main-Color;
    }
  }
  p {
    color: rgb(106, 103, 103);
  }
}
.swiper-pagination {
  position: relative !important;
}
</style>