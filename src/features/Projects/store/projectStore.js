import { defineStore } from 'pinia'
import { collection, onSnapshot,
        doc, addDoc, deleteDoc, updateDoc,
        query,orderBy
      } from 'firebase/firestore';
import {db} from '@/core/auth/firebase/firebase'
import { useStoreAuth } from '@/core/auth/store/userAuth.js'


let projectsCollectionRef
let projectsCollectionQuery
let getProjectsSnapshot = null

export const useStoreProjects = defineStore('storeProjects',{
  state: ()=>{
    return{
      projects:[],
      projectsLoaded:false
    }
  },
  actions:{
    init(){
      //initialize database refs
      const useAuth = useStoreAuth()
        projectsCollectionRef = collection(db,'users',useAuth.user.id,'projects')
        projectsCollectionQuery = query(projectsCollectionRef, orderBy('date', 'desc'));
      this.getProjects()
    },
    async getProjects(){
  
   this.projectsLoaded = false
   
    getProjectsSnapshot = onSnapshot(projectsCollectionQuery, (querySnapshot) => {
      let projects = []
      querySnapshot.forEach((proj) => {
          let project = {
          id: proj.id,
          projectName: proj.data().projectName,
          description: proj.data().description,
          tasks: proj.data().tasks,
          date:proj.data().date
          }
          projects.push(project)
      })
        this.projects = projects
        this.projectsLoaded = true
    })
    },

    
    async addNewProject(projectName, description, tasks){
      let currentDate = new Date().getTime()
      let date = currentDate.toString()
      
      await addDoc(projectsCollectionRef, {
        projectName,
        description,
        tasks,
        date
      });

    },

    async deleteProject(idToDelete){
      await deleteDoc(doc(projectsCollectionRef, idToDelete));
    },

    async updateProject(id,projectName, description, tasks){

      await updateDoc( doc(projectsCollectionRef, id), {
        projectName,
        description,
        tasks
      });
    },
    clearProject(){
      this.projects = []
      if (getProjectsSnapshot) getProjectsSnapshot() 
    }
  },
  getters:{
    getProjectsContent: (state) =>{
      return (id) =>{
        return state.projects.filter(el => { return el.id === id})[0]
      }
    },
    getTotalProjectsCount: (state) =>{
      return state.projects.length
    }
  }
})