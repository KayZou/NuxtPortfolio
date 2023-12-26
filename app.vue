<template>
  <div class="flex flex-col min-h-screen">
    <NuxtLayout :name="HeaderLayout">
      <div class="container mx-auto mx-w-3xl mt-4">
        <NuxtPage />
      </div>
    </NuxtLayout>

    <!-- Add the footer layout here -->
    <NuxtLayout :name="FooterLayout" class="mt-auto">
      <!-- Content for the footer, if any -->
    </NuxtLayout>
  </div>
</template>

<script setup>
const FooterLayout = "app-footer";
const HeaderLayout = "app-header";
useHead({
  titleTemplate: "%s - KayZou",
});
</script>

<style>
body {
  font-family: "Helvetica", "Helvetica-Bold";
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-white;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}
</style>
