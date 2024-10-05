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
import { mockFlights, mockAirports } from "./data";
import FlightCard from "./flight-data";
import { SelectFlight } from "./select";

export default function FlightSearch() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [isSearching, setIsSearching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [searchResults, setSearchResults] = useState<typeof mockFlights>([]);

  const handleSearch = async () => {
    setIsSearching(true);
    setProgress(0);
    setSearchResults([]);

    for (let i = 0; i <= 100; i += 10) {
      setProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    // Filter flights for both directions
    const filteredFlights = mockFlights.filter(
      (flight) =>
        (flight.sourceCode === source &&
          flight.destinationCode === destination) ||
        (flight.sourceCode === destination && flight.destinationCode === source)
    );
    setSearchResults(filteredFlights);

    setIsSearching(false);
  };

  return (
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
              <SelectFlight
                airport={mockAirports}
                value={source}
                onChange={setSource}
                placeholder="Select departure airport"
              />
            </div>
            <div className="lg:col-span-1 flex justify-center items-center">
              <ArrowLeftRight className="text-gray-400" />
            </div>
            <div className="lg:col-span-2">
              <SelectFlight
                airport={mockAirports}
                value={destination}
                onChange={setDestination}
                placeholder="Select arrival airport"
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
              onClick={handleSearch}
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
              <FlightCard
                key={flight.id}
                flightName={flight.name}
                departureTime={flight.departure}
                arrivalTime={flight.arrival}
                duration={flight.travelTime}
                source={flight.source}
                sourceCode={flight.sourceCode}
                destination={flight.destination}
                destinationCode={flight.destinationCode}
                stops={flight.numberOfStops}
                fare={flight.fare}
                returnSource={flight.returnSource}
                returnDestination={flight.returnDestination}
                returnDeparture={flight.returnDeparture}
                returnArrival={flight.returnArrival}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
