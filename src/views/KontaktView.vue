<script setup lang="ts">
import KontaktSkjema from '../components/KontaktSkjemaComponent.vue'
</script>

<template>
  <div class="about">
    <KontaktSkjema />
  </div>
</template>

<style>
.about {
  padding: 20px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-border);
  justify-content: center;
  align-items: center;
  min-width: 528px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
