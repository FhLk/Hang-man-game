<script setup>
import { computed } from '@vue/reactivity';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { loseAlert, winAlert } from '../Alert/alert';
import Character from '../components/Character.vue'
import Stickman from '../components/Stickman.vue'
import { THAI_SPORTS, THAI_FRUITS, ENG_SPORTS, ENG_FRUITS } from '../data/vocabulary.js'
let { params } = useRoute()
const word = ref("")
const letterWord = ref([])
const isWord = ref([])
const letter = ref([])
const wrongWord = ref(0)

onBeforeMount(() => {
    if (params.language.match("TH")) {
        if (params.language.match("SPORT")) {
            word.value = THAI_SPORTS[Math.floor(Math.random() * THAI_SPORTS.length)]
        }
        else {
            word.value = THAI_FRUITS[Math.floor(Math.random() * THAI_FRUITS.length)]
        }
    }
    else {
        if (params.language.match("SPORT")) {
            word.value = ENG_SPORTS[Math.floor(Math.random() * ENG_SPORTS.length)]
        }
        else {
            word.value = ENG_FRUITS[Math.floor(Math.random() * ENG_FRUITS.length)]
        }
    }
    console.log(word.value);
    letterWord.value = word.value.split('')
    letterWord.value = letterWord.value.filter((e) => e !== ' ');
})
const Play = async (c) => {
    isWord.value.push(c)
    letter.value = []
    letterWord.value.forEach((char) => {
        if (isWord.value.includes(char)) {
            letter.value.push(char)
        }
    })
    if (letter.value.length === word.value.length) {
        await winAlert()
        reset()
    }
    if (!letter.value.includes(c)) {
        if (alive.value === 1) {
            loseAlert(word.value)
            reset()
        }
        Wrong()
    }
}


const myRouter = useRouter()
const reset = () => {
    isWord.value = []
    letter.value = []
    letterWord.value = []
    wrongWord.value = 0
    word.value = ""
    myRouter.push({ name: 'mode' })
}

const Wrong = () => {
    if (wrongWord.value <= 10) {
        wrongWord.value++
    }
}

const alive = computed(() => {
    return 10 - wrongWord.value
})

</script>
 
<template>
    <div class="bg-blue-300">
        <div class="block p-10">
            <h1 class="text-4xl">You have {{ alive }} lives</h1>
            <Stickman :wrongWord="wrongWord" :letterWord="letterWord" :letter="letter" />
        </div>
        <Character :isWord="isWord" @play="Play" :language="params.language" />
    </div>
</template>
 
<style scoped>
.block {
    text-align: center;
}

.bg-blue-300 {
    max-height: 60rem;
}
</style>