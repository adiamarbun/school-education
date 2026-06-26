// ==========================================
// CHALLENGE PANEL HTML TEMPLATE
// ==========================================
const challengeHTML = `
  <!-- Welcome Banner -->
  <section class="welcome-banner">
    <h1 class="welcome-user-heading">Challenge TBotics</h1>
  </section>
  <section class="explore-events-section">
    <div class="explore-grid">
      <div class="explore-card">
        <h3>Smart Home Arduino Challenge</h3>
        <p>Rancang sistem otomasi rumah pintar sederhana menggunakan Arduino.</p>
        <button class="btn-continue btn-join-challenge" data-challenge="Smart Home Arduino" style="margin-top: 10px">Mulai</button>
      </div>
      <div class="explore-card">
        <h3>Scratch Storytelling Challenge</h3>
        <p>Buat animasi bertema pelestarian lingkungan dengan Scratch.</p>
        <button class="btn-continue btn-join-challenge" data-challenge="Scratch Storytelling" style="margin-top: 10px">Mulai</button>
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
// CHALLENGE MODULE INITIALIZATION
// ==========================================
function initChallengeModule() {
  const paneChallenge = document.getElementById('pane-challenge');
  if (paneChallenge) {
    paneChallenge.innerHTML = challengeHTML;
    setupChallengeEvents();
  }
}

function setupChallengeEvents() {
  const startBtns = document.querySelectorAll('.btn-join-challenge');
  startBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const challengeName = btn.getAttribute('data-challenge');
      if (typeof showToast === 'function') {
        showToast(`Tantangan dimulai: ${challengeName}! Semoga sukses.`, 'success');
      }
    });
  });
}

// Render on page load
document.addEventListener('DOMContentLoaded', initChallengeModule);
