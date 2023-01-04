import { Position } from '@/common/types'

const position = reactive<Position>({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
})

const observer = ref<any>()

export default function usePosition() {
  const setPosition = (newPosition: Position) => {
    Object.assign(position, newPosition)
  }

  const getPosition = (id: string) => {
    const iframe = document.getElementById('root') as HTMLIFrameElement
    const targetNode = iframe?.contentDocument?.getElementById(id)

    // if (observer.value) observer.value.unobserve(targetNode)

    // observer.value = new ResizeObserver((entries) => {
    //   for (const entry of entries) {
    //     if (entry.contentBoxSize) {
    //     }
    //   }
    // })

    // observer.value.observe(targetNode)
  }

  return {
    position: readonly(position),
    getPosition,
    setPosition,
  }
}
