<script setup>
import { onBeforeMount, ref } from 'vue';
import { winAlert } from './Alert/alert.js'
const soundBG = ref(new Audio());
const status = ref(false)

onBeforeMount(async () => {
  soundBG.value.src = './sound/BGM.mp3'
})

const playSound = () => {
  status.value = status.value ? false : true
  if (status.value) {
    if (soundBG.value.muted) {
      soundBG.value.muted = false
    }
    else {
      soundBG.value.play()
      soundBG.value.loop = true
    }
  }
  else {
    soundBG.value.muted = true
  }
}

window.addEventListener("click", () => {
  playSound()
})
</script>
 
<template>
  <div class="p-10">
    <button class="bg-[#8d4cba] rounded p-2 hover:bg-[#C77EFA] hover:text-white" @click="playSound">SOUND : {{ status ?
        'ON' : 'OFF'
    }}</button>
    <!-- <audio autoplay>
      <source src="BGM.mp3" type="audio/mpeg">
    </audio> -->
    <RouterView class="m-10"></RouterView>
  </div>
</template>
 
<style scoped>

</style>