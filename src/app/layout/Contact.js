export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-2xl mx-auto text-center">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-zinc-400">
          Have an exciting project or integration idea? Drop me a message, and
          let&apos;s talk about building solutions together.
        </p>
      </div>

      <form
        action="https://formspree.io/f/yourformid"
        method="POST"
        className="flex flex-col gap-5 text-left"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-zinc-400 uppercase">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-mono text-zinc-400 uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              required
              className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono text-zinc-400 uppercase">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Tell me briefly about your project goals..."
            rows="5"
            required
            className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg py-3 text-sm font-semibold tracking-wide transition duration-200 mt-2"
        >
          Send Secure Message
        </button>
      </form>
    </section>
  );
}
