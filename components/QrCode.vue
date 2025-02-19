<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'

defineProps<{value: string}>()
</script>

<template>
  <qrcode-vue :value="value" level="H" render-as="svg" :aria-label="value" />
</template>