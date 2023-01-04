export default function helpers() {
  const setUID = (input: any) => {
    if (input.constructor === Object) {
      // Set unique ID
      input.id = generateUID()

      if (Object.hasOwnProperty.call(input, 'blocks')) {
        setUID(input.blocks)
      }
    }

    if (input.constructor === Array) {
      input.forEach((block) => {
        setUID(block)
      })
    }

    return input
  }

  const generateUID = () => {
    return 'yxxyx-xyxxy'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  const debounce = <F extends (...args: any[]) => any>(
    func: F,
    waitFor: number
  ) => {
    let timeout: number

    return (...args: Parameters<F>): Promise<ReturnType<F>> =>
      new Promise((resolve) => {
        if (timeout) clearTimeout(timeout)
        timeout = window.setTimeout(() => resolve(func(...args)), waitFor)
      })
  }

  const disableWindowScroll = (target: any) => {
    target.addEventListener(
      'wheel',
      function (e: any) {
        if (e.ctrlKey || e.metaKey) e.preventDefault()
      },
      { passive: false }
    )
  }

  return {
    setUID,
    generateUID,
    debounce,
    disableWindowScroll,
  }
}
