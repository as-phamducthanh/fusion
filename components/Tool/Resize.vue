<template>
  <div class="focus">
    <slot></slot>
    <Icon
      name="clarity:drag-handle-corner-line"
      size="20px"
      data-pos="top-left"
    />
    <Icon
      name="clarity:drag-handle-corner-line"
      size="20px"
      data-pos="top-right"
    />
    <Icon
      name="clarity:drag-handle-corner-line"
      size="20px"
      data-pos="bottom-right"
    />
    <Icon
      name="clarity:drag-handle-corner-line"
      size="20px"
      data-pos="bottom-left"
    />
  </div>
</template>
<script setup lang="ts"></script>
