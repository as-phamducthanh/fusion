<template>
  <details
    v-if="props.blocks.length > 0"
    v-open
    @click.stop="getActiveBlock(props.blockId)"
  >
    <summary>
      <b-badge v-if="props.blockId === activeBlock.id" variant="primary">
        {{ props.name }}
      </b-badge>
      <span v-else>
        {{ props.name }}
      </span>
    </summary>
    <layout-sidebar-block-tree
      v-for="data in props.blocks"
      :key="data.id"
      :name="data.type"
      :block-id="data.id"
      :blocks="data.blocks"
    />
  </details>
  <div v-else @click.stop="getActiveBlock(props.blockId)">
    <b-badge v-if="props.blockId === activeBlock.id" variant="primary">
      {{ props.name }}
    </b-badge>
    <span v-else>
      {{ props.name }}
    </span>
  </div>
</template>
<script setup lang="ts">
import { Block, BlockType } from '@/common/types'
const props = defineProps<{
  name: BlockType
  blockId: string
  blocks: Array<Block>
}>()

const { blockTree, activeBlock, getActiveBlock } = useBlock()

const vOpen = {
  beforeUpdate: (el: any) => {
    el.open = blockTree.value.includes(props.blockId)
  },
}
</script>
