import { ArrowUpRight, ChevronDown } from "lucide-react";
import fuHomeImg from "../assets/work/failunicorn-home.webp";
import fuGameImg from "../assets/work/failunicorn-game.webp";
import fuStoriesImg from "../assets/work/failunicorn-stories.webp";
import fuLeaderboardImg from "../assets/work/failunicorn-leaderboard.webp";
import omfHomeImg from "../assets/work/omf-home.webp";
import omfFlowImg from "../assets/work/omf-flow.webp";
import omfDashImg from "../assets/work/omf-dashboard.webp";
import { FAILUNICORN } from "../lib/site";

interface Shot {
  src: string;
  alt: string;
  w: number;
  h: number;
}

interface Project {
  name: string;
  summary: string;
  fact?: string;
  link?: { href: string; label: string };
  lead: Shot;
  shots: Shot[];
  built: string[];
  why: string;
}

const projects: Project[] = [
  {
    name: "failUnicorn",
    summary:
      "A free startup-simulator game that runs in the browser. I built it on my own, launched it in February 2026 and have kept shipping updates since.",
    fact: "As of November 2026: 8 public releases and 25+ startup story pages generated from real players' runs.",
    link: { href: FAILUNICORN, label: "Try failUnicorn live" },
    lead: { src: fuHomeImg, alt: "failUnicorn home page", w: 1440, h: 900 },
    shots: [
      { src: fuGameImg, alt: "failUnicorn game screen: a 3D bedroom office with live cash, users and burn stats", w: 1276, h: 700 },
      { src: fuStoriesImg, alt: "failUnicorn Stories page listing player startup runs and their outcomes", w: 1440, h: 900 },
      { src: fuLeaderboardImg, alt: "failUnicorn global leaderboard ranking startups by valuation", w: 1440, h: 900 },
    ],
    built: [
      "The whole product, solo: design, game logic, backend, hosting and every release since launch",
      "AI idea scoring with Google Gemini: players type a startup idea and get a 1–10 score that sets the difficulty",
      "A 3D office game where you start alone in a bedroom, then hire, build, sell and move into bigger offices",
      "An economy balanced with simulated players, so careless runs go broke and careful ones grow",
      "Automatic “startup story” pages written from each player's real numbers, plus share cards for LinkedIn and X",
      "Save-by-email with no password, a daily challenge, a live global leaderboard and a privacy page",
    ],
    why: "It shows I can take an idea all the way to something live, make it easy for strangers to use without instructions, and keep improving it after launch.",
  },
  {
    name: "Open Market Flow",
    summary:
      "A self-hosted market analytics tool for Indian F&O traders. It ranks around 200 NSE F&O stocks every minute and puts the whole market on one live board, running on the trader's own computer.",
    lead: { src: omfHomeImg, alt: "Open Market Flow landing page with a preview of the live flow board", w: 1440, h: 900 },
    shots: [
      { src: omfFlowImg, alt: "Open Market Flow live flow board ranking 218 NSE F&O stocks by bullish and bearish strength", w: 1375, h: 701 },
      { src: omfDashImg, alt: "Open Market Flow dashboard showing market breadth and strongest movers", w: 1375, h: 701 },
    ],
    built: [
      "A live board that re-ranks every stock each minute and updates prices every second",
      "Rule-based order-block zones, liquidity sweeps and invalidation levels drawn on each chart",
      "Market breadth, sector flow, open-interest build-up and relative volume in one view",
      "Every session recorded tick by tick, with minute-by-minute replay and backfill of missed days",
      "A private trading journal with P&L, win rate and a monthly calendar",
      "Self-hosted with Docker, read-only broker connection, phone layout and light/dark themes",
    ],
    why: "It turns a lot of fast-changing data into one page people can read at a glance. Your customers need the same thing: the important information first, nothing confusing.",
  },
];

const ProjectCard = ({ p }: { p: Project }) => (
  <article>
    <h2 className="text-3xl md:text-5xl font-semibold mb-4">{p.name}</h2>
    <p className="text-lg text-muted max-w-2xl mb-8">{p.summary}</p>

    <img
      src={p.lead.src}
      alt={p.lead.alt}
      width={p.lead.w}
      height={p.lead.h}
      loading="lazy"
      className="w-full h-auto rounded-2xl border border-border shadow-sm mb-6"
    />

    {p.fact && <p className="text-muted mb-6 max-w-2xl">{p.fact}</p>}

    {p.link && (
      <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
        {p.link.label} <ArrowUpRight className="w-4 h-4" />
      </a>
    )}

    <details className="group mt-6 border-t border-border pt-4">
      <summary className="cursor-pointer list-none inline-flex items-center gap-2 font-medium hover:text-primary">
        More screenshots and what I built
        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-6">
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {p.shots.map((s) => (
            <img key={s.alt} src={s.src} alt={s.alt} width={s.w} height={s.h} loading="lazy" className="w-full h-auto rounded-xl border border-border" />
          ))}
        </div>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h3 className="text-xl font-semibold mb-4">What I built</h3>
            <ul className="space-y-3">
              {p.built.map((b) => (
                <li key={b} className="flex gap-3 text-muted leading-relaxed">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-semibold mb-2">Why it matters for your site</h3>
              <p className="text-muted leading-relaxed">{p.why}</p>
            </div>
          </div>
        </div>
      </div>
    </details>
  </article>
);

export const Work = () => (
  <section id="work" className="border-y border-border bg-card/50 py-20 md:py-28">
    <div className="container mx-auto px-4 sm:px-6 space-y-24">
      <div>
        <p className="eyebrow mb-3">Selected work</p>
        <ProjectCard p={projects[0]} />
      </div>
      <div className="pt-20 border-t border-border">
        <ProjectCard p={projects[1]} />
      </div>
    </div>
  </section>
);
