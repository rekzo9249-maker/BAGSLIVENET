"use client";

import * as React from "react";
import { Search, X, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StreamFilter } from "@/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StreamFiltersProps {
  filter: StreamFilter;
  onFilterChange: (filter: StreamFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const filters: { value: StreamFilter; label: string }[] = [
  { value: "all", label: "All Streams" },
  { value: "live", label: "Live Now" },
  { value: "ended", label: "Archived" },
];

export function StreamFilters({
  filter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: StreamFiltersProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
      {/* Filter Tabs */}
      <div className="flex items-center p-1 bg-muted/50 backdrop-blur-md rounded-lg border border-border w-full md:w-auto overflow-x-auto no-scrollbar">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 whitespace-nowrap flex-1 md:flex-none text-center",
              filter === f.value 
                ? "text-foreground" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {filter === f.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-primary/10 rounded-md shadow-sm border border-primary/20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{f.label}</span>
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative w-full md:w-72 group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
            <Search className="h-4 w-4" />
        </div>
        <Input
          type="text"
          placeholder="Search creators, tokens..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10 h-10 bg-background border-border focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-all rounded-lg"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
            onClick={() => onSearchChange("")}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>
    </div>
  );
}