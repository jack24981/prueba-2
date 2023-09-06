import { defineStore } from 'pinia'
interface User {
    id: number,
    username: string
}

const STATE_INIT:User = {
  id: 0,
  username: ''
}

export const useUserStore = defineStore('user', {
  state: () => {
         return STATE_INIT
  },
  getters: {
    
  },

  actions: {
    changeUsername(newUsername: string){
        this.username = newUsername;
    }
  }
})
