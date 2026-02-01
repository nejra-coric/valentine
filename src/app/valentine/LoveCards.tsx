"use client";

import { useState } from "react";

type Card = {
  title: string;
  text: string;
  location?: string;
  expandable?: boolean;
};

const CARDS: Card[] = [
  { title: "Prvi susret", text: "Gdje i kako smo se prvi put sreli...", location: "Memory caffe bar Dobrinja 5" },
  { title: "Omiljeni trenutak", text: "Kada ležimo zagrljeni i pričamo o bilo čemu — ne moraju biti ozbiljne teme, niti dubokoumne. Samo ti i ja, naša ljubav: zezamo se, gledamo se i živimo u našem svijetu.", expandable: true },
  { title: "Zašto si poseban", text: "Volim tvoju dobrotu i iskrenost. Ponekad me iritira tvoje pretjerano pametovanje — podsjećaš me na polovinu moje familije koja samo priča i pametuje, a ne radi ništa po tom pitanju. Volim tvoje oči, prelijepе su. Volim tvoje veselje i opuštenost, da će se sve riješiti i da ne treba paničariti. Volim te gledati nasmijanog.", expandable: true },
  { title: "Zajednički san", text: "O čemu zajedno sanjamo — najlakše rečeno: milijuni, auta bijela, vile, luksuzan život. Borimo se da to ispunimo, da gradimo nas i našu budućnost. Iako se često svađamo zbog različitih mišljenja i pogleda, na kraju dana isti cilj imamo.", expandable: true },
  { title: "Mala poruka za tebe", text: "Želim da znaš da niko nikada neće doći na tvoje mjesto." },
  { title: "Valentine 2026", text: "Hvala što si moj Valentine. Volim te. ♥" },
];

export default function LoveCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CARDS.map((card, i) => {
        const isExpandable = card.expandable === true;
        const isExpanded = expandedIndex === i;

        return (
          <div
            key={i}
            onClick={() => isExpandable && setExpandedIndex(isExpanded ? null : i)}
            role={isExpandable ? "button" : undefined}
            tabIndex={isExpandable ? 0 : undefined}
            onKeyDown={(e) => isExpandable && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setExpandedIndex(isExpanded ? null : i))}
            className={`glow-rose flex flex-col overflow-hidden rounded-2xl border border-rose-200/60 bg-white/80 p-5 shadow-lg backdrop-blur-sm transition hover:border-rose-300/80 hover:shadow-xl sm:p-6 ${isExpandable ? "cursor-pointer" : ""}`}
            style={{
              height: isExpanded ? "auto" : "11rem",
              minHeight: isExpanded ? undefined : "11rem",
            }}
          >
            <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-rose-700 shrink-0 sm:text-xl">
              {card.title}
            </h3>
            <div
              className={`mt-2 font-[family-name:var(--font-cormorant)] text-[15px] leading-relaxed text-rose-600/90 sm:mt-3 sm:text-base ${!isExpandable ? "" : !isExpanded ? "line-clamp-3" : ""}`}
              style={isExpandable && !isExpanded ? { minHeight: 0 } : undefined}
            >
              <p>{card.text}</p>
            </div>
            {"location" in card && card.location && (
              <p className="mt-3 flex shrink-0 items-center gap-2 font-[family-name:var(--font-cormorant)] text-sm text-rose-600/90">
                <span className="shrink-0 text-rose-500" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{card.location}</span>
              </p>
            )}
            {isExpandable && (
              <p className="mt-2 shrink-0 font-[family-name:var(--font-cormorant)] text-xs text-rose-500/80">
                {isExpanded ? "Klikni da zatvoriš" : "Klikni da pročitaš više"}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
