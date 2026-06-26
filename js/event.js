// ==========================================
// EVENT PANEL HTML TEMPLATE
// ==========================================
const eventHTML = `
  <!-- Welcome Banner -->
  <section class="welcome-banner">
    <h1 class="welcome-user-heading">Event TBotics</h1>
  </section>
  <section class="explore-events-section">
    <div class="explore-grid">
      <div class="explore-card">
        <h3>STEAM Coding Camp 2026</h3>
        <p>Workshop coding intensif membuat game 2D menggunakan Scratch.</p>
        <button class="btn-continue btn-join-event" data-event="STEAM Coding Camp" style="margin-top: 10px">Ikut Camp</button>
      </div>
      <div class="explore-card">
        <h3>Robotics Exhibition</h3>
        <p>Pameran robotik siswa tingkat SD & SMP di Jakarta.</p>
        <button class="btn-continue btn-join-event" data-event="Robotics Exhibition" style="margin-top: 10px">Daftar Pameran</button>
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
// EVENT MODULE INITIALIZATION
// ==========================================
function initEventModule() {
  const paneEvent = document.getElementById('pane-event');
  if (paneEvent) {
    paneEvent.innerHTML = eventHTML;
    setupEventEvents();
  }
}

function setupEventEvents() {
  const joinBtns = document.querySelectorAll('.btn-join-event');
  joinBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const eventName = btn.getAttribute('data-event');
      if (typeof showToast === 'function') {
        showToast(`Pendaftaran berhasil! Anda terdaftar pada event: ${eventName}.`, 'success');
      }
    });
  });
}

// Render on page load
document.addEventListener('DOMContentLoaded', initEventModule);
