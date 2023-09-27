<template>
    <div>
    <main class="container content box">

<form @submit.prevent="handleSaveProject">
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

    <div class="tasks content has-background-light mx-2 mt-2">
        <ul>
            <li v-for="(task, index) in projectContent.tasks" :key="index">
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
        <input type="submit" class="button is-primary" >
    </div>

</form>

</main>
    </div>
</template>

<script setup>
import { useStoreProjects } from '../store/projectStore.js'
import { ref} from 'vue'
import { useRoute,useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const storeProjects = useStoreProjects()

const projectContent = ref(null)

projectContent.value = storeProjects.getProjectsContent(route.params.id)

const newTask = ref('')

const addTask = () => {
  if (newTask.value.trim() !== '') {
    projectContent.value.tasks.push(newTask.value)
    newTask.value = '' 
  }
}

const removeTask = (index) => {
  projectContent.value.tasks.splice(index, 1)
}

const handleSaveProject = () => {
    storeProjects.updateProject(
        route.params.id, 
        projectContent.value.projectName, 
        projectContent.value.description, 
        projectContent.value.tasks
        )
    router.push('/')
}
</script>