<template>
  <Story title="Slider Over">
    <SlideOver :show="show" :title="'Title'" @close="show = false">
      <template #content>
        <h1>Content</h1>
      </template>
    </SlideOver>
  </Story>
</template>

<script setup lang="ts">
import { SlideOver } from "../components/smart"
import { ref } from "vue"

const show = ref(true)
</script>
