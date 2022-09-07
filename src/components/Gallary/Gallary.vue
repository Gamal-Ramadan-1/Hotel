<template>
  <section class="gallary">
    <div class="container-fluid">
      <div class="row gy-5 mt-1 mb-4">
        <div class="col-lg col-md-6 col-sm-12">
          <div class="gallary-item-1">
            <div class="overlay"></div>
            <i class="fa-solid fa-magnifying-glass text-light"></i>
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-12">
          <div class="gallary-item-2">
            <div class="overlay"></div>
            <i class="fa-solid fa-magnifying-glass text-light"></i>
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-12">
          <div class="gallary-item-3">
            <div class="overlay"></div>
            <i class="fa-solid fa-magnifying-glass text-light"></i>
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-12">
          <div class="gallary-item-4">
            <div class="overlay"></div>
            <i class="fa-solid fa-magnifying-glass text-light"></i>
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-12">
          <div class="gallary-item-5">
            <div class="overlay"></div>
            <i class="fa-solid fa-magnifying-glass text-light"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Gallary",
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.gallary-item-1,
.gallary-item-2,
.gallary-item-3,
.gallary-item-4,
.gallary-item-5 {
  background-image: url("@/imgs/xgallery-1.jpg.pagespeed.ic.ajKJNqXnha.webp");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gallary-item-2 {
  background-image: url("@/imgs/xgallery-2.jpg.pagespeed.ic.2twc3vj4lT.webp");
}
.gallary-item-3 {
  background-image: url("@/imgs/xgallery-3.jpg.pagespeed.ic.9RqS9yQsRS.webp");
}
.gallary-item-4 {
  background-image: url("@/imgs/xgallery-4.jpg.pagespeed.ic.v2cKBLN11M.webp");
}
.gallary-item-5 {
  background-image: url("@/imgs/xgallery-5.jpg.pagespeed.ic.oBRREtuRDY.webp");
}

.overlay {
  position: absolute;
  background-color: $Black-Color;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
  transition: all 0.2s ease-in-out;
}
i {
  background-color: $Main-Color;
  opacity: 0;
  border-radius: 50%;
  padding: 12px;
  transition: all 0.2s ease-in-out;
}
.gallary-item-1:hover,
.gallary-item-2:hover,
.gallary-item-3:hover,
.gallary-item-4:hover,
.gallary-item-5:hover {
  transition: all 0.2s ease-in-out;

  .overlay {
    opacity: 0.4;
  }
  i {
    opacity: 1;
  }
}
</style>