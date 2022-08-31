<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand text-light" href="#">
        <h3 class="text-capitalize m-0">unwind</h3>
        <span class="text-uppercase">hotel booking</span>
      </a>
      <button
        class="navbar-toggler text-uppercase"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars mx-2"></i>
        menu
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav text-uppercase fw-bold">
          <li class="nav-item">
            <router-link class="nav-link px-3 home" id="nav-link" tag="a" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" id="nav-link" tag="a" to="/about"
              >about</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" tag="a" to="/rooms" id="nav-link"
              >rooms</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link px-3"
              tag="a"
              to="/reseto"
              id="nav-link"
              >reseto & bar</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" tag="a" to="/blog" id="nav-link"
              >bolg</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link px-3"
              tag="a"
              to="/contact"
              id="nav-link"
              >contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "NavbarComp",
  methods: {
    LinkColorOnActive() {
      let item = document.getElementById("nav-link");
      item.style.color = "white";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.navbar {
  position: absolute;
  top: 30px;
  width: 100%;
  z-index: 1;
}
.navbar-brand {
  line-height: 0.5;
  span {
    font-size: 12px;
    font-weight: bold;
  }
}

.nav-link {
  color: #d8cfc7;
  font-size: 14px;
}
.nav-link:focus {
  box-shadow: none;
  color: white;
}

@media only screen and (max-width: 768px) {
  .navbar {
    background-color: $Black-Color;
    top: 0px;
    .navbar-brand {
      color: white;
    }
    .navbar-toggler {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
    .navbar-toggler:focus {
      box-shadow: none;
    }
  }
  .home {
    margin-top: 25px;
  }
}
</style>