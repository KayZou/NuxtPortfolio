<template>
  <div class="mt-10 flex items-center justify-center">
    <div class="text-center">
      <img
        src="https://avatars.githubusercontent.com/u/82322986?"
        alt="Your Name"
        class="rounded-full h-24 w-24 mb-4 mx-auto"
      />
      <h1 class="text-4xl font-bold mb-4">KayZou</h1>
      <h3 class="text-sm my-4">EL GAHZALI Zakaria</h3>
      <p class="text-gray-600">Web Developer</p>
      <div class="mt-8 flex items-center justify-center space-x-4">
        <a
          href="https://github.com/kayzou"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="uil:github" color="dark:white" size="3rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/elghazalizakaria"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="uil:linkedin" color="dark:white" size="3rem" />
        </a>
      </div>
      <div class="mt-8">
        <nuxt-link to="/projects" class="text-blue-500 hover:underline"
          >View Projects</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Portfolio",
});
</script>
