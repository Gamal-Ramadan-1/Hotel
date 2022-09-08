<template>
  <section class="py-5 my-5">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard
            SrcImg="ximage_1.jpg.pagespeed.ic.qa1-6EPlps.webp"
            Comments="3 comments"
            metadate="dec. 23,2022"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            TitleCard="Best Hotel Near Beach in Hawaii"
          />
        </div>
        <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard
            SrcImg="ximage_2.jpg.pagespeed.ic.sA2CEy2Wig.webp"
            Comments="12 comments"
            metadate="nov. 31,2022"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            TitleCard="Best Hotel Near Beach in Hawaii"
          />
        </div>
        <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard
            SrcImg="ximage_3.jpg.pagespeed.ic.BeWnPT5-TM.webp"
            Comments="23 comments"
            metadate="jun. 10,2022"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            TitleCard="Best Hotel Near Beach in Hawaii"
          />
        </div>
        <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard
            SrcImg="ximage_4.jpg.pagespeed.ic.0xFNn6r7lO.webp"
            Comments="45 comments"
            metadate="mar. 21,2022"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            TitleCard="Best Hotel Near Beach in Hawaii"
          />
        </div>
        <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard
            SrcImg="ximage_5.jpg.pagespeed.ic.-8zdXXqgP_.webp"
            Comments="6 comments"
            metadate="oct. 14,2022"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            TitleCard="Best Hotel Near Beach in Hawaii"
          />
        </div>
        <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard
            SrcImg="ximage_6.jpg.pagespeed.ic.8vxyMrzQOc.webp"
            Comments="35 comments"
            metadate="fib. 17,2022"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            TitleCard="Best Hotel Near Beach in Hawaii"
          />
        </div>
        <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard
            SrcImg="ximage_7.jpg.pagespeed.ic.UFOV5eVWcC.webp"
            Comments="10 comments"
            metadate="apr. 23,2022"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            TitleCard="Best Hotel Near Beach in Hawaii"
          />
        </div>
        <div class="col-lg-3" data-aos="fade-up" data-aos-duration="1000">
          <BlogCard
            SrcImg="ximage_8.jpg.pagespeed.ic.ffu86NQJAD.webp"
            Comments="24 comments"
            metadate="dec. 18,2022"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            TitleCard="Best Hotel Near Beach in Hawaii"
          />
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
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
  </section>
</template>
<script>
import BlogCard from "../Blog Card/BlogCard.vue";
export default {
  name: "CardsInBlog",
  components: { BlogCard },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.btn {
  margin-top: 100px;
  margin-bottom: 0px;
}
.btn:hover {
  background-color: $Main-Color;
  color: white;
}
.btn-active {
  background-color: $Main-Color;
  color: white;
}
</style>