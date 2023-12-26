<template>
  <div class="p-4">
    <section class="mb-8 text-center text-3xl">
      <h1 class="text-2xl font-bold mb-4 underline">📄 All Blogs:</h1>
      <ul>
        <li v-for="post in posts" :key="post._path" class="mb-2">
          <NuxtLink :to="post._path" class="text-blue-500 hover:underline">{{
            post.title
          }}</NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("blog").only(["_path", "title"]).find()
);
console.log(posts);
</script>

<style lang="css" scoped>
/* You can also use regular CSS or SCSS syntax if you prefer */
</style>
