<template>
  <div class="app">
    <header class="header">
      <h1>Leanbase Compass QE Demo</h1>
      <nav class="nav">
        <router-link to='/'>Home</router-link>
        <router-link to='/login'>Login</router-link>
        <router-link to='/dashboard'>Dashboard</router-link>
        <router-link to='/billing'>Billing</router-link>
        <router-link to='/cash'>Cash</router-link>
      </nav>
    </header>
    <main class="main">
      <router-view />
    </main>
    <Toast />
  </div>
</template>

<script setup>
import Toast from './components/Toast.vue'
</script>

<style>
body { font-family: Inter, Arial, sans-serif; background:#f6fbfb; margin:0; }
.header { background: #1f6feb; color: white; padding: 14px 20px; display:flex; align-items:center; justify-content:space-between; }
.header h1 { margin:0; font-size:18px; }
.nav a { color: white; margin-left:12px; text-decoration:none; font-weight:600; }
.main { padding:24px; max-width:1000px; margin:20px auto; }
.card { background: white; border-radius:8px; padding:16px; box-shadow: 0 6px 14px rgba(31,111,235,0.08); margin-bottom:16px; }
.btn { background:#06b6d4; border:none; color:white; padding:10px 14px; border-radius:6px; cursor:pointer; font-weight:600; }
.btn.secondary{ background:#10b981; }
.small { font-size:14px; color:#333; }
</style>
