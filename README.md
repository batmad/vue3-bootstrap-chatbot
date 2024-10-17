# Vue3 Bootstrap Chatbot

Proyek ini adalah server chatbot yang dibangun menggunakan **Express.js**. Server ini menerima pesan dari pengguna, memprosesnya melalui API eksternal, dan mengembalikan respons dari chatbot.

## Fitur Utama
- Menerima pesan dari pengguna melalui endpoint API.
- Memproses pesan menggunakan API eksternal untuk mendapatkan respons dari chatbot.
- Menyajikan halaman HTML statis sebagai antarmuka pengguna.

## Teknologi yang Digunakan
- **Node.js**: Runtime JavaScript untuk menjalankan server.
- **Express.js**: Framework web untuk Node.js yang digunakan untuk membangun aplikasi server.
- **dotenv**: Untuk memuat variabel lingkungan dari file `.env`.
- **body-parser**: Middleware untuk menguraikan data JSON yang diterima dalam permintaan.

## Persyaratan
Sebelum menjalankan proyek ini, pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

## Instalasi
1. Clone repository ini:
   ```bash
   git clone https://github.com/username/repository-name.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd repository-name
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
   
## Konfigurasi
Buat file .env di root direktori proyek Anda dan tambahkan variabel lingkungan berikut:

```bash
PORT=3000
```

## Menjalankan Aplikasi
Setelah melakukan instalasi dan konfigurasi, jalankan aplikasi dengan perintah berikut:

```bash
npm run start
```

Aplikasi akan berjalan di http://localhost:3000.

## Penggunaan
Kunjungi halaman utama di http://localhost:3000 untuk melihat antarmuka pengguna.
Kirim pesan melalui antarmuka untuk berkomunikasi dengan chatbot.

## Contributing
Kontribusi sangat diterima! Jika Anda memiliki saran atau perbaikan, silakan buka issue atau kirim pull request.
