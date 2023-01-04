<template>
  <aside class="app__sidebar">
    <b-tabs v-model="order" class="custom__tabs" content-class="content">
      <b-tab button-id="block">
        <template #title>
          <Icon name="clarity:blocks-group-solid" />
          Blocks
        </template>
        <tab-block />
      </b-tab>
      <b-tab button-id="style">
        <template #title>
          <Icon name="clarity:slider-line" />
          Style
        </template>
        <tab-adjust />
      </b-tab>
    </b-tabs>
  </aside>
</template>
<script setup lang="ts">
const order = ref(0)
const { activeBlock } = useBlock()

watch(activeBlock, (data) => {
  if (data.id === '') order.value = 0
})
</script>
