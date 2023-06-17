<template>
  <Story title="Item">
    <Variant title="Single">
      <Item :label="'Item'" :active-info-icon="false" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { Item } from "../components/smart"
</script>
