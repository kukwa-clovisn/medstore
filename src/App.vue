<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Grand+Hotel&family=Jacques+Francois&family=Jacques+Francois+Shadow&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}

* {
  transition: all 0.3s ease;
  // font-family: "Poppins", sans-serif;
}

button,
a,
label {
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
  &:active {
    transform: scale(0.8);
  }
}

nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logo-img {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  color: white;
  margin: 5px auto;

  i {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 1px;

    background: tomato;
    border-radius: 0 0 100% 0;
  }

  i.round-left {
    border-radius: 0 0 0 100%;
    background: rgb(2, 122, 186);
  }
  i.top-left {
    border-radius: 100% 0 0 0;
    background: tomato;
  }
  i.top-right {
    border-radius: 0 100% 0 0;
    background: rgb(2, 122, 186);
  }
}

.form {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;

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

            span {
              width: fit-content;
              height: 20px;
              position: relative;
              background: white;
              padding: 0;
              padding-left: 2px;
              &::before {
                content: "";
                width: 100%;
                height: 100%;
                background: white;

                letter-spacing: 2px;
                position: absolute;
                bottom: 0;
                left: 0;
                border-left: 1px solid rgb(70, 70, 70);
                border-radius: 1px;
                animation: inputwrite 2s steps(9, start) infinite alternate;
              }
            }
          }

          @keyframes inputwrite {
            to {
              transform: translateX(100%);
            }
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
          }
          @keyframes writing {
            to {
              transform: rotateY(360deg);
            }
          }

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
            span {
              display: none;
            }
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

      @media screen and (max-width: 320px) {
        span {
          font-size: 18px;
        }
      }
    }

    @media screen and (max-width: 522px) {
      width: 99%;
    }
  }
}
</style>
