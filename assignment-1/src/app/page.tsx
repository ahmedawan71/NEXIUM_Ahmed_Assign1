import { quotes as allQuotes } from "../../data/quotes";
import SearchForm from "./components/SearchForm";
import QuoteList from "./components/QuoteList";

/**
 * Server Component: Home page renders on every request using App Router.
 * It reads `topic` from searchParams, filters quotes, and re-renders.
 */
export default function Home({ searchParams }: { searchParams: { topic?: string } }) {
  const topic = searchParams.topic?.trim() || "";

  // Filter quotes server‑side
  const filtered = topic
    ? allQuotes.filter((q) =>
        q.text.toLowerCase().includes(topic.toLowerCase())
      )
    : allQuotes.slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">Quote Generator</h1>
      <SearchForm topic={topic} />
      <QuoteList quotes={filtered.slice(0, 3)} />
    </main>
  );
}
