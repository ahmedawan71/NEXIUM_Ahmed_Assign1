"use client";

import { useState, useEffect } from "react";
import { quotes as allQuotes } from "../../../data/quotes";
import QuoteList from "./QuoteList";

export default function FavoriteQuotes() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  const favoriteQuotes = allQuotes.filter((q) => favorites.includes(q.id));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Favorite Quotes</h2>
      <QuoteList quotes={favoriteQuotes} />
    </div>
  );
}