// page.tsx
import { quotes as allQuotes } from "../../data/quotes";
import SearchForm from "./components/SearchForm";
import QuoteList from "./components/QuoteList";
import ThemeToggle from "./components/ThemeToggle";

export default async function Home({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const topic = resolvedSearchParams.topic?.trim() || "";

  const filtered = topic
    ? allQuotes.filter((q) => q.text.toLowerCase().includes(topic.toLowerCase()))
    : allQuotes.slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="flex justify-between w-full max-w-2xl mb-12">
        <h1 className="text-3xl font-bold">Quote Generator</h1>
        <ThemeToggle />
      </div>
      <SearchForm topic={topic} />
      <QuoteList quotes={filtered.slice(0, 3)} />
    </main>
  );
}