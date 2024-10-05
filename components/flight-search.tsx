"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon, ArrowLeftRight } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockFlights } from "./data";
import { FlightCard } from "./flight-data";
// Mock data for airport suggestions
const airportSuggestions = [
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
  },
  { code: "LHR", name: "London Heathrow Airport", city: "London" },
  { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris" },
  { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo" },
  { code: "DXB", name: "Dubai International Airport", city: "Dubai" },
  { code: "SIN", name: "Singapore Changi Airport", city: "Singapore" },
  {
    code: "LAX",
    name: "Los Angeles International Airport",
    city: "Los Angeles",
  },
  { code: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul" },
];

export default function FlightSearch() {
  const [flightType, setFlightType] = useState("oneWay");
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

    setSearchResults(mockFlights);
    setIsSearching(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-black">
            Flight Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <RadioGroup
              defaultValue="oneWay"
              onValueChange={setFlightType}
              className="flex space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="oneWay"
                  id="oneWay"
                  className="border-black text-black"
                />
                <Label htmlFor="oneWay" className="text-black">
                  One-way
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="roundTrip"
                  id="roundTrip"
                  className="border-black text-black"
                />
                <Label htmlFor="roundTrip" className="text-black">
                  Round-trip
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-9 gap-4 mb-6 items-end">
            <div className="relative md:col-span-4">
              <Label htmlFor="source" className="text-black mb-2 block">
                Where from?
              </Label>
              <Select onValueChange={setSource}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select departure airport" />
                </SelectTrigger>
                <SelectContent>
                  {airportSuggestions.map((airport) => (
                    <SelectItem key={airport.code} value={airport.code}>
                      {airport.code} - {airport.name} ({airport.city})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-1 flex justify-center items-center">
              <ArrowLeftRight className="text-gray-400" />
            </div>
            <div className="relative md:col-span-4">
              <Label htmlFor="destination" className="text-black mb-2 block">
                Where to?
              </Label>
              <Select onValueChange={setDestination}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="Select arrival airport" />
                </SelectTrigger>
                <SelectContent>
                  {airportSuggestions.map((airport) => (
                    <SelectItem key={airport.code} value={airport.code}>
                      {airport.code} - {airport.name} ({airport.city})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-4">
              <Label htmlFor="departureDate" className="text-black mb-2 block">
                Departure
              </Label>
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
            <div className="md:col-span-1" />
            {flightType === "roundTrip" && (
              <div className="md:col-span-4">
                <Label htmlFor="returnDate" className="text-black mb-2 block">
                  Return
                </Label>
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
            )}
          </div>
          <div className="flex items-center justify-end">
            <Button
              onClick={handleSearch}
              className="bg-[#00897b] hover:bg-[#00796b] text-white"
              disabled={
                isSearching ||
                !source ||
                !destination ||
                !departureDate ||
                (flightType === "roundTrip" && !returnDate)
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
                destination={flight.destination}
                stops={flight.numberOfStops}
                fare={flight.fare}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
