<template>
  <div class="card">
    <img :src="require(`@/imgs/${SrcImg}`)" class="card-img-top" />
    <div class="card-body">
      <div class="meta text-uppercase my-3 fw-bold">
        <span class="me-3">admin</span>
        <span class="me-3">{{ metadate }}</span>
        <a href="#">{{ Comments }}</a>
      </div>
      <h4 class="card-title fw-bold mb-3">{{ TitleCard }}</h4>
      <p class="card-text my-4 fw-bold">{{ TextCard }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BlogCard",
  props: ["metadate", "Comments", "TitleCard", "TextCard", "SrcImg"],
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.card {
  line-height: 1.7;
  border-style: none;
  .card-img-top {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  .card-body {
    .meta {
      span {
        font-size: 13px;
        color: rgb(148, 146, 146);
      }
      a {
        text-decoration: none;
        font-size: 13px;

        color: $Main-Color;
      }
    }
    .card-text {
      color: rgb(148, 146, 146);
    }
  }
}
</style>