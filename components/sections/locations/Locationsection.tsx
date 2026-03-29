"use client";

import { useState } from "react";
import LocationChip from "./Locationchip";
import { LOCATIONS, INITIAL_COUNT } from "./Locations";

export default function LocationSection() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? LOCATIONS : LOCATIONS.slice(0, INITIAL_COUNT);

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      {/* Title */}
      <h2 className="text-lg font-semibold text-zinc-800 mb-3">
        Locations
      </h2>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        {visible.map((loc) => (
          <LocationChip key={loc.slug} location={loc} />
        ))}

        {/* Toggle like "More Locations.." */}
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="px-3 py-1 text-sm border border-zinc-300 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition"
          >
            More Locations..
          </button>
        )}

        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="px-3 py-1 text-sm border border-zinc-300 bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition"
          >
            Show Less
          </button>
        )}
      </div>

      {/* SEO hidden list */}
      <ul className="sr-only">
        {LOCATIONS.map((loc) => (
          <li key={loc.slug}>
            <a href={loc.href}>Best Dentist in {loc.name} Near Me</a>
          </li>
        ))}
      </ul>
    </section>
  );
}