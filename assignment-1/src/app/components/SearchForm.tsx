// app/components/SearchForm.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchForm({ topic }: { topic?: string }) {
  return (
    <form method="GET" className="flex gap-2 mb-6">
      <Input
        type="text"
        name="topic"
        placeholder="Enter a topic..."
        defaultValue={topic}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
