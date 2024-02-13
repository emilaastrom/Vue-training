<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Dette er en del av øving 2+3 i
      <a
        href="https://ntnu.blackboard.com/ultra/courses/_40101_1/cl/outline"
        target="_blank"
        rel="noopener"
      >
        IDATT2105 <br />
        <i>Full-stack applikasjonsutvikling</i></a
      >(2024 VÅR)
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
