<template>
  <div
    class="navbar"
  >
    <div class="flex justify-between items-center">
      <router-link to="/" class="flex items-center">
        <img
          class="h-12 w-12"
          src="https://cdn1.iconfinder.com/data/icons/andriod-app-logo/32/icon_p-512.png"
          alt=""
        />
        <p class="ml-1 text-2xl font-extrabold uppercase">eazy</p>
      </router-link>
      <button
        class="lg:hidden rounded-lg focus:outline-none focus:shadow-outline"
        @click="toggle"
      >
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <nav class="mr-12 text-xl font-bold">
      <!-- <div class="flex items-center">
        <img
          class="h-12 w-12"
          src="https://cdn1.iconfinder.com/data/icons/andriod-app-logo/32/icon_p-512.png"
          alt=""
        />
        <p class="ml-1 text-2xl font-extrabold uppercase">eazy</p>
      </div> -->
      <a
        class="mr-8 navBtn"
        href="#aboutMe"
        @click="toAbout"
        >About</a
      >
      <a
        class="mr-8 navBtn"
        href="#career"
        @click="toCareer"
        >Career</a
      >
      <a
        class="mr-8 navBtn"
        href="#project"
        @click="toProject"
        >Project</a
      >
      <a
        class="mr-8 navBtn"
        href="#"
        @click="toBlogPage"
        >Blog</a
      >
      <a class="navBtn" href="#"
        >Contact</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    toBlogPage() {
      this.$router.push("/blog");
    },
    toAbout() {
      this.$router.push("/")
    },
    toCareer() {
      this.$router.push("/")
    },
    toProject() {
      this.$router.push("/")
    }
  },
};
</script>

<style scoped></style>
