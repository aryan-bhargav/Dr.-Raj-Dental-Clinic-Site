import FooterHero from "./Footerhero";
import FooterAbout from "./Footerabout";
import FooterLinks from "./Footerlinks";
import FooterTimings from "./Footertimings";
import FooterContact from "./Footercontact";
import FooterKeywords from "./Footerkeywords";
import FooterBottom from "./Footerbottom";

/**
 * Footer component for Dr. Raj Dental Clinic
 *
 * File structure:
 *  footer/
 *  ├── Footer.tsx          ← this file (assembler)
 *  ├── footer.data.ts      ← all content/data
 *  ├── FooterIcons.tsx     ← SVG icons
 *  ├── FooterHero.tsx      ← tagline + contact + socials
 *  ├── FooterAbout.tsx     ← about column
 *  ├── FooterLinks.tsx     ← quick links column
 *  ├── FooterTimings.tsx   ← clinic hours column
 *  ├── FooterContact.tsx   ← contact details column
 *  ├── FooterKeywords.tsx  ← SEO keywords strip
 *  └── FooterBottom.tsx    ← brand + copyright bar
 *
 * Requires in tailwind.config.ts:
 *   fontFamily: { playfair: ['"Playfair Display"', 'serif'] }
 *
 * Add to layout.tsx / _document.tsx:
 *   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 font-['Outfit',sans-serif]">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Watermark */}
      <span
        className="pointer-events-none absolute right-2 bottom-16 select-none whitespace-nowrap font-['Playfair_Display',serif] text-[clamp(72px,14vw,180px)] font-light leading-none tracking-tight text-white/[0.02]"
        aria-hidden="true"
      >
        Dr. Raj
      </span>

      {/* Hero band */}
      <FooterHero />

      {/* Main 4-column grid */}
      <div className="grid grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 md:px-16 lg:grid-cols-4 lg:gap-8 lg:py-14">
        <FooterAbout />
        <FooterLinks />
        <FooterTimings />
        <FooterContact />
      </div>

      {/* SEO keywords */}
      <FooterKeywords />

      {/* Bottom bar */}
      <FooterBottom />
    </footer>
  );
}