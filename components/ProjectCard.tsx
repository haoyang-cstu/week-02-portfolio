type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-neutral-200 p-6 hover:border-neutral-300">
      <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-neutral-700">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
