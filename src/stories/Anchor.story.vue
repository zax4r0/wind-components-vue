<template>
  <Story title="Anchor">
    <div class="text-secondaryLight text-tiny">
      By signing in, you are agreeing to our
      <Anchor
        class="text-red-800 link"
        to="https://docs.hoppscotch.io/support/terms"
        blank
        label="Terms of Service"
      />
      and
      <Anchor
        class="text-red-600 link"
        to="https://docs.hoppscotch.io/support/privacy"
        blank
        label="Privacy Policy"
      />
    </div>
  </Story>
</template>

<script setup lang="ts">
import { Anchor } from "../components/smart"
</script>
