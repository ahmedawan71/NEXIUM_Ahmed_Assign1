import { quotes as allQuotes } from "../../data/quotes";
import MainContent from "./components/MainContent";

export default async function Home({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const topic = resolvedSearchParams.topic?.trim() || "";

  const filtered = topic
    ? allQuotes.filter((q) => q.text.toLowerCase().includes(topic.toLowerCase()))
    : allQuotes.slice(0, 3);

  return <MainContent initialQuotes={filtered.slice(0, 3)} topic={topic} />;
}