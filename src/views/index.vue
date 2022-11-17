<script setup>

</script>
 
<template>
    <div class="text-center bg-blue-300 bg rounded p-12">
        <h1 class="text-6xl font-bold">Hangman Game</h1>
        <div class="flex justify-center my-10">
            <div class="bg-[#8d4cba] uppercase rounded w-30 p-2 text-4xl hover:bg-[#C77EFA] hover:text-white">
                <RouterLink to="/mode">
                    <button>
                        Play
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

.bg{
    height: 20rem;
}
</style>