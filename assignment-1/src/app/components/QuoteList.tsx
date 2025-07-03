"use client";
import { quotes } from "../../../data/quotes";

export function QuoteList() {
  return (
    <div className="space-y-4">
      {quotes.slice(0, 3).map((q) => (
        <blockquote key={q.id} className="p-4 border-l-4">
          “{q.text}”
        </blockquote>
      ))}
    </div>
  );
}
