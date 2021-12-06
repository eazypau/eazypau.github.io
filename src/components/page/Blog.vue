<template>
  <div class="py-20 px-10 h-screen">
    <div>
      <h1 class="text-3xl font-bold mb-5"><span class="text-6xl">W</span>elcome to My Blog</h1>
      <hr />
    </div>
    <div class="flex justify-start mt-16">
      <BlogCard class="mr-10" />
    </div>
  </div>
</template>

<script>
import BlogCard from "/@/components/organism/BlogCard.vue";
export default {
  name: "Blog",
  components: {
    BlogCard,
  },
};
</script>

<style scoped></style>
