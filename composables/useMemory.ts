import { Cell } from '@/common/types'

const { generateUID } = helper()

const { layout } = useLayout()

const {
  activeBlock,
  getActiveBlock,
  undoBlockHistory,
  redoBlockHistory,
  updateActiveBlock,
} = useBlock()

const cell = reactive<Cell>({
  id: '',
  bid: '',
})

export default function useMemory() {
  const createMemoryCell = () => {
    cell.id = generateUID()
    cell.bid = activeBlock.id
  }

  const insertMemory = (fn: Function) => {
    const { undo, redo } = layout.memory
    const currentMemory = redo[redo.length - 1]

    if (redo.length === 0) {
      redo.push(JSON.parse(JSON.stringify(cell)))
    } else  {
      undo.push(redo.pop())
      redo.length = 0
      redo.push(JSON.parse(JSON.stringify(cell)))
    }

    fn()
  }

  const undoMemory = () => {
    const { undo, redo } = layout.memory

    if (redo.length > 0) {
      const { id, bid } = redo[redo.length - 1]
      getActiveBlock(bid)
      const state = undoBlockHistory(id)

      if (state) {
        updateActiveBlock(state.data)
      } else if (undo.length >= 1) {
        redo.push(undo.pop())
        undoMemory()
      }
    }
  }

  const redoMemory = () => {
    const { undo, redo } = layout.memory

    if (redo.length > 0) {
      const { id, bid } = redo[redo.length - 1]
      getActiveBlock(bid)
      const state = redoBlockHistory(id)

      if (state) {
        updateActiveBlock(state.data)
      } else if (redo.length >= 2) {
        undo.push(redo.pop())
        redoMemory()
      }
    }
  }

  return {
    cell: readonly(cell),
    createMemoryCell,
    insertMemory,
    undoMemory,
    redoMemory,
  }
}
