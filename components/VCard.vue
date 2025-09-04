<script setup lang="ts">
defineProps<{ githubUrl?: string, gitlabUrl?: string, bluesky?: string }>()
</script>

<template>
  <div class="abs-tr text-base flex items-center pt-3 pr-3">
    <a v-if="githubUrl" :href="githubUrl" target="_blank" title="GitHub" class="icon">
      <mdi-github/>
    </a>
    <a v-if="gitlabUrl" :href="gitlabUrl" target="_blank" title="GitLab" class="icon">
      <mdi-gitlab/>
    </a>
    <a v-if="bluesky" :href="`https://bsky.app/profile/${bluesky}`" target="_blank" title="BlueSky" class="icon">
      <bi-bluesky/>
    </a>
  </div>
</template>

<style>
.icon {
  @apply !p-1 !border-none !text-white !hover:text-[--slidev-theme-secondary];
}
</style>