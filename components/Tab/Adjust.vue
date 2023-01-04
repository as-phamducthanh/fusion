<template>
  <div v-if="activeBlock.id" class="d-flex flex-column gap-3">
    <Input
      v-for="(value, key) in activeBlock.data"
      :key="key"
      :data="{ key, value }"
    />
  </div>
</template>
<script setup lang="ts">
const { activeBlock } = useBlock()
</script>
