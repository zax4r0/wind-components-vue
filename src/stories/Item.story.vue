<template>
  <Story title="Item">
    <Variant title="Single">
      <SmartItem :label="'Item'" :active-info-icon="false" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { SmartItem } from "../components/smart"
</script>
