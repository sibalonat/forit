<script setup>
import { useCounterStore } from '@/store/Pic.js';

let counter = useCounterStore()
console.dir(counter);
</script>
<template>
<div class="w-full">
    <div class="w-1/2 mx-auto mt-56">
        <h1>{{ counter.count }}</h1>
        <button @click="counter.increment()" :disabled="!counter.remaining">Add more ({{ counter.remaining }} remaining)</button>
    </div>
</div>
</template>
