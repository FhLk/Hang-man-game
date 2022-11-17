<script setup>
import { THAI, THAIVOWELS, THAITONE, ENG } from '../data/charater.js'
const props = defineProps({
    isWord: Array,
    language: String
})

const emits = defineEmits(['play'])
</script>
 
<template>
    <div class="col-4">
        <button v-for="(c, index) in language.match('EN') ? ENG:THAI" :key="index" @click="$emit('play', c)" type="button"
            class="letter-button rounded m-1 text-2xl" :disabled="isWord.includes(c)">
            {{ c }}
        </button>
    </div>
    <div v-if="language.match('TH')">
        <br/>
        <div class="col-4">
            <button v-for="(c, index) in THAITONE" :key="index" @click="$emit('play', c.trim())" type="button"
                class="letter-button rounded m-1 text-5xl py-3" :disabled="isWord.includes(c.trim())">
                {{ c }}
            </button>
        </div>
        <br/>
        <div class="col-4">
            <button v-for="(c, index) in THAIVOWELS" :key="index" @click="$emit('play', c.trim())" type="button"
                class="letter-button rounded m-1 text-2xl" :disabled="isWord.includes(c.trim())">
                {{ c }}
            </button>
        </div>
    </div>
</template>
 
<style scoped>

.col-4{
    display: block;
    text-align: center;
}

.letter-button {
    height: 60px;
    width: 60px;
    text-align: center;
    background-color:#8d4cba ;
}

.letter-button:disabled {
    background-color: #8F9892 ;
}

.letter-button:hover {
    background-color: #C77EFA;
    color: white;
}

</style>