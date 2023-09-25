<template>
  <button @click="increment(8)">increment</button>
</template>

<script setup>
import { mapActions } from '@/store';

const { increment } = mapActions();

</script>