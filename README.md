# STEAM T-Botics Education

TBotics Education is an interactive STEAM (Science, Technology, Engineering, Arts, and Mathematics) and IoT (Internet of Things) learning platform. It is designed to guide students of various levels—from elementary school to college—through structured learning paths, practical academies, hands-on challenges, and exciting events.

## 🚀 Fitur Utama
- **Multi-level Learning Paths**: Kurikulum IoT yang terstruktur untuk tingkat SD (Elementary), SMP (Middle School), SMA (High School), hingga Perguruan Tinggi (College).
- **Interactive Academy**: Modul pembelajaran interaktif dan langkah-langkah praktis untuk membuat proyek IoT nyata.
- **Challenges & Events**: Tantangan mingguan/bulanan dan acara menarik untuk menguji dan meningkatkan keahlian siswa.
- **TBotics AI Assistant**: Asisten pintar berbasis chat untuk membantu siswa belajar dan memecahkan masalah.
- **Sistem Autentikasi**: Terintegrasi dengan Firebase Auth untuk masuk dan pendaftaran yang aman (termasuk Masuk dengan Google).
- **Dashboard Siswa**: Halaman profil dan pelacakan kemajuan belajar personal.

## 📁 Struktur Proyek
```text
education_tbotics/
├── assets/             # Aset gambar, logo, dan media
├── css/                # Kumpulan berkas styling (CSS) untuk setiap modul/halaman
│   ├── academy.css
│   ├── challenge.css
│   ├── event.css
│   ├── home.css
│   ├── learning-path.css
│   ├── profile.css
│   ├── style.css
│   └── subscription.css
├── js/                 # Kumpulan logika JavaScript untuk fungsionalitas interaktif
│   ├── academy.js
│   ├── challenge.js
│   ├── config.js       # Konfigurasi Firebase
│   ├── event.js
│   ├── home.js
│   ├── learning-path.js
│   ├── profile.js
│   ├── script.js       # Logika utama/global
│   └── subscription.js
└── index.html         # Halaman utama aplikasi (Entrypoint)
```

## 💻 Cara Menjalankan secara Lokal

Anda dapat menjalankan aplikasi ini secara lokal dengan beberapa cara:

### Cara 1: Menggunakan Live Server (Direkomendasikan)
Untuk menghindari masalah CORS saat memuat aset atau menggunakan integrasi Firebase, jalankan server lokal:

#### Menggunakan Python:
Buka terminal/PowerShell di direktori proyek ini dan jalankan:
```bash
python -m http.server 8000
```
Lalu buka browser dan akses `http://localhost:8000/index.html`.

#### Menggunakan Node.js (npx):
Jika Anda memiliki Node.js terinstal, Anda bisa menjalankan:
```bash
npx http-server -p 8000
```
Lalu buka browser dan akses `http://localhost:8000/index.html`.

### Cara 2: Membuka File HTML Langsung
Anda juga dapat mengklik dua kali berkas `index.html` untuk membukanya langsung di browser (menggunakan protokol `file://`), namun beberapa fitur autentikasi Firebase tingkat lanjut mungkin memerlukan server lokal (Cara 1).
