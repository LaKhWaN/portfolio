import { useState } from "react";
import { MoveHorizontal } from "lucide-react";

// Sizes use cqw (percent of the frame's width) so the mock scales as one picture on any screen.
const Before = () => (
  <div
    className="absolute inset-0 bg-[#c9c9c9] p-[3cqw] text-center"
    style={{ fontFamily: '"Comic Sans MS", "Comic Neue", cursive', backgroundImage: "radial-gradient(#b5b5b5 1px, transparent 1px)", backgroundSize: "6px 6px" }}
  >
    <div className="bg-[#0000aa] text-[#ffff00] text-[3cqw] py-[1cqw] font-bold">★ WELCOME TO OUR WEBSITE!!! ★</div>
    <p className="mt-[2cqw] text-[6cqw] font-bold text-[#cc0000] underline">Corner Bakery</p>
    <p className="text-[2.6cqw] text-[#555]">est. 1998 • best viewed in Internet Explorer</p>
    <div className="mx-auto mt-[2cqw] w-[60%] border-[0.6cqw] border-dashed border-[#ff00ff] bg-[#ffffcc] p-[1.5cqw] text-[2.6cqw] text-[#888]">
      🚧 Menu page under construction 🚧
      <br />
      click <span className="text-[#0000ee] underline">HERE</span> for our products
    </div>
    <p className="mt-[2cqw] text-[2.2cqw] leading-tight text-[#999]">
      We are a family bakery serving the community with many breads cakes and more please visit us in shop
      for more information about timings and orders thank you for visiting our website
    </p>
    <div className="mt-[2cqw] flex justify-center gap-[1cqw] text-[2.2cqw]">
      {["Home", "About", "Products", "Gallery", "Links", "Guestbook"].map((l) => (
        <span key={l} className="bg-[#dddddd] border border-[#777] px-[1cqw] text-[#0000ee] underline">
          {l}
        </span>
      ))}
    </div>
    <p className="absolute bottom-[3cqw] inset-x-0 text-[2.2cqw] text-[#777]">
      Visitors: <span className="bg-black text-[#00ff00] font-mono px-[0.8cqw]">000417</span>
    </p>
  </div>
);

const After = () => (
  <div className="absolute inset-0 bg-[#fbf7f0] text-[#1f1a17] font-sans">
    <div className="flex items-center justify-between px-[4cqw] py-[2.5cqw] border-b border-[#eadfd2]">
      <span className="font-heading text-[3.6cqw] font-semibold">Corner Bakery</span>
      <span className="rounded-full bg-[#7a3b1d] px-[2.5cqw] py-[1cqw] text-[2.4cqw] font-medium text-white">Call now</span>
    </div>
    <div className="grid grid-cols-5 gap-[3cqw] px-[4cqw] pt-[5cqw]">
      <div className="col-span-3">
        <p className="text-[2.2cqw] font-semibold uppercase tracking-widest text-[#7a3b1d]">Open today · 7am – 8pm</p>
        <p className="mt-[1.5cqw] font-heading text-[6cqw] font-semibold leading-[1.05]">Fresh bread, baked every morning.</p>
        <p className="mt-[2cqw] text-[2.6cqw] leading-snug text-[#5c524c]">Sourdough, cakes and custom orders, two minutes from the station.</p>
        <div className="mt-[3cqw] flex gap-[1.5cqw] text-[2.4cqw] font-medium">
          <span className="rounded-full bg-[#7a3b1d] px-[2.5cqw] py-[1.2cqw] text-white">Order for pickup</span>
          <span className="rounded-full border border-[#cbbcad] px-[2.5cqw] py-[1.2cqw]">See menu</span>
        </div>
      </div>
      <div className="col-span-2 aspect-[4/5] rounded-[2cqw] bg-gradient-to-br from-[#e8c79a] via-[#d49a5e] to-[#9c5a2c] flex items-center justify-center text-[12cqw]">
        🥐
      </div>
    </div>
    <div className="absolute bottom-0 inset-x-0 grid grid-cols-3 border-t border-[#eadfd2] text-center text-[2.2cqw] text-[#5c524c]">
      {["📍 Directions", "🕖 Opening hours", "📞 Call or WhatsApp"].map((t) => (
        <span key={t} className="py-[2.2cqw]">{t}</span>
      ))}
    </div>
  </div>
);

export const BeforeAfter = () => {
  const [pos, setPos] = useState(62);

  return (
    <figure>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-lg select-none [container-type:inline-size]">
        <Before />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <After />
        </div>

        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" style={{ left: `${pos}%` }}>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f1a17] shadow-md">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>

        {/* Native range input: drag, touch and keyboard support for free. */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Compare the website before and after a redesign"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 flex justify-between gap-4 text-sm text-muted">
        <span>
          <strong className="text-foreground">← A clear site</strong> that gets calls
        </span>
        <span className="text-right">
          The old site <strong className="text-foreground">→</strong>
        </span>
      </figcaption>
      <p className="mt-1 text-center text-xs text-muted">Drag to compare. Example business.</p>
    </figure>
  );
};
