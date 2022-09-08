<template>
  <section class="contact-us">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6 p-md-0 order-lg-1 order-md-2 order-sm-2">
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
              class="w-100 text-capitalize py-2"
            />
            <input
              type="text"
              placeholder="email"
              class="w-100 text-capitalize py-2"
            />
            <input
              type="text"
              placeholder="subject"
              class="w-100 text-capitalize py-2"
            />
            <textarea
              placeholder="Creat a message here"
              class="w-100"
            ></textarea>
            <Button
              title="send message"
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
        <div class="col-lg-6 p-md-0 order-lg-2 order-md-1 order-sm-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55241.18176587608!2d31.3786368!3d30.077747199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1662636930551!5m2!1sar!2seg"
            class="w-100"
            height="663"
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
export default {
  name: "ContactUs",
  components: { Button },
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