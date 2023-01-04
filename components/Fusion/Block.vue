<template>
  <KeepAlive>
    <component
      :is="computedType"
      :block="props.block"
      @save-click="getFusionData"
    />
  </KeepAlive>
</template>

<script setup lang="ts">
import { Block, FusionData } from '@/common/types'
import FusionTable from '@/components/Fusion/Table.vue'
import FusionButton from '@/components/Fusion/Button.vue'
import FusionImage from '@/components/Fusion/Image.vue'

const props = defineProps<{ block: Block }>()

const { layout } = useLayout()
const { setActiveBlock, setActiveBlockTree } = useBlock()
const { createMemoryCell } = useMemory()

const computedType = computed(() => {
  switch (props.block.type) {
    case 'table':
      return FusionTable
    case 'button':
      return FusionButton
    case 'image':
      return FusionImage
    default:
      return 'div'
  }
})

const getFusionData = (data: FusionData) => {
  const { id, type, history } = props.block
  setActiveBlock({ id, type, history, data })
  setActiveBlockTree(id, layout.data)
  createMemoryCell()
}
</script>
