<script setup>

const { error, pending, data } = await useFetch(
  "https://api.github.com/users/kayzou/repos"
);
// console.log(data);
const repos = computed(() =>
  data.value
    .filter((repo) => repo.description)
    .sort((a, b) => a.description.localeCompare(b.description))
);
</script>

<template>
  <div>
    <h1 class="mb-10 underline">💾 Github Projects:</h1>

    <div v-if="pending">Loading...</div>

    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li
          v-for="repo in repos"
          :key="repo.id"
          class="border border-gray-300 rounded-sm p-2 hover:bg-gray-400"
        >
          <div class="flex items-center justify-between text-sm">
            <div>
              <a :href="repo.html_url" target="_blank">
                {{ repo.name }}
              </a>
              <p class="text-xs text-gray-900 dark:text-white">{{ repo.description }}</p>
            </div>
            <div>{{ repo.stargazers_count || 5 }} 🌟</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
