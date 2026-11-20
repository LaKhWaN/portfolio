const steps = [
  {
    title: "A short call",
    text: "We talk through your business, who your customers are and what the site needs to do. Free, about 20 minutes.",
  },
  {
    title: "A clear plan and quote",
    text: "You get a written plan: pages, features, timeline and a fixed price. Nothing starts until you agree to it.",
  },
  {
    title: "Build with regular previews",
    text: "You see progress on a live preview link as it's built and can give feedback at each step.",
  },
  {
    title: "Launch and handover",
    text: "I put the site live on your domain, check it on real phones, and show you how to make simple updates yourself.",
  },
];

const faqs = [
  {
    q: "Where are you based, and when can we talk?",
    a: "I'm based in India (IST, UTC+5:30) and work remotely with clients anywhere. Call me anytime, and I reply to messages within one working day.",
  },
  {
    q: "How much does a website cost?",
    a: "It depends on how many pages and features you need. After the first call you get a fixed quote in writing, so there are no surprises.",
  },
  {
    q: "Can I update the site myself?",
    a: "Yes. I'll set it up so you can change text, photos and opening hours without touching code, and walk you through it at handover.",
  },
  {
    q: "What do I need to have ready?",
    a: "A rough idea of what you want people to do (call, book, visit) and any logo or photos you already have. If you don't have them, we'll work it out together.",
  },
];

export const Process = () => (
  <section id="process" className="border-y border-border bg-card/50 py-20 md:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <p className="eyebrow mb-3">How it works</p>
      <h2 className="text-3xl md:text-5xl font-semibold mb-12">Four simple steps.</h2>

      <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="font-heading text-5xl font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-xl font-semibold mt-3 mb-2">{s.title}</h3>
            <p className="text-muted leading-relaxed">{s.text}</p>
          </li>
        ))}
      </ol>

      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Questions people ask</h2>
      <div className="max-w-3xl divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="cursor-pointer list-none flex justify-between gap-4 font-semibold text-lg">
              {f.q}
              <span className="text-primary transition-transform group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
