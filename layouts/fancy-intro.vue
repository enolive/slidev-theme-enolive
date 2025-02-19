<script setup lang="ts">

import {reactive} from 'vue';

const props = defineProps<{ image: string }>()

const imageStyle = reactive({
  color: 'white',
  'background-image': `url(${props.image})`,
  'background-position': 'center center',
})
</script>

<template>
  <div class="h-full grid grid-cols-2">
    <div class="slidev-layout fancy-intro h-full w-full flex flex-col justify-center">
      <slot/>
    </div>
    <div class="bg-white bg-no-repeat bg-cover" :style="imageStyle"></div>
  </div>
</template>
