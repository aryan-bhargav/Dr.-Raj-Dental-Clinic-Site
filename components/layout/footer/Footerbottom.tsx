import { BRAND } from "./Footerdata";

export default function FooterBottom() {
  return (
    <div className="border-t border-zinc-800 px-6 py-5 md:px-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Copyright + Promoted by */}
        <div className="flex flex-col gap-1 sm:items-end">
          <p className="text-[12px] font-light text-zinc-500">{BRAND.copyright}</p>
          
        </div>
      </div>
    </div>
  );
}