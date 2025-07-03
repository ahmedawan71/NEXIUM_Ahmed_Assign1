import React from "react";
import { Quote } from "../../../data/quotes";

interface QuoteListProps {
  quotes: Quote[];
}

export default function QuoteList({ quotes }: QuoteListProps) {
  if (quotes.length === 0) {
    return <p>No quotes found for this topic.</p>;
  }
  return (
    <div className="space-y-4">
      {quotes.map((q) => (
        <blockquote key={q.id} className="p-4 border-l-4 border-blue-600 italic">
          “{q.text}”
        </blockquote>
      ))}
    </div>
  );
}