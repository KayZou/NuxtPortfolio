<template>
  <div>
    <header>
      <nav class="bg-blue-500 p-4">
        <ul class="flex justify-center space-x-4 text-white">
          <li>
            <nuxt-link to="/" class="hover:underline">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog" class="hover:underline">Blogs</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects" class="hover:underline"
              >Projects</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/about" class="hover:underline">About</nuxt-link>
          </li>
          <ClientOnly>
            <color-mode />
          </ClientOnly>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
/* You can remove the scoped attribute if you want to apply global styles */

/* Example global style for body */
body {
  font-family: "Inter", sans-serif; /* You can use any font classes provided by Tailwind */
}

/* Add more styles as needed */
</style>
