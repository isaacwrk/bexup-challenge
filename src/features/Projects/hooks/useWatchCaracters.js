import { watch } from 'vue'

export function useWatchCharacters (valueToWatch, maxChars){
    watch(valueToWatch, (newValue) =>{
        if(newValue.length === maxChars){
          alert(`Limite de  ${maxChars} caracteres permitidos`)
        }
      })
}