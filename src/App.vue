<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'App',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

abbr[title] {
  border-bottom: none !important;
  cursor: inherit !important;
  text-decoration: none !important;
}
</style>
