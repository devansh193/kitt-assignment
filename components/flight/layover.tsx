"use client";
import { Stop } from "./flight-card";

export function LayoverInfo({ stop, isLast }: { stop: Stop; isLast: boolean }) {
  return (
    <div className="ml-4 relative">
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 bg-primary rounded-full absolute -left-1.5" />
        <div className="ml-4">
          <p className="text-sm font-medium">{stop.airport}</p>
          <p className="text-xs text-muted-foreground">
            Layover: {stop.duration}
          </p>
        </div>
      </div>
      {!isLast && (
        <div className="w-0.5 h-6 bg-muted absolute left-0 top-3 ml-0.5" />
      )}
    </div>
  );
}
