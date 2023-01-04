<template>
  <table
    :id="props.block.id"
    :align="data.align"
    :height="data.height"
    :width="data.width"
    :bgcolor="data.bgColor"
    :dir="data.dir"
    :background="data.bgImage"
    :class="data.class"
    cellpadding="0"
    cellspacing="0"
    border="0"
    @click.stop="emit('saveClick', data)"
  >
    <tbody v-if="props.block.axis === 'horizontal'">
      <tr>
        <td v-for="blk in props.block.blocks" :key="blk.id">
          <fusion-block :block="blk" />
        </td>
      </tr>
    </tbody>
    <tbody v-if="props.block.axis === 'vertical'">
      <tr v-for="blk in props.block.blocks" :key="blk.id">
        <td>
          <fusion-block :block="blk" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { Table, Block } from '@/common/types'
const props = defineProps<{ block: Block }>()
const emit = defineEmits(['saveClick'])

const { loadHistory, initateBlockHistory } = useBlock()

const data = reactive<Table>({
  align: 'center',
  valign: 'middle',
  bgColor: '#cccccc',
  bgImage: '',
  height: null,
  width: '600',
  dir: 'ltr',
  class: 'full-width',
})

onBeforeMount(() => {
  initateBlockHistory(props.block, { action: 'init', data })
})

onMounted(() => {
  loadHistory(props.block.history, data)
})
</script>
