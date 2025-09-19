"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react"; // ✅ search icon

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onSearch(query);
    }, 500); // wait 500ms after typing stops

    return () => clearTimeout(delayDebounce);
  }, [query, onSearch]);

  return (
    <div className="flex items-center justify-center w-[40%] mx-auto my-6">
      <div className="relative w-full">
        {/* 🔍 Icon inside input */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
