<template>
  <div class="service-card">
    <a href="#">
      <i :class="ClassIcon"></i>
      <h5 class="text-capitalize">{{ title }}</h5>
    </a>
  </div>
</template>
<script>
export default {
  name: "ServicesCard",
  props: {
    title: String,
    ClassIcon: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
}
.service-card {
  border-radius: 50% 50% 50% 0%;
  cursor: pointer;
  background-color: #ffffff;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  i {
    font-size: 70px;
    color: $Main-Color;
  }
  h5 {
    color: black;
    font-weight: bolder;
    margin-top: 20px;
    font-size: 17px;
  }
}
.service-card:hover {
  background-color: $Main-Color;
  color: white;
  transition: all 0.2s ease-in-out;
  i,
  h5 {
    color: white;
  }
}
@media (max-width: 767px) {
  .service-card {
    border-radius: 0px;
  }
}
</style>