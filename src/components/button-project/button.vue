<template>
  <button class="btn px-4 py-3 text-light">
    <span
      >{{ title }}
      <i :class="ClassIcon"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    ClassIcon: String,
  },
};
</script>
<style scoped lang="scss">
@import "@/Scss/main.scss";
.btn {
  background-color: $Main-Color;
  border-radius: 0px;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  transform: scaleX(1);
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    z-index: 3;
    font-size: 12px;
  }
}
.btn::before {
  content: "";
  position: absolute;
  width: 101%;
  height: 101%;
  z-index: -1;
  left: 0px;
  top: 0px;
  background-color: $Black-Color;
  transition: transform 0.5s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
  transform-origin: 0 0;
  transform: scaleX(0);
}
.btn:hover:before {
  z-index: 1;
  transform: scaleX(1);
}
// @media (max-width: 769px) {
//   button {
//     width: 50%;
//   }
// }
// @media (min-width: 426px) {
//   button {
//     width: 30%;
//   }
// }
// @media (min-width: 769px) {
//   button {
//     width: 18%;
//   }
// }
</style>
