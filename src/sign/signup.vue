<template>
  <div class="container">
    <div class="form">
      <form @submit.prevent="signupFunc">
        <div class="logo">
          <div class="logo-img">
            <i class="fa-solid fa-pills top-left"></i
            ><i class="fa-solid fa-syringe top-right"></i>
            <i class="fa-solid fa-stethoscope round-left"></i>
            <i class="fa-solid fa-prescription-bottle-medical"></i>
          </div>
        </div>
        <h2>signup for an account</h2>
        <div class="credentials">
          <div class="input">
            <div class="value">
              <label for="name" class="input-label">
                <i class="fa-solid fa-user"></i
              ></label>

              <input
                type="name"
                name="name"
                id="name"
                placeholder=" "
                v-model="user.name"
                required
              />
              <label for="name" class="active">Name <span>.....</span></label>
            </div>
          </div>
          <div class="input">
            <div class="value">
              <label for="email" class="input-label">
                <i class="fa-solid fa-envelope"></i
              ></label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                v-model="user.email"
                required
              />
              <label for="email" class="active"
                >Email address <span>.....</span></label
              >
            </div>
          </div>
          <div class="input">
            <div class="value">
              <label for="address" class="input-label">
                <i class="fa-solid fa-house-user"></i>
              </label>

              <input
                type="address"
                name="address"
                id="address"
                placeholder=" "
                v-model="user.address"
              />
              <label for="address" class="active"
                >address <span>.....</span></label
              >
            </div>
          </div>
          <div class="input">
            <div class="value">
              <label for="speciality" class="input-label">
                <i class="fa-solid fa-ranking-star"></i>
              </label>

              <input
                type="speciality"
                name="speciality"
                id="speciality"
                placeholder=" "
                v-model="user.speciality"
              />
              <label for="speciality" class="active"
                >speciality <span>.....</span></label
              >
            </div>
          </div>
          <div class="input">
            <div class="value">
              <label for="password" class="input-label">
                <i class="fa-solid fa-key"></i>
              </label>

              <input
                type="password"
                name="password"
                id="password"
                placeholder=" "
                v-model="user.password"
              />
              <label for="password" class="active"
                >Password <span>.....</span></label
              >
            </div>
          </div>

          <div class="input">
            <div class="value">
              <label for="confirm-password" class="input-label">
                <i class="fa-solid fa-key"></i>
              </label>

              <input
                type="password"
                name="password"
                id="confirm-password"
                placeholder=" "
                v-model="user.confirmPassword"
              />
              <label for="confirm-password" class="active"
                >Confirm Password <span>.....</span></label
              >
            </div>
          </div>
          <button type="submit">Log In</button>
        </div>
        <div class="footer">
          Already have an account ?
          <router-link to="/account/signin" class="link">signin</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
export default {
  name: "Signin",
  setup() {
    let user = reactive({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      speciality: "",
    });

    const config = {
      headers: {
        "Content-Type": "applicaltion/json",
      },
    };

    const signupFunc = () => {
      axios
        .post("/api/signup", user, config)
        .then((res) => res)
        .catch((err) => err);
    };
    return { user, signupFunc };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 170vh;
  margin: 0;
  padding: 20px 0;
  background: rgb(2, 122, 186);
  .logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
