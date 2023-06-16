<template>
  <Story title="Checkbox">
    <Variant title="Single">
      <SmartCheckbox :on="on" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { SmartCheckbox } from "../components/smart"

import { ref } from "vue"

const on = ref(true)
</script>
