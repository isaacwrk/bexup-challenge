import { defineStore } from 'pinia'
import {  
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword ,
    signOut,
    onAuthStateChanged,
    deleteUser 
} from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useStoreProjects } from '@/features/Projects/store/projectStore.js'


export const useStoreAuth = defineStore('storeAuth',{
  state: ()=>{
    return{
      user:{},
      error:''
    }
  },
  actions:{
    init(){
       const useProjects = useStoreProjects()
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          this.router.push('/')
          
          useProjects.init()
        } else {
          this.user = {}
          this.error = ''
          this.router.replace('/auth')

          useProjects.clearProject()
        }
      });
    },
    registerUser(credentials){
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    .then((userCredential) => {
        const user = userCredential.user
    }).catch((error) => {
        this.error = error.message
    }).finally(this.error = '');
    },
    loginUser(credentials){
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user
        })
        .catch((error) => {
            this.error = error.message
        }).finally(this.error = '');
    },
    logoutUser(){
        signOut(auth).then(() => {
          }).catch(() => {});
    },
    deleteAccount(){
      const user = auth.currentUser;
      deleteUser(user).then(() => {
        // User deleted.
        this.router.replace('/auth')
      }).catch(() => { });
    }
  },
})