export default function Contact() {
  return (
    <section id="contact" className="mb-32 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-8">
        Jangan ragu untuk menghubungi saya melalui form di bawah atau sosial
        media.
      </p>
      <form
        action="https://formspree.io/f/yourformid"
        method="POST"
        className="flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Nama Anda"
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Anda"
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          placeholder="Pesan Anda"
          rows="4"
          required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-6 py-3 font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
