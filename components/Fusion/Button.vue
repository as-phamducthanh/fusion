<template>
  <table
    :id="props.block.id"
    border="0"
    cellpadding="0"
    cellspacing="0"
    :align="data.align"
    :class="data.class"
    :width="data.width"
    @click.stop="emit('saveClick', data)"
  >
    <tr>
      <td
        align="center"
        width="100%"
        :bgColor="data.bgColor"
        :height="data.height"
        :style="{
          borderRadius: data.borderRadius + 'px',
          display: 'block',
        }"
      >
        <p
          :style="{
            fontSize: data.fontSize + 'px',
            color: data.color,
            textDecoration: 'none',
            display: 'inline-block',
            width: '100%',
            lineHeight: data.height + 'px',
            fontWeight: data.fontWeight,
            textTransform: data.textTransform,
          }"
          :href="data.href"
          target="_blank"
          v-text="data.text"
        />
      </td>
    </tr>
  </table>
</template>
<script setup lang="ts">
import { Button, Block } from '@/common/types'
const props = defineProps<{ block: Block }>()
const emit = defineEmits(['saveClick'])

const { loadHistory, initateBlockHistory } = useBlock()

const data = reactive<Button>({
  align: 'center',
  borderRadius: 0,
  bgColor: '#000000',
  color: '#ffffff',
  fontSize: 16,
  fontWeight: '',
  href: '#',
  height: 50,
  text: 'Fusion button',
  textTransform: '',
  width: 450,
  class: 'width-90',
})

onBeforeMount(() => {
  initateBlockHistory(props.block, { action: 'init', data })
})

onMounted(() => {
  loadHistory(props.block.history, data)
})
</script>
