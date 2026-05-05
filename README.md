# Deploy Static Website Publicly

Proyek ini adalah aplikasi web statis yang bisa dihosting publik tanpa meminta login GitHub atau Vercel dari pengunjung.

## Pilihan Hosting Publik

### 1. GitHub Pages
1. Buat repositori GitHub baru dan push semua file dari folder proyek.
2. Pastikan file utama berada di root repo:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `sw.js`
   - `KarangTaruna.apk`
   - `manifest.json`
   - `logo.png`
   - `icon.svg`
3. Buka pengaturan repo -> Pages.
4. Pilih sumber `Branch: main` dan `Folder: / (root)`.
5. Simpan.
6. Akses situs di URL seperti `https://<username>.github.io/<repo>`.

> Setelah halaman di-publish, siapapun bisa mengakses URL tersebut tanpa login ke GitHub.

### 2. Netlify
1. Buat akun Netlify (jika perlu), tetapi pengunjung tidak perlu login.
2. Deploy dari GitHub repo atau drag & drop folder build ke Netlify.
3. Pastikan root deploy berisi `index.html`.
4. Setelah deploy selesai, akses URL publik Netlify.

> Netlify menyediakan URL publik langsung, tanpa login bagi pengguna akhir.

### 3. Vercel (publik)
1. Pastikan proyek diatur sebagai publik di Vercel.
2. Gunakan `Import Project` dari GitHub atau upload manual.
3. Setelah deploy selesai, gunakan URL produksi Vercel.
4. Jangan gunakan preview/private deployment jika ingin pengguna akses langsung tanpa login.

> Jika Vercel meminta login GitHub/Vercel, itu biasanya karena Anda membuka link preview atau deployment privat.

## Pastikan
- Gunakan URL produksi/Publik, bukan Preview Link.
- Pastikan repositori/proyek tidak diatur sebagai privat.
- Jika menggunakan Vercel, atur deployment pada project public.

## Catatan tentang APK
- File saat ini `KarangTaruna.apk` adalah placeholder.
- Jika Anda ingin unduhan Android bekerja, ganti file ini dengan APK Android valid.

## Kesimpulan
Situs web ini dapat diakses langsung tanpa login ke GitHub/Vercel jika sudah dihosting sebagai situs statis publik. Gunakan GitHub Pages, Netlify, atau Vercel publik untuk mencapai ini.
