<template>
    <div v-if="useAuth.error && show" class="notification is-danger is-light">
      <button @click="closeModal" class="delete"></button>
      {{ useAuth.error }}
    </div>
  </template>
  
  <script setup>
import { useStoreAuth } from '@/core/auth/store/userAuth.js'
  
  const props = defineProps({
      show:{
      type:Boolean,
      required:true
      },
  })
  
  const emit = defineEmits(['close-modal'])
  const closeModal = () => {
        emit('close-modal');
  }
  
  const useAuth = useStoreAuth()
  
  </script>