"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StreamGrid } from "@/components/streams/StreamGrid";
import { StreamFilters } from "@/components/streams/StreamFilters";
import { mockStreams, getLiveStreams, getEndedStreams } from "@/data/mockStreams";
import { StreamFilter, Stream } from "@/types";

export default function StreamsPage() {
  const [filter, setFilter] = React.useState<StreamFilter>("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredStreams = React.useMemo(() => {
    let streams: Stream[] = [];

    switch (filter) {
      case "live":
        streams = getLiveStreams();
        break;
      case "ended":
        streams = getEndedStreams();
        break;
      default:
        streams = mockStreams;
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      streams = streams.filter(
        (stream) =>
          stream.title.toLowerCase().includes(query) ||
          stream.token.symbol.toLowerCase().includes(query) ||
          stream.token.name.toLowerCase().includes(query) ||
          stream.creator.displayName?.toLowerCase().includes(query)
      );
    }

    return streams;
  }, [filter, searchQuery]);

  const liveStreams = getLiveStreams();
  const endedStreams = getEndedStreams();
  const liveCount = liveStreams.length;

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="border-b border-white/10 bg-gradient-to-b from-green-950/20 to-transparent">
        <div className="container px-4 py-12 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              {liveCount > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-green-400">{liveCount} Live</span>
                </div>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Streams
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Watch live crypto streams and past broadcasts from verified creators.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container px-4 py-8 mx-auto max-w-7xl">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-8"
        >
          <StreamFilters
            filter={filter}
            onFilterChange={setFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {filter === "all" && !searchQuery ? (
            <motion.div
              key="all-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Live Section */}
              {liveStreams.length > 0 && (
                <section>
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Live Now
                  </h2>
                  <StreamGrid streams={liveStreams} />
                </section>
              )}

              {/* Recent Section */}
              {endedStreams.length > 0 && (
                <section>
                  <h2 className="text-lg font-semibold mb-4 text-muted-foreground">
                    Recent Broadcasts
                  </h2>
                  <StreamGrid streams={endedStreams} />
                </section>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="filtered-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredStreams.length > 0 ? (
                <StreamGrid streams={filteredStreams} />
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No streams found</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}