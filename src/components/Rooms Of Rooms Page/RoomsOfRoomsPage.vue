<template>
  <section class="rooms my-5 py-5">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
          <CardRooms
            TitleCard="suite room"
            TextCard="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            Price="450 /hight"
            TextBtn="book now"
            SrcImgBottom="xroom-1.jpg.pagespeed.ic.2dbJCSi6kW.webp"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
          <CardRooms
            TitleCard="family room"
            TextCard="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            Price="450 /hight"
            TextBtn="book now"
            SrcImgTop="xroom-2.jpg.pagespeed.ic.qQEQzEZcIj.webp"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
          <CardRooms
            TitleCard="deluxe room"
            TextCard="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            Price="450 /hight"
            TextBtn="book now"
            SrcImgBottom="xroom-3.jpg.pagespeed.ic.-BqmSKjZKz.webp"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
          <CardRooms
            TitleCard="classic room"
            TextCard="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            Price="450 /hight"
            TextBtn="book now"
            SrcImgBottom="xroom-4.jpg.pagespeed.ic.5v9gH2L7pP.webp"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
          <CardRooms
            TitleCard="superior room"
            TextCard="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            Price="450 /hight"
            TextBtn="book now"
            SrcImgTop="xroom-5.jpg.pagespeed.ic.KNT1FgYsC8.webp"
          />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500">
          <CardRooms
            TitleCard="luxury room"
            TextCard="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
            Price="450 /hight"
            TextBtn="book now"
            SrcImgBottom="xroom-6.jpg.pagespeed.ic.KiztQkl1vI.webp"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-duration="2000">
          <div class="btn border py-2 px-3 me-md-2 fw-bold">&lt;</div>
          <div class="btn border btn-active py-2 px-3 me-md-2 fw-bold">1</div>
          <div class="btn border py-2 px-3 me-md-2 fw-bold">2</div>
          <div class="btn border py-2 px-3 me-md-2 fw-bold">3</div>
          <div class="btn border py-2 px-3 me-md-2 fw-bold">4</div>
          <div class="btn border py-2 px-3 me-md-2 fw-bold">5</div>
          <div class="btn border py-2 px-3 fw-bold">&gt;</div>
        </div>
      </div>
    </div>
    <hr />
  </section>
</template>
<script>
import CardRooms from "../Card Rooms/CardRooms.vue";
export default {
  name: "RoomsOfRoomsPage",
  components: { CardRooms },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.btn {
  margin-top: 100px;
  margin-bottom: 70px;
}
.btn:hover {
  background-color: $Main-Color;
  color: white;
}
.btn-active {
  background-color: $Main-Color;
  color: white;
}
hr {
  width: 100%;
  height: 0.5px;
  opacity: 0.1;
  margin-bottom: 50px;
}
</style>