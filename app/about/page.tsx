const skills = [
  "Python",
  "Distributed Systems",
  "Machine Learning Infrastructure",
  "Tennis",
  "Badminton",
  "Gaming",
];

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 animate-fade-in-up">
      <div className="mb-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
        <div
          aria-hidden
          className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-neutral-900 via-neutral-700 to-neutral-500 text-2xl font-bold tracking-wider text-white shadow-md ring-1 ring-neutral-200"
        >
          HY
        </div>
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">About Me</h1>
          <p className="mt-1 text-neutral-600">
            ML Infrastructure Engineer @ RoboForce AI
          </p>
        </div>
      </div>

      <p className="text-base leading-7 text-neutral-700">
        I&apos;m Hao Yang, an ML Infrastructure Engineer at RoboForce AI. I
        earned my BS in Computer Science from Case Western Reserve University
        and my MS in Data Science from the University of Southern California.
        These days I spend most of my time building the systems that let ML
        teams iterate quickly, and the rest on a tennis court or in front of a
        good co-op game.
      </p>

      <h2 className="mt-10 mb-4 text-xl font-semibold text-neutral-900">
        Skills &amp; Interests
      </h2>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-neutral-100 px-4 py-2 rounded text-neutral-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
