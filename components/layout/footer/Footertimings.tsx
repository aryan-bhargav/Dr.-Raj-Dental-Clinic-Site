import { TIMINGS } from "./Footerdata";

export default function FooterTimings() {
  return (
    <div>
      <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
        Clinic Hours
      </span>
      <ul className="flex flex-col gap-2 list-none m-0 p-0">
        {TIMINGS.map(({ day, time, closed }) => (
          <li
            key={day}
            className="flex items-start justify-between gap-4 rounded-md px-3 py-2 transition-colors duration-150 hover:bg-zinc-800/60"
          >
            <span className="min-w-[30px] shrink-0 text-[13px] font-semibold text-zinc-200">
              {day}
            </span>
            <span
              className={`text-right text-[12px] leading-snug ${
                closed
                  ? "font-semibold text-rose-400"
                  : "font-light text-zinc-400"
              }`}
            >
              {time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}