<template>
  <b-modal
    v-model="computedShow"
    title="Reset layout"
    hide-header-close
    hide-footer
    body-class="custom__nav-modal"
  >
    <p>Once reset all changes will be lost.</p>

    <div class="d-flex justify-content-end gap-2">
      <b-button
        size="sm"
        class="fusion-btn-blank"
        variant="light"
        @click="emit('update:modelValue', false)"
      >
        Cancel
      </b-button>
      <b-button size="sm" class="fusion-btn-primary" @click="handleConfirm">
        Ok
      </b-button>
    </div>
  </b-modal>
</template>
<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const { resetLayout } = useLayout()
const { clearActiveBlock } = useBlock()

const handleConfirm = () => {
  resetLayout()
  clearActiveBlock()
  emit('update:modelValue', false)
}

const emit = defineEmits(['update:modelValue'])

const computedShow = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
