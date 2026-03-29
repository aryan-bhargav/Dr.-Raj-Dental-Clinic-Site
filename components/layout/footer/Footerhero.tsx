import { BRAND, CONTACT_INFO, SOCIAL_LINKS } from "./Footerdata";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./Footericons";

const socialConfig = [
  { label: "Facebook", href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, Icon: YoutubeIcon },
];

export default function FooterHero() {
  return (
    <div className="flex flex-col gap-10 border-b border-zinc-800 px-6 pb-10 pt-14 md:flex-row md:items-end md:justify-between md:px-16 md:pb-14 md:pt-20">
      {/* Tagline */}
      <div className="max-w-xl">
        <span className="mb-4 inline-block rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-400">
          Trusted Since 2010
        </span>
        <h2 className="font-['Playfair_Display',serif] text-4xl font-light leading-[1.15] text-white sm:text-5xl md:text-[clamp(40px,4.5vw,60px)]">
          {BRAND.name}
          <br />
          <em className="italic text-teal-400">{BRAND.tagline[1]}</em>
        </h2>
      </div>

      {/* Contact highlight + Socials */}
      <div className="flex flex-col gap-4 md:items-end">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
          We'd love to help you
        </p>
        <a
          href={CONTACT_INFO.emailHref}
          className="font-['Playfair_Display',serif] text-xl font-normal text-teal-400 transition-colors duration-200 hover:text-teal-300 md:text-2xl"
        >
          {CONTACT_INFO.email}
        </a>
        <a
          href={CONTACT_INFO.phoneHref}
          className="text-base font-semibold tracking-wide text-zinc-100 transition-colors duration-200 hover:text-teal-400"
        >
          {CONTACT_INFO.phone}
        </a>

        {/* Social Icons */}
        <div className="mt-1 flex gap-2.5">
          {socialConfig.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500 hover:bg-teal-500 hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}