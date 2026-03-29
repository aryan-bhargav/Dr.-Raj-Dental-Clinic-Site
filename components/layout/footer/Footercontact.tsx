import { CONTACT_INFO } from "./Footerdata";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "./Footericons";

const contactRows = [
  {
    Icon: MapPinIcon,
    content: CONTACT_INFO.address,
    href: undefined,
  },
  {
    Icon: PhoneIcon,
    content: CONTACT_INFO.phone,
    href: CONTACT_INFO.phoneHref,
  },
  {
    Icon: MailIcon,
    content: CONTACT_INFO.email,
    href: CONTACT_INFO.emailHref,
  },
  {
    Icon: ClockIcon,
    content: CONTACT_INFO.hours,
    href: undefined,
  },
];

export default function FooterContact() {
  return (
    <div>
      <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Contact Us
      </span>
      <ul className="flex flex-col gap-4 list-none m-0 p-0">
        {contactRows.map(({ Icon, content, href }) => (
          <li key={content} className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-teal-400">
              <Icon />
            </span>
            {href ? (
              <a
                href={href}
                className="text-[13px] font-light leading-relaxed text-zinc-300 no-underline transition-colors duration-200 hover:text-teal-400"
              >
                {content}
              </a>
            ) : (
              <span className="text-[13px] font-light leading-relaxed text-zinc-300">
                {content}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}