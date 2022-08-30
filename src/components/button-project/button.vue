<template>
  <button class="btn text-capitalize px-5 py-3 m-4">
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String,
  },
}
</script>
<style scoped lang="scss">
.btn {
  background-color: red;
  color: white;
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
    transition: all 0.5s ease;
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
  background-color: green;
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
.btn:hover span {
  color: black;
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
