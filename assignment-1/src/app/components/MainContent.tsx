"use client";

import { useState } from "react";
import SearchForm from "./SearchForm";
import QuoteList from "./QuoteList";
import FavoriteQuotes from "./FavoriteQuotes";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Quote } from "../../../data/quotes";

interface MainContentProps {
  initialQuotes: Quote[];
  topic: string;
}

export default function MainContent({ initialQuotes, topic }: MainContentProps) {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex justify-between w-full max-w-2xl mb-6">
        <h1 className="text-3xl font-bold">Quote Generator</h1>
        <div className="space-x-2">
          <Button onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? "Show Search" : "Show Favorites"}
          </Button>
          <ThemeToggle />
        </div>
      </div>
      {!showFavorites && <SearchForm topic={topic} />}
      {showFavorites ? <FavoriteQuotes /> : <QuoteList quotes={initialQuotes} />}
    </main>
  );
}