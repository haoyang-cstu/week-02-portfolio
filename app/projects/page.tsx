"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "ML Training Orchestrator",
    description:
      "Internal platform that schedules distributed training jobs across a heterogeneous GPU cluster and exposes a Python SDK for researchers.",
    tags: ["Python", "Distributed Systems", "Kubernetes"],
  },
  {
    id: 2,
    title: "Feature Store Pipeline",
    description:
      "Streaming pipeline that materializes online and offline features from the same definition, with backfills and point-in-time correctness.",
    tags: ["Python", "Distributed Systems"],
  },
  {
    id: 3,
    title: "Portfolio Site",
    description:
      "This site — built with Next.js 16 App Router and Tailwind CSS to practice modern React patterns.",
    tags: ["JavaScript", "CSS", "Next.js"],
  },
  {
    id: 4,
    title: "Match Stats Tracker",
    description:
      "Weekend project to log tennis matches and visualize unforced errors over time. Helps me figure out which strokes to drill.",
    tags: ["JavaScript", "CSS"],
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
const filters = ["All", ...allTags];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const visible =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 animate-fade-in-up">
      <h1 className="text-3xl font-bold mb-2 text-neutral-900">Projects</h1>
      <p className="text-neutral-600 mb-8">
        A few things I&apos;ve built. Filter by tag to narrow the list.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((tag) => {
          const isActive = tag === activeFilter;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveFilter(tag)}
              className={
                isActive
                  ? "rounded-full bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              }
            >
              {tag}
            </button>
          );
        })}
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {visible.map((project) => (
          <li key={project.id} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="mt-8 text-sm text-neutral-500">
          No projects match that filter yet.
        </p>
      )}
    </section>
  );
}
