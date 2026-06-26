// ==========================================
// LEARNING PATH CURRICULUM DATA
// ==========================================
const learningPathData = {
  elementary: {
    title: "Elementary school level",
    desc: "An IoT curriculum for elementary school students, designed in a step-by-step approach, starting from understanding technology and smart devices to creating creative projects that combine sensors, basic programming, and the internet to solve everyday problems.",
    steps: [
      {
        step: "Langkah 1",
        title: "Belajar Komponen Dasar",
        duration: "15 Jam",
        difficulty: "Dasar",
        modules: "20 Modul",
        desc: "Memahami dasar komponen IoT, termasuk sensor dan perangkat pintar, sebagai pondasi awal dalam mempelajari teknologi Internet of Things."
      },
      {
        step: "Langkah 2",
        title: "Logika Pemrograman Visual",
        duration: "18 Jam",
        difficulty: "Dasar",
        modules: "25 Modul",
        desc: "Menyusun alur logika sederhana menggunakan Scratch untuk mengontrol sensor virtual sebelum masuk ke perangkat keras sesungguhnya."
      },
      {
        step: "Langkah 3",
        title: "Sensor dan Aktuator",
        duration: "20 Jam",
        difficulty: "Dasar",
        modules: "18 Modul",
        desc: "Belajar mengidentifikasi, membaca, dan mengendalikan berbagai sensor (suhu, cahaya, jarak) serta aktuator (servo, LED, buzzer) pada sistem IoT."
      },
      {
        step: "Langkah 4",
        title: "Proyek IoT Sederhana",
        duration: "22 Jam",
        difficulty: "Menengah",
        modules: "22 Modul",
        desc: "Menghubungkan modul sensor ke internet untuk mengirimkan data secara real-time dan menampilkannya pada dashboard web interaktif."
      },
      {
        step: "Langkah 5",
        title: "Smart Device dan AI",
        duration: "25 Jam",
        difficulty: "Menengah",
        modules: "30 Modul",
        desc: "Mengintegrasikan kecerdasan buatan (AI) sederhana dengan perangkat IoT untuk menciptakan sistem cerdas yang mampu mengenali wajah, suara, atau pola gambar."
      }
    ]
  },
  middle: {
    title: "Middle school level",
    desc: "A intermediate curriculum tailored for middle school students, bridging visual block coding to text-based programming, and developing circuit assembly skills with microcontrollers to create interactive smart systems.",
    steps: [
      {
        step: "Langkah 1",
        title: "Dasar Elektronika & Arduino",
        duration: "20 Jam",
        difficulty: "Dasar",
        modules: "24 Modul",
        desc: "Mempelajari platform Arduino, membaca sensor analog/digital, dan menulis kode C++ dasar untuk mikrokontroler."
      },
      {
        step: "Langkah 2",
        title: "Sensor Pintar & Aktuator",
        duration: "22 Jam",
        difficulty: "Menengah",
        modules: "20 Modul",
        desc: "Menggunakan sensor ultrasonik, servo motor, dan modul LCD untuk interaksi fisik yang lebih kompleks."
      },
      {
        step: "Langkah 3",
        title: "Komunikasi IoT (Wi-Fi)",
        duration: "25 Jam",
        difficulty: "Menengah",
        modules: "25 Modul",
        desc: "Memprogram chip ESP8266/ESP32 untuk terhubung ke jaringan Wi-Fi lokal dan mengirimkan data HTTP."
      },
      {
        step: "Langkah 4",
        title: "Cloud Dashboard & Firebase",
        duration: "28 Jam",
        difficulty: "Menengah",
        modules: "22 Modul",
        desc: "Menghubungkan Arduino/ESP32 ke Firebase untuk menyimpan data sensor secara real-time dan mengontrol LED lewat web."
      },
      {
        step: "Langkah 5",
        title: "Proyek Smart Home Mini",
        duration: "30 Jam",
        difficulty: "Lanjut",
        modules: "28 Modul",
        desc: "Merancang miniatur rumah pintar dengan sistem kendali lampu, pendeteksi maling, dan monitoring suhu berbasis web."
      }
    ]
  },
  high: {
    title: "High school level and above",
    desc: "An advanced IoT path focusing on professional development with Python, microcomputing, backend database integration, and modern API communications to construct robust industrial prototypes.",
    steps: [
      {
        step: "Langkah 1",
        title: "Pemrograman Python & IoT",
        duration: "25 Jam",
        difficulty: "Menengah",
        modules: "20 Modul",
        desc: "Menggunakan Python pada Raspberry Pi untuk membaca sensor dan memproses data secara lokal."
      },
      {
        step: "Langkah 2",
        title: "Protokol MQTT untuk IoT",
        duration: "28 Jam",
        difficulty: "Lanjut",
        modules: "18 Modul",
        desc: "Mempelajari protokol komunikasi MQTT yang ringan dan cepat untuk pertukaran data antar perangkat IoT."
      },
      {
        step: "Langkah 3",
        title: "Database & Backend IoT",
        duration: "30 Jam",
        difficulty: "Lanjut",
        modules: "25 Modul",
        desc: "Membuat API backend sederhana dengan Node.js/Express dan database MongoDB untuk menyimpan histori sensor."
      },
      {
        step: "Langkah 4",
        title: "Web Dashboard Interaktif",
        duration: "32 Jam",
        difficulty: "Lanjut",
        modules: "24 Modul",
        desc: "Membangun web dashboard menggunakan Chart.js/React untuk visualisasi grafik data sensor secara real-time."
      },
      {
        step: "Langkah 5",
        title: "Keamanan Data IoT",
        duration: "35 Jam",
        difficulty: "Lanjut",
        modules: "30 Modul",
        desc: "Menerapkan protokol HTTPS dan enkripsi data sederhana untuk melindungi perangkat IoT dari peretasan."
      }
    ]
  },
  college: {
    title: "college level",
    desc: "A university-level engineering track exploring real-time operating systems (RTOS), edge computing with artificial intelligence (TinyML), and industrial IoT communications to design commercial-ready products.",
    steps: [
      {
        step: "Langkah 1",
        title: "Sistem Operasi (FreeRTOS)",
        duration: "30 Jam",
        difficulty: "Lanjut",
        modules: "20 Modul",
        desc: "Mempelajari pemrograman multi-tasking pada mikrokontroler menggunakan FreeRTOS untuk efisiensi sistem."
      },
      {
        step: "Langkah 2",
        title: "Edge Computing & AIoT",
        duration: "35 Jam",
        difficulty: "Lanjut",
        modules: "22 Modul",
        desc: "Menjalankan model Machine Learning ringan (TinyML) langsung di perangkat edge mikrokontroler untuk deteksi suara/gerakan."
      },
      {
        step: "Langkah 3",
        title: "Jaringan Sensor LoRaWAN",
        duration: "32 Jam",
        difficulty: "Lanjut",
        modules: "18 Modul",
        desc: "Mempelajari komunikasi nirkabel jarak jauh berdaya rendah (LoRa) untuk sensor industri dan pertanian pintar."
      },
      {
        step: "Langkah 4",
        title: "Keamanan Embedded System",
        duration: "35 Jam",
        difficulty: "Sangat Lanjut",
        modules: "25 Modul",
        desc: "Menerapkan secure boot, kriptografi perangkat keras, dan manajemen kunci enkripsi pada perangkat IoT industri."
      },
      {
        step: "Langkah 5",
        title: "Desain Produk & Prototiping",
        duration: "40 Jam",
        difficulty: "Sangat Lanjut",
        modules: "30 Modul",
        desc: "Merancang skema PCB komersial sendiri dan membuat purwarupa produk IoT siap pakai yang memenuhi standar industri."
      }
    ]
  }
};

// ==========================================
// RENDER LEARNING PATH FUNCTION
// ==========================================
function renderLearningPath(levelKey) {
  const data = learningPathData[levelKey];
  if (!data) return;

  // Update Header Elements
  const titleEl = document.getElementById('lp-header-title');
  const descEl = document.getElementById('lp-header-desc');
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;

  // Render Left and Right Timeline Columns
  const stepsColumn = document.getElementById('lp-steps-column');
  const descColumn = document.getElementById('lp-desc-column');

  if (!stepsColumn || !descColumn) return;

  stepsColumn.innerHTML = '';
  descColumn.innerHTML = '';

  data.steps.forEach((stepData, index) => {
    // Generate Left Card (Steps details)
    const leftCard = document.createElement('div');
    leftCard.className = `lp-card ${index === 0 ? 'active-card' : ''}`;
    leftCard.innerHTML = `
      <div class="lp-card-step">${stepData.step}</div>
      <div class="lp-card-title">${stepData.title}</div>
      <div class="lp-card-meta">
        <span>${stepData.duration}</span>
        <span>${stepData.difficulty}</span>
        <span>${stepData.modules}</span>
      </div>
    `;

    // Generate Right Card (Description details)
    const rightCard = document.createElement('div');
    rightCard.className = `lp-card ${index === 0 ? 'active-card' : ''}`;
    rightCard.innerHTML = `
      <div class="lp-card-desc">${stepData.desc}</div>
    `;

    // Sync Hover/Active states between left and right cards
    leftCard.addEventListener('mouseenter', () => {
      // Deactivate all cards in the list
      document.querySelectorAll('.lp-card').forEach(c => c.classList.remove('active-card'));
      // Activate this pair
      leftCard.classList.add('active-card');
      rightCard.classList.add('active-card');
    });

    rightCard.addEventListener('mouseenter', () => {
      document.querySelectorAll('.lp-card').forEach(c => c.classList.remove('active-card'));
      leftCard.classList.add('active-card');
      rightCard.classList.add('active-card');
    });

    stepsColumn.appendChild(leftCard);
    descColumn.appendChild(rightCard);
  });
}

// ==========================================
// INITIALIZE & BIND EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Bind sub-navbar tab buttons
  const subNavItems = document.querySelectorAll('.lp-sub-nav-item');
  subNavItems.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class
      subNavItems.forEach(item => item.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const level = btn.getAttribute('data-level');
      renderLearningPath(level);
    });
  });

  // Initial Render (Elementary School Level)
  renderLearningPath('elementary');
});

// ==========================================
// SEARCH PATH TIMELINE FILTER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const navSearchInput = document.getElementById('db-nav-search-input');
  
  if (navSearchInput) {
    navSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      // If the user starts searching and we are not on the Learning Path tab,
      // automatically transition to it!
      const activeTab = document.querySelector('.db-menu-item.active');
      if (activeTab && activeTab.id !== 'db-menu-pendidikan') {
        const headerMenuPendidikan = document.getElementById('db-menu-pendidikan');
        if (headerMenuPendidikan) {
          headerMenuPendidikan.click(); // Trigger transition to Learning Path
        }
      }
      
      // Perform filtering on the current timeline cards
      const leftCards = document.querySelectorAll('#lp-steps-column .lp-card');
      const rightCards = document.querySelectorAll('#lp-desc-column .lp-card');
      
      let firstVisibleIndex = -1;
      
      leftCards.forEach((leftCard, index) => {
        const rightCard = rightCards[index];
        if (!rightCard) return;
        
        const titleText = leftCard.querySelector('.lp-card-title').textContent.toLowerCase();
        const stepText = leftCard.querySelector('.lp-card-step').textContent.toLowerCase();
        const descText = rightCard.querySelector('.lp-card-desc').textContent.toLowerCase();
        
        if (titleText.includes(query) || stepText.includes(query) || descText.includes(query)) {
          leftCard.style.display = 'flex';
          rightCard.style.display = 'flex';
          if (firstVisibleIndex === -1) {
            firstVisibleIndex = index;
          }
        } else {
          leftCard.style.display = 'none';
          rightCard.style.display = 'none';
        }
      });
      
      // Update active pair to the first visible one
      document.querySelectorAll('.lp-card').forEach(c => c.classList.remove('active-card'));
      if (firstVisibleIndex !== -1) {
        leftCards[firstVisibleIndex].classList.add('active-card');
        rightCards[firstVisibleIndex].classList.add('active-card');
      }
    });
  }
});
