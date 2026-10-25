import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  GraduationCap,
  Sparkles,
  Award,
  BookOpen,
  Trophy,
  FileText,
} from "lucide-react";
import { profile, projects, skills, process, education, highlights } from "@/data/portfolio";
import type { Highlight } from "@/data/portfolio";
import { Navbar } from "@/components/portfolio/Navbar";
import { Orbit } from "@/components/portfolio/Orbit";
import {
  GithubIcon,
  LinkedinIcon,
  Reveal,
  SectionLabel,
  Spotlight,
  Tilt,
} from "@/components/portfolio/ui";

const TITLE = "Shekhar Kambale — Developer Portfolio";
const DESC =
  "Shekhar Kambale is a CSE student at BMS College of Engineering, Bengaluru, building Flutter apps, web experiences and AI-powered tools.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btnPrimary =
  "group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3";
const btnGhost =
  "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-primary hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3";

function Index() {
  const reduce = useReducedMotion();
  const words = ["I", "build", "digital", "experiences", "that", "solve", "real", "problems"];

  return (
    <div id="top" className="grain relative min-h-screen overflow-x-clip">
      <a
        href="#main"
        className="sr-only z-[80] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Spotlight />
      <Navbar />

      <main id="main" className="relative z-10">
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section aria-labelledby="hero-title" className="relative pt-28 md:pt-36">
          <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
              >
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Shekhar Kambale · Developer
              </motion.p>
              <h1
                id="hero-title"
                className="font-display text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
              >
                {words.map((w, i) => (
                  <motion.span
                    key={i}
                    className={`mr-[0.22em] inline-block ${
                      w === "experiences" || w === "real"
                        ? "font-serif font-normal italic text-gradient pr-1"
                        : ""
                    }`}
                    initial={reduce ? false : { opacity: 0, y: 40, rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.06,
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </h1>
              <Reveal delay={0.5}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  I&apos;m a Computer Science &amp; Engineering student at{" "}
                  <span className="text-foreground">{profile.college}</span> in {profile.city},
                  building mobile applications, web products and tools focused on AI/security.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a href="#work" className={btnPrimary}>
                    Explore my work
                    <ArrowDownRight
                      className="size-4 transition-transform group-hover:rotate-[-45deg]"
                      aria-hidden="true"
                    />
                  </a>
                  <a href="#contact" className={btnGhost}>
                    <Mail className="size-4" aria-hidden="true" /> Contact me
                  </a>
                  {profile.resume && (
                    <a
                      href={profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnGhost}
                      aria-label="View Resume (opens in new tab)"
                    >
                      <FileText className="size-4" aria-hidden="true" /> Resume
                    </a>
                  )}
                  <Socials />
                </div>
              </Reveal>
            </div>
            <Orbit />
          </div>

          <div className="mt-20 overflow-hidden border-y border-border py-5" aria-hidden="true">
            <div className="flex w-max animate-marquee gap-10 font-display text-2xl text-muted-foreground/70">
              {[...Array(2)].flatMap((_, k) =>
                [
                  "Flutter",
                  "React",
                  "Node.js",
                  "MongoDB",
                  "OpenAI API",
                  "Dart",
                  "MERN Stack",
                  "Linux",
                ].map((s) => (
                  <span key={`${k}-${s}`} className="flex items-center gap-10">
                    {s} <Sparkles className="size-4 text-primary" />
                  </span>
                )),
              )}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ─────────────────────────────────────────────────── */}
        <section
          id="work"
          aria-labelledby="work-title"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 py-28 md:px-8"
        >
          <Reveal>
            <SectionLabel n="01">Selected work</SectionLabel>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2
                id="work-title"
                className="max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-6xl"
              >
                Projects I&apos;ve{" "}
                <span className="font-serif font-normal italic text-gradient">built</span>
              </h2>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground hover:text-foreground"
              >
                All repositories <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          {projects.length === 0 ? (
            <p className="mt-12 rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
              Projects are on their way — check GitHub in the meantime.
            </p>
          ) : (
            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {projects.map((p, i) => (
                <li key={p.name}>
                  <Reveal delay={(i % 2) * 0.1}>
                    <Tilt className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50 md:p-9">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(400px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--primary) 16%, transparent), transparent 70%)",
                        }}
                      />
                      <div className="relative flex items-start justify-between">
                        <span className="font-mono text-sm text-primary">{p.index}</span>
                        <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          {p.tagline}
                        </span>
                      </div>
                      <h3 className="relative mt-16 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                        {p.name}
                      </h3>
                      <p className="relative mt-3 leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                      <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
                        <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                          {p.stack.map((s) => (
                            <li
                              key={s}
                              className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} on GitHub (opens in new tab)`}
                          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <GithubIcon /> View on GitHub{" "}
                          <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </Tilt>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────────── */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="scroll-mt-20 border-t border-border"
        >
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-28 md:grid-cols-[1fr_1.4fr] md:px-8">
            <Reveal>
              <SectionLabel n="02">About</SectionLabel>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={profile.photo}
                  alt="Shekhar Kambale — profile photo"
                  className="size-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="md:pt-12">
              <h2
                id="about-title"
                className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
              >
                Curious about how things work — and how to make them{" "}
                <span className="font-serif font-normal italic text-gradient">work better.</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                I&apos;m Shekhar Kambale, a Computer Science and Engineering student at BMS College
                of Engineering in Bengaluru, India. I enjoy turning ideas into useful digital
                experiences — from mobile applications and web platforms to tools focused on AI and
                online safety.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Through projects like FitTracker, ScamShield, InternLoom JobSwipe and College Event
                Management, I explore practical problem-solving, product thinking and user-focused
                development. I&apos;m continuously learning and improving by building and refining
                real projects.
              </p>
              <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border p-5">
                  <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    <GraduationCap className="size-4 text-primary" aria-hidden="true" /> Studying
                  </dt>
                  <dd className="mt-2">B.E. CSE, {profile.college}</dd>
                </div>
                <div className="rounded-xl border border-border p-5">
                  <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    <MapPin className="size-4 text-primary" aria-hidden="true" /> Based in
                  </dt>
                  <dd className="mt-2">{profile.city}, India</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── EDUCATION ────────────────────────────────────────────────── */}
        <section
          id="education"
          aria-labelledby="education-title"
          className="scroll-mt-20 border-t border-border"
        >
          <div className="mx-auto max-w-6xl px-5 py-28 md:px-8">
            <Reveal>
              <SectionLabel n="03">Education</SectionLabel>
              <h2
                id="education-title"
                className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
              >
                Where I <span className="font-serif font-normal italic text-gradient">learned</span>{" "}
                to build
              </h2>
            </Reveal>
            <ol className="mt-14 space-y-6" aria-label="Education history">
              {education.map((entry, i) => (
                <li key={entry.institution}>
                  <Reveal delay={i * 0.1}>
                    <div className="group relative rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40 md:p-9">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-accent shadow-glow">
                          <GraduationCap
                            className="size-6 text-primary-foreground"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h3 className="font-display text-xl font-semibold">{entry.degree}</h3>
                            <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                              {entry.period}
                            </span>
                          </div>
                          <p className="mt-1 font-medium text-foreground/80">{entry.institution}</p>
                          <p className="mt-0.5 flex items-center gap-1.5 font-mono text-sm text-muted-foreground">
                            <MapPin className="size-3 text-primary" aria-hidden="true" />
                            {entry.location}
                          </p>
                          {entry.showMarks && entry.detail && (
                            <p className="mt-2 font-mono text-sm text-primary">{entry.detail}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── SKILLS ───────────────────────────────────────────────────── */}
        <section
          id="skills"
          aria-labelledby="skills-title"
          className="mx-auto max-w-6xl scroll-mt-20 px-5 py-28 md:px-8"
        >
          <Reveal>
            <SectionLabel n="04">Toolkit</SectionLabel>
            <h2
              id="skills-title"
              className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
            >
              What I <span className="font-serif font-normal italic text-gradient">work with</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((g, gi) => (
              <div key={g.group} className="bg-background p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {g.group}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {g.items.map((s, i) => (
                    <motion.li
                      key={s}
                      initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: gi * 0.06 + i * 0.04,
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      whileHover={reduce ? {} : { y: -3 }}
                      className="cursor-default rounded-full border border-border bg-card px-3.5 py-1.5 text-sm transition-colors hover:border-violet hover:text-foreground"
                    >
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── HIGHLIGHTS ───────────────────────────────────────────────── */}
        <section
          id="highlights"
          aria-labelledby="highlights-title"
          className="scroll-mt-20 border-t border-border"
        >
          <div className="mx-auto max-w-6xl px-5 py-28 md:px-8">
            <Reveal>
              <SectionLabel n="05">Highlights</SectionLabel>
              <h2
                id="highlights-title"
                className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
              >
                Hackathons, certs &amp;{" "}
                <span className="font-serif font-normal italic text-gradient">activities</span>
              </h2>
            </Reveal>
            <HighlightsGrid />
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────────────────── */}
        <section
          id="process"
          aria-labelledby="process-title"
          className="scroll-mt-20 border-t border-border"
        >
          <div className="mx-auto max-w-6xl px-5 py-28 md:px-8">
            <Reveal>
              <SectionLabel n="06">Process</SectionLabel>
              <h2
                id="process-title"
                className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
              >
                How I <span className="font-serif font-normal italic text-gradient">approach</span>{" "}
                a build
              </h2>
            </Reveal>
            <ol className="mt-14 grid gap-6 md:grid-cols-4">
              {process.map((s, i) => (
                <li key={s.step}>
                  <Reveal delay={i * 0.08} className="h-full border-t border-foreground/20 pt-6">
                    <span className="font-serif text-5xl italic text-gradient">0{i + 1}</span>
                    <h3 className="mt-4 font-display text-xl font-semibold">{s.step}</h3>
                    <p className="mt-2 text-muted-foreground">{s.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────────── */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="relative scroll-mt-20 overflow-hidden border-t border-border"
        >
          <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-5 py-32 text-center md:px-8">
            <Reveal>
              <SectionLabel n="07">
                <span className="mx-auto">Contact</span>
              </SectionLabel>
              <h2
                id="contact-title"
                className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
              >
                Let&apos;s build{" "}
                <span className="font-serif font-normal italic text-gradient">something</span>{" "}
                together.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
                Open to internships, collaborations and interesting problems. My inbox is always
                open.
              </p>
              <a href={`mailto:${profile.email}`} className={`${btnPrimary} mt-10 text-base`}>
                <Mail className="size-4" aria-hidden="true" /> {profile.email}
              </a>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in new tab)"
                  className={btnGhost}
                >
                  <GithubIcon className="size-4" /> GitHub
                </a>
                {profile.linkedin && (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile (opens in new tab)"
                    className={btnGhost}
                  >
                    <LinkedinIcon className="size-4" /> LinkedIn
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-muted-foreground sm:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            )}
            <a href="#top" className="hover:text-foreground">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function Socials() {
  const cls =
    "inline-flex size-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground";
  return (
    <div className="flex gap-2">
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub (opens in new tab)"
        className={cls}
      >
        <GithubIcon className="size-5" />
      </a>
      {profile.linkedin && (
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in new tab)"
          className={cls}
        >
          <LinkedinIcon className="size-5" />
        </a>
      )}
    </div>
  );
}

const categoryIcon: Record<Highlight["category"], React.ReactNode> = {
  Hackathon: <Trophy className="size-4 text-primary" aria-hidden="true" />,
  Activity: <BookOpen className="size-4 text-primary" aria-hidden="true" />,
  Certification: <Award className="size-4 text-primary" aria-hidden="true" />,
};

function HighlightsGrid() {
  const categories: Highlight["category"][] = ["Hackathon", "Activity", "Certification"];
  return (
    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {categories.map((cat) => {
        const items = highlights.filter((h) => h.category === cat);
        const isCert = cat === "Certification";

        return (
          <Reveal key={cat} delay={categories.indexOf(cat) * 0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-7">
              {/* Fixed card heading */}
              <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-4">
                <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {categoryIcon[cat]} {cat}
                  {isCert ? "s" : ""}
                </h3>
                <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {items.length} {isCert ? "certs" : "items"}
                </span>
              </div>

              {/* Content list — vertically scrollable with fixed card heading, user-controlled scroll */}
              <div
                tabIndex={isCert ? 0 : undefined}
                aria-label={isCert ? "Certificates list (scrollable)" : undefined}
                className={
                  isCert
                    ? "max-h-[360px] sm:max-h-[400px] md:max-h-[440px] lg:max-h-[480px] overflow-y-auto overscroll-contain pr-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/40 [scrollbar-width:thin] [scrollbar-color:oklch(1_0_0_/_20%)_transparent]"
                    : "flex-1"
                }
              >
                <ul className={isCert ? "space-y-4 pb-8 pt-1" : "space-y-4"}>
                  {items.map((h) => (
                    <li
                      key={h.title}
                      className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                    >
                      <p className="font-medium leading-snug">{h.title}</p>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                        {h.issuer} · {h.date}
                      </p>
                      {h.note && (
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {h.note}
                        </p>
                      )}
                      {h.repo && (
                        <a
                          href={h.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-colors hover:text-foreground hover:underline"
                        >
                          <GithubIcon className="size-3" /> View project on GitHub{" "}
                          <ArrowUpRight className="size-3" aria-hidden="true" />
                        </a>
                      )}
                      {h.credentialUrl && (
                        <a
                          href={h.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-colors hover:text-foreground hover:underline"
                        >
                          <Award className="size-3" /> View credential{" "}
                          <ArrowUpRight className="size-3" aria-hidden="true" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
