import Link from "next/link";

const highlights = [
  {
    label: "Now",
    title: "ML Infrastructure",
    detail: "Building the platform layer at RoboForce AI.",
  },
  {
    label: "Education",
    title: "CWRU · USC",
    detail: "BS Computer Science, MS Data Science.",
  },
  {
    label: "Off the keyboard",
    title: "Tennis & Badminton",
    detail: "Plus the occasional co-op gaming session.",
  },
];

export default function HomePage() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 py-20 animate-fade-in-up">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-3xl bg-linear-to-b from-neutral-100 to-transparent blur-2xl"
      />

      <div className="flex flex-col items-start gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Currently @ RoboForce AI
        </span>

        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">
          <span className="bg-linear-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text text-transparent">
            Hao Yang
          </span>
        </h1>

        <p className="text-xl text-neutral-700 sm:text-2xl">
          ML Infrastructure Engineer building the platform layer for fast AI
          iteration.
        </p>

        <p className="max-w-2xl text-base leading-7 text-neutral-600">
          I studied Computer Science at Case Western Reserve and Data Science at
          USC. These days I build the systems that let ML teams ship faster —
          and spend my time off the keyboard on a tennis or badminton court.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700"
          >
            View My Work
            <span
              aria-hidden
              className="transition group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
          <Link
            href="/about"
            className="rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="px-1 text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
          >
            Get in touch →
          </Link>
        </div>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-3">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="rounded-lg border border-neutral-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-sm"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
              {h.label}
            </div>
            <div className="mt-2 text-base font-semibold text-neutral-900">
              {h.title}
            </div>
            <p className="mt-1 text-sm text-neutral-600">{h.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
