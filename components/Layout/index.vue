<template>
  <nav class="app__navbar">
    <div class="custom__nav-item">
      <b-button id="home" to="/" variant="dark" size="sm">
        <Icon name="clarity:home-line" />
      </b-button>

      <b-button id="download" variant="dark" size="sm">
        <Icon name="clarity:install-line" />
      </b-button>
    </div>
    <div class="custom__nav-item">
      <b-button variant="dark" size="sm" @click="undoMemory">
        <Icon name="clarity:undo-line" />
      </b-button>
      <b-button variant="dark" size="sm" @click="redoMemory">
        <Icon name="clarity:redo-line" />
      </b-button>
    </div>
    <div class="custom__nav-item justify-content-end">
      <b-button @click="toggleEditMode">
        <Icon name="clarity:note-edit-line" />
      </b-button>
      <b-button variant="dark" size="sm" @click="handeToggleDevice">
        <Icon v-if="isDesktop" name="clarity:display-solid" />
        <Icon v-else name="clarity:mobile-solid" />
      </b-button>
      <b-button @click="isShow = !isShow">
        <Icon name="clarity:refresh-line" />
      </b-button>
    </div>
    <modal-confirm v-model="isShow" />
  </nav>
</template>
<script setup lang="ts">
const { undoMemory, redoMemory } = useMemory()
const { toggleEditMode } = useTool()
const { disableWindowScroll } = helper()

const isDesktop = ref<boolean>(true)
const isShow = ref<boolean>(false)

const handeToggleDevice = () => {
  const iframe = document.getElementById('root')
  isDesktop.value = !isDesktop.value

  if (isDesktop.value) {
    iframe?.classList.add('desktop')
    iframe?.classList.remove('mobile')
  } else {
    iframe?.classList.add('mobile')
    iframe?.classList.remove('desktop')
  }
}

onMounted(() => {
  disableWindowScroll(window)
})
</script>
