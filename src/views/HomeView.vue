<script setup lang="ts">
import CalculatorComponent from '@/components/CalculatorComponent.vue'
</script>

<template>
  <main>
    <div class="home">
      <CalculatorComponent />
    </div>
  </main>
</template>

<style>
.home {
  padding: 20px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-border);
  justify-content: center;
  align-items: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
