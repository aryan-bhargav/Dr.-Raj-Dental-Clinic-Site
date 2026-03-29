import { BRAND } from "./Footerdata";
import { ToothIcon } from "./Footericons";

export default function FooterAbout() {
  return (
    <div>
      <div className="mb-5 flex items-center gap-2">
        <ToothIcon className="text-teal-400" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          About Us
        </span>
      </div>
      <p className="text-sm font-light leading-[1.85] text-zinc-300 max-w-xs">
        Dr. S. Raj is a Faridabad-based celebrity smile designer — a young and dynamic{" "}
        <span className="font-semibold text-white">Smile Specialist</span> with an excellent flair
        for aesthetic dentistry. Driven by conviction, he is one of the few names to reckon with
        in the field of aesthetic dentistry across Delhi, India.
      </p>
      <div className="mt-6 h-px w-12 bg-teal-500/50" />
    </div>
  );
}