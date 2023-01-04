const isEditable = ref<boolean>(true)

export default function useTool() {
  const toggleEditMode = () => {
    isEditable.value = !isEditable.value
  }

  return {
    isEditable: readonly(isEditable),
    toggleEditMode,
  }
}
