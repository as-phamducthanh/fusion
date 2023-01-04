<template>
  <div
    :id="props.block.id"
    class="fusion__template"
    :style="{ backgroundColor: data.bgColor }"
  >
    <iframe id="root" ref="iframeRef" allowfullscreen class="desktop"></iframe>

    <Teleport v-if="iframeRef" :to="iframeRef.contentDocument?.head">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="IE=edge" http-equiv="X-UA-Compatible" />
      <meta name="x-apple-disable-message-reformatting" />
      <title>{{ data.title }}</title>
      <component :is="'style'">
        table { border-collapse: collapse !important; border-spacing: 0px
        !important; } a { text-decoration: none !important; } p, h1, h2, h3, h4,
        span { margin: 0px !important; } @media only screen and (max-width:
        480px) { .full-width { width: 100% !important; } .td-resp { display:
        table !important; width: 100% !important; text-align: center; }
        .width-auto { width: auto !important; } .width-90 { width: 90%
        !important; } .width-80 { width: 80% !important; } .width-50 { width:
        50% !important; } .width-25 { width: 25% !important; } .width-0 { width:
        0% !important; } .center { margin: auto !important; } .hide { display:
        none !important; } .show { display: block !important; } } body { margin:
        0px; padding: 1rem; background-color: {{ data.bgColor }}; font-family:
        {{ data.fontFamily }}; color: {{ data.color }};}
      </component>

      <component :is="'style'" v-if="true">
        -webkit-user-select: none; -ms-user-select: none; user-select: none;
        *::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,
        0, 0, 0.3); border-radius: 10px; background-color: #222831; }
        *::-webkit-scrollbar { width: 8px; background-color: #222831; }
        *::-webkit-scrollbar-thumb { border-radius: 10px; background-color:
        #222831; }
      </component>
    </Teleport>

    <Teleport v-if="iframeRef" :to="iframeRef.contentDocument?.body">
      <slot></slot>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import { Root, Block } from '@/common/types'
const props = defineProps<{ block: Block }>()

const { disableWindowScroll } = helper()
const { undoMemory, redoMemory, createMemoryCell, cell } = useMemory()
const { setActiveBlock, setActiveBlockTree, insertBlockHistory, loadHistory } =
  useBlock()

const data = reactive<Root>({
  lang: 'en',
  title: 'document',
  fontFamily: 'Open Sans, Arial, Helvetica, sans-serif',
  bgColor: 'initial',
  color: '#1a1a1a',
})

const iframeRef = ref<HTMLIFrameElement>()

const setupIframe = () => {
  const document = iframeRef.value?.contentDocument
  const html = document?.getElementsByTagName('html')[0]

  const configs = {
    xmlns: 'http://www.w3.org/1999/xhtml',
    'xmlns:v': 'urn:schemas-microsoft-com:vml',
    'xmlns:o': 'urn:schemas-microsoft-com:office:office',
  }

  Object.entries(configs).forEach(([key, value]) => {
    html?.setAttribute(key, value)
  })
}

const handleKeyDown = (e: any) => {
  if (
    ((e.ctrlKey || e.metaKey) && e.keyCode === 90) ||
    ((e.ctrlKey || e.metaKey) && e.key === 'z')
  ) {
    undoMemory()
    e.preventDefault()
    return false
  }

  if (
    ((e.ctrlKey || e.metaKey) && e.keyCode === 89) ||
    ((e.ctrlKey || e.metaKey) && e.key === 'y')
  ) {
    redoMemory()
    e.preventDefault()
    return false
  }
}

const handleKeyboardEvent = () => {
  const iframeDocument = iframeRef.value?.contentDocument
  document.body.addEventListener('keydown', handleKeyDown)
  iframeDocument?.body.addEventListener('keydown', handleKeyDown)
}

const handleOnClick = () => {
  const { id, type, history } = props.block
  setActiveBlock({ id, type, history, data })
  setActiveBlockTree(id, props.block)
  createMemoryCell()
  insertBlockHistory({ id: cell.id, action: 'init', data })
}

onMounted(() => {
  loadHistory(props.block.history, data)
  setupIframe()
  disableWindowScroll(iframeRef.value?.contentDocument)
  handleKeyboardEvent()
})
</script>
