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
              <i class="fa-brands fa-twitter mx-1"></i>
              <i class="fa-brands fa-facebook-f mx-1"></i>
              <i class="fa-brands fa-instagram mx-1"></i>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-md-6"></div>
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
    
    color: $Main-Color;
    background-color: #262626;
  }
}
.copy-right {
  background-color: $Copy-Right;
  height: 15%;
}
</style>