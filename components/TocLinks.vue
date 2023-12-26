<template>
    <div>
        <ul>
            <li v-for="link in links" :key="link.id">
            <nuxt-link :to="{path: route.path, hash: `#${link.id}`}">
                {{ link.text }}
            </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    links:Array,
    level: {
        type: Number,
        default: 0
    }
})
const route = useRoute()
</script>

<style lang="css" scoped>

</style>