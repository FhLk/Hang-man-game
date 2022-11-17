<script setup>
import { ref } from 'vue';
const language = ref("")
</script>
 
<template>
    <div class="text-center bg-blue-300 bg rounded p-12">
        <div v-if="language===''">
            <div class="my-10">
                <h1 class="text-4xl font-bold">Select Language</h1>
            </div>
            <div>
                <button @click="language='TH'"
                    class="bg-[#8d4cba] uppercase rounded w-30 p-2 mx-5 text-4xl hover:bg-[#C77EFA] hover:text-white">
                    THAI
                </button>
                <button @click="language='EN'"
                    class="bg-[#8d4cba] uppercase rounded w-30 p-2 mx-5 text-4xl hover:bg-[#C77EFA] hover:text-white">
                    ENG
                </button>
            </div>
        </div>
        <div v-else>
            <div class="my-10">
                <h1 class="text-4xl font-bold">Select Mode</h1>
            </div>
            <div>
                <RouterLink :to="{ name: 'game', params: { language: `${language}_SPORT` } }"
                    class="bg-[#8d4cba] uppercase rounded w-30 p-2 mx-5 text-4xl hover:bg-[#C77EFA] hover:text-white">
                    <button>
                        SPORT
                    </button>
                </RouterLink>
                <RouterLink :to="{ name: 'game', params: { language: `${language}_FRUIT` } }"
                    class="bg-[#8d4cba] uppercase rounded w-30 p-2 mx-5 text-4xl hover:bg-[#C77EFA] hover:text-white">
                    <button>
                        FRUIT
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
 
<style scoped>
.bg {
    height: 20rem;
}
</style>