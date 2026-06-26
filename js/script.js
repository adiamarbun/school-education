// ==========================================
// FIREBASE INITIALIZATION & FALLBACK
// ==========================================
let auth, db;
const isFirebaseSetup = typeof firebase !== 'undefined' && 
                        typeof firebaseConfig !== 'undefined' && 
                        firebaseConfig.apiKey && 
                        !firebaseConfig.apiKey.startsWith('YOUR_');

if (isFirebaseSetup) {
  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
  console.log("TBotics: Real Firebase Auth & Firestore database loaded.");
} else {
  console.warn("TBotics: Running in Simulation Mode. (No real Firebase credentials provided in js/config.js)");
}

// HELPER: Toast Notification Function
function showToast(message, type = 'success') {
  const oldToast = document.querySelector('.toast');
  if (oldToast) {
    oldToast.remove();
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === 'error') {
    icon = '<i class="fa-solid fa-circle-xmark"></i>';
  } else if (type === 'info') {
    icon = '<i class="fa-solid fa-circle-info"></i>';
  }

  toast.innerHTML = `${icon} <span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// ==========================================
// 1. NAVBAR NAVIGATION (MASUK & DAFTAR SWITCHING)
// ==========================================
function setFormMode(mode) {
  const title = document.getElementById('card-title');
  const submitBtn = document.getElementById('submit-btn');
  const googleBtnText = document.getElementById('google-btn-text');
  const forgotBtn = document.getElementById('forgot-password-btn');
  const loginForm = document.getElementById('login-form');

  let confirmGroup = document.getElementById('confirm-password-group');

  if (mode === 'register') {
    title.textContent = 'Daftar';
    submitBtn.textContent = 'Daftar';
    googleBtnText.textContent = 'Daftar Dengan Google';
    forgotBtn.style.display = 'none';

    if (!confirmGroup) {
      confirmGroup = document.createElement('div');
      confirmGroup.className = 'input-group';
      confirmGroup.id = 'confirm-password-group';
      confirmGroup.innerHTML = `
        <label>Konfirmasi Password</label>
        <input type="password" id="login-confirm-password" placeholder="********" required />
      `;
      const formActions = loginForm.querySelector('.form-actions');
      loginForm.insertBefore(confirmGroup, formActions);
    }
  } else {
    title.textContent = 'Masuk';
    submitBtn.textContent = 'Masuk';
    googleBtnText.textContent = 'Masuk Dengan Google';
    forgotBtn.style.display = 'block';

    if (confirmGroup) {
      confirmGroup.remove();
    }
  }

  const navLoginBtn = document.getElementById('nav-login-btn');
  const navRegisterBtn = document.getElementById('nav-register-btn');
  if (navLoginBtn && navRegisterBtn) {
    if (mode === 'register') {
      navRegisterBtn.classList.add('active');
      navLoginBtn.classList.remove('active');
    } else {
      navLoginBtn.classList.add('active');
      navRegisterBtn.classList.remove('active');
    }
  }

  const switchPrompt = document.getElementById('form-switch-prompt');
  if (switchPrompt) {
    if (mode === 'register') {
      switchPrompt.innerHTML = 'Sudah punya akun? <a href="#" id="auth-switch-link">Ayo masuk</a>';
    } else {
      switchPrompt.innerHTML = 'Belum punya akun? <a href="#" id="auth-switch-link">Ayo daftar</a>';
    }
    
    const switchLink = document.getElementById('auth-switch-link');
    if (switchLink) {
      switchLink.addEventListener('click', (e) => {
        e.preventDefault();
        setFormMode(mode === 'register' ? 'login' : 'register');
      });
    }
  }
}

const navLoginBtn = document.getElementById('nav-login-btn');
const navRegisterBtn = document.getElementById('nav-register-btn');
if (navLoginBtn) navLoginBtn.addEventListener('click', () => setFormMode('login'));
if (navRegisterBtn) navRegisterBtn.addEventListener('click', () => setFormMode('register'));

const initialSwitchLink = document.getElementById('auth-switch-link');
if (initialSwitchLink) {
  initialSwitchLink.addEventListener('click', (e) => {
    e.preventDefault();
    setFormMode('register');
  });
}

// Top Navbar Menu Items
const navLinkProgram = document.getElementById('nav-link-program');
const navLinkAcademy = document.getElementById('nav-link-academy');
const navLinkLangganan = document.getElementById('nav-link-langganan');
const navLinkPencapaian = document.getElementById('nav-link-pencapaian');
const navLinkDampak = document.getElementById('nav-link-dampak');

if (navLinkProgram) navLinkProgram.addEventListener('click', (e) => { e.preventDefault(); showToast('Membuka halaman Program TBotics...', 'info'); });
if (navLinkAcademy) navLinkAcademy.addEventListener('click', (e) => { e.preventDefault(); showToast('Membuka halaman Academy TBotics...', 'info'); });
if (navLinkLangganan) navLinkLangganan.addEventListener('click', (e) => { e.preventDefault(); showToast('Membuka halaman Langganan...', 'info'); });
if (navLinkPencapaian) navLinkPencapaian.addEventListener('click', (e) => { e.preventDefault(); showToast('Membuka halaman Pencapaian...', 'info'); });
if (navLinkDampak) navLinkDampak.addEventListener('click', (e) => { e.preventDefault(); showToast('Membuka halaman Dampak Lainnya...', 'info'); });

// ==========================================
// 2. REGISTRATION & LOGIN SYSTEM
// ==========================================
const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const isRegister = !document.getElementById('forgot-password-btn').offsetHeight;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Format email tidak valid!', 'error');
      return;
    }

    if (password.length < 6) {
      showToast('Password minimal harus 6 karakter!', 'error');
      return;
    }

    const submitBtn = document.getElementById('submit-btn');

    if (isRegister) {
      const confirmPassword = document.getElementById('login-confirm-password').value;
      if (password !== confirmPassword) {
        showToast('Konfirmasi password tidak cocok!', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Mendaftarkan...';

      if (isFirebaseSetup) {
        // Firebase Real Auth Registration
        auth.createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            return db.collection('users').doc(user.uid).set({
              email: email,
              role: 'Siswa',
              subscription: 'expired',
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
          })
          .then(() => {
            showToast('Pendaftaran akun berhasil! Silakan masuk.', 'success');
            setFormMode('login');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Masuk';
            loginForm.reset();
          })
          .catch((error) => {
            console.error("Firebase Reg Error:", error);
            showToast(`Pendaftaran gagal: ${error.message}`, 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Daftar';
          });
      } else {
        // Simulation Registration (LocalStorage)
        let mockUsers = JSON.parse(localStorage.getItem('mock_users') || '[]');
        if (mockUsers.some(u => u.email === email)) {
          showToast('Email sudah terdaftar!', 'error');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Daftar';
          return;
        }
        mockUsers.push({ email, password });
        localStorage.setItem('mock_users', JSON.stringify(mockUsers));

        setTimeout(() => {
          showToast('Pendaftaran akun berhasil! (Simulasi)', 'success');
          setFormMode('login');
          submitBtn.disabled = false;
          submitBtn.textContent = 'Masuk';
          loginForm.reset();
        }, 1200);
      }

    } else {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Memproses...';

      if (isFirebaseSetup) {
        // Firebase Real Auth Login
        auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            showToast('Berhasil masuk!', 'success');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Masuk';
            loginForm.reset();
          })
          .catch((error) => {
            console.error("Firebase Login Error:", error);
            showToast(`Gagal masuk: ${error.message}`, 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Masuk';
          });
      } else {
        // Simulation Login (LocalStorage)
        let mockUsers = JSON.parse(localStorage.getItem('mock_users') || '[]');
        const user = mockUsers.find(u => u.email === email && u.password === password);
        if (user || (email === 'siswa@tbotics.com' && password === '123456')) {
          setTimeout(() => {
            showToast('Berhasil masuk! (Simulasi)', 'success');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Masuk';
            loginForm.reset();
            
            localStorage.setItem('mock_current_user', email);
            const cachedSub = localStorage.getItem(`mock_sub_${email}`) || 'expired';
            updateDashboardUI(email, cachedSub);
          }, 1200);
        } else {
          setTimeout(() => {
            showToast('Email atau password salah!', 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Masuk';
          }, 1000);
        }
      }
    }
  });
}

// ==========================================
// 3. GOOGLE LOGIN SYSTEM
// ==========================================
const googleLoginBtn = document.getElementById('google-login-btn');
if (googleLoginBtn) {
  googleLoginBtn.addEventListener('click', () => {
    if (isFirebaseSetup) {
      showToast('Menghubungkan ke layanan Google...', 'info');
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          return db.collection('users').doc(user.uid).get().then((doc) => {
            if (!doc.exists) {
              return db.collection('users').doc(user.uid).set({
                email: user.email,
                role: 'Siswa',
                subscription: 'expired',
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
              });
            }
          });
        })
        .then(() => {
          showToast('Berhasil masuk dengan Google!', 'success');
        })
        .catch((error) => {
          console.error("Google Login Error:", error);
          showToast(`Login Google gagal: ${error.message}`, 'error');
        });
    } else {
      // Google Login Simulation Mode
      showToast('Menghubungkan ke layanan Google...', 'info');
      googleLoginBtn.disabled = true;
      setTimeout(() => {
        showToast('Berhasil masuk menggunakan Google! (Simulasi)', 'success');
        googleLoginBtn.disabled = false;
        
        const mockEmail = 'tbotics.user@gmail.com';
        localStorage.setItem('mock_current_user', mockEmail);
        const cachedSub = localStorage.getItem(`mock_sub_${mockEmail}`) || 'expired';
        updateDashboardUI(mockEmail, cachedSub);
      }, 1500);
    }
  });
}

// ==========================================
// 4. LUPA PASSWORD SYSTEM
// ==========================================
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
if (forgotPasswordBtn) {
  forgotPasswordBtn.addEventListener('click', () => {
    const emailInput = document.getElementById('login-email').value.trim();

    if (!emailInput) {
      showToast('Silakan isi kolom email terlebih dahulu!', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      showToast('Format email tidak valid!', 'error');
      return;
    }

    if (isFirebaseSetup) {
      auth.sendPasswordResetEmail(emailInput)
        .then(() => {
          showToast('Tautan reset password telah dikirim ke email Anda!', 'success');
        })
        .catch((error) => {
          console.error(error);
          showToast(`Gagal mengirim reset email: ${error.message}`, 'error');
        });
    } else {
      showToast('Tautan reset password telah dikirim ke email Anda! (Simulasi)', 'success');
    }
  });
}

// ==========================================
// 5. LANDING PAGE STATIC BUTTONS & INFO
// ==========================================
const officeAddress = document.getElementById('office-address');
if (officeAddress) {
  officeAddress.addEventListener('click', () => {
    showToast('Membuka Google Maps untuk alamat kantor...', 'info');
    setTimeout(() => {
      window.open('https://www.google.com/maps/search/?api=1&query=STEAM+T-Botics+Center+Gedung+Antasari+Park', '_blank');
    }, 800);
  });
}

const aboutUs = document.getElementById('about-us');
if (aboutUs) {
  aboutUs.addEventListener('click', () => {
    showToast("STEAM T-Botics: Let's learn & play with robotics!", 'info');
  });
}

const contactUs = document.getElementById('contact-us');
if (contactUs) {
  contactUs.addEventListener('click', () => {
    showToast('Hubungi kami via WhatsApp atau Email untuk informasi lebih lanjut!', 'info');
  });
}

const socialIds = ['social-instagram', 'social-whatsapp', 'social-youtube', 'social-facebook'];
socialIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', (e) => {
      const platform = id.replace('social-', '');
      showToast(`Membuka halaman ${platform.toUpperCase()} TBotics...`, 'info');
    });
  }
});

// ==========================================
// 6. HUBUNGI KAMI (CONTACT FORM) MODAL
// ==========================================
const contactModal = document.getElementById('contact-modal');
const contactModalCloseBtn = document.getElementById('contact-modal-close-btn');
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactUs && contactModal && contactModalCloseBtn) {
  // Replace standard WhatsApp card click with Modal trigger
  contactUs.replaceWith(contactUs.cloneNode(true)); // remove old listener
  const freshContactUs = document.getElementById('contact-us');
  
  freshContactUs.addEventListener('click', () => {
    contactModal.classList.add('show');
    if (contactForm) contactForm.reset();
    if (contactMessage) contactMessage.innerHTML = '';
  });

  contactModalCloseBtn.addEventListener('click', () => {
    contactModal.classList.remove('show');
  });

  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove('show');
    }
  });
}

// Rich Text Editor Toolbar Commands
const editorBtns = document.querySelectorAll('.editor-btn');
editorBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const cmd = btn.getAttribute('data-cmd');
    
    if (!contactMessage) return;
    
    if (cmd === 'createLink') {
      const url = prompt('Masukkan URL tautan:');
      if (url) {
        document.execCommand(cmd, false, url);
      }
    } else if (cmd === 'insertImage') {
      const url = prompt('Masukkan URL gambar:');
      if (url) {
        document.execCommand(cmd, false, url);
      }
    } else if (cmd === 'code') {
      const selection = window.getSelection();
      if (selection && selection.toString()) {
        const range = selection.getRangeAt(0);
        const codeNode = document.createElement('code');
        codeNode.style.fontFamily = 'monospace';
        codeNode.style.background = '#f1f5f9';
        codeNode.style.padding = '2px 4px';
        codeNode.style.borderRadius = '4px';
        codeNode.style.color = '#0f172a';
        codeNode.textContent = selection.toString();
        range.deleteContents();
        range.insertNode(codeNode);
      } else {
        document.execCommand('fontName', false, 'monospace');
      }
    } else {
      document.execCommand(cmd, false, null);
    }
    
    contactMessage.focus();
  });
});

// Submit Contact Messages
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    
    if (!contactMessage) return;
    const message = contactMessage.innerHTML.trim();
    
    if (!contactMessage.textContent.trim()) {
      showToast('Harap tuliskan pesan Anda terlebih dahulu!', 'error');
      return;
    }
    
    const submitBtn = contactForm.querySelector('.btn-submit-contact');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Mengirim...';
    }
    
    if (isFirebaseSetup) {
      // Firestore Real Save
      db.collection('contacts').add({
        email: email,
        subject: subject,
        message: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        showToast('Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.', 'success');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Kirim';
        }
        contactForm.reset();
        contactMessage.innerHTML = '';
        contactModal.classList.remove('show');
      })
      .catch((error) => {
        console.error("Firestore Contact Error:", error);
        showToast(`Gagal mengirim pesan: ${error.message}`, 'error');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Kirim';
        }
      });
    } else {
      // LocalStorage Simulation Save
      let mockContacts = JSON.parse(localStorage.getItem('mock_contacts') || '[]');
      mockContacts.push({ email, subject, message, createdAt: new Date().toISOString() });
      localStorage.setItem('mock_contacts', JSON.stringify(mockContacts));
      
      setTimeout(() => {
        showToast('Pesan Anda berhasil dikirim! (Mode Simulasi)', 'success');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Kirim';
        }
        contactForm.reset();
        contactMessage.innerHTML = '';
        contactModal.classList.remove('show');
      }, 1500);
    }
  });
}

// ==========================================
// 7. INTERACTIVE CHATBOT SYSTEM
// ==========================================
const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotInputForm = document.getElementById('chatbot-input-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

if (chatbotToggleBtn && chatbotWindow && chatbotCloseBtn) {
  chatbotToggleBtn.addEventListener('click', () => {
    chatbotWindow.classList.add('active');
  });

  chatbotCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    chatbotWindow.classList.remove('active');
  });
}

function generateBotReply(userMsg) {
  const msg = userMsg.toLowerCase();

  if (msg.includes('halo') || msg.includes('hi') || msg.includes('pagi') || msg.includes('siang') || msg.includes('sore') || msg.includes('malam')) {
    return 'Halo! Selamat datang di TBotics Education. Ada yang bisa saya bantu hari ini?';
  }
  if (msg.includes('lokasi') || msg.includes('alamat') || msg.includes('kantor') || msg.includes('dimana')) {
    return 'Kantor kami berlokasi di Gedung Antasari Park, Jl. Pangeran Antasari No.61 Cipete Utara, Jakarta Selatan. Anda juga bisa mengklik kartu alamat di layar untuk membuka navigasi di Google Maps!';
  }
  if (msg.includes('program') || msg.includes('kelas') || msg.includes('belajar') || msg.includes('steam')) {
    return 'TBotics menyediakan kelas STEAM (Science, Technology, Engineering, Art, Mathematics) untuk anak-anak, mencakup coding, robotik, dan eksperimen ilmiah yang seru!';
  }
  if (msg.includes('harga') || msg.includes('biaya') || msg.includes('bayar') || msg.includes('tarif')) {
    return 'Biaya program kami sangat terjangkau dengan kurikulum berstandar internasional. Untuk info promo bulan ini dan brosur lengkap, silakan tinggalkan nomor WhatsApp Anda atau hubungi kami via ikon WA di bawah!';
  }
  if (msg.includes('kontak') || msg.includes('whatsapp') || msg.includes('telp') || msg.includes('telepon')) {
    return 'Anda dapat menghubungi tim admin kami melalui WhatsApp di tombol sosial media yang terletak di bagian bawah halaman website ini.';
  }
  
  return 'Terima kasih atas pertanyaannya! Silakan isi formulir pendaftaran atau hubungi Customer Service kami via WhatsApp untuk mendapatkan bantuan langsung.';
}

function appendMessage(text, sender) {
  if (!chatbotMessages) return;
  const messageEl = document.createElement('div');
  messageEl.className = `message ${sender}`;
  messageEl.textContent = text;
  chatbotMessages.appendChild(messageEl);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

if (chatbotInputForm && chatbotInput) {
  chatbotInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatbotInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    chatbotInput.value = '';

    const typingEl = document.createElement('div');
    typingEl.className = 'message bot typing-indicator';
    typingEl.textContent = 'TBotics sedang mengetik...';
    chatbotMessages.appendChild(typingEl);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    setTimeout(() => {
      typingEl.remove();
      const reply = generateBotReply(text);
      appendMessage(reply, 'bot');
    }, 1000);
  });
}

// ==========================================
// 8. DASHBOARD LOGIC, STATE, AND REAL-TIME SYNC
// ==========================================
const landingPage = document.getElementById('landing-page');
const dashboardPage = document.getElementById('dashboard-page');

// Switch Content Panes
function switchPane(tabId) {
  document.querySelectorAll('.db-pane').forEach(pane => {
    pane.classList.add('hidden');
    pane.classList.remove('active');
  });
  
  const selectedPane = document.getElementById(`pane-${tabId}`);
  if (selectedPane) {
    selectedPane.classList.remove('hidden');
    selectedPane.classList.add('active');
  }

  // Dynamically show/hide search bar in navbar based on active tab
  const navSearch = document.querySelector('.db-nav-search');
  if (navSearch) {
    if (tabId === 'event' || tabId === 'challenge' || tabId === 'daftar-langganan') {
      navSearch.classList.add('hidden');
    } else {
      navSearch.classList.remove('hidden');
    }
  }
}

// Dynamic Subscription Status UI Renderer
function updateSubscriptionUI(subscription) {
  const statusAlertBar = document.querySelector('.status-alert-bar');
  if (!statusAlertBar) return;
  
  if (subscription === 'standard') {
    statusAlertBar.style.borderLeft = '4px solid #3b82f6';
    statusAlertBar.innerHTML = `<span><i class="fa-solid fa-circle-check" style="color: #3b82f6; margin-right: 8px;"></i> Paket <b>Standard</b> Aktif. Selamat belajar!</span>`;
  } else if (subscription === 'premium') {
    statusAlertBar.style.borderLeft = '4px solid #fbbf24';
    statusAlertBar.innerHTML = `<span><i class="fa-solid fa-crown" style="color: #fbbf24; margin-right: 8px;"></i> Paket <b>Premium</b> Aktif. Nikmati semua benefit spesial!</span>`;
  } else {
    statusAlertBar.style.borderLeft = '4px solid #ef4444';
    statusAlertBar.innerHTML = `<span>Langanan telah berakhir, <a href="#" id="link-resubscribe-dynamic">Berlanganan kembali</a> untuk melanjutkan belajar</span>`;
    
    const linkResub = document.getElementById('link-resubscribe-dynamic');
    if (linkResub) {
      linkResub.addEventListener('click', (e) => {
        e.preventDefault();
        clearActiveHeaderMenu();
        switchPane('daftar-langganan');
        showToast('Membuka menu Langganan TBotics...', 'info');
      });
    }
  }
}

// Unified Function to Display and Synchronize Dashboard Pages
function updateDashboardUI(email, subscription) {
  if (!landingPage || !dashboardPage) return;
  
  const isCurrentlyHidden = dashboardPage.classList.contains('hidden');
  
  landingPage.classList.add('hidden');
  dashboardPage.classList.remove('hidden');

  const username = email.split('@')[0];
  const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
  const welcomeHeadings = document.querySelectorAll('.welcome-user-heading');
  const dropdownEmail = document.getElementById('dropdown-user-email');

  welcomeHeadings.forEach(heading => {
    heading.textContent = `Selamat Datang, ${capitalizedUsername}!`;
  });
  
  if (dropdownEmail) {
    dropdownEmail.textContent = email;
  }
  
  updateSubscriptionUI(subscription);
  
  // Sync profile module with current user and subscription
  if (typeof initProfileModule === 'function') {
    initProfileModule();
  }
  
  if (isCurrentlyHidden) {
    switchPane('home');
    clearActiveHeaderMenu();
    const headerMenuHome = document.getElementById('db-menu-home');
    if (headerMenuHome) {
      headerMenuHome.classList.add('active');
    }
    showToast(`Selamat datang kembali, ${capitalizedUsername}!`, 'success');
  }
}

function showLandingPage() {
  if (!landingPage || !dashboardPage) return;
  dashboardPage.classList.add('hidden');
  landingPage.classList.remove('hidden');
  if (profileDropdown) {
    profileDropdown.classList.remove('active');
  }
}

// Profile Dropdown Toggle
const profileMenuBtn = document.getElementById('profile-menu-btn');
const profileDropdown = document.getElementById('profile-dropdown');

if (profileMenuBtn && profileDropdown) {
  profileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    profileDropdown.classList.remove('active');
  });
}

// Logout Action
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (isFirebaseSetup) {
      auth.signOut()
        .then(() => {
          showLandingPage();
          showToast('Anda berhasil keluar dari akun!', 'success');
        })
        .catch((error) => {
          console.error(error);
          showToast('Gagal keluar dari akun.', 'error');
        });
    } else {
      localStorage.removeItem('mock_current_user');
      showLandingPage();
      showToast('Anda berhasil keluar dari akun!', 'success');
    }
  });
}

// Header Navigation Tabs
const headerMenuHome = document.getElementById('db-menu-home');
const headerMenuAcademy = document.getElementById('db-menu-academy');
const headerMenuEvent = document.getElementById('db-menu-event');
const headerMenuChallenge = document.getElementById('db-menu-challenge');
const headerMenuPendidikan = document.getElementById('db-menu-pendidikan');

function clearActiveHeaderMenu() {
  document.querySelectorAll('.db-menu-item').forEach(item => item.classList.remove('active'));
}

if (headerMenuHome) {
  headerMenuHome.addEventListener('click', (e) => {
    e.preventDefault();
    clearActiveHeaderMenu();
    headerMenuHome.classList.add('active');
    switchPane('home');
    showToast('Membuka halaman Home...', 'info');
  });
}
if (headerMenuAcademy) {
  headerMenuAcademy.addEventListener('click', (e) => {
    e.preventDefault();
    clearActiveHeaderMenu();
    headerMenuAcademy.classList.add('active');
    switchPane('academy');
    showToast('Membuka menu Academy TBotics...', 'info');
  });
}
if (headerMenuEvent) {
  headerMenuEvent.addEventListener('click', (e) => {
    e.preventDefault();
    clearActiveHeaderMenu();
    headerMenuEvent.classList.add('active');
    switchPane('event');
    showToast('Membuka menu Event TBotics...', 'info');
  });
}
if (headerMenuChallenge) {
  headerMenuChallenge.addEventListener('click', (e) => {
    e.preventDefault();
    clearActiveHeaderMenu();
    headerMenuChallenge.classList.add('active');
    switchPane('challenge');
    showToast('Membuka menu Challenge TBotics...', 'info');
  });
}
if (headerMenuPendidikan) {
  headerMenuPendidikan.addEventListener('click', (e) => {
    e.preventDefault();
    clearActiveHeaderMenu();
    headerMenuPendidikan.classList.add('active');
    switchPane('daftar-kelas');
    showToast('Membuka menu Learning Path TBotics...', 'info');
  });
}

// Note: Pane-specific event listeners (progress tabs, explore cards, resubscribe redirects) 
// have been successfully offloaded to their respective JS modules (e.g., js/home.js).

// Click Delegation for Pricing Cards & Interactive Buttons
document.addEventListener('click', (e) => {
  // Lanjutkan button
  const continueBtn = e.target.closest('.btn-continue');
  if (continueBtn) {
    const course = continueBtn.getAttribute('data-course');
    showToast(`Melanjutkan pembelajaran kelas ${course}...`, 'success');
    return;
  }

  // Sertifikat button
  const certBtn = e.target.closest('.btn-certificate');
  if (certBtn) {
    const course = certBtn.getAttribute('data-course');
    showToast(`Mengunduh sertifikat kelulusan untuk ${course}...`, 'success');
    return;
  }

  // Pilih Paket button (DB Integrated!)
  const subBtn = e.target.closest('.btn-sub');
  if (subBtn) {
    const plan = subBtn.getAttribute('data-plan').toLowerCase();
    showToast(`Memproses pembayaran paket ${plan.toUpperCase()}...`, 'info');
    
    setTimeout(() => {
      if (isFirebaseSetup && auth.currentUser) {
        // Update Firestore
        db.collection('users').doc(auth.currentUser.uid).update({
          subscription: plan
        }).then(() => {
          showToast(`Pembelian paket ${plan.toUpperCase()} berhasil!`, 'success');
        }).catch((err) => {
          console.error("Error updating subscription:", err);
          showToast('Gagal memproses pembelian di database.', 'error');
        });
      } else {
        // LocalStorage Simulation Mode
        const currentUserEmail = localStorage.getItem('mock_current_user');
        if (currentUserEmail) {
          localStorage.setItem(`mock_sub_${currentUserEmail}`, plan);
          updateSubscriptionUI(plan);
        }
        showToast(`[Simulasi] Pembelian paket ${plan.toUpperCase()} berhasil!`, 'success');
      }
    }, 1200);
    return;
  }
});

// Note: Global navigation search filtering is fully handled in js/learning-path.js.

// ==========================================
// 9. AUTH STATE OBSERVERS & PAGE LOAD SYNC
// ==========================================
if (isFirebaseSetup) {
  // Real-time Firebase auth observer
  auth.onAuthStateChanged((user) => {
    if (user) {
      // Real-time Firestore profile sync
      db.collection('users').doc(user.uid).onSnapshot((doc) => {
        let userData = doc.data();
        if (!userData) {
          userData = {
            email: user.email,
            role: 'Siswa',
            subscription: 'expired',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
          };
          db.collection('users').doc(user.uid).set(userData);
        }
        
        updateDashboardUI(user.email, userData.subscription);
      }, (error) => {
        console.error("Error syncing profile from Firestore:", error);
        updateDashboardUI(user.email, 'expired');
      });
    } else {
      showLandingPage();
    }
  });
} else {
  // LocalStorage auth check on page load (Simulation Mode)
  window.addEventListener('DOMContentLoaded', () => {
    const cachedUser = localStorage.getItem('mock_current_user');
    if (cachedUser) {
      const cachedSub = localStorage.getItem(`mock_sub_${cachedUser}`) || 'expired';
      updateDashboardUI(cachedUser, cachedSub);
    }
  });
}
