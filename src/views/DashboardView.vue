<template>
  <div>
    <div class="card">
      <h2>Dashboard</h2>
      <p class="small">Use actions below to generate tracking events.</p>
      <div style="display:flex; gap:12px; margin-top:12px; flex-wrap:wrap;">
        <div class="card" style="min-width:220px;">
          <h3>Add Cash</h3>
          <input v-model.number="amount" type="number" placeholder="amount" />
          <div style="margin-top:8px;">
            <button class="btn" @click="addCash">Add Cash</button>
          </div>
        </div>

        <div class="card" style="min-width:220px;">
          <h3>Billing</h3>
          <select v-model="plan">
            <option value="trial">trial</option>
            <option value="pro">pro</option>
            <option value="enterprise">enterprise</option>
          </select>
          <div style="margin-top:8px;">
            <button class="btn secondary" @click="payBilling">Billing Payment</button>
          </div>
        </div>

        <div class="card" style="min-width:220px;">
          <h3>Rage Click Area</h3>
          <div @click="rageClicked" style="border:2px dashed #e2e8f0; padding:20px; text-align:center; cursor:pointer;">
            Click quickly 3x here
          </div>
        </div>

        <div class="card" style="min-width:220px;">
          <h3>Other actions</h3>
          <button class="btn" @click="createTask">Create Task</button>
          <button class="btn secondary" @click="completeTask">Complete Task</button>
          <button class="btn" @click="logout">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCompass } from '../composables/useCompass.js'
import { useToast } from '../composables/useToast.js'
import { useRouter } from 'vue-router'

const { capture } = useCompass()
const { success } = useToast()
const router = useRouter()

const amount = ref(100)
const plan = ref('pro')

let rageCount = 0
let rageTimer = null

function addCash() {
  capture('add_cash', { amount: amount.value, currency: 'USD' })
  success('add_cash event sent')
}

function payBilling() {
  capture('billing_payment', { plan: plan.value, price: plan.value === 'pro' ? 20 : 0, cycle: 'monthly' })
  success('billing_payment event sent')
}

function rageClicked() {
  rageCount++
  if (rageTimer) clearTimeout(rageTimer)
  if (rageCount >= 3) {
    capture('rage_click', { count: rageCount })
    rageCount = 0
    success('rage_click event sent')
  }
  rageTimer = setTimeout(()=> { rageCount = 0 }, 1500)
}

function createTask() {
  capture('task_created', { task_id: Math.floor(Math.random()*10000), title: 'QA task' })
  success('task_created event sent')
}

function completeTask() {
  capture('task_completed', { task_id: Math.floor(Math.random()*10000) })
  success('task_completed event sent')
}

function logout() {
  capture('user_logout', {})
  // try to reset via SDK if available
  if (window.compass && typeof window.compass.reset === 'function') {
    window.compass.reset()
  }
  router.push('/login')
}
</script>
