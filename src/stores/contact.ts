import { defineStore } from 'pinia'
import { ref } from 'vue'

export const contactStore = defineStore('contact', () => {
  const contact = ref({
    name: '',
    email: ''
  })

  function updateName(name: string) {
    contact.value.name = name
  }

  function updateMail(email: string) {
    contact.value.email = email
  }

  function updateMailName(name: string, email: string) {
    console.log('STORE LOG: Navn: ' + name + ' E-post: ' + email)
    contact.value.email = email
    contact.value.name = name
  }

  function resetForm() {
    console.log('STORE: resetting form')
    contact.value.name = ''
    contact.value.email = ''
  }

  return {
    contact,
    updateName,
    updateMail,
    updateMailName,
    resetForm
  }
})
