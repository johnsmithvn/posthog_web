<template>
  <div class="card">
    <h2>Login</h2>
    <div style="display:flex; gap:8px; margin-top:12px;">
      <input v-model="email" placeholder="email" />
      <input v-model="name" placeholder="name" />
      <button class="btn" @click="login">Login</button>
    </div>
    <p class="small" style="margin-top:12px;">Logs: <code>{{ lastLog }}</code></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCompass } from '../composables/useCompass.js'
import { useRouter } from 'vue-router'

const email = ref('qa@example.com')
const name = ref('QA Tester')
const lastLog = ref('')

const { capture, identify } = useCompass()
const router = useRouter()

function login() {
  const userId = email.value
  const props = {
    email: email.value,
    name: name.value,
    user_name: email.value.split('@')[0],
    initial_channel_type: 'organic',
    initial_referring_domain_type: document.referrer || 'direct',
    total_revenue: 0,
    total_revenue_last_30_days: 0
  }
  identify(userId, props)
  capture('user_login', props)
  lastLog.value = `identified ${userId}`
  router.push('/dashboard')
}
</script>
