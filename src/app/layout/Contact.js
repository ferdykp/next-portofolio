"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xgawpezg", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Message could not be sent");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section section-shell motion-section" id="contact" aria-labelledby="contact-title">
      <div className="section-rail section-rail--light">
        <p className="section-number">05</p>
        <p className="rail-label">Contact</p>
      </div>
      <div className="contact-content">
        <div className="contact-intro">
          <h2 id="contact-title">A problem<br />worth solving<span>.</span></h2>
          <div className="contact-links" aria-label="Other contact options">
            <a href="mailto:kpferdy@gmail.com">kpferdy@gmail.com</a>
            <a href="https://www.linkedin.com/in/ferdy-kurnia-panggabean-4146631b8/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ferdykp" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="name@example.com" required />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="A little context helps" required />
          </div>
          {status !== "idle" && (
            <p className="contact-status" data-state={status} role="status" aria-live="polite">
              {status === "sending" && "Sending your message…"}
              {status === "success" && "Message sent. Thank you."}
              {status === "error" && "Message could not be sent. Please try again or email me directly."}
            </p>
          )}
          <button className="contact-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending" : "Send a note"}
          </button>
        </form>
      </div>
    </section>
  );
}
