import { useState } from "react";
import { Mail, Phone, Calendar, CheckCircle2 } from "lucide-react";
import { CALENDLY, EMAIL, PHONE_DISPLAY, PHONE_TEL } from "../lib/site";
import { sendMessage } from "../lib/contact";

type Status = "idle" | "loading" | "success" | "error";

const field =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/70 focus:border-primary focus:outline-none";

export const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      await sendMessage(new FormData(form));
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error("Contact form failed", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-t border-border bg-card/50 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-5">Tell me about your business.</h2>
          <p className="text-lg text-muted mb-8 max-w-md leading-relaxed">
            Send a message, call, or book a free 30-minute call. I reply within one working day.
          </p>

          <ul className="space-y-4 mb-8">
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 text-lg hover:text-primary">
                <Mail className="w-5 h-5 text-primary" /> {EMAIL}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-3 text-lg hover:text-primary">
                <Phone className="w-5 h-5 text-primary" /> {PHONE_DISPLAY}
              </a>
            </li>
          </ul>

          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Calendar className="w-5 h-5" /> Book a call
          </a>
          <p className="text-sm text-muted mt-4">Based in India (IST), working with clients anywhere. Call me anytime.</p>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
          {status === "success" ? (
            <div className="text-center py-10" role="status">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Thanks, message received.</h3>
              <p className="text-muted mb-6">I'll get back to you within one working day.</p>
              <button onClick={() => setStatus("idle")} className="link text-sm">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className={field} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">What do you need?</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="A bit about your business and what you'd like the website to do"
                  className={field}
                />
              </div>
              <button type="submit" disabled={status === "loading"} className="btn-primary w-full disabled:opacity-60">
                {status === "loading" ? "Sending…" : "Send message"}
              </button>
              <p className="text-xs text-muted">
                Your details are only used to reply to you. No mailing lists.
              </p>
              <div aria-live="polite">
                {status === "error" && (
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Sorry, your message didn't go through. Please try again, or email me at{" "}
                    <a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a>.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
