"use client";

export default function Service() {
  return (
    <section id="service" className="mb-32 max-w-5xl mx-auto text-center py-20">
      <h2 className="text-4xl font-bold mb-6">Services</h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-12">
        Saya menawarkan jasa pembuatan website profesional dan solusi IoT custom
        sesuai kebutuhan Anda.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-gray-600">
            Membangun aplikasi web cepat, responsif, dan SEO-friendly
            menggunakan Next.js dan Laravel.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">IoT Solutions</h3>
          <p className="text-gray-600">
            Prototyping perangkat IoT dengan ESP32, sensor, dan sistem integrasi
            berbasis cloud.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-4">Maintenance & Support</h3>
          <p className="text-gray-600">
            Dukungan berkelanjutan dan optimasi sistem agar aplikasi Anda selalu
            berjalan maksimal.
          </p>
        </div>
      </div>
    </section>
  );
}
