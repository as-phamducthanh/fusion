<template>
  <layout-sidebar-block-tree
    v-if="layout.data.id !== undefined"
    :name="layout.data.type"
    :blocks="layout.data.blocks"
    :block-id="layout.data.id"
  />
</template>

<script setup lang="ts">
const { layout } = useLayout()
</script>
