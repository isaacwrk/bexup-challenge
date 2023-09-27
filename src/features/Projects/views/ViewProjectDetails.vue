<template>
    <div class="card">
        <div class="card-content my-2">
            <Loading v-if="isLoading" class="is-vcentered"/>
            <div v-else class="mx-2 py-1">
                <p><strong>Nome do Projeto</strong>:</p>
                {{ currentProject.projectName }}
                <p><strong>Descrição:</strong></p>
                {{ currentProject.description }}
                <p><strong>Atividades do Projeto:</strong></p>
            
                <ul v-for="(task, index) in currentProject.tasks" :key="index">
                    <li>• {{ task }}</li>
                </ul>
            </div>
        </div>
        <footer class="card-footer">
        <RouterLink :to="`/`" href="#" class="card-footer-item">Voltar</RouterLink>
        <RouterLink :to="`/editProject/${projectId}`" href="#" class="card-footer-item">Editar</RouterLink>
        <a @click.prevent="modals.deleteProject = true" :projectID="projectId" class="card-footer-item has-text-danger">Deletar</a>
      </footer> 
      <ModalDeleteProject
        v-if="modals.deleteProject"
        v-model="modals.deleteProject"
        :projectID="projectId"
      />
    </div>
</template>

<script setup>
import {ref, reactive, onMounted} from 'vue'
import { useRoute } from 'vue-router';
import { useStoreProjects } from '../store/projectStore.js'
import Loading from '@/core/shared/components/Loading.vue'
import ModalDeleteProject from '../components/ModalDeleteProject.vue';

const route = useRoute()
const projectId = ref(String(route.params.id))
const isLoading = ref(true)
  
const storeProjects = useStoreProjects()

 let currentProject = reactive(null)

 const modals = reactive({
    deleteProject: false
    })

  function getProjectByID(){
    const project =  storeProjects.projects.find(el => el.id === projectId.value)
    currentProject = project
    isLoading.value = false
  }

  onMounted(() => {
    setTimeout(()=>{
        getProjectByID()
    },700)
    });
</script>

<style>
.body{
    gap:1rem;
}
</style>