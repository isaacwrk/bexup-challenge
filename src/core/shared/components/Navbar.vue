<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="container is-max-desktop px-2">
        <div class="navbar-brand">
          <div class="navbar-item is-size-4 is-family-monospace">
            Project Manager
          </div>
  
          <a 
            ref="navbarBurgerRef"
            @click.prevent="showMobileNav = !showMobileNav"
            role="button" 
            class="navbar-burger" 
            :class="{'is-active' : showMobileNav }"
            aria-label="menu" 
            aria-expanded="false"
            data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
  
        <div id="navbarBasicExample"
             ref="navbarMenuRef" 
             class="navbar-menu"   
             :class="{'is-active' : showMobileNav }">
          <div class="navbar-start">
            <button 
              v-if="useAuth.user.id"
              @click="logout"
              class="button has-background-primary is-small is-info mt-3 ml-3">
              Logout {{ useAuth.user.email }}
            </button>
          </div>
          <div class="navbar-end " >
            <div class="navbar-item "  v-if="useAuth.user.id">
              <RouterLink 
                @click="showMobileNav = false"
                to="/"
                class="navbar-item  has-text-light ">
                Projects
              </RouterLink>
            
              <RouterLink 
                @click="showMobileNav = false"
                to="/stats"
                class="navbar-item  has-text-light">
                Stats
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  import { useStoreAuth } from '@/core/auth/store/userAuth.js'
  
  const useAuth = useStoreAuth()
  //refs
  const showMobileNav = ref(false)
  const  navbarMenuRef = ref(null)
  const  navbarBurgerRef = ref(null)
  
  onClickOutside(navbarMenuRef, (event) => {
    showMobileNav.value = false
  },{
    ignore:[
    navbarBurgerRef
    ]
  })
  
  const logout = ()=>{
    showMobileNav.value = false,
    useAuth.logoutUser()
  }
  
  </script>
  
  
  <style>
  @media (max-width: 1023px){
    .navbar-menu{
      position: absolute;
      left: 0;
      width: 100%;
    }
  }
  </style>