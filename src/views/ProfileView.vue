<template>
  <div class="card">
    <h2>Profile (QE Tester)</h2>
    <p class="small">
      Nhập thông tin rồi bấm <b>Save</b> để cập nhật Person & gửi event kiểm chứng.
    </p>

    <div class="grid" style="margin-top:12px; gap:8px;">
      <!-- ID (distinct_id) -->
      <label class="field">
        <span>Distinct ID</span>
        <input v-model="id" placeholder="vd: qe_user_01" />
      </label>

      <!-- Các field bạn dùng làm Display Name -->
      <label class="field">
        <span>Email</span>
        <input v-model="email" placeholder="vd: qe_user_01@test.local" />
      </label>

      <label class="field">
        <span>Name</span>
        <input v-model="name" placeholder="vd: QA Tester" />
      </label>

      <label class="field">
        <span>UserName</span>
        <input v-model="userName" placeholder="vd: qa_tester" />
      </label>

      <!-- “Default-style”/marketing-like -->
      <label class="field">
        <span>utm_source</span>
        <input v-model="utmSource" placeholder="vd: qa_campaign" />
      </label>

      <!-- Custom -->
      <label class="field">
        <span>plan</span>
        <select v-model="plan">
          <option value="">-- chọn --</option>
          <option value="trial">trial</option>
          <option value="pro">pro</option>
          <option value="enterprise">enterprise</option>
        </select>
      </label>

      <label class="field">
        <span>role</span>
        <input v-model="role" placeholder="vd: QA Engineer" />
      </label>
    </div>

    <div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">
      <button class="btn" @click="save">Save</button>
      <button class="btn secondary" @click="sendAudit">Send audit event</button>
      <button class="btn danger" @click="clearForm">Clear form</button>
      <button class="btn warning" @click="doReset">Reset person</button>
    </div>

    <p class="small" style="margin-top:8px;">
      * Save = <code>identify(id, props)</code> + gửi event <code>profile_updated</code> để bạn check ở Live events.<br/>
      * Clear form = xoá toàn bộ input.<br/>
      * Reset person = <code>window.compass.reset()</code> (ẩn danh lại).
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCompass } from '../composables/useCompass.js'
import { useToast } from '../composables/useToast.js'
const { capture, identify, reset } = useCompass()
const { warning, success } = useToast()

// default demo values
const id = ref('qe_user_01')
const email = ref('qe_user_01@test.local')
const name = ref('QA Tester')
const userName = ref('qa_tester')
const utmSource = ref('qa_campaign')
const plan = ref('pro')
const role = ref('QA Engineer')

function buildProps() {
  return {
    Email: email.value || null,
    Name: name.value || null,
    user_name: userName.value || null,
    utm_source: utmSource.value || null,
    plan: plan.value || null,
    role: role.value || null,
  }
}

function save() {
  if (!id.value) {
    warning('Nhập Distinct ID trước đã')
    return
  }
  const props = buildProps()
  identify(id.value, props)
  capture('profile_updated', props)
  success('Saved! Check Persons & Live events.')
}

function sendAudit() {
  capture('profile_audit', buildProps())
  success('Sent profile_audit event.')
}

// Clear form
function clearForm() {
  id.value = ''
  email.value = ''
  name.value = ''
  userName.value = ''
  utmSource.value = ''
  plan.value = ''
  role.value = ''
  success('Đã clear toàn bộ input.')
}

// Reset person (ẩn danh lại)
function doReset() {
  reset?.()
  capture('user_reset', {})
  success('Person reset → ẩn danh.')
}
</script>

<style scoped>
.grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.field { display:flex; flex-direction:column; gap:6px; }
.field > span { font-size:12px; color:#64748b; }
input, select {
  border:1px solid #e2e8f0; padding:8px 10px; border-radius:8px; outline:0;
}
.btn { padding:8px 12px; border-radius:10px; border:0; background:#111827; color:#fff; cursor:pointer; }
.btn.secondary { background:#4b5563; }
.btn.danger { background:#b91c1c; }
.btn.warning { background:#d97706; }
.small { color:#6b7280; font-size:13px; }
.card { border:1px solid #e5e7eb; border-radius:16px; padding:16px; }
</style>
