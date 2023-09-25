<template>
  <h2>{{ counter }}</h2>
</template>

<script setup>
import { mapGetters } from '../store';

const { counter } = mapGetters();
</script>