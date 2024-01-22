<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

let inputValue = ''

</script>

<template>
  <main>
    <TheWelcome />

    <div class="home">

      <div>
        <input type="text" v-model="inputValue">
      </div>

      <div>

      <div class="buttons">
        <div>
          <button id="operations">+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div>
          <button id="operations">-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div>
          <button id="operations">*</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <div>
          <button id="operations">/</button>
          <button id="delete">C</button>
          <button>0</button>
          <button id="equals">=</button>
        </div>
      </div>
      <div class="operations">




      </div>
    </div>

</div>
  </main>
</template>

<style>


#operations{
  background-color: rgba(19, 171, 74, 0.10);
  transition: background-color 2s cubic-bezier(0, 1, 0.2, 1);
}
#operations:hover{
  background-color: rgba(19, 171, 74, 0.66);
  color: var(--color-background);
}

.home {
  padding: 20px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-border);
  justify-content: center;
  align-items: center;
}

input{
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

button:active{
  box-shadow: 0 0 10px rgb(0, 137, 91);
  background-color: rgb(85, 186, 131);
}

#equals{
}

#delete{
  background-color: rgba(60, 60, 60, 0.1);
  transition: background-color 2s cubic-bezier(0, 1, 0.2, 1);
}

#delete:hover{
  background-color: rgba(60, 60, 60, 0.66);
  color: var(--color-background);
}

@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
