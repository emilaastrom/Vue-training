<script setup lang="ts">
import { exit } from 'process';
import { contactStore } from '../stores/contact'
import { ref } from 'vue'

const store = contactStore()

const name = ref('')
const email = ref('')
const message = ref('')
name.value = store.contact.name
email.value = store.contact.email
const messageValid = ref(false)
const showInfo = ref(false);

const validInput = () => {
  if (name.value.length > 0 && email.value.length > 0 && message.value.length > 0) {
    messageValid.value = true
  } else {
    messageValid.value = false
  }
}

const toggleInfo = () => {
  
  if ((message.value != '' && email.value != '' && name.value != '') || messageValid.value === true) {
    showInfo.value = false
  }
  if (messageValid.value === false ){
   showInfo.value = !showInfo.value
  }
}

const updateMailName = (name: string, email: string) => {
  store.updateMailName(name, email)
}

const resetForm = () => {
  store.resetForm()
  name.value = ''
  email.value = ''
  message.value = ''
}

const submitForm = async () => {
  updateMailName(name.value, email.value)
  try {
    console.log('STORE: submitting form')
    const response = await fetch("http://localhost:3001/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:  name.value,
        email: email.value,
        message: message.value,
      })
    });

    const responseData = await response.json();

    alert(`Hei ${responseData.name} 🤓 Vi har mottatt din henvendelse. Vi vil svare deg på ${responseData.email} så snart som mulig.`)

    } catch (error) {
      console.log('FROM STORE, error submitting form: ', error)
    }
  };

</script>

<template>
  <h1>Kontakt oss</h1>
  <form @submit.prevent="formSubmit">
    <div id="inputLine">
      <label for="name">Navn: </label>
      <input type="text" id="name" placeholder="Navn" @input="validInput" v-model="name" required />
    </div>

    <div id="inputLine">
      <label for="email">E-post:</label>
      <input type="email" id="email" placeholder="E-post" @input="validInput" v-model="email" required />
    </div>

    <div id="inputLine">
      <label for="message">Melding:</label>
      <textarea id="message" placeholder="Din tilbakemelding" v-model="message" @input="validInput" required />
    </div>

    <div id="buttonLine">
      <button id="inputButton" type="submit" @click="submitForm()" 
      :disabled="!messageValid" :class="{ 'disabled': !messageValid }" 
      @mouseover="toggleInfo" 
      @mouseout="toggleInfo">Send</button>
      <button id="inputButton" @click="resetForm()">Reset</button>
    </div>
    <div v-show="showInfo">⚠️ Fyll inn alle feltene ⚠️</div>
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

textarea, input {
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 1rem;
  margin: 2px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  min-width: 32%;
  min-height: 32%;
  resize: none;
  transition: background-color 0.3s;
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

#inputButton:disabled {
  background-color: #d3d3d3;
  color: black;
  cursor: not-allowed;
}
</style>
