<script setup>
import { useCounterStore } from '@/store/Pic';

let counter = useCounterStore()


</script>
<template>
    <div class="w-full">
        <div class="w-1/2 mx-auto mt-56">
            <h1>{{ counter.count }}</h1>
            <button @click="counter.increment()">Add more</button>
        </div>
    </div>
</template>
