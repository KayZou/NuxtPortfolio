<template>
    <NuxtLayout>
      <div class="flex items-center justify-center h-screen">
        <div class="prose text-center">
          <template v-if="error.statusCode === 404">
            <h1 class="text-4xl font-bold text-red-500 mb-4">404!</h1>
            <p class="text-gray-700">Sorry, that page doesn't exist; <strong>{{ $route.fullPath }}</strong></p>
          </template>
          <template v-else>
            <h1 class="text-4xl font-bold text-red-500 mb-4">Dang</h1>
            <p class="text-gray-700">
              <strong>{{ error.message }}</strong>
            </p>
            <p class="text-gray-700">It looks like something broke.</p>
            <p class="text-gray-700">Sorry about that.</p>
          </template>
          <p class="mt-4">
            Go back to your
            <a @click="handleError" class="text-blue-500 cursor-pointer">index</a>.
          </p>
        </div>
      </div>
    </NuxtLayout>
  </template>
  
  <script setup>
  const error = useError();
  
  const handleError = () => {
    clearError({
      redirect: "/",
    });
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  