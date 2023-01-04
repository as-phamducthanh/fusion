import { Block, BlockType, FusionData, History, Stack } from '@/common/types'

interface BlockData {
  id: string
  type: BlockType | string
  data: FusionData
  history: History
}

const { layout } = useLayout()

const initialState = {
  id: '',
  type: 'root',
  data: {
    lang: '',
    title: '',
    fontFamily: '',
    bgColor: '',
    color: '',
  },
  history: { undo: [], redo: [] },
}

const activeBlock = reactive<BlockData>({ ...initialState })

const blockTree = ref<any[]>([])

export default function useBlock() {
  const getActiveBlock = (id: string) => {
    const iframe = document.getElementById('root') as HTMLIFrameElement
    const target = iframe?.contentDocument?.getElementById(id)
    if (target) {
      target?.click()
    } else document?.getElementById(id)?.click()
  }

  const setActiveBlock = (blockData: BlockData) => {
    Object.assign(activeBlock, blockData)
  }

  const updateActiveBlock = (newData: FusionData) => {
    const { undo } = activeBlock.history
    // const {redo } = layout.memory
    // const currentMemory = redo[redo.length - 1]
    // const filterHistory = undo.filter(cell => cell.id === currentMemory.bid)

    

    const mergeData = undo.reduce((acc, stack) => {
      return Object.assign(acc, stack.data)
    }, {})

    Object.assign(activeBlock.data, mergeData, newData)
  }

  const clearActiveBlock = () => {
    Object.assign(activeBlock, initialState)
  }

  const initateBlockHistory = (block: Block, stack: Stack) => {
    const { redo } = block.history
    const copyData = JSON.parse(JSON.stringify(stack.data))
    const newStack = Object.assign(stack, { data: copyData })
    if (stack.action === 'init' && redo.length === 0) redo.push(newStack)
  }

  const insertBlockHistory = (stack: Stack) => {
    const { undo, redo } = activeBlock.history
    const copyData = JSON.parse(JSON.stringify(stack.data))
    const newStack = Object.assign(stack, { data: copyData })

    const state = redo.pop()
    // Create bridge
    if (state.id !== stack.id) state.id = stack.id
    undo.push(state)
    redo.length = 0
    redo.push(newStack)

    updateActiveBlock(copyData)
  }

  const undoBlockHistory = (id: string) => {
    const { undo, redo } = activeBlock.history

    if (undo.length >= 1) {
      if (id === undo[undo.length - 1].id) {
        redo.push(undo.pop())
        return redo[redo.length - 1]
      }
    }

    return null
  }

  const redoBlockHistory = (id: string) => {
    const { undo, redo } = activeBlock.history

    if (redo.length >= 2) {
      if (id === redo[redo.length - 1].id) {
        undo.push(redo.pop())
        return redo[redo.length - 1]
      }
    }

    return null
  }

  const loadHistory = (history: History, data: FusionData) => {
    const { undo, redo } = history
    const histories = undo.concat(redo)

    if (histories.length > 0) {
      histories.reduce((acc, stack) => {
        return Object.assign(acc, stack.data)
      }, data)
    }
  }

  const getActiveBlockTree = (arr: any[], id: string, data: Block) => {
    if (Object.hasOwnProperty.call(data, 'blocks')) {
      if (data.blocks.flatMap((blk) => blk.id).includes(id)) {
        arr.unshift(data.id)
        getActiveBlockTree(arr, data.id, layout.data)
      } else if (data.id === activeBlock.id) {
        arr.push(activeBlock.id)
      } else {
        data.blocks.forEach((blk) => {
          getActiveBlockTree(arr, id, blk)
        })
      }
    }
    return arr
  }

  const setActiveBlockTree = (id: string, data: Block) => {
    blockTree.value = getActiveBlockTree([], id, data)
  }

  return {
    activeBlock: readonly(activeBlock),
    blockTree: readonly(blockTree),
    setActiveBlock,
    getActiveBlock,
    updateActiveBlock,
    clearActiveBlock,
    setActiveBlockTree,
    initateBlockHistory,
    insertBlockHistory,
    undoBlockHistory,
    redoBlockHistory,
    loadHistory,
  }
}
