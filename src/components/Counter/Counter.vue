<template>
  <section class="counter px-5">
    <div class="container-fluid">
      <div class="row mx-md-5">
        <div class="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
          <div class="happy-guests text-center">
            <h1 data-purecounter-start="0" data-purecounter-end="389" data-purecounter-decimals="2" class="purecounter">
              0
            </h1>
            <span class="d-block text-capitalize fw-bold"># of happy guests</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
          <div class="rooms text-center">
            <h1 data-purecounter-start="0" data-purecounter-end="320" data-purecounter-duration="3" class="purecounter">
              0
            </h1>
            <span class="d-block text-capitalize fw-bold"># of rooms</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
          <div class="staffs text-center">
            <h1 data-purecounter-start="0" data-purecounter-end="1000" data-purecounter-duration="4" class="purecounter">
              0
            </h1>
            <span class="d-block text-capitalize fw-bold"># of Staffs</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
          <div class="destination text-center">
            <h1 data-purecounter-start="0" data-purecounter-end="587" class="purecounter" data-purecounter-duration="5">
              0
            </h1>
            <span class="d-block text-capitalize fw-bold"># of destination</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted } from "@vue/runtime-core";
import PureCounter from "@srexi/purecounterjs";

export default {
  name: "Counter",
  setup() {
    onMounted(() => {
      const pure = new PureCounter();
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";

.counter {
  background-color: $Black-Color;
  margin-bottom: 60px;
  overflow: hidden;

  .happy-guests,
  .rooms,
  .staffs,
  .destination {
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
    z-index: 0;
    perspective: 600px;
    animation: jump 2s ease-in-out infinite;

    h1 {
      color: $Main-Color;
      font-weight: 900;
    }

    span {
      font-size: 15px;
      color: rgb(211, 210, 210);
    }
  }

  .happy-guests::before,
  .rooms::before,
  .staffs::before,
  .destination::before {
    content: "";
    position: absolute;
    width: 1px;
    z-index: -1;
    background-color: rgb(60, 59, 59);
  }
}

@media screen and (min-width: 1020px) {
  @keyframes jump {
    0% {
      transform: translateY(-10px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }

  .happy-guests::before,
  .rooms::before,
  .staffs::before,
  .destination::before {
    content: "";
    height: 130px;
    top: -45px;
  }
}

@media screen and (max-width: 1020px) {

  .happy-guests::before,
  .rooms::before,
  .staffs::before,
  .destination::before {
    content: "";
    height: 100px;
    top: 0px;
  }
}
</style>
