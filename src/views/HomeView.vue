<template>
  <div class="home">
    <div class="container">
      <header>
        <nav class="left-nav">
          <div class="logo-img">
            <i class="fa-solid fa-pills top-left"></i
            ><i class="fa-solid fa-syringe top-right"></i>
            <i class="fa-solid fa-stethoscope round-left"></i>
            <i class="fa-solid fa-prescription-bottle-medical"></i>
          </div>
          <h1>Medic <span>Store</span></h1>
        </nav>
        <nav class="right-nav">
          <router-link to="/account/signin" class="link">sign in</router-link>
        </nav>
      </header>
      <transition name="swipeRight">
        <div class="content" v-if="swipe.pageone">
          <img src="../assets/medic.jpeg" alt="" />
          <div class="blur"></div>
          <div class="start">
            <h2>Welcome to</h2>

            <h1>Medic <span>store</span></h1>
            <div class="logo-img">
              <i class="fa-solid fa-pills top-left"></i
              ><i class="fa-solid fa-syringe top-right"></i>
              <i class="fa-solid fa-stethoscope round-left"></i>
              <i class="fa-solid fa-prescription-bottle-medical"></i>
            </div>
            <p>Get started to see what MedicStore has prepared for you....</p>

            <button>
              <router-link to="/account/signin" class="link"
                >Get started</router-link
              >
            </button>
          </div>
        </div>
      </transition>
      <transition name="swipeLeft">
        <div class="content" v-if="swipe.pagetwo">
          <img src="../assets/Medical-Exemption-WEB.jpg" alt="" />
          <div class="blur"></div>
          <div class="sample">
            <h1>Get the drug of your choice!</h1>
            <p>
              MedicStore is an online platform where you can find drugs for
              companies. We also handle distrubution of drugs. We serve as a
              middleman so we don't sell drugs on this site we simply advertize
              and store the drug data so anyone claiming to sell from this site
              is a fraud and a scam. <br />
              Enjoy your walk through MedicStore.
            </p>
            <button>
              <router-link to="/account/signin" class="link"
                >Get Started</router-link
              >
            </button>
          </div>
        </div>
      </transition>

      <div class="side-btn">
        <button
          @click="
            swipe.pagetwo = false;
            swipe.pageone = true;
          "
          :class="{ active: swipe.pageone }"
        >
          <i class="fa-solid fa-chevron-left"></i></button
        ><button
          @click="
            swipe.pagetwo = true;
            swipe.pageone = false;
          "
          :class="{ active: swipe.pagetwo }"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div class="btns">
        <button
          @click="
            swipe.pagetwo = false;
            swipe.pageone = true;
          "
          :class="{ active: swipe.pageone }"
        ></button
        ><button
          @click="
            swipe.pagetwo = true;
            swipe.pageone = false;
          "
          :class="{ active: swipe.pagetwo }"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "HomeView",
  setup() {
    let swipe = reactive({
      pageone: true,
      pagetwo: false,
    });

    setInterval(() => {
      swipe.pageone = !swipe.pageone;
      swipe.pagetwo = !swipe.pagetwo;
    }, 15000);

    return { swipe };
  },
};
</script>

<style lang="scss" scoped>
.swipeLeft-enter-from {
  transform: translateX(-110vw);
}
.swipeRight-enter-from {
  transform: translateX(110vw);
}
.swipeLeft-enter-active,
.swipeLeft-leave-active,
.swipeRight-leave-active,
.swipeRight-enter-active {
  transition: all 1s ease;
}
.swipeLeft-leave-to {
  transform: translateX(-110vw);
}
.swipeRight-leave-to {
  transform: translateX(110vw);
}

.home {
  width: 100vw;
  height: fit-content;
  header {
    width: 100%;
    height: 18vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    font: 700 30px "Poppins", sans-serif;
    z-index: 1;

    .left-nav {
      margin-left: 3%;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: rgb(210, 209, 209);
        span {
          color: tomato;
        }
      }
    }
    .right-nav {
      margin-right: 5%;
      .link {
        text-decoration: none;
        color: rgb(218, 215, 215);
        width: 100px;
        height: 40px;
        font-size: 20px;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    .blur {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgb(4, 80, 127);
      opacity: 0.5;
    }
    .content {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      overflow: hidden;

      img {
        width: auto;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
      }

      .start {
        width: 100%;
        height: 70%;
        position: absolute;
        top: 17%;
        left: 0;
        z-index: 1.4;

        color: white;
        h1 {
          font: 700 65px "Poppins", sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          margin: 0;
          span {
            color: tomato;
          }
        }
        h2 {
          margin: 0;
        }
        p {
          padding: 0 5px;
        }
        button {
          width: 250px;
          height: 50px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          position: relative;
          z-index: 1;

          .link {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
        }
      }

      .sample {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 17%;
        left: 0;
        h1 {
          position: relative;
          color: white;
          padding: 20px 10px;
        }
        p {
          color: whitesmoke;
          padding: 10px 20px;
        }
        button {
          width: 250px;
          height: 50px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          position: relative;
          z-index: 1;

          .link {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }

    .btns {
      width: 100px;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: absolute;
      bottom: 10px;
      left: 45%;
      //z-index:1;
      button {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        border: 2px solid white;
        background: transparent;
        margin: 10px;
        cursor: pointer;
        animation: dance 2s infinite linear alternate forwards;
        transition: all 0.3s ease;

        &:active {
          transform: scale(0.8);
        }
      }

      button.active {
        background: white;
        animation: none;
      }
    }

    .side-btn {
      width: 90%;
      height: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      top: 0;
      left: 5%;
      //z-index:1;

      button {
        width: 60px;
        height: 40px;
        cursor: pointer;
        border: 1px solid whitesmoke;
        background: transparent;
        color: rgb(255, 255, 255);
        font-size: 30px;
        border-radius: 2px;
        animation: dance 2s infinite linear alternate forwards;
      }

      button.active {
        color: rgb(70, 69, 69);
        background: white;
        animation: none;
      }
    }

    @keyframes dance {
      from {
        transform: scale(0.8);
      }
      to {
        transform: scale(1.2);
      }
    }
  }
}
</style>
