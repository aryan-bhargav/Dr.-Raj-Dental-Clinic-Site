"use client";

import Link from "next/link";
import type { Location } from "./Locations";

interface LocationChipProps {
  location: Location;
  index?: number;
}

export default function LocationChip({ location }: LocationChipProps) {
  return (
    <Link
      href={location.href}
      title={`Best Dentist in ${location.name} Near Me`}
      className="
        !text-white
        inline-flex items-center gap-1.5 rounded-full
        border border-zinc-700/60 bg-zinc-900/70
        px-3.5 py-1.5 text-[13px] font-medium
        transition-all duration-200

        hover:border-teal-500/70 hover:bg-teal-500/10 hover:text-teal-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500
      "
    >
      <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 group-hover:bg-teal-400" />
      {location.name}
    </Link>
  );
}