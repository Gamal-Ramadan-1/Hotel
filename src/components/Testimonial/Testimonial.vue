<template>
  <section class="Testimonial">
    <div class="container">
      <HeaderSetions :BigHead="BigHead" :SmallHead="SmallHead" />
      <div
        class="row owl-carousel owl-theme"
        :dots="false"
        :autoplay="false"
        :nav="false"
      >
        <div class="col item px-4 py-5">
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
        <div class="col item px-4 py-5">
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
        <div class="col item px-4 py-5">
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
        <div class="col item px-4 py-5">
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
        <div class="col item px-4 py-5">
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
        <div class="col item px-4 py-5">
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
    </div>
  </section>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import carousel from "vue-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
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
      $(".owl-carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        margin: 20,
        responsive: {
          0: {
            items: 1,
            dots: true,
          },
          1000: {
            items: 3,
            dots: true,
          },
        },
      });
    });
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.Testimonial {
  padding-bottom: 100px;
  padding-top: 100px;
  .item {
    background-color: white;
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
}
</style>