<template>
  <!-- Your component's template goes here -->

  <div>
    <input type="text" v-model="expression" @keydown="onKeyPress" />
  </div>

  <div id="mainCalculator">
    <div class="buttons">
      <div>
        <button @click="handleInput('+')" id="operations">+</button>
        <button @click="handleInput(1)">1</button>
        <button @click="handleInput(2)">2</button>
        <button @click="handleInput(3)">3</button>
      </div>
      <div>
        <button @click="handleInput('-')" id="operations">-</button>
        <button @click="handleInput(4)">4</button>
        <button @click="handleInput(5)">5</button>
        <button @click="handleInput(6)">6</button>
      </div>
      <div>
        <button @click="handleInput('*')" id="operations">*</button>
        <button @click="handleInput(7)">7</button>
        <button @click="handleInput(8)">8</button>
        <button @click="handleInput(9)">9</button>
      </div>
      <div>
        <button @click="handleInput('/')" id="operations">/</button>
        <button @click="handleInput('c')" id="delete">C</button>
        <button @click="handleInput(0)">0</button>
        <button @click="handleInput('ans')" id="equals">=</button>
      </div>
    </div>

    <div id="answersBox">
      <div class="alert" v-if="invalid === true">
        <p>⚠️ Ugyldig input ⚠️</p>
      </div>
      <input
        id="answers"
        v-for="(svar, index) in reversedAnswers"
        :key="index"
        v-model="reversedAnswers[index]"
        readonly
      />
    </div>
  </div>
</template>

<script>
export default {
  // Component JavaScript logic goes here
  data() {
    return {
      expression: '',
      answers: [],
      invalid: false
    }
  },
  methods: {
    // Component methods go here
    onKeyPress(event) {
      this.invalid = false
      if (event.key === 'Enter') {
        this.handleInput('ans')
        return
      } else if (event.key === 'Escape') {
        this.handleInput('c')
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        event.preventDefault()
      }
    },

    handleInput(value) {
      this.invalid = false
      if (value === 'Backspace') {
        this.expression = this.expression.slice(0, -1)
        return
      } else if (value === 'c') {
        this.expression = ''
        return
      } else if (value === 'ans') {
        if (
          eval(this.expression) === undefined ||
          eval(this.expression) === null ||
          eval(this.expression) === Infinity ||
          eval(this.expression) === -Infinity
        ) {
          this.invalid = true
          return
        }
        this.expression = eval(this.expression)
        if (this.answers.length > 19) {
          this.answers.shift()
        }
        this.answers.push(this.expression)
        return
      }
      this.expression += value
    }
  },
  computed: {
    // Component computed properties go here
    reversedAnswers() {
      return this.answers.slice().reverse()
    }
  }
}
</script>

<style scoped>
#operations {
  background-color: rgba(19, 171, 74, 0.1);
  transition: background-color 2s cubic-bezier(0, 1, 0.2, 1);
}
#operations:hover {
  background-color: rgba(19, 171, 74, 0.66);
  color: var(--color-background);
}

input {
  width: 100%;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 2rem;
  text-align: right;
  padding-right: 10px;
}

input {
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

.buttons {
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
  position: fixed-bottom;
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

#delete {
  background-color: rgba(60, 60, 60, 0.1);
  transition: background-color 2s cubic-bezier(0, 1, 0.2, 1);
}

#delete:hover {
  background-color: rgba(60, 60, 60, 0.66);
  color: var(--color-background);
}
</style>
