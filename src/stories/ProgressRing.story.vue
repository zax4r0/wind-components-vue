<template>
  <Story title="Progress Ring">
    <ProgressRing
      class="mr-2 text-red-500"
      :radius="8"
      :stroke="1.5"
      :progress="(failedTests / totalTests) * 100"
    />
  </Story>
</template>

<script setup lang="ts">
import { ProgressRing } from "../components/smart"
const totalTests = 10
const failedTests = 2
</script>
