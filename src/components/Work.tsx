import { ArrowUpRight } from "lucide-react";
import homeImg from "../assets/work/failunicorn-home.webp";
import gameImg from "../assets/work/failunicorn-game.webp";
import storiesImg from "../assets/work/failunicorn-stories.webp";
import leaderboardImg from "../assets/work/failunicorn-leaderboard.webp";
import omfHomeImg from "../assets/work/omf-home.webp";
import omfFlowImg from "../assets/work/omf-flow.webp";
import omfDashImg from "../assets/work/omf-dashboard.webp";
import { FAILUNICORN } from "../lib/site";

const omfBuilt = [
  "A live board that re-ranks every stock each minute and updates prices every second",
  "Rule-based order-block zones, liquidity sweeps and invalidation levels drawn on each chart",
  "Market breadth, sector flow, open-interest build-up and relative volume in one view",
  "Every session recorded tick by tick, with minute-by-minute replay and backfill of missed days",
  "A private trading journal with P&L, win rate and a monthly calendar",
  "Self-hosted with Docker, read-only broker connection, phone layout and light/dark themes",
];

const built = [
  "The whole product, solo: design, game logic, backend, hosting and every release since launch",
  "AI idea scoring with Google Gemini: players type a startup idea and get a 1–10 score that sets the difficulty",
  "A 3D office game where you start alone in a bedroom, then hire, build, sell and move into bigger offices",
  "An economy balanced with simulated players, so careless runs go broke and careful ones grow",
  "Automatic “startup story” pages written from each player's real numbers, plus share cards for LinkedIn and X",
  "Save-by-email with no password, a daily challenge, a live global leaderboard and a privacy page",
];

const shots = [
  { src: gameImg, alt: "failUnicorn game screen: a 3D bedroom office with live cash, users and burn stats", w: 1276, h: 700 },
  { src: storiesImg, alt: "failUnicorn Stories page listing player startup runs and their outcomes", w: 1440, h: 900 },
  { src: leaderboardImg, alt: "failUnicorn global leaderboard ranking startups by valuation", w: 1440, h: 900 },
];

export const Work = () => (
  <section id="work" className="border-y border-border bg-card/50 py-20 md:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <p className="eyebrow mb-3">Selected work</p>
      <h2 className="text-3xl md:text-5xl font-semibold mb-4">failUnicorn</h2>
      <p className="text-lg text-muted max-w-2xl mb-10">
        A free startup-simulator game that runs in the browser. I built it on my own, launched it in
        February 2026 and have kept shipping updates since.
      </p>

      <a
        href={FAILUNICORN}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow mb-6"
      >
        <img src={homeImg} alt="failUnicorn home page" width={1440} height={900} loading="lazy" className="w-full h-auto" />
      </a>

      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        {shots.map((s) => (
          <img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            width={s.w}
            height={s.h}
            loading="lazy"
            className="w-full h-auto rounded-xl border border-border"
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h3 className="text-2xl font-semibold mb-5">What I built</h3>
          <ul className="space-y-3">
            {built.map((b) => (
              <li key={b} className="flex gap-3 text-muted leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-border bg-background p-6">
            <p className="text-sm text-muted mb-2">As of November 2026</p>
            <p className="text-lg leading-relaxed">
              <strong>8 public releases</strong> since the February 2026 launch, and{" "}
              <strong>25+ startup story pages</strong> generated from real players' runs.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6">
            <h3 className="font-semibold mb-2">Why it matters for your site</h3>
            <p className="text-muted leading-relaxed">
              It shows I can take an idea all the way to something live, make it easy for strangers
              to use without instructions, and keep improving it after launch.
            </p>
          </div>
          <a href={FAILUNICORN} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Try failUnicorn live <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="mt-24 pt-20 border-t border-border">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">Open Market Flow</h2>
        <p className="text-lg text-muted max-w-2xl mb-10">
          A self-hosted market analytics tool for Indian F&amp;O traders. It ranks around 200 NSE F&amp;O
          stocks every minute and puts the whole market on one live board, running on the trader's own
          computer with their own broker account.
        </p>

        <img
          src={omfHomeImg}
          alt="Open Market Flow landing page with a preview of the live flow board"
          width={1440}
          height={900}
          loading="lazy"
          className="w-full h-auto rounded-2xl border border-border shadow-sm mb-6"
        />
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          <img
            src={omfFlowImg}
            alt="Open Market Flow live flow board ranking 218 NSE F&amp;O stocks by bullish and bearish strength"
            width={1375}
            height={701}
            loading="lazy"
            className="w-full h-auto rounded-xl border border-border"
          />
          <img
            src={omfDashImg}
            alt="Open Market Flow dashboard showing market breadth and strongest movers"
            width={1375}
            height={701}
            loading="lazy"
            className="w-full h-auto rounded-xl border border-border"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-semibold mb-5">What I built</h3>
            <ul className="space-y-3">
              {omfBuilt.map((b) => (
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
              <p className="text-muted leading-relaxed">
                It turns a lot of fast-changing data into one page people can read at a glance. Your
                customers need the same thing: the important information first, nothing confusing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
