<script setup lang="ts">
defineOptions({
  name: "Welcome"
});
const state = reactive({
  name: "hello world"
});
</script>

<template>
  {{ state.name }}
  <h1>Pure-Admin-Thin（非国际化版本）</h1>
  <button
    v-ripple="{ class: 'text-gray-300' }"
    class="bg-transparent flex-c w-full h-20 rounded-md border border-[var(--pure-border-color)]"
  >
    哈哈哈
  </button>
</template>
