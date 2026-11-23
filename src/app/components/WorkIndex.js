"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "../data/projects";

export default function WorkIndex() {
  const [activeSlug, setActiveSlug] = useState("ledger");
  const activeProject = projects.find((project) => project.slug === activeSlug) ?? projects[0];

  return (
    <div className="work-index-layout">
      <Link className="work-preview" href={`/work/${activeProject.slug}`} aria-label={`View ${activeProject.name} case study`}>
        {activeProject.images.length > 0 ? (
          <Image
            key={activeProject.images[0]}
            src={activeProject.images[0]}
            alt=""
            fill
            sizes="(max-width: 800px) 100vw, 90vw"
          />
        ) : (
          <div className="nuctech-cover" aria-hidden="true">
            <span>{activeProject.organization}</span>
            <strong>Warehouse<br />&amp; spare parts</strong>
            <span>Indonesia / Operations</span>
          </div>
        )}
        <span className="work-preview-caption">
          <span>{activeProject.number} / {activeProject.category}</span>
          <span>{activeProject.name}</span>
        </span>
      </Link>

      <nav className="work-list" aria-label="All projects">
        {projects.map((project) => (
          <Link
            className={`work-row${activeSlug === project.slug ? " is-active" : ""}`}
            href={`/work/${project.slug}`}
            key={project.slug}
            onMouseEnter={() => setActiveSlug(project.slug)}
            onFocus={() => setActiveSlug(project.slug)}
          >
            <span className="work-row-number">{project.number}</span>
            <span className="work-row-name">{project.name}</span>
            <span className="work-row-category">{project.category}</span>
            <span className="work-row-mark" aria-hidden="true">View</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
