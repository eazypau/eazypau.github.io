<template>
  <div class="header" id="header">
    <transition appear @before-enter="fallOne" @enter="fallEnterOne">
      <h1 class="text-3xl font-extrabold font-monserrat uppercase">
        hi there!
      </h1>
    </transition>
    <transition appear name="header-2">
    <h1 class="text-3xl font-extrabold font-monserrat uppercase mb-10">
      my name is <span class="text-6xl capitalize">po</span>
    </h1>
    </transition>
    <transition appear name="bounce-1">
    <h1 class="text-6xl font-extrabold font-monserrat uppercase">
      mechanical engineer
    </h1>
    </transition>
    <div class="flex items-center">
        <svg
          class="h-20 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 17l-4 4m0 0l-4-4m4 4V3"
          ></path>
        </svg>
      <transition appear name="side">
      <h1 class="text-3xl font-extrabold font-monserrat uppercase">
        in pursue to become
      </h1>
      </transition>
    </div>
    <transition appear name="bounce-2">
    <h1 class="text-6xl font-extrabold font-monserrat uppercase">
      web developer
    </h1>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Header",
  setup() {
    const fallOne = (el) => {
      console.log("before enter");
      gsap.from(el, {
        opacity: 0,
        y: "-80px",
      });
    };
    const fallEnterOne = (el) => {
      console.log("entering");
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
      });
    };
    // const fallTwo = (el) => {
    //   console.log("before enter");
    //   gsap.from(el, {
    //     opacity: 0,
    //     y: "-80px",
    //   });
    // };
    // const fallEnterTwo = (el) => {
    //   console.log("entering");
    //   gsap.to(el, {
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //     // delay: "1s",
    //   });
    // };
    // const zoomOne = (el) => {
    //   console.log("before enter");
    //   gsap.from(el, {
    //     scale: 0.3,
    //   });
    // };
    // const zoomEnterOne = (el) => {
    //   console.log("entering");
    //   gsap.to(el, {
    //     scale: 1,
    //     ease: "back",
    //     duration: 0.5,
    //     delay: 2,
    //   });
    // };

    return { fallOne, fallEnterOne };
  },
};
</script>

<style scoped>
.header-2-enter-active {
  animation: slide-in 1s ease-in-out 1s;
}

.bounce-1-enter-active {
    animation: bounce-out 1s ease-out 2s;
}

.side-enter-active {
  animation: slide-in 1s ease-in 3s;
}

.bounce-2-enter-active {
    animation: bounce-out 1s ease-out 4s;
}

@keyframes bounce-out {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
