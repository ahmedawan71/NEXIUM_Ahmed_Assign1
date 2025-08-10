"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const suggestedTags = [
  "success",
  "dream",
  "hard",
  "limit",
  "great",
  "work",
  "goal",
]; 
export default function SearchForm({ topic }: { topic?: string }) {
  return (
    <>
      <form method="GET" className="flex gap-2 mb-6 w-full max-w-2xl">
        <Input
          type="text"
          name="topic"
          placeholder="Enter a topic..."
          defaultValue={topic}
        />
        <Button type="submit">Search</Button>
      </form>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-sm text-muted-foreground mr-2">Suggested topics:</span>
        {suggestedTags.map((tag) => (
          <Link key={tag} href={`/?topic=${encodeURIComponent(tag)}`}>
            <Badge
              variant={topic?.toLowerCase() === tag.toLowerCase() ? "default" : "outline"}
              className="cursor-pointer"
            >
              {tag}
            </Badge>
          </Link>
        ))}
      </div>
    </>
  );
}