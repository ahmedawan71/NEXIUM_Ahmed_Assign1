// assignment-1/app/page.tsx
import { QuoteList } from "./components/QuoteList";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Quote Generator</h1>
      <QuoteList />
    </main>
  );
}
