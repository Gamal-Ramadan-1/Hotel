<template>
  <section class="our-blog">
    <div class="container">
      <HeaderSetions
        :BigHead="BigHead"
        :SmallHead="SmallHead"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div class="row">
        <div
          class="col-lg-3 col-sm-12 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <BlogCard
            metadate="dec. 23,2022"
            Comments="3 comments"
            TitleCard="Best Hotel Near Beach in Hawaii"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            SrcImg="ximage_1.jpg.pagespeed.ic.qa1-6EPlps.webp"
          />
        </div>
        <div
          class="col-lg-3 col-sm-12 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <BlogCard
            metadate="nov. 7,2022"
            Comments="12 comments"
            TitleCard="Best Hotel Near Beach in Hawaii"
            TextCard="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor natus excepturi neque iusto!"
            SrcImg="ximage_2.jpg.pagespeed.ic.sA2CEy2Wig.webp"
          />
        </div>
        <div
          class="col-lg-3 col-sm-12 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <BlogCard
            metadate="mar. 13,2022"
            Comments="5 comments"
            TitleCard="Best Hotel Near Beach in Hawaii"
            TextCard="Deleniti iusto mollitia voluptates ut. Sequi enim suscipit at dolor velit modi dolores ipsum"
            SrcImg="ximage_3.jpg.pagespeed.ic.BeWnPT5-TM.webp"
          />
        </div>
        <div
          class="col-lg-3 col-sm-12 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <BlogCard
            metadate="jun. 20,2022"
            Comments="19 comments"
            TitleCard="Best Hotel Near Beach in Hawaii"
            TextCard="A small river named Duden flows by their place and supplies it with the necessary regelialia."
            SrcImg="ximage_4.jpg.pagespeed.ic.0xFNn6r7lO.webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderSetions from "../Header to all sections/HeaderSetions.vue";
import BlogCard from "../Blog Card/BlogCard.vue";
export default {
  name: "Our-Blog",
  props: {
    BigHead: String,
    SmallHead: String,
  },
  components: { HeaderSetions, BlogCard },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.our-blog {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>