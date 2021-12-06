<template>
  <NavBar id="navbar" />
  <router-view v-slot="{ Component }">
    <transition appear name="slide-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import NavBar from '/@/components/organism/NavBar.vue';
import Footer from '/@/components/organism/Footer.vue';
export default {
    name: "HeaderFooterLayout",
    components: {
        NavBar,
        Footer
    }
}
</script>

<style scoped>
.slide-in-enter-from {
  opacity: 0;
  transform: translateX(-60px);
}

.slide-in-enter-active {
  transition: all 0.5s ease-out;
}
</style>