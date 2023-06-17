<template>
  <Story title="Link">
    <Variant title="Text Link">
      <Link :to="link" :blank="true"> Click here </Link>
    </Variant>
    <Variant title="Button Link">
      <Link :to="link" :blank="true">
        <ButtonPrimary label="Click here" />
      </Link>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { Link } from "../components/smart"
import { ButtonPrimary } from "../components/button"
import { ref } from "vue"

const link = ref("/")
</script>
