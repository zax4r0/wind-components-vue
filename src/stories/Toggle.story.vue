<template>
  <Story title="Toggle">
    <Toggle :on="on" @change="change"> Turn on </Toggle>
  </Story>
</template>

<script setup lang="ts">
import { Toggle } from "../components/smart"
import { ref } from "vue"

const on = ref(true)

const change = () => {
  alert("changed to: " + on.value)
}
</script>
