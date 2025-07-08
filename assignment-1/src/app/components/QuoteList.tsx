import React from "react";
import { Quote } from "../../../data/quotes";
import FavoriteButton from "./FavoriteButton";

interface QuoteListProps {
  quotes: Quote[];
}

export default function QuoteList({ quotes }: QuoteListProps) {
  if (quotes.length === 0) {
    return <p className="text-muted-foreground">No quotes found for this topic.</p>;
  }
  return (
    <div className="space-y-4">
      {quotes.map((q) => (
        <div
          key={q.id}
          className="p-6 bg-card rounded-lg shadow-md animate-fade-in flex justify-between items-start"
        >
          <blockquote className="text-lg italic text-foreground flex-1">
            “{q.text}”
          </blockquote>
          <FavoriteButton quoteId={q.id} />
        </div>
      ))}
    </div>
  );
}