<template>
  <div id="up-to-top" @click="toTop()" v-show="scY > 200">TOP</div>
</template>
<script>
export default {
  data() {
    return {
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.scY = window.scrollY;
    },
    toTop: function () {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
#up-to-top {
  position: fixed;
  z-index: 1000;
  background-color: $Main-Color;
  bottom: 20px;
  right: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: white;
}
#up-to-top:hover {
  color: black;
  transition: all 0.3s ease-in-out;
}
</style>