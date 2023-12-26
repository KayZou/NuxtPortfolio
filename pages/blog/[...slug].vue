<template>
  <div>
    <article class="prose dark:prose-invert mx-auto max-w-none">
      <ContentDoc v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div class="col-span-4">
            <ContentRenderer :value="doc" />
          </div>
          <div class="col-span-2">
            <aside class="sticky top-8 mt-14">
              <div class="font-semibold mb-4">Table of Contents</div>
              <nav>
                <TocLinks :links="doc.body.toc.links"/>
              </nav>
            </aside>
          </div>
        </div>
      </ContentDoc>
    </article>
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route);
</script>

<style lang="scss" scoped></style>
