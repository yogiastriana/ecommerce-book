// Menggunakan Intersection Observer untuk menambahkan animasi muncul bertahap
const images = document.querySelectorAll('.gallery-book img');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Tambahkan delay agar muncul bertahap
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 150); // delay 150ms untuk setiap gambar
        observer.unobserve(entry.target); // Hentikan pengamatan setelah gambar muncul
      }
    });
  },
  {
    threshold: 0.5, // Muncul ketika 50% gambar terlihat
  }
);

images.forEach((img) => observer.observe(img));
