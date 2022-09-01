<template>
  <section class="check-availability">
    <div class="container check-availability-content">
      <div class="row">
        <div class="col-lg col-md-6 col-sm-12 py-md-5 py-3 ps-5 check-in-date">
          <label class="d-block text-uppercase text-light fw-bold"
            >chick-in</label
          >
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-calendar-days d-inline-block me-2"></i>
            <input
              type="text"
              class="d-inline-block"
              placeholder="Check-In-Date"
            />
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-12 check-out-date py-md-5 py-3 ps-5">
          <label class="d-block text-uppercase text-light fw-bold"
            >chick-out</label
          >
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-calendar-days d-inline-block me-2"></i>
            <input
              type="text"
              class="d-inline-block"
              placeholder="Check-Out-Date"
            />
          </div>
        </div>
        <div class="col-lg col-md-6 col-sm-12 py-md-5 py-3 ps-5 rooms">
          <label class="text-light fw-bold d-block">rooms</label>
          <select id="rooms" class="d-block">
            <option value="suits">suits</option>
            <option value="family room">family room</option>
            <option value="calssic room">calssic room</option>
            <option value="superior room">superior room</option>
          </select>
        </div>
        <div class="col-lg col-md-6 col-sm-12 py-md-5 py-3 ps-5 guests">
          <label class="text-light fw-bold d-block">guests</label>
          <select id="guests" class="d-block">
            <option value="1 person">1 person</option>
            <option value="2 person">2 person</option>
            <option value="3 person">3 person</option>
            <option value="4 person">4 person</option>
            <option value="5 person">5 person</option>
            <option value="6-9 person">6-9 person</option>
            <option value="10+ person">10+ person</option>
          </select>
        </div>
        <a
          class="
            col-lg col-md-12
            py-lg-5 py-3
            flex-lg-nowrap
            ps-3
            last-part-check-availability
            text-center text-light text-uppercase
            fw-bold
          "
          href="#"
        >
          <h4>
            check
            <span class="d-lg-block"> availability </span>
          </h4>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "CheckAvailability",
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
}
.check-availability {
  position: relative;
  margin-bottom: 20px;
  margin-top: -80px;
}
.check-availability-content {
  background-color: $Black-Color;
}

.check-in-date,
.check-out-date,
.rooms,
.guests {
  label {
    font-size: 12px;
    margin-bottom: 8px;
    color: #656565;
    text-transform: uppercase;
  }
  i {
    color: #656565;
  }
  input,
  select {
    background-color: transparent;
    text-transform: capitalize;
    border-style: none;
    color: #656565;

    option {
      color: $Main-Color;
      border-style: none;
      text-transform: capitalize;
      background-color: $Black-Color;
      justify-content: center;
      align-items: center;
    }
  }
  ::placeholder {
    color: #656565;
  }
}
select:focus,
input:focus,
select:focus-visible {
  box-shadow: none;
  border-color: transparent;
}
.guests {
  span {
    font-size: 25px;
  }
}

.last-part-check-availability {
  background-color: $Main-Color;
  h4 {
    font-size: 15px;
    font-weight: bolder;
  }
}
input:focus,
.input:focus-visible {
  outline: none;
}
</style>