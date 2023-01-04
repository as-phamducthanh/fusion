<template>
  <NuxtLayout name="app">
    <fusion-root
      v-if="layout.data.id"
      :key="layout.data.id"
      :block="layout.data"
    >
      <fusion-block
        v-for="block in layout.data.blocks"
        :key="block.id"
        :block="block"
      />
    </fusion-root>
  </NuxtLayout>
</template>
<script setup lang="ts">
const { layout, getLayouts, setLayout } = useLayout()

onMounted(() => {
  getLayouts()
  setLayout('1')
})
</script>
