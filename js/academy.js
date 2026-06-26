// ==========================================================================
// TBOTICS ACADEMY CURRICULUM DATA (Elementary School Level)
// ==========================================================================
const academyData = [
  {
    step: "Langkah 1",
    title: "Belajar Komponen Dasar",
    duration: "25 Jam Belajar",
    difficulty: "Level Dasar",
    modules: "25 Modul",
    topic: "IoT",
    image: "assets/images/learningpath.png",
    status: "Belum lulus",
    statusClass: "status-unpassed",
    desc: "Memahami dasar komponen IoT, termasuk sensor dan perangkat pintar, sebagai pondasi awal dalam mempelajari teknologi Internet of Things.",
    details: {
      deskripsi: `
        <div class="academy-rich-desc">
          <h3>Tentang Kelas Ini</h3>
          <p>Kelas ini dirancang khusus untuk memperkenalkan dunia Internet of Things (IoT) secara menyenangkan kepada siswa sekolah dasar. Siswa akan diajak memahami bagaimana perangkat di sekitar kita dapat berpikir, merasakan lingkungan sekitar, dan terhubung ke internet.</p>
          
          <div class="academy-features-grid">
            <div class="feature-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <div>
                <h4>Tujuan Pembelajaran</h4>
                <p>Mampu mengenali berbagai komponen sensor, aktuator, dan mikrokontroler dasar serta fungsi utamanya.</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-cubes"></i>
              <div>
                <h4>Prasyarat</h4>
                <p>Tidak memerlukan keahlian khusus. Sangat cocok untuk pemula yang baru pertama kali belajar teknologi.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      testimoni: [
        {
          name: "Rian Hidayat",
          role: "Orang Tua Siswa (Kelas 4 SD)",
          stars: 5,
          comment: "Anak saya sangat antusias setelah belajar kelas ini. Sekarang dia tahu bagaimana lampu otomatis di rumah bekerja!",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          name: "Siti Aminah",
          role: "Orang Tua Siswa (Kelas 5 SD)",
          stars: 5,
          comment: "Materi penjelasannya sangat ramah anak. Visualisasi komponennya membuat anak cepat paham tanpa rasa bosan.",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ],
      faq: [
        {
          q: "Apakah siswa perlu membeli perangkat keras fisik untuk kelas ini?",
          a: "Tidak perlu. Pada tahap dasar ini, semua pengenalan dan simulasi komponen dilakukan secara interaktif lewat web platform TBotics."
        },
        {
          q: "Berapa lama waktu ideal untuk menyelesaikan modul ini?",
          a: "Kelas ini dirancang untuk diselesaikan dalam waktu 25 jam. Siswa bebas mengatur jadwal belajar secara mandiri (self-paced)."
        }
      ],
      silabus: [
        { num: "1", title: "Pengenalan Ekosistem IoT", desc: "Mengenal konsep dasar IoT dan contoh penerapannya di kehidupan sehari-hari." },
        { num: "2", title: "Mengenal Sensor (Input Perangkat)", desc: "Mempelajari sensor cahaya, suhu, dan jarak sebagai indera dari perangkat pintar." },
        { num: "3", title: "Mengenal Aktuator (Output Perangkat)", desc: "Mempelajari LED, Buzzer, dan Motor sebagai penggerak/reaksi perangkat." },
        { num: "4", title: "Otak Perangkat: Mikrokontroler", desc: "Memahami peran mikrokontroler sebagai pusat pengolah data sensor." }
      ]
    }
  },
  {
    step: "Langkah 2",
    title: "Logika Pemrograman Visual",
    duration: "18 Jam Belajar",
    difficulty: "Level Dasar",
    modules: "25 Modul",
    topic: "Programming",
    image: "assets/images/academy_step2.png",
    status: "Sedang berjalan",
    statusClass: "status-ongoing",
    desc: "Menyusun alur logika sederhana menggunakan Scratch untuk mengontrol sensor virtual sebelum masuk ke perangkat keras sesungguhnya.",
    details: {
      deskripsi: `
        <div class="academy-rich-desc">
          <h3>Tentang Kelas Ini</h3>
          <p>Belajar coding tidak harus sulit! Dengan pemrograman visual berbasis blok (Scratch), siswa dapat menyusun logika kontrol perangkat secara visual. Cukup drag-and-drop blok kode untuk menghidupkan sensor dan lampu virtual di layar.</p>
          
          <div class="academy-features-grid">
            <div class="feature-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <div>
                <h4>Tujuan Pembelajaran</h4>
                <p>Memahami konsep dasar pemrograman seperti Input/Output, Kondisional (If-Else), dan Perulangan (Looping).</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-cubes"></i>
              <div>
                <h4>Prasyarat</h4>
                <p>Telah menyelesaikan Langkah 1: Belajar Komponen Dasar.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      testimoni: [
        {
          name: "Budi Santoso",
          role: "Orang Tua Siswa (Kelas 5 SD)",
          stars: 5,
          comment: "Awalnya saya kira coding itu susah, tapi dengan Scratch anak saya malah ketagihan bikin game sensor sendiri!",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          name: "Larasati",
          role: "Guru STEAM",
          stars: 5,
          comment: "Logika blok ini sangat membantu transisi anak dari sekadar tahu komponen menjadi pencipta logika program.",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ],
      faq: [
        {
          q: "Mengapa menggunakan Scratch terlebih dahulu?",
          a: "Scratch menghilangkan hambatan salah ketik kode (syntax error) sehingga anak-anak bisa 100% fokus memahami alur logika berpikir logis."
        },
        {
          q: "Apakah game hasil karya anak bisa dimainkan?",
          a: "Tentu! Semua proyek Scratch yang dibuat siswa dapat disimpan dan dibagikan ke teman-teman di komunitas TBotics."
        }
      ],
      silabus: [
        { num: "1", title: "Berkenalan dengan Blok Scratch", desc: "Memahami antarmuka Scratch dan cara menggerakkan objek digital." },
        { num: "2", title: "Logika Kondisional (Jika - Maka)", desc: "Membuat keputusan cerdas: jika sensor mendeteksi gelap, maka lampu menyala." },
        { num: "3", title: "Looping (Mengulang Perintah)", desc: "Membuat lampu berkedip terus menerus menggunakan blok pengulangan selamanya." },
        { num: "4", title: "Proyek Pertama: Simulator Lampu Pintar", desc: "Menggabungkan logika sensor dan aktuator virtual dalam proyek terpadu." }
      ]
    }
  },
  {
    step: "Langkah 3",
    title: "Sensor dan Aktuator",
    duration: "20 Jam Belajar",
    difficulty: "Level Dasar",
    modules: "18 Modul",
    topic: "Sensor & Aktuator",
    image: "assets/images/academy_step3.png",
    status: "Belum lulus",
    statusClass: "status-unpassed",
    desc: "Belajar mengidentifikasi, membaca, dan mengendalikan berbagai sensor (suhu, cahaya, jarak) serta aktuator (servo, LED, buzzer) pada sistem IoT.",
    details: {
      deskripsi: `
        <div class="academy-rich-desc">
          <h3>Tentang Kelas Ini</h3>
          <p>Di kelas ini, siswa akan menjelajahi berbagai macam sensor yang berfungsi sebagai 'indera' bagi perangkat pintar, serta aktuator yang berfungsi sebagai 'otot' untuk melakukan tindakan fisik. Siswa akan belajar mengintegrasikan keduanya untuk membuat sistem interaktif.</p>
          
          <div class="academy-features-grid">
            <div class="feature-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <div>
                <h4>Tujuan Pembelajaran</h4>
                <p>Memahami cara membaca input dari sensor analog/digital dan memberikan output ke berbagai aktuator secara tepat.</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-cubes"></i>
              <div>
                <h4>Prasyarat</h4>
                <p>Telah menyelesaikan Langkah 2: Logika Pemrograman Visual.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      testimoni: [
        {
          name: "Dewi Lestari",
          role: "Ibu Rumah Tangga",
          stars: 5,
          comment: "Sangat aman dan terstruktur. Anak saya belajar merakit buzzer alarm pintu kamarnya sendiri dengan bangga.",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          name: "Ahmad Fauzi",
          role: "Siswa Kelas 6 SD",
          stars: 5,
          comment: "Seru banget! Sekarang aku bisa bikin lampu otomatis yang menyala sendiri kalau kamarku gelap.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ],
      faq: [
        {
          q: "Apakah sensor yang dipelajari sulit digunakan?",
          a: "Sama sekali tidak. Semua materi dirancang dengan modul simulasi interaktif yang sangat mudah dipahami oleh anak-anak."
        },
        {
          q: "Apa saja sensor yang akan dipelajari?",
          a: "Kita akan mempelajari sensor cahaya (LDR), sensor suhu, dan sensor jarak ultrasonik."
        }
      ],
      silabus: [
        { num: "1", title: "Pengenalan Sensor (Input Perangkat)", desc: "Mengenal berbagai sensor yang dapat mendeteksi kondisi lingkungan sekitar." },
        { num: "2", title: "Mengenal Aktuator (Output Perangkat)", desc: "Mempelajari cara kerja motor servo, buzzer, dan lampu LED sebagai respon sistem." },
        { num: "3", title: "Integrasi Sensor dan Aktuator", desc: "Menghubungkan sensor cahaya dengan LED untuk membuat sistem lampu otomatis." },
        { num: "4", title: "Kalibrasi dan Uji Coba Sensor", desc: "Mengatur sensitivitas sensor agar respon aktuator menjadi lebih presisi." }
      ]
    }
  },
  {
    step: "Langkah 4",
    title: "Proyek IoT Sederhana",
    duration: "22 Jam Belajar",
    difficulty: "Level Menengah",
    modules: "22 Modul",
    topic: "IoT & Coding",
    image: "assets/images/academy_step4.png",
    status: "Belum lulus",
    statusClass: "status-unpassed",
    desc: "Menghubungkan modul sensor ke internet untuk mengirimkan data secara real-time dan menampilkannya pada dashboard web interaktif.",
    details: {
      deskripsi: `
        <div class="academy-rich-desc">
          <h3>Tentang Kelas Ini</h3>
          <p>Saatnya menghubungkan proyek kita ke internet! Di kelas ini, siswa akan belajar cara mengirim data yang dibaca oleh sensor ke server cloud, lalu menampilkannya dalam bentuk grafik yang indah dan interaktif yang bisa diakses dari mana saja.</p>
          
          <div class="academy-features-grid">
            <div class="feature-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <div>
                <h4>Tujuan Pembelajaran</h4>
                <p>Mampu mengkonfigurasi koneksi internet pada perangkat IoT dan membuat dashboard pemantauan real-time.</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-cubes"></i>
              <div>
                <h4>Prasyarat</h4>
                <p>Telah menyelesaikan Langkah 3: Sensor dan Aktuator.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      testimoni: [
        {
          name: "Hendrik",
          role: "Orang Tua Siswa",
          stars: 5,
          comment: "Luar biasa! Anak saya bisa memantau suhu tanaman di halaman rumah lewat HP saat kami sedang bepergian.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          name: "Kartika",
          role: "Orang Tua Siswa",
          stars: 5,
          comment: "Keren sekali! Anak saya sekarang bisa memantau kelembaban pot tanaman kesayangannya lewat HP.",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ],
      faq: [
        {
          q: "Apakah membutuhkan jaringan Wi-Fi khusus?",
          a: "Tidak, cukup menggunakan koneksi Wi-Fi rumah atau hotspot seluler biasa untuk menghubungkan perangkat simulasi ke internet."
        },
        {
          q: "Apakah data yang dikirimkan aman?",
          a: "Sangat aman. Platform TBotics menggunakan protokol terenkripsi untuk melindungi data hasil belajar siswa."
        }
      ],
      silabus: [
        { num: "1", title: "Konsep Dasar Internet of Things", desc: "Memahami bagaimana data dikirim melalui internet dan disimpan di cloud." },
        { num: "2", title: "Menghubungkan Perangkat ke Wi-Fi", desc: "Belajar melakukan konfigurasi koneksi nirkabel pada modul pintar." },
        { num: "3", title: "Membuat Dashboard Pemantauan", desc: "Merancang antarmuka web dengan grafik interaktif untuk memvisualisasikan data sensor." },
        { num: "4", title: "Kontrol Perangkat Jarak Jauh", desc: "Mengirimkan perintah balik dari web dashboard untuk menghidupkan aktuator di rumah." }
      ]
    }
  },
  {
    step: "Langkah 5",
    title: "Smart Device dan AI",
    duration: "25 Jam Belajar",
    difficulty: "Level Menengah",
    modules: "30 Modul",
    topic: "Smart Device & AI",
    image: "assets/images/academy_step5.png",
    status: "Belum lulus",
    statusClass: "status-unpassed",
    desc: "Mengintegrasikan kecerdasan buatan (AI) sederhana dengan perangkat IoT untuk menciptakan sistem cerdas yang mampu mengenali wajah, suara, atau pola gambar.",
    details: {
      deskripsi: `
        <div class="academy-rich-desc">
          <h3>Tentang Kelas Ini</h3>
          <p>Tingkat teratas kurikulum dasar! Siswa akan menggabungkan IoT dengan kecerdasan buatan (AI). Kita akan belajar bagaimana membuat perangkat pintar yang tidak hanya membaca sensor, tetapi juga bisa 'melihat' menggunakan kamera dan 'mendengar' menggunakan mikrofon berkat bantuan teknologi AI.</p>
          
          <div class="academy-features-grid">
            <div class="feature-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <div>
                <h4>Tujuan Pembelajaran</h4>
                <p>Mampu melatih model klasifikasi gambar/suara sederhana dan menerapkannya untuk mengontrol perangkat pintar secara otomatis.</p>
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-cubes"></i>
              <div>
                <h4>Prasyarat</h4>
                <p>Telah menuntaskan Langkah 1 sampai Langkah 4.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      testimoni: [
        {
          name: "Prof. Dr. Irwan",
          role: "Pakar Pendidikan Anak",
          stars: 5,
          comment: "Metodologi proyek kreatif STEAM ini sangat melatih problem-solving skill anak sejak usia dini secara konstruktif.",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
        },
        {
          name: "Riko",
          role: "Siswa Kelas 6 SD",
          stars: 5,
          comment: "Hebat banget! Aku berhasil membuat tempat sampah pintar yang hanya terbuka kalau mendeteksi wajahku.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
        }
      ],
      faq: [
        {
          q: "Apakah AI yang dipelajari rumit?",
          a: "Tidak sama sekali. Kami menggunakan antarmuka visual khusus pembelajaran AI yang ramah anak, tanpa perlu rumus matematika yang rumit."
        },
        {
          q: "Karya apa yang akan dibuat di akhir kelas?",
          a: "Siswa akan membuat proyek mandiri berupa Smart Gate System dengan pengenalan wajah atau Smart Light System dengan kendali suara."
        }
      ],
      silabus: [
        { num: "1", title: "Pengenalan Artificial Intelligence (AI)", desc: "Memahami bagaimana komputer bisa belajar mengenali pola gambar dan suara." },
        { num: "2", title: "Melatih Model AI Sederhana", desc: "Mengumpulkan data sampel gambar wajah dan melatihnya menggunakan platform TBotics AI." },
        { num: "3", title: "Menghubungkan Model AI dengan Perangkat", desc: "Membuat program agar hasil pengenalan AI dapat memicu pergerakan motor servo." },
        { num: "4", title: "Proyek Akhir: Smart Home System berbasis AI", desc: "Membangun purwarupa rumah masa depan cerdas yang terintegrasi dengan kecerdasan buatan." }
      ]
    }
  }
];


// Active State Trackers
let currentStepIndex = 0;
let currentTab = "deskripsi"; // Options: deskripsi, testimoni, faq, silabus
let currentAcademyTab = "progres"; // Options: progres, runtunan, langganan
let currentSubTab = "dimulai"; // Options: dimulai, diselesaikan
let showingDetailView = false;

// ==========================================================================
// RENDER ACADEMY INTERACTIVE INTERFACE (Sidebar Layout)
// ==========================================================================
function initAcademyModule() {
  const paneAcademy = document.getElementById('pane-academy');
  if (!paneAcademy) return;

  renderAcademyShell(paneAcademy);
  renderAcademyContent();
}

// Render Core Skeleton Structure of Academy page (Sidebar + Main Content area)
function renderAcademyShell(container) {
  container.innerHTML = `
    <!-- Academy Sidebar Layout Container -->
    <div class="academy-layout">
      <!-- Left Sidebar -->
      <aside class="academy-sidebar">
        <div class="sidebar-header">
          <h2>Academy</h2>
        </div>
        <nav class="sidebar-nav">
          <button class="sidebar-nav-item ${currentAcademyTab === 'progres' ? 'active' : ''}" data-tab="progres">
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Progres belajar</span>
          </button>
          <button class="sidebar-nav-item ${currentAcademyTab === 'runtunan' ? 'active' : ''}" data-tab="runtunan">
            <i class="fa-solid fa-route"></i>
            <span>Runtunan Belajar</span>
          </button>
          <button class="sidebar-nav-item ${currentAcademyTab === 'langganan' ? 'active' : ''}" data-tab="langganan">
            <i class="fa-solid fa-credit-card"></i>
            <span>Langganan</span>
          </button>
        </nav>
      </aside>

      <!-- Right Content Area -->
      <main class="academy-main-content">
        <!-- Dynamic Header -->
        <div class="academy-content-header">
          <h1 id="academy-content-title">Progres belajar</h1>
        </div>

        <!-- Dynamic Content Body -->
        <div id="academy-content-body">
          <!-- Injected via renderAcademyContent() -->
        </div>
      </main>
    </div>
  `;

  // Bind Sidebar Nav Clicks
  const navItems = container.querySelectorAll('.sidebar-nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tab = item.getAttribute('data-tab');
      currentAcademyTab = tab;
      showingDetailView = false; // Reset to progress list

      // Update active class in UI
      navItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      // Update title
      const titleEl = document.getElementById('academy-content-title');
      if (titleEl) {
        if (tab === 'progres') titleEl.textContent = 'Progres belajar';
        else if (tab === 'runtunan') titleEl.textContent = 'Runtunan Belajar';
        else if (tab === 'langganan') titleEl.textContent = 'Langganan';
      }

      renderAcademyContent();

      if (typeof showToast === 'function') {
        const tabNames = { progres: 'Progres Belajar', runtunan: 'Runtunan Belajar', langganan: 'Langganan' };
        showToast(`Membuka ${tabNames[tab]}...`, 'info');
      }
    });
  });

  // Keep header title in sync initially
  const titleEl = container.querySelector('#academy-content-title');
  if (titleEl) {
    if (currentAcademyTab === 'progres') titleEl.textContent = 'Progres belajar';
    else if (currentAcademyTab === 'runtunan') titleEl.textContent = 'Runtunan Belajar';
    else if (currentAcademyTab === 'langganan') titleEl.textContent = 'Langganan';
  }
}

// Route main content area depending on selected sidebar tab
function renderAcademyContent() {
  const contentBody = document.getElementById('academy-content-body');
  if (!contentBody) return;

  if (currentAcademyTab === 'progres') {
    if (showingDetailView) {
      renderCourseDetailView(contentBody);
    } else {
      renderProgresBelajar(contentBody);
    }
  } else if (currentAcademyTab === 'runtunan') {
    renderRuntunanBelajar(contentBody);
  } else if (currentAcademyTab === 'langganan') {
    renderLangganan(contentBody);
  }
}

// Render "Progres Belajar" list (Classes Started vs Completed)
function renderProgresBelajar(container) {
  container.innerHTML = `
    <!-- Sub-tabs -->
    <div class="progres-sub-tabs">
      <button class="progres-sub-tab ${currentSubTab === 'dimulai' ? 'active' : ''}" data-sub-tab="dimulai">Kelas Yang dimulai</button>
      <button class="progres-sub-tab ${currentSubTab === 'diselesaikan' ? 'active' : ''}" data-sub-tab="diselesaikan">Kelas yang diselesaikan</button>
    </div>

    <!-- Cards List -->
    <div class="academy-course-cards-list" id="course-cards-list">
      <!-- Injected dynamically -->
    </div>
  `;

  // Bind Sub-tab Clicks
  const subTabs = container.querySelectorAll('.progres-sub-tab');
  subTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentSubTab = tab.getAttribute('data-sub-tab');
      subTabs.forEach(el => el.classList.remove('active'));
      tab.classList.add('active');
      renderCourseCards();
    });
  });

  // Render the course cards initially
  renderCourseCards();

  function renderCourseCards() {
    const cardsList = document.getElementById('course-cards-list');
    if (!cardsList) return;

    // Progress values (Step 1: 100%, Step 2: 60%, Steps 3-5: 0%)
    const courseProgress = [100, 60, 0, 0, 0];

    // Filter courses based on sub-tab
    const filteredCourses = [];
    academyData.forEach((course, idx) => {
      const progress = courseProgress[idx];
      if (currentSubTab === 'diselesaikan' && progress === 100) {
        filteredCourses.push({ course, idx, progress });
      } else if (currentSubTab === 'dimulai' && progress < 100) {
        filteredCourses.push({ course, idx, progress });
      }
    });

    if (filteredCourses.length === 0) {
      cardsList.innerHTML = `
        <div class="academy-empty-state">
          <i class="fa-solid fa-folder-open"></i>
          <h3>Tidak ada kelas</h3>
          <p>Belum ada kelas dalam kategori ini.</p>
        </div>
      `;
      return;
    }

    cardsList.innerHTML = filteredCourses.map(({ course, idx, progress }) => {
      let actionText = "Mulai Belajar";
      let actionClass = "";
      let iconClass = "fa-solid fa-play";

      if (progress > 0 && progress < 100) {
        actionText = "Lanjutkan";
        actionClass = "ongoing";
        iconClass = "fa-solid fa-forward";
      } else if (progress === 100) {
        actionText = "Review Kelas";
        actionClass = "completed-btn";
        iconClass = "fa-solid fa-circle-check";
      }

      const progressText = progress === 100 ? 'Selesai' : `${progress}%`;

      return `
        <div class="academy-course-card" data-course-idx="${idx}">
          <div class="card-left-info">
            <div class="card-img-box">
              <img src="${course.image}" alt="${course.title}" />
            </div>
            <div class="card-text-box">
              <div class="card-step-badge">${course.step}</div>
              <h3 class="card-title-text">${course.title}</h3>
              <div class="card-meta-info">
                <span><i class="fa-regular fa-clock"></i> ${course.duration}</span>
                <span><i class="fa-regular fa-folder"></i> ${course.modules}</span>
                <span><i class="fa-solid fa-tags"></i> ${course.topic}</span>
              </div>
            </div>
          </div>
          
          <div class="card-right-progress">
            <div class="card-progress-bar-wrapper">
              <div class="progress-label-row">
                <span>Progres Belajar</span>
                <span class="progress-percent-num">${progressText}</span>
              </div>
              <div class="card-progress-bar-bg">
                <div class="card-progress-bar-fill ${progress === 100 ? 'completed' : ''}" style="width: ${progress}%"></div>
              </div>
            </div>
            
            <button class="btn-card-action ${actionClass}">
              <i class="${iconClass}"></i> ${actionText}
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Bind click events on cards
    const cards = cardsList.querySelectorAll('.academy-course-card');
    cards.forEach(card => {
      const idx = parseInt(card.getAttribute('data-course-idx'), 10);

      const triggerDetail = () => {
        currentStepIndex = idx;
        showingDetailView = true;
        renderAcademyContent();
      };

      const actionBtn = card.querySelector('.btn-card-action');
      if (actionBtn) {
        actionBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          triggerDetail();
        });
      }
      card.addEventListener('click', triggerDetail);
    });
  }
}

// Render the inside content of active tab (Description, Testimonial, FAQ, Syllabus)
function renderActiveTabContent() {
  const tabContentPanel = document.getElementById('academy-tab-content-panel');
  if (!tabContentPanel) return;

  const data = academyData[currentStepIndex].details;

  if (currentTab === 'deskripsi') {
    tabContentPanel.innerHTML = data.deskripsi;
  } else if (currentTab === 'testimoni') {
    tabContentPanel.innerHTML = `
      <div class="academy-testimonials-container">
        <h3>Pendapat Mereka Tentang Kelas Ini</h3>
        <div class="testimonials-flex">
          ${data.testimoni.map(t => `
            <div class="testimonial-card-premium">
              <div class="testi-header">
                <img src="${t.avatar}" alt="${t.name}" class="testi-avatar" />
                <div class="testi-user-info">
                  <h4>${t.name}</h4>
                  <span>${t.role}</span>
                </div>
              </div>
              <div class="testi-stars">
                ${Array(t.stars).fill('<i class="fa-solid fa-star"></i>').join('')}
              </div>
              <p class="testi-comment">"${t.comment}"</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (currentTab === 'faq') {
    tabContentPanel.innerHTML = `
      <div class="academy-faq-container">
        <h3>Pertanyaan Sering Diajukan (FAQ)</h3>
        <div class="faq-accordion-list">
          ${data.faq.map((faq, idx) => `
            <div class="faq-item-card">
              <button class="faq-question-btn" data-faq-idx="${idx}">
                <span>${faq.q}</span>
                <i class="fa-solid fa-chevron-down faq-icon-arrow"></i>
              </button>
              <div class="faq-answer-content hidden" id="faq-ans-${idx}">
                <p>${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Bind accordion toggles
    const faqBtns = tabContentPanel.querySelectorAll('.faq-question-btn');
    faqBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = btn.getAttribute('data-faq-idx');
        const ans = tabContentPanel.querySelector(`#faq-ans-${idx}`);
        const arrow = btn.querySelector('.faq-icon-arrow');

        if (ans) {
          const isHidden = ans.classList.contains('hidden');

          if (isHidden) {
            ans.classList.remove('hidden');
            arrow.style.transform = 'rotate(180deg)';
          } else {
            ans.classList.add('hidden');
            arrow.style.transform = 'rotate(0deg)';
          }
        }
      });
    });
  } else if (currentTab === 'silabus') {
    tabContentPanel.innerHTML = `
      <div class="academy-syllabus-container">
        <h3>Kurikulum dan Silabus Kelas</h3>
        <div class="syllabus-timeline">
          ${data.silabus.map(s => `
            <div class="syllabus-module-card">
              <div class="mod-badge">Modul ${s.num}</div>
              <div class="mod-body">
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

// Render the details of the active selected Step (Steppers + Tabs Classroom)
function renderCourseDetailView(container) {
  container.innerHTML = `
    <!-- Back Navigation Button -->
    <div class="academy-detail-header-nav">
      <button class="btn-back-to-progres" id="btn-back-to-progres">
        <i class="fa-solid fa-arrow-left"></i> Kembali ke Progres Belajar
      </button>
    </div>

    <!-- Steps Navigation Banner (Stepper) inside Detail View -->
    <div class="academy-stepper">
      <div class="stepper-title-box">
        <h2>Kurikulum Elementary School</h2>
        <p>Pelajari IoT langkah demi langkah secara menyenangkan</p>
      </div>
      <div class="stepper-track-container">
        <div class="stepper-track">
          ${academyData.map((stepData, idx) => `
            <div class="step-node ${idx === currentStepIndex ? 'active' : ''} ${idx < currentStepIndex ? 'completed' : ''}" data-step-idx="${idx}">
              <div class="node-circle">
                ${idx < currentStepIndex ? '<i class="fa-solid fa-check"></i>' : (idx + 1)}
              </div>
              <span class="node-label">${stepData.step}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Active Course Content -->
    <div id="academy-active-step-details">
      <!-- Rendered dynamically -->
    </div>
  `;

  // Bind Back Button
  const backBtn = container.querySelector('#btn-back-to-progres');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      showingDetailView = false;
      renderAcademyContent();
    });
  }

  // Bind Stepper Click Handlers
  const nodes = container.querySelectorAll('.step-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const idx = parseInt(node.getAttribute('data-step-idx'), 10);
      currentStepIndex = idx;

      // Re-render the Detail View for the selected step
      renderCourseDetailView(container);

      if (typeof showToast === 'function') {
        showToast(`Membuka ${academyData[idx].step}: ${academyData[idx].title}`, 'info');
      }
    });
  });

  // Render active step sub details
  renderActiveStepDetails();
}

// Render active course hero, quick-description, benefits, and tabs row
function renderActiveStepDetails() {
  const contentArea = document.getElementById('academy-active-step-details');
  if (!contentArea) return;

  const data = academyData[currentStepIndex];

  contentArea.innerHTML = `
    <!-- Hero Course Card -->
    <section class="academy-hero-card">
      <div class="hero-left">
        <div class="hero-img-container">
          <img src="${data.image}" alt="${data.title}" />
        </div>
        <div class="hero-info-text">
          <span class="hero-badge-step">${data.step}</span>
          <h1 class="hero-course-title">${data.title}</h1>
          
          <div class="hero-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Level</span>
              <span class="meta-val">${data.difficulty}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Durasi</span>
              <span class="meta-val">${data.duration}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Materi</span>
              <span class="meta-val">${data.modules}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Topik</span>
              <span class="meta-val-badge">Topik: ${data.topic}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <!-- Action Card widget -->
        <div class="action-widget-card">
          <div class="status-indicator">
            <span class="status-dot ${data.statusClass}"></span>
            <span class="status-text">${data.status}</span>
          </div>
          <button class="btn-action-primary btn-koridor-kelas">
            <i class="fa-solid fa-rocket"></i> Koridor Kelas
          </button>
          <button class="btn-action-link btn-lihat-kelas-lainnya">
            <i class="fa-solid fa-list"></i> Lihat Kelas Lainnya
          </button>
        </div>
      </div>
    </section>

    <!-- Description Paragraph below Hero Card -->
    <div class="academy-quick-desc-box">
      <p>${data.desc}</p>
    </div>

    <!-- "Yang Kalian Dapatkan" Benefits Section -->
    <section class="academy-benefits-section">
      <h2 class="benefits-title">Yang Kalian Dapatkan</h2>
      <div class="benefits-grid-box">
        <div class="benefit-card-premium">
          <div class="benefit-icon"><i class="fa-solid fa-certificate"></i></div>
          <div class="benefit-body">
            <h3>Sertifikat</h3>
            <p>Dapatkan sertifikat resmi kelulusan setelah menyelesaikan proyek akhir kelas.</p>
          </div>
        </div>
        <div class="benefit-card-premium">
          <div class="benefit-icon"><i class="fa-solid fa-comments"></i></div>
          <div class="benefit-body">
            <h3>Ruang diskusi</h3>
            <p>Diskusikan tugas Anda bersama tutor ahli dan sesama teman pembelajar.</p>
          </div>
        </div>
        <div class="benefit-card-premium">
          <div class="benefit-icon"><i class="fa-solid fa-circle-play"></i></div>
          <div class="benefit-body">
            <h3>Video Tutorial</h3>
            <p>Tonton video panduan interaktif berkualitas tinggi berdurasi pendek ramah anak.</p>
          </div>
        </div>
        <div class="benefit-card-premium">
          <div class="benefit-icon"><i class="fa-solid fa-file-pen"></i></div>
          <div class="benefit-body">
            <h3>Ujian Simulasi</h3>
            <p>Uji pemahaman logika Anda lewat simulasi kuis menyenangkan interaktif.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Details Tabs navigation row -->
    <div class="academy-tabs-row">
      <button class="tab-trigger ${currentTab === 'deskripsi' ? 'active' : ''}" data-tab="deskripsi">Deskripsi Kelas</button>
      <button class="tab-trigger ${currentTab === 'testimoni' ? 'active' : ''}" data-tab="testimoni">Testimoni</button>
      <button class="tab-trigger ${currentTab === 'faq' ? 'active' : ''}" data-tab="faq">FAQ</button>
      <button class="tab-trigger ${currentTab === 'silabus' ? 'active' : ''}" data-tab="silabus">Silabus</button>
    </div>

    <!-- Active Tab Pane Content Container -->
    <div class="academy-tab-content-pane" id="academy-tab-content-panel">
      <!-- Injected via renderActiveTabContent() -->
    </div>
  `;

  // Bind Hero Action Buttons
  const koridorBtn = contentArea.querySelector('.btn-koridor-kelas');
  if (koridorBtn) {
    koridorBtn.addEventListener('click', () => {
      if (typeof showToast === 'function') {
        showToast(`Memasuki Koridor Kelas: ${data.title}... Mulai belajar!`, 'success');
      }
    });
  }

  const lihatLainnyaBtn = contentArea.querySelector('.btn-lihat-kelas-lainnya');
  if (lihatLainnyaBtn) {
    lihatLainnyaBtn.addEventListener('click', () => {
      // Go back to course progress list
      showingDetailView = false;
      renderAcademyContent();
    });
  }

  // Bind Details Tab Triggers
  const tabButtons = contentArea.querySelectorAll('.tab-trigger');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.getAttribute('data-tab');
      renderActiveTabContent();
    });
  });

  // Initial tab content rendering
  renderActiveTabContent();
}

// Render "Runtunan Belajar" (Learning Path curriculum timeline list)
function renderRuntunanBelajar(container) {
  // Grab learningPathData from global context or fallback if not loaded yet
  const lpData = typeof learningPathData !== 'undefined' ? learningPathData : null;
  if (!lpData) {
    container.innerHTML = `
      <div class="academy-empty-state">
        <i class="fa-solid fa-route"></i>
        <h3>Runtunan Belajar</h3>
        <p>Data Runtunan Belajar tidak dapat dimuat atau belum diinisialisasi.</p>
      </div>
    `;
    return;
  }

  let activeLpLevel = 'elementary';

  container.innerHTML = `
    <div class="academy-lp-wrapper">
      <!-- Levels Sub-navbar -->
      <div class="lp-sub-navbar">
        <button class="lp-sub-nav-item active" data-level="elementary">Elementary school level</button>
        <button class="lp-sub-nav-item" data-level="middle">Middle school level</button>
        <button class="lp-sub-nav-item" data-level="high">High school level and above</button>
        <button class="lp-sub-nav-item" data-level="college">college level</button>
      </div>

      <!-- Level Header -->
      <div class="academy-lp-header-box">
        <h2 id="academy-lp-title">Elementary school level</h2>
        <p id="academy-lp-desc">An IoT curriculum for elementary school students, designed in a step-by-step approach, starting from understanding technology and smart devices to creating creative projects that combine sensors, basic programming, and the internet to solve everyday problems.</p>
      </div>

      <!-- Steps Timeline List -->
      <div class="academy-course-cards-list" id="academy-lp-steps-list">
        <!-- Injected dynamically -->
      </div>
    </div>
  `;

  // Bind Level Tab clicks
  const subNavItems = container.querySelectorAll('.lp-sub-nav-item');
  subNavItems.forEach(item => {
    item.addEventListener('click', () => {
      activeLpLevel = item.getAttribute('data-level');
      subNavItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      renderLpLevelContent();
    });
  });

  renderLpLevelContent();

  function renderLpLevelContent() {
    const levelData = lpData[activeLpLevel];
    if (!levelData) return;

    // Update title and description
    const titleEl = document.getElementById('academy-lp-title');
    const descEl = document.getElementById('academy-lp-desc');
    if (titleEl) titleEl.textContent = levelData.title;
    if (descEl) descEl.textContent = levelData.desc;

    // Render steps
    const stepsList = document.getElementById('academy-lp-steps-list');
    if (!stepsList) return;

    stepsList.innerHTML = levelData.steps.map((step, idx) => {
      return `
        <div class="academy-course-card">
          <div class="card-left-info">
            <div class="card-text-box" style="padding-left: 10px;">
              <div class="card-step-badge">${step.step}</div>
              <h3 class="card-title-text">${step.title}</h3>
              <p style="font-size: 14px; color: var(--academy-text-muted); margin: 6px 0 10px 0; line-height: 1.5;">${step.desc}</p>
              <div class="card-meta-info">
                <span><i class="fa-regular fa-clock"></i> ${step.duration}</span>
                <span><i class="fa-regular fa-folder"></i> ${step.modules}</span>
                <span><i class="fa-solid fa-tags"></i> ${step.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Render "Langganan" (Integrated Subscription pricing page)
function renderLangganan(container) {
  container.innerHTML = `
    <div class="academy-sub-wrapper">
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
          <button class="btn-sub btn-sub-action" data-plan="Standard">Pilih Paket</button>
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
          <button class="btn-sub btn-sub-action popular" data-plan="Premium">Pilih Paket</button>
        </div>
      </div>
    </div>
  `;

  // Bind upgrade subscription buttons
  const subBtns = container.querySelectorAll('.btn-sub-action');
  subBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const plan = btn.getAttribute('data-plan');

      if (typeof showToast === 'function') {
        showToast(`Mengajukan paket langganan ${plan}...`, 'success');
      }

      // Simulate real-time subscription sync across panels
      if (typeof updateSubscriptionUI === 'function') {
        setTimeout(() => {
          updateSubscriptionUI(plan.toLowerCase());
          showToast(`Langganan ${plan} berhasil diaktifkan!`, 'success');
        }, 1000);
      }
    });
  });
}

// ==========================================================================
// PORTAL INTEGRATION (Learning Path timeline clicks switch to Academy)
// ==========================================================================
function setupLearningPathIntegration() {
  document.addEventListener('click', (e) => {
    // Check if the clicked element or its parent is a learning path timeline card
    const lpCard = e.target.closest('.lp-card');
    if (lpCard && lpCard.closest('.lp-timeline-split')) {
      // Verify that the active sub-nav item is indeed 'elementary'
      const activeSubNav = document.querySelector('.lp-sub-nav-item.active');
      if (activeSubNav && activeSubNav.getAttribute('data-level') === 'elementary') {
        // Find the index of the card in the left column or right column
        let clickedIdx = -1;
        const leftCards = Array.from(document.querySelectorAll('#lp-steps-column .lp-card'));
        const rightCards = Array.from(document.querySelectorAll('#lp-desc-column .lp-card'));

        if (leftCards.includes(lpCard)) {
          clickedIdx = leftCards.indexOf(lpCard);
        } else if (rightCards.includes(lpCard)) {
          clickedIdx = rightCards.indexOf(lpCard);
        }

        if (clickedIdx !== -1 && clickedIdx < academyData.length) {
          // Trigger transition to Academy page!
          const academyTab = document.getElementById('db-menu-academy');
          if (academyTab) {
            currentStepIndex = clickedIdx;
            currentTab = "deskripsi"; // Reset detail tab to default
            currentAcademyTab = "progres"; // Reset sidebar tab
            showingDetailView = true; // Show detail view directly

            // Re-render Academy UI
            const paneAcademy = document.getElementById('pane-academy');
            if (paneAcademy) {
              renderAcademyShell(paneAcademy);
              renderAcademyContent();
            }

            // Trigger navbar tab click
            academyTab.click();
          }
        }
      }
    }
  });
}

// Render on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  initAcademyModule();
  setupLearningPathIntegration();
});
