# GameVault - Skill Test Ariverse

## Cara Menjalankan Project Secara Lokal

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Masuk ke Folder Project

```bash
cd skill-test-ariverse
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Jalankan Development Server

```bash
npm run dev
```

### 5. Buka di Browser

```bash
http://localhost:3000
```

### 6. Build Project untuk Production

```bash
npm run build
```

### 7. Menjalankan Production Server

```bash
npm run start
```

---

## Tech Stack

- Next.js 16 (App Router)  
  Dipilih karena memiliki dokumentasi yang lengkap serta mendukung pola pengembangan modern seperti server rendering dan file-based routing. Selain itu, saya sudah cukup familiar dengan Next.js sehingga dapat mengembangkan fitur dengan lebih cepat dan terstruktur.

- TypeScript  
  Digunakan untuk meningkatkan type safety, meminimalkan bug, dan mempermudah maintainability code pada project yang berkembang.

- Tailwind CSS  
  Dipilih karena mempermudah dan mempercepat proses styling serta membantu membuat tampilan yang responsive dan konsisten.

- Zustand  
  Digunakan sebagai state management karena ringan, sederhana, dan mudah digunakan untuk mengelola state seperti wishlist, filter, dan sorting.

- Framer Motion  
  Digunakan untuk menambahkan animasi dan transisi UI agar aplikasi terasa lebih interaktif dan modern.

- next-themes  
  Digunakan untuk implementasi dark mode dan theme switching pada aplikasi.

- Embla Carousel  
  Digunakan untuk membangun carousel pada beberapa section seperti featured games karena ringan, fleksibel, dan mudah dikustomisasi.

- Lucide React  
  Digunakan sebagai icon library karena menyediakan icon modern dengan ukuran bundle yang ringan.

---

## Struktur Folder

```bash
skill-test-ariverse/
├── app/
│   ├── (catalog)/          # Route group utama aplikasi
│   │   ├── games/          # Halaman daftar game
│   │   ├── games/[slug]/   # Halaman detail game
│   │   └── wishlist/       # Halaman daftar wishlist
│
├── components/
│   ├── animations/         # Animation components
│   ├── game/               # Game related components
│   ├── layout/             # Layout components
│   ├── sections/           # Page sections
│   ├── skeleton/           # Loading skeleton components
│   └── ui/                 # Reusable UI components
│
├── data/                   # Static data dan dummy data
├── hooks/                  # Custom React hooks
├── lib/                    # Utility dan helper functions
├── providers/              # Context dan providers
├── public/                 # Static assets
├── store/                  # Zustand stores
├── types/                  # TypeScript types
```

---

## Fitur yang Sudah Selesai

### Halaman Beranda

- Carousel hero section
- Responsive game card grid
- Filter berdasarkan genre game

### Halaman Daftar Game

- Filter berdasarkan genre (multi-select)
- Filter berdasarkan platform
- Filter berdasarkan tahun rilis
- Sorting game:
  - Rating tertinggi
  - Terbaru
  - Harga terendah
  - Alphabetical
- Pagination
- Toggle add/remove wishlist
- Empty state saat game atau hasil pencarian tidak ditemukan

### Halaman Detail Game

- Toggle add/remove wishlist
- Gallery screenshot
- Lightbox preview

### Halaman Wishlist

- Responsive card grid
- Toggle remove wishlist
- Empty state saat wishlist kosong

### Global Features

- Dark/Light mode
- Hover effects
- Multi-filter support
- Custom 404 page
- Responsive design
- Penyimpanan wishlist menggunakan localStorage
- Search game berdasarkan judul melalui navbar
- Loading state menggunakan skeleton loader
- Animasi menggunakan Framer Motion
- Image optimization menggunakan next/image
- Accessibility enhancement menggunakan beberapa ARIA labels

---

## Catatan Trade-off / Kendala

- Implementasi dark/light mode menjadi salah satu tantangan selama pengembangan karena ini merupakan pertama kalinya saya membangun fitur theme switching menggunakan next-themes. Tantangan utamanya adalah memastikan tampilan tema tetap konsisten saat halaman pertama kali dimuat maupun ketika pengguna mengganti tema.

- Pembuatan fitur filter game juga cukup menantang, terutama untuk mengelola beberapa filter sekaligus seperti genre, platform, dan tahun rilis dalam satu state yang saling terhubung.
- Saya juga baru pertama kali menggunakan Zustand sebagai state management. Sebelumnya saya sudah cukup familiar dengan pengelolaan state menggunakan useContext, sehingga membantu saya lebih mudah memahami konsep global state pada Zustand. Tantangan utamanya adalah menyesuaikan cara pengelolaan state untuk fitur wishlist dan filtering, namun setelah digunakan Zustand terasa lebih sederhana dan ringan untuk kebutuhan project ini.
