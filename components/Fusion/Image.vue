<template>
  <table :id="props.block.id" @click.stop="emit('saveClick', data)">
    <tr>
      <td>
        <img
          :src="data.src"
          :alt="data.alt"
          :width="data.width"
          class="full-width"
        />
      </td>
    </tr>
  </table>
</template>
<script setup lang="ts">
import { DEFAULT_IMAGE } from '~~/constants/CONST'
import { Block, Image } from '@/common/types'
const props = defineProps<{ block: Block }>()
const { loadHistory, initateBlockHistory } = useBlock()

const data = reactive<Image>({
  alt: '123',
  href: '#',
  width: 600,
  class: 'full-width',
  src: DEFAULT_IMAGE.default,
})

const emit = defineEmits(['saveClick'])

onBeforeMount(() => {
  initateBlockHistory(props.block, { action: 'init', data })
})

onMounted(() => {
  loadHistory(props.block.history, data)
})
</script>
