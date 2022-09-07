<template>
  <div class="overlay"></div>
</template>
<script>
export default {
  name: "Overlay",
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.4;
  background-color: $Black-Color;
}
</style>