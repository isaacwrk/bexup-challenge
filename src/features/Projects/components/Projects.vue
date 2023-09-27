<template>
    <div 
      class="card mb-4">
      <div class="card-content ">
        <div class="content">
        <p>
          <strong>Projeto:</strong>
          {{ project.projectName }}
        </p>
            
        <p>
          <strong>Descrição:</strong> 
          {{project.description}}
        </p>

          <div class="columns is-mobile has-text-grey-light mt-2">
            <small class="column">Criado em {{ dateFormatted }}</small>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <RouterLink :to="`/projectDetails/${project.id}`" href="#" class="card-footer-item">Detalhes</RouterLink>
      </footer> 
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useDateFormat } from "@vueuse/core"

  const props = defineProps({
      project:{
          type:Object,
          required:true
      }
  })
 
  
  const dateFormatted = computed(()=>{
    let date = new Date(parseInt(props.project.date))
    let formattedValue = useDateFormat(date, 'DD-MM-YYYY  HH:mm')
    return formattedValue.value })
  </script>

<style>
p {
  word-wrap: break-word;
}
</style>