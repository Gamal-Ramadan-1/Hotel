<template>
  <section class="services">
    <div class="container">
      <HeaderSetions
        :BigHead="BigHead"
        :SmallHead="SmallHead"
        data-aos="fade-up"
        data-aos-duration="1500"
      />
      <div class="row mt-3 mb-5 pb-5 gy-4" data-aos="fade-up" data-aos-duration="1500">
        <div class="col-lg-2 col-md-3 col-sm-12 text-center">
          <ServicesCard title="free wifi" ClassIcon="fa-solid fa-wifi pt-2" />
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 text-center">
          <ServicesCard
            title="easy booking"
            ClassIcon="fa-solid fa-book pt-2"
          />
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 text-center">
          <ServicesCard title="restuarant" ClassIcon="fa-solid fa-house pt-2" />
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 text-center">
          <ServicesCard
            title="swimming pool"
            ClassIcon="fa-solid fa-person-swimming pt-2"
          />
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 text-center">
          <ServicesCard
            title="beauty & health"
            ClassIcon="fa-solid fa-bowl-food pt-2"
          />
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 text-center">
          <ServicesCard
            title="healp & support"
            ClassIcon="fa-solid fa-handshake-angle pt-2"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ServicesCard from "../services-card/ServicesCard.vue";
import HeaderSetions from "../Header to all sections/HeaderSetions.vue";
export default {
  name: "Services",
  components: { ServicesCard, HeaderSetions },
  props: {
    BigHead: String,
    SmallHead: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
}
.head-of-services {
  span {
    color: $Main-Color;
    font-weight: bolder;
  }
  h1 {
    font-size: 50px;
    font-weight: bolder;
  }
}
</style>