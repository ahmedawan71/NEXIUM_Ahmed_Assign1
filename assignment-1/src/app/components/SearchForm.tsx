import React from "react";

interface SearchFormProps {
  topic: string;
}

export default function SearchForm({ topic }: SearchFormProps) {
  return (
    <form method="GET" className="flex items-center mb-6">
      <input
        type="text"
        name="topic"
        defaultValue={topic}
        placeholder="Enter a topic"
        className="px-4 py-2 mr-1 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}