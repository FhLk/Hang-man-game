<script setup>
const props = defineProps({
    wrongWord: Number,
    letterWord: Array,
    letter: Array
})

</script>
 
<template>
    <div class="my-5">
        <div class="flex justify-center items-center">
            <svg width="600" height="300" class="border-solid border-2 border-sky-500">
                <line x1="180" y1="257" x2="390" y2="257" style="stroke:red;" />
                <line v-if="wrongWord >= 1" x1="200" y1="257" x2="200" y2="40" style="stroke:red;" />
                <line v-if="wrongWord >= 2" x1="200" y1="40" x2="300" y2="40" style="stroke:red;" />
                <line v-if="wrongWord >= 3" x1="200" y1="80" x2="230" y2="40" style="stroke:red;" />
                <line v-if="wrongWord >= 4" x1="300" y1="40" x2="300" y2="80" style="stroke:red;" />
                <circle v-if="wrongWord >= 5" cx="300" cy="90" style="stroke:red;" fill="red" r="20" />
                <line v-if="wrongWord >= 6" x1="300" y1="110" x2="300" y2="170" style="stroke:red;" />
                <line v-if="wrongWord >= 7" x1="300" y1="140" x2="280" y2="120" style="stroke:red;" />
                <line v-if="wrongWord >= 8" x1="300" y1="140" x2="320" y2="120" style="stroke:red;" />
                <line v-if="wrongWord >= 9" x1="300" y1="170" x2="320" y2="200" style="stroke:red;" />
                <line v-if="wrongWord >= 10" x1="300" y1="170" x2="280" y2="200" style="stroke:red;" />
            </svg>
        </div>
        <div class="flex justify-center items-center mt-10">
            <p v-for="(l, index) in letterWord" :key="index" class="mx-5 text-4xl">{{ letter.includes(l) ? l : '_' }}
            </p>
        </div>
    </div>
</template>
 
<style scoped>

</style>