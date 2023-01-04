<template>
  <b-form-group :label="computedInput.label">
    <component
      :is="computedInput.name"
      v-model="computedBlockValue"
      :type="computedInput.type"
    />
  </b-form-group>
</template>
<script setup lang="ts">
import { PROPERTY } from '~~/constants/PROPERTY'
import { PROPERTY_NAME_LIST } from '~~/constants/CONST'
import { InputType, InputKey, Stack } from '@/common/types'
const props = defineProps<{ data: { key: InputKey; value: any } }>()

const computedInput = computed(() => {
  const { key } = props.data

  const textProp = PROPERTY.TEXT
  const dropdownProp = PROPERTY.DROPDOWN
  const numberProp = PROPERTY.NUMBER
  const colorProp = PROPERTY.COLOR
  const fileType = PROPERTY.FILE
  const input = {
    name: 'div',
    type: 'text' as InputType,
    label: 'text',
    debounce: 0,
  }
  if (textProp.includes(key as any)) {
    input.name = 'b-form-input'
    input.type = 'text'
    input.debounce = 500
  } else if (dropdownProp.includes(key as any)) {
    input.name = 'b-form-select'
    input.type = null
  } else if (numberProp.includes(key as any)) {
    input.name = 'b-form-input'
    input.type = 'number'
    input.debounce = 500
  } else if (fileType.includes(key as any)) {
    input.name = 'input-file'
  } else if (colorProp.includes(key as any)) {
    input.name = 'b-form-input'
    input.type = 'color'
    input.debounce = 0
  } else {
    input.name = 'div'
  }

  input.label = PROPERTY_NAME_LIST[key]

  return input
})

const { debounce } = helper()

const { insertBlockHistory } = useBlock()
const { insertMemory, cell } = useMemory()

const computedBlockValue = computed({
  get() {
    return props.data.value
  },
  set: debounce((val) => {
    const newStack: Stack = {
      id: cell.id,
      action: 'update',
      data: { [props.data.key]: val },
    }
    insertMemory(() => insertBlockHistory(newStack))
  }, computedInput.value.debounce),
})
</script>
