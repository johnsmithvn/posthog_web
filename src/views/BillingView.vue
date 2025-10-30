<template>
  <div class="card">
    <h2>Billing Page</h2>
    <p class="small">Simulate billing page view and payment.</p>
    <div style="margin-top:12px;">
      <button class="btn" @click="viewBilling">View Billing</button>
      <button class="btn secondary" @click="payNow">Pay Now</button>
    </div>
  </div>
</template>

<script setup>
import { useCompass } from '../composables/useCompass.js'
import { useToast } from '../composables/useToast.js'
const { capture } = useCompass()
const { success } = useToast()

function viewBilling() {
  capture('view_billing_page', { ref: 'menu' })
  success('view_billing_page sent')
}
function payNow() {
  capture('billing_payment', { plan: 'pro', price: 20, cycle: 'monthly' })
  success('billing_payment sent')
}
</script>
