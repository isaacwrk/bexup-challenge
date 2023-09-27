<template>
    <div  class="modal is-active p-2">

    <div class="modal-background"></div>

    <div class="column is-8"  ref="modalCardRef"> 
        <div class=" container card box ">
        <form @submit.prevent="handleSaveProject" method="POST">
        <div class="field">
            <label class="label" for="the_name">Nome do projeto</label>
            <input type="text" name="name" id="the_name" class="input" v-model="projectContent.projectName">
        </div>
    
     
        <div class="field">
            <label class="label" for="the_message">Descrição</label>
            <textarea name="message" id="the_message" class="textarea" v-model="projectContent.description"></textarea>
        </div>
    
        <div class="field">
            <label class="label" for="the_tasks">Atividades</label>
            
            <input type="text" name="task" id="the_tasks" class="input" v-model="newTask">
            <div class="buttons is-right">
                <button class="button is-link is-small is-responsive mt-2" @click.prevent="addTask" :disabled="!newTask">Adicionar atividade</button>
            </div>
        </div>
    
        <div v-if="projectContent.tasks.length > 0" class="tasks content has-background-light mx-2">
            <ul>
                <li v-for="(task, index) in projectContent.tasks" :key="index" class="my-2">
                    <span>{{ task }}</span>
                    <i
                    class="fas fa-trash-alt ml-4"
                    @click="removeTask(index)"
                    style="cursor: pointer; color: red;"
                  ></i>
                </li>
            </ul>
        </div>

        <div class="field">
            <input type="submit" class="button is-primary">
            <input type="button" class="button is-danger ml-2" value="Cancelar" @click="dispose">
        </div>
    </form>    
    </div>

    </div>
    </div>
</template>

<script setup>
import { useStoreProjects } from '../store/projectStore.js'
import { onClickOutside } from '@vueuse/core'
import { ref, reactive, onMounted,onUnmounted } from 'vue'

const modalCardRef = ref(null)

const storeProjects = useStoreProjects()
const emit = defineEmits(['cancel'])

const projectContent = reactive({
    projectName:'',
    description:'',
    tasks:[]
    })

const newTask = ref('')

const addTask = () => {
  if (newTask.value.trim() !== '') {
    projectContent.tasks.push(newTask.value)
    newTask.value = '' 
  }
}

const removeTask = (index) => {
    projectContent.tasks.splice(index, 1)
}

const dispose =  () =>{
    emit('cancel', false)
    projectContent.projectName = ''
    projectContent.description = ''
    projectContent.tasks = []
}

const handleSaveProject = () => {
    if(!projectContent.projectName || !projectContent.description){
        alert('Nome do projeto e descrição são obrigatórios!')
    }else{
        storeProjects.addNewProject(
        projectContent.projectName, 
        projectContent.description, 
        projectContent.tasks
        )
    dispose()
    }
    
}

onClickOutside(modalCardRef, dispose)
  
  const handleKeyboard = e =>{
      if(e.key == 'Escape') dispose()
  }
  
  onMounted(() => {
      document.addEventListener('keyup', handleKeyboard)
  })
  
  onUnmounted(() => {
      document.removeEventListener('keyup', handleKeyboard)
  })

</script>