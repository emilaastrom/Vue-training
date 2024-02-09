<script setup lang="ts">
import { contactStore } from '../stores/contact'
import { ref } from 'vue'

const store = contactStore()

const name = ref('')
const email = ref('')
const message = ref('')
name.value = store.contact.name
email.value = store.contact.email

const updateName = (name: string) => {
  store.updateName(name)
}

const updateMailName = (name: string, email: string) => {
    alert(`Hei ${name} 🤓 Vi har mottatt din henvendelse. Vi vil svare deg på ${email} så snart som mulig.`)
    message.value = ``
  store.updateMailName(name, email)
}

const resetForm = () => {
  store.resetForm()
  name.value = ''
  email.value = ''
}
</script>

<template>
  <h1>Kontakt oss</h1>
  <form @submit.prevent="formSubmit">
    <div id="inputLine">
      <label for="name">Navn: </label>
      <input type="text" id="name" placeholder="Navn" v-model="name" required />
    </div>

    <div id="inputLine">
      <label for="email">E-post:</label>
      <input type="email" id="email" placeholder="E-post" v-model="email" required />
    </div>

    <div id="inputLine">
      <label for="message">Melding:</label>
      <textarea id="message" placeholder="Melding" v-model="message" required />
    </div>

    <div id="buttonLine">
      <button id="inputButton" type="submit" @click="updateMailName(name, email)">Send</button>
      <button id="inputButton" @click="resetForm()">Reset</button>
    </div>
</form>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
  align-items: center;
  min-width: 75%;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  padding: 1rem;
  align-items: center;
}

#buttonLine {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#message {
  display: flex;
  min-width: 300px;
  font-weight: 500;
  padding: 1rem;
}

#inputLine {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#inputButton {
  display: flex;
  flex-direction: row;
  min-width: 32%;
  font-weight: 500;
  padding: 1rem;
  margin: 2px;
  align-items: center;
  justify-content: center;
  background-color: #88ea8c;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

#inputButton:hover {
  background-color: #4caf50;
  color: black;
}

#inputButton:active {
  background-color: #347836;
  color: rgb(255, 255, 255);
}
</style>
