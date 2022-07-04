<template>
  <div class="container">
    <div class="logo">
      <h1>Medic <span>Store</span></h1>
    </div>
    <div class="form">
      <form>
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
                required
              />
              <label for="name" class="active">Name</label>
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
                required
              />
              <label for="email" class="active">Email address</label>
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
              />
              <label for="address" class="active">address</label>
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
              />
              <label for="speciality" class="active">speciality</label>
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
              />
              <label for="password" class="active">Password</label>
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
              />
              <label for="confirm-password" class="active"
                >Confirm Password</label
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
export default {
  name: "Signin",
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  background: rgb(2, 122, 186);

  .logo {
    margin: 0 auto;
    padding: 20px;

    h1 {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        color: tomato;
      }
    }
  }

  .form {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    form {
      width: 500px;
      height: fit-content;
      border-radius: 7px;
      background: white;
      overflow: hidden;

      h2 {
        padding: 10px;
        font: 600 30px "Nunito Sans", sans-serif;
        color: rgb(108, 112, 113);
      }

      .credentials {
        width: 83%;
        height: fit-content;
        margin: 10px auto;

        .input {
          margin: 20px auto;
          padding: 5px 0;
          width: 100%;

          .value {
            width: 100%;
            height: fit-content;
            display: Flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 0.5px 1px rgb(2, 122, 186);
            border-radius: 3px;
            position: relative;
            label {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 4px 3px;
              cursor: text;
              text-transform: capitalize;
              transition: all 0.3s ease;
            }

            label.active {
              position: absolute;
              top: 20%;
              left: 12%;
            }

            label.input-label {
              position: relative;
              width: 10%;
              height: 35px;
              background: transparent;
              border-right: 1px solid rgb(207, 206, 206);
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 1px 0;
              cursor: pointer;
              i {
                color: rgb(107, 132, 145);
                position: relative;
                left: 0;
                animation: writing 5s linear infinite forwards;
              }
            }

            input {
              width: 90%;
              height: 50px;
              outline: none;
              border: none;
              padding-left: 15px;
              background: transparent;
              border-radius: 0 3px 3px 0;
              &:placeholder-shown {
                &::before {
                  content: "";
                  border: 2px solid red;
                  width: 2px;
                }
              }
            }
            @keyframes writing {
              to {
                transform: rotateY(360deg);
              }
            }

            //   input:hover ~ label.active,
            //   input:placeholder-shown.input:not(:focus) ~ label.active {
            //     top: -31%;
            //     background: white;
            //     box-shadow: 0 0 0.5px 1px rgb(2, 122, 186);
            //     font-size: 0.8em;
            //     border-radius: 2px;
            //     padding: 3px 7px;
            //   }

            input:focus ~ label.active,
            input:not(:focus):not(:placeholder-shown) ~ label.active {
              top: -0.55rem;
              left: 12%;
              background: white;
              font-size: 0.7em;
              padding: 3px 6px;
              box-shadow: none;
              border-left: 2px solid rgb(2, 122, 186);
              border: 2px solid rgb(2, 122, 186);
              border-bottom: none;
              border-radius: 3px;
            }
          }
        }
        button {
          width: 100%;
          height: 50px;
          margin: 10px auto;
          border: none;
          background: rgb(2, 122, 186);
          border-radius: 4px;
          color: white;
          font: 600 24px "Nunito Sans", sans-serif;
        }
      }

      .footer {
        width: 100%;
        height: 70px;
        background: rgb(240, 241, 241);
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          padding: 0 5px;
          font: 600 23px "Nunito Sans", sans-serif;
          color: rgb(7, 110, 151);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            color: tomato;
            padding: 0;
          }
        }
        .link {
          text-decoration: none;
          padding-left: 5px;
          color: rgb(21, 155, 238);

          &:hover {
            color: tomato;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
