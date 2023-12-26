<template>
  <div>
    <button
      @click="toggleMode"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      🌞/🌑
      <span v-if="isHovered">{{ modes[currentMode] }}</span>
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const modes = ["system", "light", "dark"];

const nextMode = computed(() => {
  const currentMode = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;
  if (currentMode + 1 === modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentMode + 1;
  }
  return modes[nextModeIndex];
});

const toggleMode = () => {
  colorMode.preference = nextMode.value;
  currentMode.value = modes.indexOf(colorMode.preference); // Update currentMode
};

const currentMode = ref(modes.indexOf(colorMode.preference));
const isHovered = ref(false);
</script>

<style lang="css" scoped>
/* Add your styling here if needed */
</style>
