"use client";

import { useState } from "react";

function ContactIcon({ kind }) {
  const paths = {
    email: <path d="M2.5 5.5h19v13h-19zM3 6l9 7 9-7" />,
    linkedin: <><path d="M4 9v11M4 5.5v.1M9 20v-6.2a4.3 4.3 0 0 1 8.6 0V20M9 10v10" /><circle cx="4" cy="5.5" r="1" /></>,
    github: <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5v-2.2c-2.1.5-2.6-1-2.6-1-.4-1-.9-1.2-.9-1.2-.8-.5.1-.5.1-.5.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-1.7-.2-3.5-.9-3.5-4A3.1 3.1 0 0 1 7.5 11c-.1-.2-.4-1.1.1-2.3 0 0 .8-.2 2.5 1a8.6 8.6 0 0 1 4.6 0c1.7-1.2 2.5-1 2.5-1 .5 1.2.2 2.1.1 2.3a3.1 3.1 0 0 1 .8 2.2c0 3.1-1.8 3.8-3.5 4 .3.3.6.8.6 1.5V21A9.5 9.5 0 0 0 12 2.5Z" />,
  };

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  );
}

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
            <a href="mailto:kpferdy@gmail.com"><ContactIcon kind="email" />kpferdy@gmail.com</a>
            <a href="https://www.linkedin.com/in/ferdy-kurnia-panggabean-4146631b8/" target="_blank" rel="noreferrer"><ContactIcon kind="linkedin" />LinkedIn</a>
            <a href="https://github.com/ferdykp" target="_blank" rel="noreferrer"><ContactIcon kind="github" />GitHub</a>
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
