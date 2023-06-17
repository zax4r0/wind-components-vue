<template>
  <Story title="Checkbox">
    <Variant title="Single">
      <Checkbox :on="on" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { Checkbox } from "../components/smart"

import { ref } from "vue"

const on = ref(true)
</script>
