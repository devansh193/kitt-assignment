"use client";
import { Separator } from "@radix-ui/react-select";
import { ArrowRight, Plane } from "lucide-react";
import { LayoverInfo } from "./layover";

export interface Stop {
  airport: string;
  duration: string;
}

interface FlightDetailsProps {
  departure: string;
  arrival: string;
  departureDate: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  airline: string;
  flightNumber: string;
  stops: Stop[];
}

export function FlightDetails({
  departure,
  arrival,
  departureDate,
  departureTime,
  arrivalTime,
  duration,
  airline,
  flightNumber,
  stops,
}: FlightDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold">{departure}</span>
        <ArrowRight className="w-6 h-6 text-muted-foreground" />
        <span className="text-xl font-semibold">{arrival}</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Departure</p>
          <p className="font-semibold">{departureTime}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Arrival</p>
          <p className="font-semibold">{arrivalTime}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Duration</p>
          <p className="font-semibold">{duration}</p>
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Plane className="w-5 h-5" />
          <span className="font-semibold">{airline}</span>
        </div>
        <span className="text-sm text-muted-foreground">{flightNumber}</span>
      </div>
      <Separator />
      <div>
        <p className="text-sm font-semibold mb-2">Stops: {stops.length}</p>
        {stops.map((stop, index) => (
          <LayoverInfo
            key={index}
            stop={stop}
            isLast={index === stops.length - 1}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">Date: {departureDate}</p>
    </div>
  );
}
