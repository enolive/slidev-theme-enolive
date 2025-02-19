<script setup lang="ts">
defineProps<{ githubUrl?: string, gitlabUrl?: string }>()
</script>

<template>
  <div class="abs-tr text-base flex items-center pt-3 pr-3">
    <a v-if="githubUrl" :href="githubUrl" target="_blank" title="GitHub" class="icon">
      <mdi-github/>
    </a>
    <a v-if="gitlabUrl" :href="gitlabUrl" target="_blank" title="GitLab" class="icon">
      <mdi-gitlab/>
    </a>
  </div>
</template>

<style>
.icon {
  @apply !p-1 !border-none !text-white !hover:text-[--slidev-theme-secondary];
}
</style>