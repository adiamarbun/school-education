// ==========================================
// HOME PANEL HTML TEMPLATE
// ==========================================
const homeHTML = `
  <!-- Welcome Banner Card -->
  <section class="welcome-banner-card">
    <h1 class="welcome-heading-serif">Selamat datang,</h1>
    <p class="welcome-subheading">Semoga aktivitas belajar mu menyenangkan</p>

    <!-- Subscription Status Box -->
    <div class="subscription-status-box">
      <h3>Status langanan</h3>
      <div class="status-alert-bar">
        <span>Langanan telah berakhir, <a href="#" id="link-resubscribe">Berlanganan kembali</a> untuk melanjutkan belajar</span>
      </div>
    </div>
  </section>

  <!-- Learning Progress Section -->
  <section class="progress-section">
    <h2 class="progress-title">PROGRES BELAJAR</h2>
    <div class="progress-tabs">
      <button class="tab-btn active" id="tab-started">Kelas yang di mulai</button>
      <button class="tab-btn" id="tab-completed">Kelas yang di selesaikan</button>
    </div>

    <!-- List Started -->
    <div id="list-started" class="progress-list-container">
      <div class="list-header-banner">DAFTAR BELUM SELESAI</div>
      <div class="progress-cards-grid">
        <div class="progress-card">
          <div class="card-left">
            <div class="card-icon coding"><i class="fa-solid fa-code"></i></div>
            <div class="card-info">
              <h3>Coding & Logic</h3>
              <p>Scratch & Python Dasar</p>
            </div>
          </div>
          <div class="card-right">
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 60%"></div>
            </div>
            <span class="progress-percentage">60%</span>
            <button class="btn-continue" data-course="Coding & Logic">Lanjutkan <i class="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
        <div class="progress-card">
          <div class="card-left">
            <div class="card-icon robotics"><i class="fa-solid fa-robot"></i></div>
            <div class="card-info">
              <h3>Robotics & IoT</h3>
              <p>Micro:bit & Arduino Smart Car</p>
            </div>
          </div>
          <div class="card-right">
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 35%"></div>
            </div>
            <span class="progress-percentage">35%</span>
            <button class="btn-continue" data-course="Robotics & IoT">Lanjutkan <i class="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </div>

    <!-- List Completed -->
    <div id="list-completed" class="progress-list-container hidden">
      <div class="list-header-banner">DAFTAR SUDAH SELESAI</div>
      <div class="progress-cards-grid">
        <div class="progress-card completed">
          <div class="card-left">
            <div class="card-icon science"><i class="fa-solid fa-flask"></i></div>
            <div class="card-info">
              <h3>Smart Science</h3>
              <p>Fisika & Kimia Eksperimen</p>
            </div>
          </div>
          <div class="card-right">
            <div class="completed-badge"><i class="fa-solid fa-circle-check"></i> Selesai</div>
            <button class="btn-certificate" data-course="Smart Science">Sertifikat <i class="fa-solid fa-award"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Explore Events Section -->
  <section class="explore-events-section">
    <h2 class="explore-title">Telusuri event kita</h2>
    <div class="explore-grid">
      <div class="explore-card" id="explore-events-card">
        <div class="explore-card-icon"><i class="fa-solid fa-calendar-days"></i></div>
        <h3>Telusuri event dari Tbotics</h3>
        <p>Temukan workshop menarik dan pameran sains STEAM.</p>
      </div>
      <div class="explore-card" id="explore-challenges-card">
        <div class="explore-card-icon"><i class="fa-solid fa-trophy"></i></div>
        <h3>Telusuri Challenge dari Tbotics</h3>
        <p>Ikuti lomba coding & robotik berhadiah menarik.</p>
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
// HOME MODULE INITIALIZATION
// ==========================================
function initHomeModule() {
  const paneHome = document.getElementById("pane-home");
  if (paneHome) {
    paneHome.innerHTML = homeHTML;
    setupHomeEvents();
  }
}

function setupHomeEvents() {
  // Bind progress tabs (Started vs Completed)
  const tabStarted = document.getElementById("tab-started");
  const tabCompleted = document.getElementById("tab-completed");
  const listStarted = document.getElementById("list-started");
  const listCompleted = document.getElementById("list-completed");

  if (tabStarted && tabCompleted && listStarted && listCompleted) {
    tabStarted.addEventListener("click", () => {
      tabStarted.classList.add("active");
      tabCompleted.classList.remove("active");
      listStarted.classList.remove("hidden");
      listCompleted.classList.add("hidden");
    });

    tabCompleted.addEventListener("click", () => {
      tabCompleted.classList.add("active");
      tabStarted.classList.remove("active");
      listCompleted.classList.remove("hidden");
      listStarted.classList.add("hidden");
    });
  }

  // Bind explore cards (Redirects to respective navbar tabs)
  const exploreEventsCard = document.getElementById("explore-events-card");
  const exploreChallengesCard = document.getElementById("explore-challenges-card");

  if (exploreEventsCard) {
    exploreEventsCard.addEventListener("click", () => {
      const headerMenuEvent = document.getElementById("db-menu-event");
      if (headerMenuEvent) headerMenuEvent.click();
    });
  }
  if (exploreChallengesCard) {
    exploreChallengesCard.addEventListener("click", () => {
      const headerMenuChallenge = document.getElementById("db-menu-challenge");
      if (headerMenuChallenge) headerMenuChallenge.click();
    });
  }

  // Bind resubscribe redirect link
  const linkResubscribe = document.getElementById("link-resubscribe");
  if (linkResubscribe) {
    linkResubscribe.addEventListener("click", (e) => {
      e.preventDefault();
      // Clear navbar selection and trigger langganan pane
      document.querySelectorAll(".db-menu-item").forEach((item) => item.classList.remove("active"));
      // In js/script.js, we have switchPane. We can trigger it by navigating to langganan.
      // Simply trigger a click on the resubscribe dynamic link if it gets replaced,
      // or switch pane manually.
      if (typeof switchPane === "function") {
        switchPane("daftar-langganan");
      }
      if (typeof showToast === "function") {
        showToast("Membuka menu Langganan TBotics...", "info");
      }
    });
  }
}

// Render on page load
document.addEventListener("DOMContentLoaded", initHomeModule);
