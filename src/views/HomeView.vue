<template>
  <div class="home">
    <header>Medic <span>store</span></header>
    <div class="container">
      <transition name="swipeRight">
        <div class="content" v-if="swipe.pageone">
          <img src="../assets/medic.jpg" alt="" />
          <div class="blur"></div>
          <div class="start">
            <h2>Welcome to</h2>
            <h1>Medic <span>store</span></h1>
            <button>Get Started</button>
          </div>
        </div>
      </transition>
      <transition name="swipeLeft">
        <div class="content" v-if="swipe.pagetwo">
          <img src="../assets/Medical-Exemption-WEB.jpg" alt="" />
          <div class="blur"></div>
          <div class="sample">
            <div class="left">
              <h1>this is left sample</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium fugiat corrupti, blanditiis numquam odio, beatae
                natus inventore modi consequatur perferendis delectus vitae quia
                amet. Eligendi et sequi at repellendus perspiciatis eveniet,
                quia voluptatum natus labore quam. Rem ab voluptate, quisquam
                labore ea culpa. Temporibus earum animi pariatur? Ex, iste
                aspernatur.
              </p>
            </div>
            <div class="right"></div>
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
    }, 10000);

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
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    padding: 20px;
    font: 700 30px "Poppins", sans-serif;

    span {
      color: tomato;
    }
  }

  .container {
    width: 100%;
    min-height: 84vh;
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
      top: 0;
      left: 0;
      overflow: hidden;

      img {
        width: 100%;
        min-height: 100%;
      }

      .start {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1.4;

        color: white;
        h1 {
          font: 700 65px "Poppins", sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            color: tomato;
          }
        }
        button {
          width: 250px;
          height: 50px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          position: relative;
          z-index: 1;
        }
      }

      .sample {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        //z-index:1;

        .left {
          width: 60%;
          height: fit-content;
          h1 {
            position: relative;
            color: white;
          }
          p {
            color: whitesmoke;
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
