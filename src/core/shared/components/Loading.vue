<template>
    <div class="is-flex is-justify-content-center">
      <div 
        :style="{ backgroundColor: color, width: size, height: size, marginRight: spacing }" 
        v-for="n in 3" :key="n" 
        class="vs-loading__dot"></div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
      size: {
              type: String,
              default: '0.55rem'
          },
          spacing: {
              type: String,
              default: '0.25rem'
          },
          color: {
              type: String,
              default: 'black'
          }
  })
  </script>
  
  <style>
  @keyframes bouncing {
      0% {
          transform: translateY(0)
      }
      15% {
          transform: translateY(-80%)
          
      }
  
      30% {
          transform: translateY(80%)
      }
  
      45% {
          transform: translateY(-30%)
      }
      60%{
          transform: translateY(30%)
      }
      75%{
          transform: translateY(0);
      }
      100% {
          transform: translateY(0)
      }
  }
  .vs-loading__dot {
      border-radius: 999px;
      background-color: white;
      animation-name: bouncing;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-out;
  }
  .vs-loading__dot:nth-child(2) {
      animation-delay: 75ms;
  }
  .vs-loading__dot:last-child {
      margin-right: 0 !important;
      animation-delay: 150ms;
  }
  </style>