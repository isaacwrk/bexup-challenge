<template>
    <div class="modal is-active p-2">
      <div class="modal-background"></div>
      <div class="modal-card" ref="modalCardRef">
        <header class="modal-card-head">
          <p class="modal-card-title">Deletar projeto?</p>
          <button 
            @click="closeModal"
            class="delete"
            aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          Tem certeza que deseja deletar este projeto?
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button @click="closeModal" class="button">Cancel</button>
          <button 
            class="button is-danger"
            @click="deleteProject"
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref,onMounted,onUnmounted } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  import { useStoreProjects } from '../store/projectStore.js'

  import { useRouter } from 'vue-router'

    const router = useRouter()
  
  const modalCardRef = ref(null)
  
  const useStore = useStoreProjects()
  
  const props = defineProps({
      modelValue:{
      type:Boolean,
      default:false
      },
      projectID:{
          type:String,
          required:true
      }
  })

  const deleteProject = () =>{
    useStore.deleteProject(props.projectID)
    router.push('/')
  }
  
  const emit = defineEmits(['update:modelValue'])
  
  const closeModal = ()=>{
      emit('update:modelValue',false)
  }
  
  onClickOutside(modalCardRef, closeModal)
  
  const handleKeyboard = e =>{
      if(e.key == 'Escape') closeModal()
  }
  
  //keyboard control
  onMounted(() => {
      document.addEventListener('keyup', handleKeyboard)
  })
  
  onUnmounted(() => {
      document.removeEventListener('keyup', handleKeyboard)
  })
  
  </script>