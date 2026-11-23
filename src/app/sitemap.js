import { projects } from "./data/projects";

export default function sitemap() {
  const baseUrl = "https://fdevsite.cloud";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: project.lead ? 0.8 : 0.6,
    })),
    // Tambahkan path lain jika ada, contoh:
    // {
    //   url: `${baseUrl}/projects`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
