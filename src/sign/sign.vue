<template>
  <main>
    <div class="main-container">
      <transition name="fade-in">
        <div class="menu" v-if="!menu">
          <div class="logo" @click="toggleOut">
            <div class="logo-img">
              <i class="fa-solid fa-pills top-left"></i
              ><i class="fa-solid fa-syringe top-right"></i>
              <i class="fa-solid fa-stethoscope round-left"></i>
              <i class="fa-solid fa-prescription-bottle-medical"></i>
            </div>
            <h1>Medic <span>Store</span></h1>
          </div>
          <div class="items">
            <li @click="toggleOut">
              <router-link to="/account/signin" class="link"
                ><i class="fa-solid fa-arrow-right-to-bracket"></i>sign
                in</router-link
              >
            </li>
            <li @click="toggleOut">
              <router-link to="/account/signup" class="link"
                ><i class="fa-solid fa-user-plus"></i>signup</router-link
              >
            </li>
            <li @click="toggleOut">
              <router-link to="/account/password-reset" class="link">
                <i class="fa-solid fa-key"></i>Forgot password</router-link
              >
            </li>
            <li @click="toggleOut">
              <router-link to="/" class="link">
                <i class="fa-solid fa-circle-info"></i>about us</router-link
              >
            </li>
            <li @click="toggleOut">
              <router-link to="/" class="link">
                <i class="fa-solid fa-person-circle-question"></i>why
                us?</router-link
              >
            </li>
            <li>
              <router-link to="/" class="link">
                <i class="fa-solid fa-house"></i>Home</router-link
              >
            </li>
          </div>
        </div>
      </transition>

      <div class="router-view" :class="{ active: active }">
        <header>
          <i class="fa-solid fa-bars" @click="toggleIn" v-if="!active"></i>
          <i class="fa-solid fa-bars" @click="toggleOut" v-if="active"></i>
          <h1>Medic <span>Store</span></h1>
          <router-link to="/" class="route">
            <i class="fa-solid fa-arrow-right-from-bracket home"></i
          ></router-link>
        </header>
        <router-view v-slot="{ Component }" @click="toggleOut">
          <transition name="fade">
            <component :is="Component"></component> </transition
        ></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Sign",
  setup() {
    let active = ref(false);
    let menu = ref(true);

    function toggleIn() {
      menu.value = !menu.value;
      setTimeout(() => {
        active.value = !active.value;
      }, 300);
    }

    function toggleOut() {
      active.value = !active.value;
      setTimeout(() => {
        menu.value = !menu.value;
      }, 300);
    }
    return { active, menu, toggleIn, toggleOut };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-from {
  transform: translateY(100vh);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active,
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s ease;
}
.fade-leave-to {
  transform: translateY(-100vh);
}

.fade-in-enter-from,
.fade-in-leave-to {
  transform: translateX(-40vw);
}
main {
  width: 100%;
  height: 100vh;
  padding: 0;
  overflow: hidden;
  background: rgb(2, 122, 186);

  .main-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;

    .menu {
      width: 20%;
      height: 100vh;
      background: white;
      overflow: hidden;

      .logo {
        width: 100%;
        height: 30vh;
        background: rgb(234, 233, 233);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-bottom: 1px solid rgb(214, 214, 214);
        padding: 5px 0;

        h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          font-size: 25px;

          span {
            color: tomato;
          }
        }
      }
      .items {
        height: 69vh;
        list-style: none;
        overflow-y: auto;
        &::-webkit-scrollbar {
          background: white;
          width: 10px;
        }

        &::-webkit-scrollbar-thumb {
          background: rgb(2, 122, 186);
          border-radius: 40px;
        }
        li {
          width: 100%;
          height: 50px;
          border-bottom: 1px solid rgb(208, 207, 207);

          .link {
            text-decoration: none;
            max-width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            color: rgb(100, 100, 100);
            text-transform: capitalize;
            font-size: 12px;

            i {
              height: 100%;
              width: 30%;
              font-size: 23px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            &:hover {
              border-right: 5px solid rgb(2, 122, 186);
              background: rgb(234, 233, 233);
              transform: none;
              color: rgb(2, 122, 186);
            }

            &.router-link-exact-active {
              color: #42b983;
              border-left: 5px solid tomato;
              background: rgb(237, 236, 236);
              color: tomato;
              i {
                color: tomato;
              }
            }
          }
        }
      }
      @media screen and (max-width: 768px) {
        width: 100vw;
        z-index: 1;
        position: fixed;
        top: 10vh;
        left: 0;

        .items {
          li {
            height: 55px;
            .link {
              font-size: 15px;
            }
          }
        }
      }
    }
    .router-view {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      overflow-y: auto;
      border-radius: 9px 0 0 0;
      padding-top: 11vh;
      padding-bottom: 20px;

      header {
        height: 10vh;
        width: 100%;
        background: rgb(2, 122, 186);
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
        color: white;
        font-size: 23px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        i {
          cursor: pointer;
          margin-left: 15px;
          font-size: 27px;
        }

        .home {
          margin-right: 20px;
        }
        .route {
          text-decoration: none;
          color: inherit;
        }
        h1 {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 23px;
          span {
            color: tomato;
          }
        }
      }

      &::-webkit-scrollbar {
        background: rgb(2, 122, 186);
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgb(230, 228, 228);
        border-radius: 40px;
      }
    }
    .router-view.active {
      width: 80vw;
      header {
        width: 80vw;
      }

      @media screen and (max-width: 768px) {
        width: 100vw;
        header {
          width: 100vw;
        }
      }
    }
  }
}
</style>