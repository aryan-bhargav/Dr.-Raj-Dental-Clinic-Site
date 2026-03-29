import { SEO_KEYWORDS } from "./Footerdata";

export default function FooterKeywords() {
  return (
    <div className="border-t border-zinc-800 bg-zinc-900/40 px-6 py-4 md:px-16">
      <p className="text-[11px] leading-[1.9] text-zinc-600">
        {SEO_KEYWORDS.map((kw, idx) => (
          <span key={kw}>
            {kw}
            {idx < SEO_KEYWORDS.length - 1 && (
              <span className="mx-2 text-zinc-700">·</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}