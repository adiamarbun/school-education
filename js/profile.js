// ==========================================
// TBOTICS PROFILE MODULE LOGIC & RENDERER
// ==========================================

// Main Initialization Function
function initProfileModule() {
  const paneProfile = document.getElementById('pane-profile');
  if (!paneProfile) return;

  // Get active logged-in user email
  const currentUserEmail = localStorage.getItem('mock_current_user') || 'siswa@tbotics.com';
  
  // Load profile data from localStorage or use defaults
  const fullName = localStorage.getItem(`profile_fullname_${currentUserEmail}`) || 'Siswa TBotics';
  const school = localStorage.getItem(`profile_school_${currentUserEmail}`) || 'SD STEAM Indonesia';
  const grade = localStorage.getItem(`profile_grade_${currentUserEmail}`) || 'Kelas 5';
  const phone = localStorage.getItem(`profile_phone_${currentUserEmail}`) || '081234567890';
  
  // Load active subscription status
  const subStatus = localStorage.getItem(`mock_sub_${currentUserEmail}`) || 'expired';
  
  // Map subscription status to badge classes and text
  let subBadgeText = 'Belum Berlangganan';
  let subBadgeClass = 'expired';
  let subIcon = '<i class="fa-solid fa-circle-xmark"></i>';

  if (subStatus === 'standard') {
    subBadgeText = 'Standard Plan';
    subBadgeClass = 'standard';
    subIcon = '<i class="fa-solid fa-circle-check"></i>';
  } else if (subStatus === 'premium') {
    subBadgeText = 'Premium Plan';
    subBadgeClass = 'premium';
    subIcon = '<i class="fa-solid fa-crown"></i>';
  }

  // Render HTML structure of the Profile Pane
  paneProfile.innerHTML = `
    <div class="profile-layout">
      <!-- Left Column: Avatar & Quick Info -->
      <aside class="profile-left-col">
        <div class="profile-card-container user-profile-card">
          <div class="user-card-banner"></div>
          
          <!-- Avatar -->
          <div class="avatar-wrapper" id="profile-avatar-click">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80" alt="Avatar" id="profile-avatar-img" />
            <div class="avatar-overlay">
              <i class="fa-solid fa-camera"></i> Ubah
            </div>
          </div>
          
          <h2 class="user-name-title" id="profile-left-name">${fullName}</h2>
          <span class="user-role-badge"><i class="fa-solid fa-user-graduate"></i> Siswa TBotics</span>
          <p class="user-email-text">${currentUserEmail}</p>
          
          <!-- Subscription Badge -->
          <div class="sub-status-badge ${subBadgeClass}" id="profile-sub-badge">
            ${subIcon} <span>${subBadgeText}</span>
          </div>
        </div>
      </aside>

      <!-- Right Column: Stats, Info Form, Achievements -->
      <main class="profile-right-col">
        <!-- 1. Study Statistics Card Grid -->
        <div class="profile-stats-grid">
          <div class="profile-card-container stat-card">
            <div class="stat-icon xp">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <div class="stat-info">
              <span class="stat-val">450 XP</span>
              <span class="stat-label">XP Belajar</span>
            </div>
          </div>
          <div class="profile-card-container stat-card">
            <div class="stat-icon courses">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div class="stat-info">
              <span class="stat-val">1 / 5</span>
              <span class="stat-label">Kelas Selesai</span>
            </div>
          </div>
          <div class="profile-card-container stat-card">
            <div class="stat-icon hours">
              <i class="fa-solid fa-clock"></i>
            </div>
            <div class="stat-info">
              <span class="stat-val">25 Jam</span>
              <span class="stat-label">Waktu Belajar</span>
            </div>
          </div>
        </div>

        <!-- 2. Personal Info Edit Form -->
        <div class="profile-card-container profile-form-box">
          <h3 class="profile-section-title">Informasi Pribadi</h3>
          <form class="profile-form" id="profile-edit-form">
            <div class="profile-input-group">
              <label for="profile-input-name">Nama Lengkap</label>
              <input type="text" id="profile-input-name" value="${fullName}" required />
            </div>
            <div class="profile-input-group">
              <label for="profile-input-school">Nama Sekolah</label>
              <input type="text" id="profile-input-school" value="${school}" required />
            </div>
            <div class="profile-input-group">
              <label for="profile-input-grade">Tingkat Kelas</label>
              <input type="text" id="profile-input-grade" value="${grade}" placeholder="Contoh: Kelas 5" required />
            </div>
            <div class="profile-input-group">
              <label for="profile-input-phone">Nomor Telepon</label>
              <input type="tel" id="profile-input-phone" value="${phone}" required />
            </div>
            
            <button type="submit" class="btn-profile-save">
              <i class="fa-solid fa-floppy-disk"></i> Simpan Perubahan
            </button>
          </form>
        </div>

        <!-- 3. Certificates List Card -->
        <div class="profile-card-container certificates-box">
          <h3 class="profile-section-title">Sertifikat Kelulusan STEAM</h3>
          <div class="certificates-list">
            <!-- Completed Course Certificate Item -->
            <div class="certificate-item">
              <div class="cert-left-info">
                <div class="cert-award-icon">
                  <i class="fa-solid fa-award"></i>
                </div>
                <div class="cert-text-info">
                  <h4>Belajar Komponen Dasar</h4>
                  <span>Lulus pada 25 Juni 2026 • Kurikulum Elementary</span>
                </div>
              </div>
              <button class="btn-cert-download" data-course="Belajar Komponen Dasar">
                <i class="fa-solid fa-arrow-down-to-bracket"></i> Unduh Sertifikat
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;

  // Bind Avatar Click Handler
  const avatarBtn = document.getElementById('profile-avatar-click');
  if (avatarBtn) {
    avatarBtn.addEventListener('click', () => {
      // Simulate avatar selection or show a toast
      if (typeof showToast === 'function') {
        showToast('Fitur ganti foto profil akan segera hadir!', 'info');
      }
    });
  }

  // Bind Form Submit Event
  const editForm = document.getElementById('profile-edit-form');
  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newName = document.getElementById('profile-input-name').value.trim();
      const newSchool = document.getElementById('profile-input-school').value.trim();
      const newGrade = document.getElementById('profile-input-grade').value.trim();
      const newPhone = document.getElementById('profile-input-phone').value.trim();

      if (!newName) {
        if (typeof showToast === 'function') showToast('Nama lengkap tidak boleh kosong!', 'error');
        return;
      }

      // Save to localStorage
      localStorage.setItem(`profile_fullname_${currentUserEmail}`, newName);
      localStorage.setItem(`profile_school_${currentUserEmail}`, newSchool);
      localStorage.setItem(`profile_grade_${currentUserEmail}`, newGrade);
      localStorage.setItem(`profile_phone_${currentUserEmail}`, newPhone);

      // Update name in left card immediately
      const leftNameEl = document.getElementById('profile-left-name');
      if (leftNameEl) leftNameEl.textContent = newName;

      // Update user details in header profile dropdown if it exists
      const headerUserEmailEl = document.getElementById('dropdown-user-email');
      if (headerUserEmailEl && currentUserEmail === 'siswa@tbotics.com') {
        // We can also sync names or user roles if needed
      }

      if (typeof showToast === 'function') {
        showToast('Perubahan profil berhasil disimpan!', 'success');
      }
    });
  }

  // Bind Certificate Download buttons
  const downloadBtns = paneProfile.querySelectorAll('.btn-cert-download');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const courseName = btn.getAttribute('data-course');
      
      if (typeof showToast === 'function') {
        showToast(`Mempersiapkan unduhan sertifikat "${courseName}"...`, 'info');
        
        setTimeout(() => {
          showToast(`Sertifikat Kelulusan "${courseName}" berhasil diunduh!`, 'success');
        }, 1500);
      }
    });
  });
}

// Ensure the profile tab re-renders whenever it is accessed to maintain synchronization
function setupProfilePaneSync() {
  // Listen for clicks on the profile dropdown link
  const profileLink = document.getElementById('profile-link');
  if (profileLink) {
    profileLink.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Close dropdown (dropdown closes automatically on click in script.js, but let's make sure)
      const profileDropdown = document.getElementById('profile-dropdown');
      if (profileDropdown) {
        profileDropdown.classList.remove('active');
      }
      
      // Clear active main menu selection in navbar
      if (typeof clearActiveHeaderMenu === 'function') {
        clearActiveHeaderMenu();
      }
      
      // Switch pane to profile
      if (typeof switchPane === 'function') {
        switchPane('profile');
      }
      
      // Initialize and render the profile page
      initProfileModule();
      
      if (typeof showToast === 'function') {
        showToast('Membuka profil Anda...', 'info');
      }
    });
  }
}

// Bind portal integration on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  // If user is already logged in, initialize profile module
  initProfileModule();
  setupProfilePaneSync();
});
