import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold tracking-tight text-neutral-900">
        Hao Yang
      </h1>
      <p className="mt-3 text-xl text-neutral-600">
        ML Infrastructure Engineer @ RoboForce AI
      </p>

      <p className="mt-8 text-base leading-7 text-neutral-700">
        I build the infrastructure that lets ML teams ship faster. I studied
        Computer Science at Case Western Reserve and Data Science at USC, and I
        spend my time off the keyboard on a tennis or badminton court.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700"
        >
          View My Work
        </Link>
        <Link
          href="/about"
          className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}
