<template>
  <div class="row mb-5 pb-3">
    <div class="col-12 text-center">
      <span class="text-uppercase fw-bold">{{SmallHead}}</span>
      <h1 class="text-capitalize">{{BigHead}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderSections",
  props: {
    BigHead: String,
    SmallHead: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
span {
  color: $Main-Color;
}
h1 {
  font-size: 50px;
  font-weight: bolder;
}
</style>