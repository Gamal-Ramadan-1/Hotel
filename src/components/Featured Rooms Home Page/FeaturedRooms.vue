<template>
  <section class="featured-rooms">
    <div class="container">
      <HeaderSetions
        :BigHead="BigHead"
        :SmallHead="SmallHead"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div class="row justify-content-md-center gy-4">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          <CardRooms
            SrcImgBottom="xroom-1.jpg.pagespeed.ic.2dbJCSi6kW.webp"
            Price="450 /hight"
            TextBtn="book now"
            TextCard="
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          "
            TitleCard="suite room"
          />
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <CardRooms
            SrcImgTop="xroom-2.jpg.pagespeed.ic.qQEQzEZcIj.webp"
            Price="450 /hight"
            TextBtn="book now"
            TextCard="
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          "
            TitleCard="family room"
          />
        </div>
        <div
          class="col-lg-4 col-md-6 col-sm-12 text-md-center"
          data-aos="flip-left"
          data-aos-duration="2500"
        >
          <CardRooms
            SrcImgBottom="xroom-3.jpg.pagespeed.ic.-BqmSKjZKz.webp"
            Price="450 /hight"
            TextBtn="book now"
            TextCard="
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          "
            TitleCard="deluxe room"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderSetions from "../Header to all sections/HeaderSetions.vue";
import CardRooms from "@/components/Card Rooms/CardRooms.vue";
export default {
  name: "FeaturedRooms",
  props: {
    BigHead: String,
    SmallHead: String,
  },
  components: { HeaderSetions, CardRooms },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.featured-rooms {
  margin-top: 120px;
  margin-bottom: 150px;
}
</style>