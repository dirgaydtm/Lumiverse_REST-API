# Lumiverse REST API

**Lumiverse REST API** adalah backend sederhana berbasis Node.js + Express yang memungkinkan kamu mengelola rencana nonton film bersama teman! API ini terhubung ke database MySQL dan menyediakan endpoint CRUD yang mudah diintegrasikan ke aplikasi front-end favoritmu.

---

## 🚀 Fitur Utama

- **Tambah Rencana Nonton**  
  Catat film yang ingin kamu tonton, lengkap dengan lokasi, tanggal, teman nonton, harga, dan catatan tambahan.

- **Lihat Daftar Rencana**  
  Dapatkan semua rencana nonton yang belum selesai dan history rencana yang sudah dilakukan.

- **Tandai Selesai & Hapus**  
  Tandai rencana sebagai selesai atau hapus rencana yang tidak jadi kamu jalankan.

---

## 📦 Teknologi yang Digunakan

- **Node.js**  
- **Express.js**  
- **MySQL (mysql2/promise)**  
- **CORS**
- **Tailwind**

---

## 🔥 Dokumentasi Endpoint

| Metode  | Endpoint              | Deskripsi                                   |
|---------|-----------------------|---------------------------------------------|
| POST    | `/api/add`            | Tambah rencana nonton baru                  |
| GET     | `/api/history`        | Ambil daftar rencana yang sudah selesai     |
| GET     | `/api/plans`          | Ambil daftar rencana yang belum selesai     |
| DELETE  | `/api/plan/:id`       | Hapus rencana berdasarkan ID                |
| PUT     | `/api/plan/:id/done`  | Tandai rencana sebagai selesai              |

---

## ⚡ Contoh Request

**Tambah Rencana:**
```json
POST /api/add
{
  "movie_title": "Inside Out 2",
  "place": "Cineplex 21",
  "watch_date": "2025-06-22",
  "watch_with": "Teman SMA",
  "price": 50000,
  "note": "Nonton bareng nostalgia!"
}
```

**Tandai Selesai:**
```http
PUT /api/plan/3/done
```

---

## 🛠️ Instalasi & Menjalankan

1. **Clone repo:**
   ```
   git clone https://github.com/dirgaydtm/Lumiverse_REST-API.git
   cd Lumiverse_REST-API
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Setting database (MySQL):**
   - Buat database `lumiverseapp`
   - Buat tabel `plan` sesuai kebutuhan field pada API

4. **Jalankan server:**
   ```
   node app.js
   ```
   API dapat diakses di: [http://localhost:3000](http://localhost:3000)

---

Selamat membangun aplikasi nonton bareng! 🎬🍿
