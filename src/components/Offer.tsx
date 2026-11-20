const offers = [
  {
    title: "A new website",
    text: "A clear site that explains what you do, shows why people can trust you, and makes it one tap to call, email or book. Built to load fast and read well on phones.",
  },
  {
    title: "Fix or refresh your current site",
    text: "Slow pages, broken contact forms, a layout that falls apart on mobile, or a site you can't update yourself. I sort out what is costing you enquiries.",
  },
  {
    title: "Small automations",
    text: "Booking and enquiry forms that land in your inbox or a spreadsheet, automatic replies and reminders, and simple AI helpers where they actually save you time.",
  },
];

export const Offer = () => (
  <section id="services" className="container mx-auto px-4 sm:px-6 py-20 md:py-28">
    <p className="eyebrow mb-3">What I can do for you</p>
    <h2 className="text-3xl md:text-5xl font-semibold mb-12 max-w-2xl">
      A website that does its job, not just looks nice.
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {offers.map((o) => (
        <div key={o.title} className="rounded-2xl border border-border bg-card p-7">
          <h3 className="text-xl font-semibold mb-3">{o.title}</h3>
          <p className="text-muted leading-relaxed">{o.text}</p>
        </div>
      ))}
    </div>
  </section>
);
