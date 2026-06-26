// ==========================================
// SUBSCRIPTION PANEL HTML TEMPLATE
// ==========================================
const subscriptionHTML = `
  <!-- Welcome Banner -->
  <section class="welcome-banner">
    <h1 class="welcome-user-heading">Selamat Datang</h1>
  </section>

  <!-- Subscription Section -->
  <section class="subscription-section">
    <h2 class="subscription-title">DAFTAR LANGGANAN</h2>
    <div class="subscription-grid">
      <div class="sub-card">
        <div class="sub-badge">Bulanan</div>
        <h3>Standard</h3>
        <div class="price">Rp 150.000 <span>/ bulan</span></div>
        <ul class="sub-features">
          <li><i class="fa-solid fa-circle-check"></i> Akses 2 Kelas STEAM</li>
          <li><i class="fa-solid fa-circle-check"></i> Modul Belajar Digital</li>
          <li><i class="fa-solid fa-circle-check"></i> Sertifikat Penyelesaian</li>
        </ul>
        <button class="btn-sub" data-plan="Standard">Pilih Paket</button>
      </div>
      <div class="sub-card popular">
        <div class="sub-badge popular">Terpopuler</div>
        <h3>Premium</h3>
        <div class="price">Rp 350.000 <span>/ bulan</span></div>
        <ul class="sub-features">
          <li><i class="fa-solid fa-circle-check"></i> Akses Semua Kelas STEAM</li>
          <li><i class="fa-solid fa-circle-check"></i> Kit Alat Robotik Bulanan</li>
          <li><i class="fa-solid fa-circle-check"></i> Mentor Online 1-on-1</li>
          <li><i class="fa-solid fa-circle-check"></i> Sertifikat Cetak</li>
        </ul>
        <button class="btn-sub" data-plan="Premium">Pilih Paket</button>
      </div>
    </div>
  </section>
  
  <!-- Footer -->
  <footer class="db-footer">
    <hr class="db-footer-line" />
    <p class="db-footer-text">TBotics Education © 2026. All Rights Reserved.</p>
  </footer>
`;

// ==========================================
// SUBSCRIPTION MODULE INITIALIZATION
// ==========================================
function initSubscriptionModule() {
  const paneSubscription = document.getElementById('pane-daftar-langganan');
  if (paneSubscription) {
    paneSubscription.innerHTML = subscriptionHTML;
  }
}

// Render on page load
document.addEventListener('DOMContentLoaded', initSubscriptionModule);
