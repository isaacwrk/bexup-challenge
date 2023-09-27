import { createRouter, createWebHashHistory } from 'vue-router'
import { useStoreAuth } from '@/core/auth/store/userAuth.js'

import ViewAuth from '@/features/Login/views/ViewAuth.vue'
import ViewProjects from '@/features/Projects/views/ViewProjects.vue'
import ViewProjectDetails from '@/features/Projects/views/ViewProjectDetails.vue'
import EditProject from '@/features/Projects/components/EditProject.vue'


const routes = [

    {
    path: '/',
    name: 'projects',
    component:ViewProjects
    },

    {
      path:'/projectDetails/:id',
      name:'details-projects',
      component:ViewProjectDetails
    },


    {
      path:'/editProject/:id',
      name:'edit-projects',
      component:EditProject
    },

    {
        path: '/auth',
        name: 'auth',
        component:ViewAuth
    }

]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

//Navigation guards
router.beforeEach((to) => {
  const useAuth = useStoreAuth()
  //if user is loggout and try to access another route
  if(!useAuth.user.id && to.name !== 'auth'){
    return { name:'auth ' }
  }
  if(useAuth.user.id && to.name === 'auth'){
    return false
  }

})

export default router