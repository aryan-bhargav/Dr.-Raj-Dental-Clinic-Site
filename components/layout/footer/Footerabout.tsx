import { BRAND } from "./Footerdata";
import { HospitalIcon } from "./Footericons";

export default function FooterAbout() {
  return (
    <div>
      <div className="mb-5 flex items-center gap-2">
        <HospitalIcon className="text-teal-400" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          About Us
        </span>
      </div>
      <p className="text-sm font-light leading-[1.85] text-zinc-300 max-w-xs">
        Mukta Medicare is a premier Faridabad-based family hospital — a trusted and dynamic{" "}
        <span className="font-semibold text-white">Healthcare Center</span> dedicated to
        comprehensive medical care. Driven by compassion, we are one of the most reliable names
        for advanced medical services in the region.
      </p>
      <div className="mt-6 h-px w-12 bg-teal-500/50" />
    </div>
  );
}