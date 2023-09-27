<template>
    <div class="auth">
      <div class="tabs is-centered">
        <ul>
          <li :class="{'is-active': !register}">
            <a @click.prevent="register = false">Login</a>
          </li>
          <li :class="{'is-active': register}">
            <a @click.prevent="register = true">Registrar</a>
          </li>
        </ul>
      </div>
  
      <div class="card auth-form is-family-monospace">
        <div class="card-content">
          <div class="title has-text-centered">
            {{formTitle}}
          </div>
          <Vue3Lottie :animationData="login" :height="200" :width="200" />
          <form @submit.prevent="onSubmit">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input 
                  v-model="credentials.email"
                  class="input" 
                  type="email" 
                  placeholder="alexsmith@gmail.com">
              </div>
            </div>
            <div class="field">
              <label class="label">Senha</label>
              <div class="control">
                <input 
                  v-model="credentials.password"
                  class="input" 
                  type="password" 
                  :placeholder="register ? 'Sua senha deve conter no minimo 6 caracteres' : 'Insira sua senha' ">
              </div>
            </div>
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button is-primary">
                  {{ formTitle }}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
  
      <transition name="slide-up">
        <Alert :show="showModal" @close-modal="closeModal"/>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue'
  import { useStoreAuth } from '@/core/auth/store/userAuth.js'
  //lotties
  import login from '@/assets/lotties/login.json'
  //Components
  import Alert from '@/core/shared/components/Alert.vue'
  
   const useAuth = useStoreAuth()
  //register / login
  const register = ref(false)
  
  const formTitle = computed(()=>{
      return register.value ? 'Registrar' : 'Login'
  })
  
  const credentials = reactive({
      email:'',
      password:''
  })
  
  const onSubmit = () =>{
      if (!credentials.email || !credentials.password){
          alert('Por favor insira email e senha!')
      }else{
          if(register.value){
              useAuth.registerUser(credentials)
          }else{
              useAuth.loginUser(credentials)
          }
      }
  }
  
  const showModal = ref(true);
  
  function closeModal() {
        showModal.value = false;
  }
  
  </script>
  
  <style>
  .auth-form{
      max-width: 400px;
      margin: 0 auto;
  }
  </style>