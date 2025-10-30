<template>
  <div class="card">
    <h2>Cash Page</h2>
    <p class="small">Simulate add/withdraw cash flows.</p>
    <div style="display:flex; gap:12px; margin-top:12px;">
      <button class="btn" @click="addCash">Add Cash 50</button>
      <button class="btn secondary" @click="withdrawCash">Withdraw 50</button>
    </div>
  </div>
</template>

<script setup>
import { useCompass } from '../composables/useCompass.js'
import { useToast } from '../composables/useToast.js'
const { capture } = useCompass()
const { success } = useToast()
function addCash(){ capture('add_cash', { amount:50, currency:'USD' }); success('add_cash') }
function withdrawCash(){ capture('withdraw_cash', { amount:50, currency:'USD' }); success('withdraw_cash') }
</script>
