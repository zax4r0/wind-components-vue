<template>
  <Story title="Modal">
    <Modal
      :show="show"
      :title="'Modal Title'"
      @hide-modal="show = false"
      @resolve="resolveConfirmModal"
    />
  </Story>
</template>

<script lang="ts" setup>
import { Modal } from "../components/smart"
import { ref } from "vue"

const show = ref(true)

const resolveConfirmModal = (resolve: string | null) => {
  alert("resolved: " + resolve)
  show.value = false
}
</script>
