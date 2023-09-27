<template>
    <div class="projects ">
        <AddProject ref="addProjectRef" @cancel="handleDispose" v-if="showModal"/>
        <button
            v-if="!showModal"
            @click="addNewProject()" 
            class="button is-link  is-flex flex-end has-background-primary">
            Criar novo projeto
        </button>
        
      <Loading class="is-vcentered"
               v-if="!storeProjects.projectsLoaded"/>
  
      <template v-else>
        <Projects
          v-for="project in storeProjects.projects"
          :key="project.id"
          :project="project"/>
  
        <div 
          v-if="!storeProjects.projects.length"
          class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
        >
          Nenhum projeto cadastrado.
        </div>
      </template>
     
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  //components
  import Projects from '../components/Projects.vue'
  import Loading from '@/core/shared/components/Loading.vue'
  import AddProject from '../components/AddProject.vue'
  //store
  import { useStoreProjects } from '../store/projectStore.js'
  
  const storeProjects = useStoreProjects()
  
  const addProjectRef = ref(null)
  const showModal = ref(false)
  const addNewProject =  () =>{
    showModal.value = true
  }

  const handleDispose = (value) => {
    showModal.value = value
}

  </script>

<style>
.button{
    margin-bottom: 10px;
}

.modal-container {
  width: 80%;
  height: auto;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Certifique-se de que o modal esteja acima do overlay */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor preta com 50% de opacidade */
  z-index: 999; /* Certifique-se de que o overlay esteja acima de outros elementos */
}
</style>