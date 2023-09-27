<template>
  <Navbar/>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </div>
</template>

<script setup>
//Components
import { onMounted } from 'vue';
import Navbar from '@/core/shared/components/Navbar.vue';
import { useStoreAuth } from '@/core/auth/store/userAuth.js'

const useAuth = useStoreAuth()
onMounted(()=> useAuth.init())
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>