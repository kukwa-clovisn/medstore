<template>
  <div class="container">
    <div class="form">
      <form @submit.prevent="loginFunc">
        <div class="logo">
          <div class="logo-img">
            <i class="fa-solid fa-pills top-left"></i
            ><i class="fa-solid fa-syringe top-right"></i>
            <i class="fa-solid fa-stethoscope round-left"></i>
            <i class="fa-solid fa-prescription-bottle-medical"></i>
          </div>
        </div>
        <h2>Log in to your account</h2>
        <div class="credentials">
          <div class="input">
            <div class="value">
              <label for="email" class="input-label">
                <i class="fa-solid fa-user"></i
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
              <label for="password" class="input-label">
                <i class="fa-solid fa-key"></i>
              </label>

              <input
                type="password"
                name="password"
                id="password"
                v-model="user.password"
                placeholder=" "
              />
              <label for="password" class="active"
                >Password <span>.....</span></label
              >
            </div>
          </div>
          <button type="submit">Log In</button>
        </div>
        <div class="footer">
          New to <span>Medic<span>Store</span></span> ?
          <router-link to="/account/signup" class="link">signup</router-link>
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
      email: "",
      password: "",
    });

    const config = {
      headers: {
        "Content-Type": "applicaltion/json",
      },
    };

    const loginFunc = () => {
      axios
        .post("/api/login", user, config)
        .then((res) => res)
        .catch((err) => err);
    };
    return { user, loginFunc };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
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
