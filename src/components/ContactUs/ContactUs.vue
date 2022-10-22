<template>
  <section class="contact-us">
    <div class="container">
      <div class="row gy-4">
        <div
          class="col-lg-6 p-md-0 order-lg-1 order-md-2 order-sm-2"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div class="content p-5">
            <h3 class="text-capitalize fw-bold">contact us</h3>
            <p>We're open for any suggestion or just to have a chat</p>
            <div class="row pt-3">
              <div class="col-md-4 col-sm-12">
                <span class="fw-bold text-capitalize">address :</span>
                <p class="py-2 m-0">
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
              <div class="col-md-4 col-sm-12">
                <span class="fw-bold text-capitalize">email :</span>
                <a href="#" class="d-block fw-bold py-2">info@yoursite.com</a>
              </div>
              <div class="col-md-4 col-sm-12">
                <span class="fw-bold text-capitalize">phone :</span>
                <a href="#" class="d-block fw-bold py-2"> + 1235 2355 98 </a>
              </div>
            </div>
            <input
              type="text"
              placeholder="name"
              class="w-100 text-capitalize py-2 username"
            />
            <p class="success-username text-success m-0">Success..!</p>
            <p class="faild-username text-danger m-0">This is requird...?</p>

            <input
              type="text"
              placeholder="email"
              class="w-100 text-capitalize py-2 email"
            />
            <p class="success-email text-success m-0">Success..!</p>
            <p class="faild-email text-danger m-0">This is requird...?</p>
            <input
              type="text"
              placeholder="subject"
              class="w-100 text-capitalize py-2 subject"
            />
            <p class="success-subject text-success m-0">Success..!</p>
            <p class="faild-subject text-danger m-0">This is requird...?</p>
            <textarea
              placeholder="Creat a message here"
              class="w-100"
            ></textarea>
            <Button
              title="send message"
              @click="SendEmail()"
              class="fw-bold text-uppercase px-4 py-2"
            />
            <div class="follow-us">
              <h5 class="text-capitalize mt-5 fw-bold">follow us here</h5>
              <span
                ><a href="#" class="text-uppercase me-2 fw-bold"
                  >facebook</a
                ></span
              >
              <span
                ><a href="#" class="text-uppercase me-2 fw-bold"
                  >twitter</a
                ></span
              >
              <span
                ><a href="#" class="text-uppercase me-2 fw-bold"
                  >instagram</a
                ></span
              >
              <span
                ><a href="#" class="text-uppercase me-2 fw-bold"
                  >dribbble</a
                ></span
              >
            </div>
          </div>
        </div>
        <div
          class="col-lg-6 p-md-0 order-lg-2 order-md-1 order-sm-1"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55241.18176587608!2d31.3786368!3d30.077747199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1662636930551!5m2!1sar!2seg"
            class="w-100"
            height="665"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../button-project/button.vue";
$(document).ready(function () {
  $(".success-username").hide();
  $(".success-email").hide();
  $(".success-subject").hide();

  $(".faild-email").hide();
  $(".faild-username").hide();
  $(".faild-subject").hide();
});
export default {
  name: "ContactUs",
  components: { Button },
  methods: {
    SendEmail() {
      if ($(".username").val() === " " || $(".username").val() === "") {
        $(".success-username").hide("slow");
        $(".faild-username").show("slow");
      } else {
        $(".faild-username").hide("slow");
        $(".success-username").show("slow");
      }
      if ($(".email").val() === " " || $(".email").val() === "") {
        $(".success-email").hide("slow");
        $(".faild-email").show("slow");
      } else {
        $(".faild-email").hide("slow");
        $(".success-email").show("slow");
      }
      if ($(".suject").val() === " " || $(".subject").val() === "") {
        $(".success-subject").hide("slow");
        $(".faild-subject").show("slow");
      } else {
        $(".faild-subject").hide("slow");
        $(".success-subject").show("slow");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
  color: black;
}
.contact-us {
  margin-top: 100px;
  margin-bottom: 100px;
  .content {
    background-color: white;
    p {
      color: #9999b3;
      font-weight: 400;
    }
  }
}
input,
textarea {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
}
input:focus-visible,
textarea:focus-visible {
  outline: 0px;
  transition: all 0.4s ease-in-out;
  border-bottom: 1px solid $Main-Color;
}
textarea {
  height: 70px;
}
::placeholder {
  font-size: 14px;
  color: #aaa;
}
.follow-us {
  margin-bottom: 20px;
  span {
    font-size: 13px;
  }
}
@media only screen and (max-width: 768px) {
  iframe {
    height: 300px;
  }
}
@media only screen and (max-width: 425px) {
  .follow-us {
    span {
      display: block;
      margin-top: 10px;
    }
  }
}
</style>