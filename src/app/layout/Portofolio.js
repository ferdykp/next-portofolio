"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: "ledger",
    number: "01",
    name: "Ledger",
    type: "Personal finance platform",
    summary: "A personal finance tracker with a PWA and WhatsApp transaction capture.",
    role: "Full-Stack Software Engineer",
    details:
      "Tracks income, expenses, transfers, and wallet balances. Includes financial dashboards and AI-assisted transaction recording through WhatsApp.",
    stack: ["Vue.js", "Laravel", "MySQL", "PWA", "Groq AI", "Evolution API", "Docker"],
    image: "/assets/portofolio/ledger/2.png",
    alt: "Ledger finance dashboard and mobile interface",
  },
  {
    id: "nuctech-warehouse",
    number: "02",
    name: "Warehouse & Spare Parts",
    type: "Nuctech Company Limited",
    summary: "A multi-branch warehouse and spare part management system.",
    role: "Software Engineer, Full-Stack / DevOps",
    details:
      "Built for multi-branch operations and deployed across 9 cities in Indonesia.",
    stack: ["Laravel", "Tailwind CSS", "JavaScript"],
    image: null,
    alt: "",
  },
  {
    id: "growpos",
    number: "03",
    name: "GrowPOS",
    type: "Point of sale and business operations",
    summary: "A multi-tenant POS for checkout, payments, shift audits, and reporting.",
    role: "Full-Stack SaaS Web Engineer",
    details:
      "Includes QRIS payments, wallet workflows, business reports, and AI-assisted insights.",
    stack: ["Laravel 11", "Tailwind CSS", "Gemini AI", "Midtrans", "MySQL", "Alpine.js"],
    image: "/assets/portofolio/growpos/1.png",
    alt: "GrowPOS point of sale interface",
  },
];

function ProjectVisual({ project, reduceMotion }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={project.id}
        className={`project-visual${project.image ? "" : " project-visual--cover"}`}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={project.image ? undefined : true}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 900px) 75vw, 68vw"
            priority={project.id === "ledger"}
          />
        ) : (
          <>
            <div className="project-cover-top">
              <span>{project.type}</span>
              <span>{project.number} / 03</span>
            </div>
            <h3 className="project-cover-title">Warehouse <span>&amp; spare parts</span></h3>
            <div className="project-cover-bottom">
              <span>Nuctech Company Limited</span>
              <span>Indonesia</span>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export default function Portofolio() {
  const reduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const selectedProject = projects.find((project) => project.id === selectedId);

  const chooseProject = (id) => {
    setSelectedId(id);
    setDetailsOpen(false);
  };

  return (
    <section className="portfolio-shell section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-kicker"><span>01</span> Work</p>
        <div>
          <h2 className="section-title" id="work-title">Selected work</h2>
          <p className="section-lede">A few products and systems built for everyday operations.</p>
        </div>
      </div>

      <div className="work-layout">
        <div className="work-index" role="group" aria-label="Choose a project to preview">
          {projects.map((project) => (
            <button
              className="work-select"
              key={project.id}
              type="button"
              onClick={() => chooseProject(project.id)}
              aria-pressed={selectedId === project.id}
            >
              <span className="work-select-number">{project.number}</span>
              <span className="work-select-title">{project.name}</span>
            </button>
          ))}
        </div>

        <div className="work-stage" aria-live="polite">
          <ProjectVisual project={selectedProject} reduceMotion={reduceMotion} />
          <div className="project-summary">
            <div>
              <p className="project-meta">{selectedProject.type}</p>
              <h3>{selectedProject.name}</h3>
              <p>{selectedProject.summary}</p>
            </div>
            <button
              className="project-open"
              type="button"
              onClick={() => setDetailsOpen((open) => !open)}
              aria-expanded={detailsOpen}
              aria-controls={detailsOpen ? "project-details" : undefined}
            >
              {detailsOpen ? "Close details" : "Project details"}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {detailsOpen && (
              <motion.div
                id="project-details"
                className="project-details"
                initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: "hidden" }}
              >
                <div>
                  <span className="project-detail-label">Role / scope</span>
                  <p>{selectedProject.role}. {selectedProject.details}</p>
                </div>
                <div>
                  <span className="project-detail-label">Tools</span>
                  <div className="project-stack">
                    {selectedProject.stack.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
