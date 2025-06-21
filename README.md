# Lumiverse REST API

**Lumiverse REST API** adalah backend sederhana berbasis Node.js + Express yang memungkinkan kamu mengelola rencana nonton film bersama teman! API ini terhubung ke database MySQL dan menyediakan endpoint CRUD yang mudah diintegrasikan.

---

## 👀 Preview

<span><img src="https://private-user-images.githubusercontent.com/50694844/457590976-635b6804-17f6-4d57-b6c9-bb25864e98c7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA1MjI3NzUsIm5iZiI6MTc1MDUyMjQ3NSwicGF0aCI6Ii81MDY5NDg0NC80NTc1OTA5NzYtNjM1YjY4MDQtMTdmNi00ZDU3LWI2YzktYmIyNTg2NGU5OGM3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjIxVDE2MTQzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTZhODc3Zjc0MjE3YjdlMTMxNWM1YjRkMWMxZGE2MDE3ZDA3ZmYxYzc2M2I4NDZlZmU4ZGU3NDYyZmQ0OWFiMmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.D_jmV4Gv5E3JNqoWXDRO5xT5dAmiYwLorjQEKDHMfv0" height="400" alt="Desktop_Version"/></span>
&nbsp;&nbsp;&nbsp;
<span><img src="https://private-user-images.githubusercontent.com/50694844/457591002-1f312b7b-fe6d-4423-b62e-13ffd4ea8b91.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA1MjI5MTQsIm5iZiI6MTc1MDUyMjYxNCwicGF0aCI6Ii81MDY5NDg0NC80NTc1OTEwMDItMWYzMTJiN2ItZmU2ZC00NDIzLWI2MmUtMTNmZmQ0ZWE4YjkxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjIxVDE2MTY1NFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY2M2I4ZGVhYmMzYjRkOGIxYjNjZjllMmQ5NjM2NzE0YzFhYzkzZTFlYjdlZTYxNmZiMDNjYmNkZjk5ZjEzZjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.io3yP48RWODxBmZW3IdRulqdPpNnZR0YoHnQ-cPkPK4" height="400" alt="Desktop_Version"/></span>

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
   - Buat tabel `plan`

       ```
       CREATE TABLE plan (
        id int(11) NOT NULL AUTO_INCREMENT,
        movie_title varchar(100) NOT NULL,
        place varchar(100) NOT NULL,
        watch_date date NOT NULL,
        watch_with varchar(30) NOT NULL,
        price int(11) NOT NULL,
        note text DEFAULT NULL,
        status tinyint(1) NOT NULL DEFAULT 0,
        PRIMARY KEY (id)
       ```

4. **Jalankan server:**
   ```
   node app.js
   ```
   API dapat diakses di: [http://localhost:3000](http://localhost:3000)

---

Selamat membangun aplikasi nonton bareng! 🎬🍿
