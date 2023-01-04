import { Block, Layout } from '@/common/types'

const { setUID } = helper()

const initialState = {
  id: '',
  data: {},
  memory: { undo: [], redo: [] },
}

const layout = reactive<Layout>({ ...initialState })

const layouts = ref<Layout[]>([])

watch(
  layout,
  (data) => {
    window.localStorage.setItem('layout', JSON.stringify(data))
  },
  { deep: true, flush: 'post' }
)

export default function useLayout() {
  const getLayouts = () => {
    layouts.value = [
      {
        id: '1',
        data: {
          id: '',
          type: 'root',
          axis: 'vertical',
          blocks: [
            {
              id: '',
              type: 'table',
              axis: 'vertical',
              blocks: [
                {
                  id: '',
                  type: 'table',
                  axis: 'vertical',
                  blocks: [
                    {
                      id: '',
                      type: 'image',
                      axis: 'horizontal',
                      blocks: [],
                      history: { undo: [], redo: [] },
                    },
                    {
                      id: '',
                      type: 'button',
                      axis: 'horizontal',
                      blocks: [],
                      history: { undo: [], redo: [] },
                    },
                  ],
                  history: { undo: [], redo: [] },
                },
                {
                  id: '',
                  type: 'table',
                  axis: 'vertical',
                  blocks: [
                    {
                      id: '',
                      type: 'image',
                      axis: 'horizontal',
                      blocks: [],
                      history: { undo: [], redo: [] },
                    },
                    {
                      id: '',
                      type: 'button',
                      axis: 'horizontal',
                      blocks: [],
                      history: { undo: [], redo: [] },
                    },
                  ],
                  history: { undo: [], redo: [] },
                },
              ],
              history: { undo: [], redo: [] },
            },
          ],
          history: { undo: [], redo: [] },
        },
        memory: { undo: [], redo: [] },
      },
    ]
  }

  const setLayout = (id: string) => {
    const storage: any = window.localStorage.getItem('layout')
    const storageLayout: Layout = JSON.parse(storage) ?? null

    if (storageLayout && Object.keys(storageLayout.data).length > 0) {
      Object.assign(layout, storageLayout)
    } else {
      // cloning layouts
      const cloneLayouts = JSON.parse(JSON.stringify(layouts.value))
      // matching layout
      const match = cloneLayouts.find((layout: Block) => layout.id === id)

      if (match) {
        Object.assign(layout, match, { data: setUID(match.data) })
      }
    }
  }

  const resetLayout = () => {
    const storage = window.localStorage.getItem('layout')
    if (storage) {
      const storageLayout = JSON.parse(storage)
      const newLayout = Object.assign(layout, initialState)
      window.localStorage.setItem('layout', JSON.stringify(newLayout))
      setLayout(storageLayout.id)
    }
  }

  return {
    layouts: readonly(layouts),
    layout,
    getLayouts,
    setLayout,
    resetLayout,
  }
}
