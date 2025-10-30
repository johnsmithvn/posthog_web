<template>
  <div class="page">
    <!-- Khối test Autocapture -->
    <section class="card" style="margin-top:12px; padding:12px; border:1px dashed #ccc">
      <h3>Autocapture Testpad</h3>

      <!-- 1) Link điều hướng (có nav) -->
      <a href="/dashboard" style="margin-right:12px" data-test="nav-link">Go Dashboard (nav)</a>

      <!-- 2) Link bị chặn điều hướng => dead click -->
      <a href="/profile" @click.prevent style="margin-right:12px" data-test="blocked-link">Blocked link (dead)</a>

      <!-- 3) Nút disabled => dead click -->
      <button disabled style="margin-right:12px" data-test="disabled-btn">Disabled CTA (dead)</button>

      <!-- 4) Nút có handler nhưng không đổi UI/network => dead click -->
      <button @click="noop" style="margin-right:12px" data-test="noop-btn">No-op button (dead)</button>

      <!-- 5) Khu vực bị overlay che (click không có hiệu ứng) => dead click -->
      <div style="position:relative; display:inline-block; margin-right:12px">
        <button style="width:160px" data-test="covered-btn">Covered button (dead)</button>
        <div
          style="position:absolute; inset:0; background:rgba(0,0,0,0.1); pointer-events:auto"
          title="overlay"
          data-test="overlay"
        />
      </div>

      <!-- 6) Form submit bị preventDefault (không điều hướng) -->
      <form @submit.prevent="onSubmit" style="display:inline-flex; gap:8px; margin-left:12px" data-test="prevent-form">
        <input v-model="email" placeholder="email" data-test="email-input" />
        <label><input type="checkbox" v-model="agree" data-test="agree-checkbox" /> Agree</label>
        <button type="submit" data-test="submit-prevented">Submit (prevented)</button>
      </form>

      <!-- 7) Click vào text không interactive => dead click -->
      <div style="margin-top:10px; user-select:none" data-test="dead-text">🔵 Click me text (dead)</div>
    </section>

    <!-- Quick links bình thường để điều hướng SPA -->
    <div class="card" style="margin-top:16px;">
      <h2>Quick Links</h2>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px,1fr)); gap:10px; margin-top:10px;">
        <router-link class="btn" to="/dashboard">Go to Dashboard</router-link>
        <router-link class="btn" to="/billing">Go to Billing</router-link>
        <router-link class="btn" to="/cash">Go to Cash</router-link>
        <router-link class="btn" to="/profile">Go to Profile</router-link>
        <router-link class="btn" to="/feedback">Go to Feedback</router-link>
        <router-link class="btn" to="/login">Go to Login</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const agree = ref(false)
function noop(){ /* intentionally empty to simulate dead click */ }
function onSubmit(){ /* intentionally empty (prevented submit) */ }
</script>

<style scoped>
.page { display:flex; flex-direction:column; gap:8px; }
.btn { display:inline-block; padding:10px 12px; border:1px solid #e5e7eb; border-radius:10px; text-decoration:none; color:#111; text-align:center; }
.card { border:1px solid #e5e7eb; border-radius:16px; padding:16px; }
</style>
