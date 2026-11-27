import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../data/projects";

const siteUrl = "https://fdevsite.cloud";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${siteUrl}/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Ferdy Kurnia Panggabean`,
      description: project.description,
      url: `${siteUrl}/work/${project.slug}`,
      images: [project.images[0] || "/assets/profile_ai.jpg"],
    },
  };
}

function ProjectCover({ project }) {
  return (
    <div className="case-project-cover" role="img" aria-label={`Cover for ${project.name}`}>
      <span>{project.category}</span>
      <strong>{project.name}</strong>
      <span>{project.role}</span>
    </div>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <div className="site-frame case-frame">
      <main className="case-main" id="main">
        <div className="case-topline">
          <Link href="/#work">← Back to work</Link>
          <span>{project.number} / {String(projects.length).padStart(2, "0")}</span>
        </div>

        <header className="case-heading">
          <p className="case-category">{project.category}{project.organization ? ` / ${project.organization}` : ""}</p>
          <h1>{project.name}</h1>
          <p className="case-deck">{project.description}</p>
        </header>

        <div className="case-lead-media reveal-media">
          {project.images.length ? (
            <Image src={project.images[0]} alt={project.alt} fill priority sizes="100vw" />
          ) : (
            <ProjectCover project={project} />
          )}
        </div>

        <section className="case-facts" aria-label="Project details">
          <div>
            <h2>Role</h2>
            <p>{project.role}</p>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{project.scope || project.description}</p>
          </div>
          <div>
            <h2>Tools</h2>
            <ul className="case-stack">
              {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </div>
        </section>

        {project.repository && (
          <p className="case-repository">
            <a href={project.repository} target="_blank" rel="noreferrer">
              View source on GitHub <span aria-hidden="true">↗</span>
            </a>
          </p>
        )}

        {project.images.length > 1 && (
          <section className="case-gallery" aria-label={`${project.name} screenshots`}>
            {project.images.slice(1).map((image, imageIndex) => (
              <figure className={`case-shot case-shot-${imageIndex % 3} reveal-media`} key={image}>
                <Image src={image} alt={`${project.alt}, view ${imageIndex + 2}`} fill sizes="(max-width: 760px) 100vw, 70vw" />
              </figure>
            ))}
          </section>
        )}

        <nav className="case-next" aria-label="Project navigation">
          <span>Next project</span>
          <Link href={`/work/${nextProject.slug}`}>
            <small>{nextProject.number} / {nextProject.category}</small>
            <strong>{nextProject.name}</strong>
            <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </main>
    </div>
  );
}
