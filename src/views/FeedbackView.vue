<template>
  <div class="card">
    <h2>Feedback</h2>
    <textarea v-model="text" placeholder="write feedback" rows="4" style="width:100%"></textarea>
    <div style="margin-top:8px;">
      <button class="btn" @click="submit">Submit Feedback</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCompass } from '../composables/useCompass.js'
import { useToast } from '../composables/useToast.js'
const { capture } = useCompass()
const { success } = useToast()
const text = ref('')
function submit(){ capture('feedback_submitted', { text: text.value }); success('feedback sent') }
</script>
