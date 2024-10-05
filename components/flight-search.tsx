"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ArrowLeftRight } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { mockFlightData } from "./data";
import { FlightDetails } from "./flight/flight-card";
import { Input } from "./ui/input";
import { useRecoilState, RecoilRoot } from "recoil";
import { destinationAtom, flightAtom, sourceAtom } from "@/recoil/atom";

export default function FlightSearch() {
  const [source, setSource] = useRecoilState(sourceAtom);
  const [destination, setDestination] = useRecoilState(destinationAtom);
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [isSearching, setIsSearching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [searchResults, setSearchResults] = useRecoilState(flightAtom);

  const filterFlights = () => {
    setIsSearching(true);
    setProgress(50); // Mock progress for loading

    const results = mockFlightData.filter(
      (flight) =>
        flight.outbound.departure.toLowerCase() === source.toLowerCase() &&
        flight.outbound.arrival.toLowerCase() === destination.toLowerCase()
    );

    setIsSearching(false);
    setProgress(100); // Complete loading
    setSearchResults(results);
  };

  return (
    <RecoilRoot>
      {" "}
      {/* Ensure that RecoilRoot wraps the entire component */}
      <div className="container mx-auto p-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-black">
              Flight Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 mb-6 items-center">
              <div className="lg:col-span-2">
                <Input
                  type="text"
                  placeholder="Where from?"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </div>
              <div className="lg:col-span-1 flex justify-center items-center">
                <ArrowLeftRight className="text-gray-400" />
              </div>
              <div className="lg:col-span-2">
                <Input
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="lg:col-span-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="departureDate"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !departureDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? (
                        format(departureDate, "PPP")
                      ) : (
                        <span>Departure Date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="lg:col-span-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="returnDate"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? (
                        format(returnDate, "PPP")
                      ) : (
                        <span>Return Date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Button
                onClick={filterFlights}
                className="bg-[#003E39] hover:bg-[#00796b] text-white"
                disabled={
                  isSearching ||
                  !source ||
                  !destination ||
                  !departureDate ||
                  !returnDate
                }
              >
                Search Flights
              </Button>
            </div>
            {isSearching && (
              <div className="mt-4">
                <Progress value={progress} className="w-full" />
              </div>
            )}
          </CardContent>
        </Card>
        {searchResults.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#003E39]">
              Search Results
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {searchResults.map((flight) => (
                <div key={flight.return.flightNumber}>
                  <FlightDetails
                    key={flight.return.flightNumber}
                    departure={flight.outbound.departure}
                    arrival={flight.outbound.arrival}
                    departureDate={flight.outbound.departureDate}
                    departureTime={flight.outbound.departureTime}
                    arrivalTime={flight.outbound.arrivalTime}
                    duration={flight.outbound.duration}
                    airline={flight.outbound.airline}
                    flightNumber={flight.outbound.flightNumber}
                    stops={[]}
                  />
                  <FlightDetails
                    key={flight.return.flightNumber}
                    departure={flight.return.departure}
                    arrival={flight.return.arrival}
                    departureDate={flight.return.departureDate}
                    departureTime={flight.return.departureTime}
                    arrivalTime={flight.return.arrivalTime}
                    duration={flight.return.duration}
                    airline={flight.return.airline}
                    flightNumber={flight.return.flightNumber}
                    stops={[]}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </RecoilRoot>
  );
}
