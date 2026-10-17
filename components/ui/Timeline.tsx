import type { TimelineItem } from "@/lib/types";

export function Timeline({ items, compact = false }: { items: TimelineItem[]; compact?: boolean }) {
  return (
    <ol className="border-l border-line-strong">
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`} className="relative pb-8 pl-7 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute -left-[5px] top-2 size-[9px] rounded-full border-[1.5px] border-electric ${
              item.upcoming ? "bg-paper" : "bg-electric"
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
  );
}
