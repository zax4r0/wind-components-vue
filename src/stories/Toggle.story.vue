<template>
  <Story title="Toggle">
    <SmartToggle :on="on" @change="change"> Turn on </SmartToggle>
  </Story>
</template>

<script setup lang="ts">
import { SmartToggle } from "../components/smart"
import { ref } from "vue"

const on = ref(true)

const change = () => {
  alert("changed to: " + on.value)
}
</script>
