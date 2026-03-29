import Link from "next/link";
import { QUICK_LINKS } from "./Footerdata";

export default function FooterLinks() {
  return (
    <div>
      <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Quick Links
      </span>
      <ul className="flex flex-col gap-1 list-none m-0 p-0">
        {QUICK_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-3 py-1.5 text-sm font-normal text-zinc-300 no-underline transition-all duration-200 hover:text-teal-400"
            >
              <span className="h-px w-3 bg-zinc-600 transition-all duration-300 group-hover:w-5 group-hover:bg-teal-400" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}