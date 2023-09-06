<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/useUserStore'
defineProps<{
  msg: string
}>()
const countStore = useCounterStore()
const userStore = useUserStore()

const { count } = storeToRefs(countStore)
const { increment } = countStore;


</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <button @click.prevent="increment">counter {{ count }}</button>
    <article>
      <h2>User data</h2>
      <p>id: {{ userStore.id }}</p>
      <p>username: {{ userStore.username }}</p>
    </article>
    <button @click.prevent="userStore.changeUsername('Jack')">chanhe name </button>
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
