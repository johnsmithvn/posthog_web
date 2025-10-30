<template>
  <div class="card">
    <h2>Error / Not Found</h2>
    <p class="small">This page simulates error / 404 scenarios.</p>
    <button class="btn" @click="sendError">Simulate Error</button>
  </div>
</template>

<script setup>
import { useCompass } from '../composables/useCompass.js'
import { useToast } from '../composables/useToast.js'
const { capture } = useCompass()
const { error } = useToast()
function sendError(){ capture('error_occurred', { message: 'simulated error' }); error('error event sent') }
</script>
