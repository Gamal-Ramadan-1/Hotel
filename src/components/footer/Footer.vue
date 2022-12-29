<template>
  <footer>
    <div class="top-footer">
      <div class="container">
        <div class="row pb-5 gy-5">
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
            <h5 class="text-light fw-bold">Services</h5>
            <div class="row mt-5">
              <div class="col-lg-6">
                <p class="text-capitalize d-block mb-3 fw-bold">
                  <a href="/">
                    <i class="fa-solid fa-angle-right me-1"></i>
                    free wifi
                  </a>
                </p>
                <p class="text-capitalize d-block my-3 fw-bold">
                  <a href="/">
                    <i class="fa-solid fa-angle-right me-1"></i>
                    easy booking
                  </a>
                </p>
                <p class="text-capitalize d-block my-3 fw-bold">
                  <a href="/">
                    <i class="fa-solid fa-angle-right me-1"></i>
                    restaurant
                  </a>
                </p>
                <p class="text-capitalize d-block my-3 fw-bold">
                  <a href="/">
                    <i class="fa-solid fa-angle-right me-1"></i>
                    swimming pool
                  </a>
                </p>
              </div>
              <div class="col-lg-6">
                <p class="text-capitalize d-block mb-3 fw-bold">
                  <a href="/">
                    <i class="fa-solid fa-angle-right me-1"></i>
                    beauty & health
                  </a>
                </p>
                <p class="text-capitalize d-block my-3 fw-bold">
                  <a href="/">
                    <i class="fa-solid fa-angle-right me-1"></i>
                    60" Flatscreen TV
                  </a>
                </p>
                <p class="text-capitalize d-block my-3 fw-bold">
                  <a href="/">
                    <i class="fa-solid fa-angle-right me-1"></i>
                    Cold Aircondition
                  </a>
                </p>
                <p class="text-capitalize d-block my-3 fw-bold">
                  <a href="/">
                    <i class="fa-solid fa-angle-right me-1"></i>
                    Help & Support
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-sm-12 col-md-6 quick-links">
            <h5 class="text-light text-capitalize fw-bold mb-5">quick links</h5>
            <p class="text-capitalize d-block my-3 fw-bold">
              <a href="/">
                <i class="fa-solid fa-angle-right me-1"></i>
                home
              </a>
            </p>
            <p class="text-capitalize d-block my-3 fw-bold">
              <a href="/">
                <i class="fa-solid fa-angle-right me-1"></i>
                about
              </a>
            </p>
            <p class="text-capitalize d-block my-3 fw-bold">
              <a href="/">
                <i class="fa-solid fa-angle-right me-1"></i>
                rooms
              </a>
            </p>
            <p class="text-capitalize d-block my-3 fw-bold">
              <a href="/">
                <i class="fa-solid fa-angle-right me-1"></i>
                resto & bar
              </a>
            </p>
          </div>
          <div class="col-lg col-sm-12 col-md-6 questions">
            <h5 class="text-light text-capitalize fw-bold mb-5">
              have a questions?
            </h5>
            <div class="d-flex justify-content-center">
              <i class="fa-sharp fa-solid fa-map me-3 mt-1"></i>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <p>
              <a href="/">
                <i class="fa-solid fa-phone me-3"></i>
                +2 392 3929 210
              </a>
            </p>
            <p>
              <a href="/">
                <i class="fa-solid fa-paper-plane me-3"></i>
                info@yourdomain.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <div class="col-12 text-center py-5">
        <p class="m-0">
          Copyright ©2022 All rights reserved | This template is made with
          <i class="fa-solid fa-heart"></i>
          by
          <a href="#"> Gamal Ramadan </a>
        </p>
      </div>
    </div>
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

.top-footer {
  padding-top: 120px;
  background-color: $Top-Footer;
  padding-bottom: 70px;
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

.services,
.quick-links {
  p {
    a {
      color: #bbb;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      font-size: 15px;
    }
  }

  p {
    a:hover {
      color: $Main-Color;
      transition: all 0.3s ease-in-out;
    }
  }
}

.questions {
  i {
    color: $Main-Color;
  }

  p,
  a {
    color: #bbb;
  }
}

.copy-right {
  background-color: $Copy-Right;

  p {
    font-size: 13px;
    color: #bbb;

    a,a:hover {
      color: $Main-Color;
    }
  }
}
</style>