# Landing Page Portofolio Particles — Source Asli Ovro

Paket ini berisi **halaman portofolio Particles lengkap**, sesuai pilihan Anda,
bukan hanya video background. Sumber: `Ovro Vue 3 Resume Personal Portfolio
Template (1).zip`, direktori `Ovro-Vue_v1.0/Ovro-Vue/`.

## Menjalankan

Gunakan Node.js 22 dan npm. Dari folder hasil ekstraksi:

```sh
cd particles-portfolio
npm ci
npm run dev
```

Buka alamat lokal yang dicetak Vite (biasanya `http://localhost:5173`).
Halaman `/` langsung menampilkan portofolio Particles. Alamat asli
`/demos/index-3` tetap tersedia. Ini source Vue, sehingga `index.html` tidak
bisa dijalankan dengan klik dua kali seperti HTML statis.

Untuk produksi:

```sh
npm run build
npm run preview
```

Build menghasilkan `dist/`. Saat hosting, sajikan `dist/` dari root domain dan
aktifkan fallback SPA ke `index.html` untuk rute Vue. Path video asli tetap
`/video2.mp4`; pengaturan hosting subdirektori tidak diubah dalam ekstraksi ini.

## Letak kode

| Bagian | File/folder |
| --- | --- |
| Halaman Particles utama, markup lengkap | `src/views/demos/index-3/index.vue` |
| Video partikel asli | `public/video2.mp4` |
| Aturan Particles dan layout hero | `src/assets/scss/components/_hero.scss`, blok `.main-hero-area3` |
| Seluruh stylesheet bersama asli | `src/assets/scss/` |
| Hero, About, Service, Skills, Portfolio, Testimonials, Blogs, Contact | `src/sections/` |
| Navbar, sidebar, modal portfolio, logo, back-to-top | `src/components/` |
| Gambar dan SVG yang dirujuk komponen | `src/assets/img/` |
| Inisialisasi AOS dan tema asli | `src/App.vue`, `src/stores/layout.ts` |
| Bootstrap, stylesheet dan bootstrap aplikasi | `src/main.ts` |
| Pemilihan halaman | `src/router/routes.ts` |

## Yang dipertahankan tanpa perubahan

- Seluruh komponen Vue yang disertakan, termasuk halaman Particles, section,
  modal, navbar, sidebar, dan halaman detail blog.
- Seluruh file SCSS bersama, urutan import, media query, keyframes, warna,
  opacity, ukuran, spacing, dan z-index.
- Semua parameter animasi AOS, count-up, transisi CSS, pemutaran video,
  autoplay/muted/loop, tema terang/gelap, dan pengendali interaksi.
- Video asli, gambar, SVG, konfigurasi build, package.json, serta lockfile asli.
- Nama class, struktur DOM Vue, konten contoh, tautan dan perilaku komponen asli.

**127 file sumber yang disertakan identik byte-per-byte dengan ZIP asli.**
Video `public/video2.mp4` identik dengan hash SHA-256:

```text
7ade08291a2f2d4937a96a1d3ce5aa370e93384cfd6818d34a33e0130cb567be
```

Tidak ada konversi ke HTML biasa, penggantian partikel, peningkatan opacity,
penambahan `playsinline`, penggantian font, kompresi ulang video, ataupun redesign.

## Satu-satunya file kode yang berubah

`src/router/routes.ts`:

1. Import komponen untuk rute `/` diarahkan ke halaman Particles asli.
2. Entri rute `index-1`, `index-2`, `index-4`, `index-5`, `index-6`, dan `index-7`
   dikeluarkan. Entri `index-3` dipertahankan.

Lihat `ROUTING-CHANGES.diff` untuk perubahan persisnya. Halaman utama preview
beserta varian demo lain tidak disertakan. File/aset yang tidak dirujuk oleh
halaman yang dipertahankan juga dikeluarkan, termasuk video varian lain dan
salinan video ganda. Video Particles yang digunakan tetap ada di `public/`.

Halaman `/blogs/:slug` dipertahankan sebagai tujuan tautan kartu blog dari
landing page, sehingga pemisahan tidak memutus navigasi tersebut. Ini bukan
varian landing page tambahan.

Stylesheet bersama tetap utuh, termasuk aturan untuk varian lain yang berada
dalam file yang sama. Memangkas aturan di dalam file tersebut akan mengubah kode
asli dan berisiko mengubah cascade; karena itu yang dipisahkan adalah halaman,
rute, komponen yang diperlukan, dan asetnya. Tidak ada halaman demo lain di paket.

## Dependensi asli

Vue, Vue Router, Pinia, Bootstrap/Bootstrap Vue Next, AOS, VueUse, CountUp, Iconify,
Vite, Sass, dan TypeScript tetap menggunakan deklarasi/lockfile asli. Jalankan
`npm ci` agar versi mengikuti `package-lock.json`; `node_modules/` tidak dimasukkan
ke ZIP. Internet diperlukan untuk instalasi dependensi.

Font Google dalam `_typography.scss` dan ikon dinamis Iconify tetap memakai
mekanisme asli yang dapat membutuhkan internet. Paket tidak mengubahnya menjadi
aset offline. Tautan `#`, tombol download contoh, formulir tanpa backend, dan
konten bawaan tetap mengikuti source; tidak diperbaiki atau ditambah fiturnya.

## Validasi

Diperiksa pada 10 November 2026:

- `npm ci --no-audit --no-fund`: berhasil, 355 paket terpasang di salinan pengujian.
- `npm run build`: berhasil, mencakup `vue-tsc --build` dan `vite build`.
- Vite memproses 236 modul dan menghasilkan build produksi tanpa error.
- Penelusuran import lokal: tidak ada import lokal yang kehilangan file.
- Perbandingan seluruh file sumber yang disertakan: hanya `src/router/routes.ts`
  berubah; 127 file lainnya identik dengan sumber.
- File `video2.mp4` pada output build dibandingkan dengan sumber dan identik.
- ZIP diperiksa CRC-nya, diekstrak kembali, dan seluruh isi dibandingkan
  byte-per-byte.
- Uji visual/browser **belum berhasil dijalankan**: Chromium lokal tidak dapat
  diluncurkan dalam lingkungan pengujian. Kesamaan rendering pixel, interaksi
  runtime, dan tampilan pada perangkat nyata belum diverifikasi. Kesamaan kode
  tidak dinyatakan sebagai pengganti uji visual.

`ORIGINAL-FILES.sha256` memuat checksum 127 file yang dipertahankan utuh.
Pengujian build dilakukan pada salinan terpisah supaya file hasil generator
build tidak mengubah source yang Anda terima. README asli template juga tetap
tersedia sebagai `README.md`.
