<template>
  <Story title="Tab">
    <Variant title="Single">
      <Tabs id="my-tab" v-model="selectedTab" render-inactive-tabs>
        <Tab id="tab1" label="Tab 1">
          <h1>Tab 1 content</h1>
        </Tab>
        <Tab id="tab2" label="Tab 2">
          <h1>Tab 2 content</h1>
        </Tab>
      </Tabs>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { Tabs, Tab } from "../components/smart"
import { ref } from "vue"

const selectedTab = ref("tab1")
</script>
