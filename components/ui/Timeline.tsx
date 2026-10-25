import type { TimelineItem } from "@/lib/types";

/** Frise chronologique : la ligne se trace au défilement, l'événement à venir pulse. */
export function Timeline({ items, compact = false }: { items: TimelineItem[]; compact?: boolean }) {
  return (
    <div className="reveal relative">
      <span aria-hidden="true" className="timeline-line absolute bottom-2 left-0 top-2 w-px bg-line-strong" />
      <ol>
        {items.map((item, i) => (
          <li
            key={`${item.period}-${item.title}`}
            className="reveal relative pb-8 pl-7 last:pb-0"
            style={{ ["--delay" as string]: `${200 + i * 120}ms` }}
          >
            <span
              aria-hidden="true"
              className={`absolute -left-[4px] top-2 size-[9px] rounded-full border-[1.5px] border-electric ${
                item.upcoming ? "ping bg-paper" : "bg-electric"
              }`}
            />
            <p className="font-mono text-[13px] text-electric-ink">
              {item.period}
              {item.upcoming && <span className="ml-2 text-ink-3">· à venir</span>}
            </p>
            <h3 className="mt-1 font-semibold">{item.title}</h3>
            <p className="text-[15px] text-ink-3">{item.place}</p>
            {!compact && item.text && <p className="mt-1.5 text-[15px] text-ink-2">{item.text}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
