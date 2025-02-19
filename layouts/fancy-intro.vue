<script setup lang="ts">

import {reactive} from 'vue';

const props = defineProps<{ image: string }>()

const imageStyle = reactive({
  color: 'white',
  'background-image': `url(${resolveAssetUrl(props.image)})`,
  'background-position': 'center center',
})

function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}
</script>

<template>
  <div class="h-full grid grid-cols-2">
    <div class="slidev-layout fancy-intro h-full w-full flex flex-col justify-center">
      <slot/>
    </div>
    <div class="bg-white bg-no-repeat bg-cover" :style="imageStyle"></div>
  </div>
</template>
