<template>
  <footer>
    <div class="top-footer">
      <div class="container">
        <div class="row mb-5 pb-5 gy-5">
          <div class="col-lg col-sm-12 col-md-6 logo-footer">
            <a href="/">
              <h3 class="text-capitalize text-light m-0 fw-bold">unwind</h3>
              <span class="text-uppercase text-light m-0">hotel booking</span>
            </a>
            <p class="mt-5">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            <div class="social-media">
              <i class="fa-brands fa-twitter me-1"></i>
              <i class="fa-brands fa-facebook-f mx-1"></i>
              <i class="fa-brands fa-instagram mx-1"></i>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-md-6 services">
            <h3 class="text-light">Services</h3>
            <div class="row mt-lg-5">
              <div class="col-lg-6">
                <a href="/" class="text-capitalize d-block mb-3 fw-bold">
                  <i class="fa-solid fa-angle-right me-lg-1"></i>
                  free wifi
                </a>
                <a href="/" class="text-capitalize d-block my-3 fw-bold">
                  <i class="fa-solid fa-angle-right me-lg-1"></i>
                  easy booking
                </a>
                <a href="/" class="text-capitalize d-block my-3 fw-bold">
                  <i class="fa-solid fa-angle-right me-lg-1"></i>
                  restaurant
                </a>
                <a href="/" class="text-capitalize d-block my-3 fw-bold">
                  <i class="fa-solid fa-angle-right me-lg-1"></i>
                  swimming pool
                </a>
              </div>
              <div class="col-lg-6">
                <a href="/" class="text-capitalize d-block mb-3 fw-bold">
                  <i class="fa-solid fa-angle-right me-lg-1"></i>
                  beauty & health
                </a>
                <a href="/" class="text-capitalize d-block my-3 fw-bold">
                  <i class="fa-solid fa-angle-right me-lg-1"></i>
                  60" Flatscreen TV
                </a>
                <a href="/" class="text-capitalize d-block my-3 fw-bold">
                  <i class="fa-solid fa-angle-right me-lg-1"></i>
                  Cold Aircondition
                </a>
                <a href="/" class="text-capitalize d-block my-3 fw-bold">
                  <i class="fa-solid fa-angle-right me-lg-1"></i>
                  Help & Support
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-12 col-md-6"></div>
          <div class="col-lg col-sm-12 col-md-6"></div>
        </div>
      </div>
    </div>
    <div class="copy-right"></div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
}
footer {
  height: 80vh;
}
.top-footer {
  padding-top: 120px;
  height: 85%;
  background-color: $Top-Footer;
}

.logo-footer {
  a {
    span {
      font-size: 12px;
      font-weight: bold;
    }
  }
  p {
    color: #bbb;
    font-weight: bolder;
  }
}
.social-media {
  i {
    padding: 13px;
    cursor: pointer;
    color: $Main-Color;
    background-color: #262626;
  }
}
.services {
  a {
    color: #bbb;
    transition: all 0.3s ease-in-out;
    font-size: 15px;
  }
  a:hover {
    color: $Main-Color;
    transition: all 0.3s ease-in-out;
  }
}
.copy-right {
  background-color: $Copy-Right;
  height: 15%;
}
</style>