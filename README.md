# Sistem Informasi Karang Taruna Dukuh Klemut RW09

Aplikasi web untuk manajemen Karang Taruna Dukuh Klemut RW09. Aplikasi ini dapat diakses langsung melalui browser web di perangkat Android dan iOS.

## Fitur Utama
- Dashboard dengan statistik kas dan tabungan
- Manajemen anggota dan struktur organisasi
- Sistem notulensi rapat
- Keuangan (pemasukan/pengeluaran)
- Laporan dan rekapitulasi

## Cara Menggunakan

1. Buka situs web di browser (Chrome, Safari, Edge, dll.)
2. Login menggunakan username dan password pengurus
3. Akses fitur-fitur sesuai peran Anda
4. Untuk berbagi perubahan data dengan pengurus lain, gunakan tombol "Export / Import Data" di Dashboard
   - export data ke file JSON
   - berikan file JSON ke pengurus lain
   - import file JSON untuk menyinkronkan data

## Deploy ke Hosting Publik

### GitHub Pages
1. Buat repositori GitHub baru
2. Upload semua file dari folder proyek ini
3. Buka Settings -> Pages
4. Pilih branch `main` dan folder `/ (root)`
5. Simpan dan tunggu deploy selesai
6. Akses URL: `https://<username>.github.io/<repo-name>`

### Netlify
1. Buat akun Netlify (gratis)
2. Drag & drop folder proyek atau hubungkan repo GitHub
3. Deploy otomatis
4. Dapatkan URL publik

### Vercel
1. Buat akun Vercel (gratis)
2. Import proyek dari GitHub atau upload manual
3. Pastikan proyek public
4. Gunakan URL produksi (bukan preview)

## Catatan Teknis
- Aplikasi menggunakan localStorage untuk penyimpanan data
- Service Worker untuk offline capability
- Responsive design untuk semua perangkat
- Tidak memerlukan server backend

## Sinkronisasi Data Antar Perangkat (Opsional)
Aplikasi sudah mendukung sinkronisasi data menggunakan Firebase Realtime Database.

1. Buat proyek Firebase di https://console.firebase.google.com/
2. Tambahkan aplikasi web baru di Firebase
3. Salin `firebaseConfig` dari pengaturan konfigurasi SDK Firebase
4. Buka `app.js` dan isi nilai di objek `firebaseConfig`:
   - `apiKey`
   - `authDomain`
   - `databaseURL`
   - `projectId`
   - `storageBucket`
   - `messagingSenderId`
   - `appId`
5. Pastikan Realtime Database Anda memiliki aturan yang mengizinkan pembacaan/tulisan sederhana selama uji coba.

> Setelah Firebase terkonfigurasi, semua pengurus yang membuka aplikasi di domain yang sama akan menyinkronkan data otomatis.

## Akses di iPhone
- Buka aplikasi di Safari, bukan browser lain seperti Chrome atau browser bawaan aplikasi lain.
- Pastikan URL situs berada di HTTPS.
- Untuk membuat shortcut di layar utama, klik ikon bagikan, lalu pilih "Tambahkan ke Layar Utama".

## Login
Gunakan kredensial pengurus inti yang sudah ditentukan dalam kode untuk akses penuh.
