<template>
  <Story title="Button">
    <Variant title="Primary">
      <ButtonPrimary label="Button" />
    </Variant>
    <Variant title="Secondary">
      <ButtonSecondary label="Button" />
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { ButtonPrimary, ButtonSecondary } from "../components/button"
</script>
