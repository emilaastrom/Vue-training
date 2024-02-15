<script setup>
import { onErrorCaptured, ref } from 'vue'
const expression = ref('')
let answers = ['2', '542', '31', '35']
const invalid = ref(false)

function onKeyPress(event) {
  invalid.value = false
  if (event.key === 'Enter') {
    handleInput('ans')
  } else if (event.key === 'Escape') {
    handleInput('c')
  } else if (/^[a-zA-Z]$/.test(event.key)) {
    event.preventDefault()
  }
}

function handleInput(value) {
  invalid.value = false
  try {
    if (value === 'Backspace') {
      expression.value = expression.value.slice(0, -1)
      return
    } else if (value === 'c') {
      expression.value = ''
      return
    } else if (value === 'ans') {
      if (
        eval(expression.value) === undefined ||
        eval(expression.value) === null ||
        eval(expression.value) === Infinity ||
        eval(expression.value) === -Infinity
      ) {
        invalid.value = true
        new Error('Ugyldig input')
      }
      expression.value = eval(expression.value)
      if (answers.length > 19) {
        answers.shift()
      }
      answers.push(expression.value.toString())
      return
    }
    expression.value += value
  } catch (error) {
    console.log('An error occurred: ' + error.message)
  }
}

function reversedAnswers() {
  return answers.slice().reverse()
}

onErrorCaptured((err) => {
  console.log('An error occurred: ' + err.message)
  return false;
});
</script>

<template>
  <div>
    <input type="text" id="expressionField" v-model="expression" @keydown="onKeyPress" />
  </div>

  <div id="mainCalculator">
    <div class="buttons">
      <div>
        <button @click="handleInput('+')" id="plusOperator" class="operator">+</button>
        <button @click="handleInput('1')" id="button1">1</button>
        <button @click="handleInput('2')" id="button2">2</button>
        <button @click="handleInput('3')" id="button3">3</button>
      </div>
      <div>
        <button @click="handleInput('-')" id="minusOperator" class="operator">-</button>
        <button @click="handleInput('4')" id="button4">4</button>
        <button @click="handleInput('5')" id="button5">5</button>
        <button @click="handleInput('6')" id="button6">6</button>
      </div>
      <div>
        <button @click="handleInput('*')" id="multiplicationOperator" class="operator">*</button>
        <button @click="handleInput('7')" id="button7">7</button>
        <button @click="handleInput('8')" id="button8">8</button>
        <button @click="handleInput('9')" id="button9">9</button>
      </div>
      <div>
        <button @click="handleInput('/')" id="divideOperator" class="operator">/</button>
        <button @click="handleInput('c')" id="deleteButton" class="delete">C</button>
        <button @click="handleInput('0')" id="button0">0</button>
        <button @click="handleInput('ans')" id="equalsButton" class="equals">=</button>
      </div>
    </div>

    <div id="answersBox">
      <div class="alert" v-if="invalid === true">
        <p>⚠️ Ugyldig input ⚠️</p>
      </div>
      <input
        id="answers"
        v-for="(svar, index) in reversedAnswers()"
        :key="index"
        v-model="reversedAnswers()[index]"
        readonly
      />
    </div>
  </div>
</template>

<style scoped>
.operator {
  background-color: rgba(19, 171, 74, 0.1);
  transition: background-color 2s cubic-bezier(0, 1, 0.2, 1);
}
.operator:hover {
  background-color: rgba(19, 171, 74, 0.66);
  color: var(--color-background);
}

input {
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 2rem;
  text-align: right;
  padding-right: 10px;
  transition: box-shadow 2s cubic-bezier(0, 1, 0.2, 1.55);
  width: 432px;
}

input:hover {
  box-shadow: 0 0 10px rgb(0, 137, 91);
}

button {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text);
  transition: background-color 2s cubic-bezier(0, 1, 0.2, 1.55);
  font-size: 1.3em;
  cursor: pointer;
}

button:hover {
  background-color: rgba(60, 60, 60, 0.66);
  color: var(--color-background);
}

button:active {
  box-shadow: 0 0 10px rgb(0, 137, 91);
  background-color: rgb(85, 186, 131);
}

.alert {
  color: red;
  padding: 5px;
  cursor: wait;
  display: flex;
  justify-content: center;
}

#answers {
  width: 181px;
  height: 25px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  text-align: right;
  padding-right: 10px;
}

#answersBox {
  width: 200px;
  border-left: 1px solid var(--color-border);
  background-color: rgba(177, 177, 177, 0.05);
  display: flex;
  flex-direction: column;
  max-width: 200px;
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
}

#mainCalculator {
  display: flex;
}

.delete {
  background-color: rgba(60, 60, 60, 0.1);
  transition: background-color 2s cubic-bezier(0, 1, 0.2, 1);
}

.delete:hover {
  background-color: rgba(60, 60, 60, 0.66);
  color: var(--color-background);
}
</style>
