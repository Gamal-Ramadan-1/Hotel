<template>
  <div class="card text-center">
    <a href="#" v-if="SrcImgTop">
      <img :src="require(`@/imgs/${SrcImgTop}`)" class="card-img-top" />
    </a>
    <div class="card-body py-5 px-4">
      <h3 class="fw-bolder text-capitalize mb-4">{{ TitleCard }}</h3>
      <p>
        {{ TextCard }}
      </p>
      <div
        class="
          text-uppercase
          d-flex
          flex-nowrap
          justify-content-center
          align-items-center
          fw-bolder
        "
      >
        <span>{{ Price }}</span>
        <a href="#" class="fw-bolder border ms-3 py-1 px-2">{{ TextBtn }}</a>
      </div>
    </div>
    <a href="#" v-if="SrcImgBottom">
      <img :src="require(`@/imgs/${SrcImgBottom}`)" class="card-img-bottom" />
    </a>
  </div>
</template>
<script>
export default {
  name: "CardRooms",
  props: {
    SrcImgTop: String,
    TitleCard: String,
    TextCard: String,
    Price: String,
    TextBtn: String,
    SrcImgBottom: String,
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
  color: black;
}
span {
  color: $Main-Color;
}

.card {
  border-style: none;
  border-radius: 0px;
  transition: all 0.3s ease-in-out;

  img {
    border-style: none;
    border-radius: 0px;
    height: 300px;
    a {
      color: white;
    }
  }
}
.card:hover {
  background-color: $Black-Color;
  transition: all 0.3s ease-in-out;
  color: white;
  a {
    color: white;
  }
  img {
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
  }
}
</style>