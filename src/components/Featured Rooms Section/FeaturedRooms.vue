<template>
  <section class="featured-rooms">
    <div class="container">
      <div class="row mb-5 pb-3">
        <div class="col-12 text-center header-of-featured-rooms">
          <span class="text-uppercase fw-bold">our rooms</span>
          <h1 class="text-capitalize">featured rooms</h1>
        </div>
      </div>
      <div class="row justify-content-md-center gy-4">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card text-center">
            <div class="card-body py-5 px-4">
              <h3 class="fw-bolder text-capitalize mb-4">suit room</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
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
                <span>$450 /hight</span>
                <a href="#" class="fw-bolder border ms-3 py-1 px-2">book now</a>
              </div>
            </div>
            <a href="#">
              <img
                src="@/imgs/xroom-1.jpg.pagespeed.ic.2dbJCSi6kW.webp"
                class="card-img-bottom"
              />
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card text-center">
            <a href="#">
              <img
                src="@/imgs/xroom-2.jpg.pagespeed.ic.qQEQzEZcIj.webp"
                class="card-img-bottom"
              />
            </a>
            <div class="card-body py-5 px-4">
              <h3 class="fw-bolder text-capitalize mb-4">family room</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
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
                <span>$450 /hight</span>
                <a href="#" class="fw-bolder border ms-3 py-1 px-2">book now</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 text-md-center">
          <div class="card text-center">
            <div class="card-body py-5 px-4">
              <h3 class="fw-bolder text-capitalize mb-4">deluxe room</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
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
                <span>$450 /hight</span>
                <a href="#" class="fw-bolder border ms-3 py-1 px-2">book now</a>
              </div>
            </div>
            <a href="#">
              <img
                src="@/imgs/xroom-3.jpg.pagespeed.ic.-BqmSKjZKz.webp"
                class="card-img-bottom"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeaturedRooms",
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
.featured-rooms {
  padding-top: 70px;
  padding-bottom: 150px;

  .header-of-featured-rooms {
    span {
      color: $Main-Color;
    }
    h1 {
      font-size: 50px;
      font-weight: bolder;
    }
  }
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