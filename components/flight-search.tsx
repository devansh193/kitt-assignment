"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Mock data for suggestions
const citySuggestions = [
  "New York", "London", "Tokyo", "Paris", "Sydney", "Dubai", "Singapore", "Rome", "Barcelona", "Hong Kong"
]

// Mock flight data
const mockFlights = [
  { id: 1, airline: "SkyHigh Airways", departure: "08:00", arrival: "12:00", price: 350 },
  { id: 2, airline: "Ocean Air", departure: "10:30", arrival: "14:30", price: 420 },
  { id: 3, airline: "Mountain Express", departure: "13:45", arrival: "17:45", price: 380 },
]

export default function FlightSearch() {
  const [flightType, setFlightType] = useState("oneWay")
  const [source, setSource] = useState("")
  const [destination, setDestination] = useState("")
  const [departureDate, setDepartureDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [sourceSuggestions, setSourceSuggestions] = useState<string[]>([])
  const [destinationSuggestions, setDestinationSuggestions] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [progress, setProgress] = useState(0)
  const [searchResults, setSearchResults] = useState<typeof mockFlights>([])

  const handleInputChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    suggestionSetter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(value)
    if (value.length > 1) {
      const filtered = citySuggestions.filter(city => 
        city.toLowerCase().includes(value.toLowerCase())
      )
      suggestionSetter(filtered)
    } else {
      suggestionSetter([])
    }
  }

  const handleSuggestionClick = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    suggestionSetter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(value)
    suggestionSetter([])
  }

  const handleSearch = async () => {
    setIsSearching(true)
    setProgress(0)
    setSearchResults([])

    // Simulate API call with progress
    for (let i = 0; i <= 50; i += 10) {
      setProgress(i)
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    setSearchResults(mockFlights)
    setIsSearching(false)
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Flight Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <RadioGroup defaultValue="oneWay" onValueChange={setFlightType} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="oneWay" id="oneWay" />
                <Label htmlFor="oneWay">One-way</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="roundTrip" id="roundTrip" />
                <Label htmlFor="roundTrip">Round-trip</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Input
                placeholder="Where from?"
                value={source}
                onChange={(e) => handleInputChange(e.target.value, setSource, setSourceSuggestions)}
              />
              {sourceSuggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                  {sourceSuggestions.map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(city, setSource, setSourceSuggestions)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="relative">
              <Input
                placeholder="Where to?"
                value={destination}
                onChange={(e) => handleInputChange(e.target.value, setDestination, setDestinationSuggestions)}
              />
              {destinationSuggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg">
                  {destinationSuggestions.map((city, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(city, setDestination, setDestinationSuggestions)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !departureDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {departureDate ? format(departureDate, "PPP") : <span>Departure Date</span>}
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
            {flightType === "roundTrip" && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !returnDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? format(returnDate, "PPP") : <span>Return Date</span>}
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
            )}
          </div>
          </div>
          <div className='flex items-center justify-end'>
          <Button 
            onClick={handleSearch} 
            className='bg-[#003E39]'
            disabled={isSearching || !source || !destination || !departureDate || (flightType === "roundTrip" && !returnDate)}
          >
            Search Flights
          </Button>
          </div>
          {isSearching && (
            <div className="mt-4">
              <Progress value={progress} className="w-full" />
            </div>
          )}
          {searchResults.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Search Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((flight) => (
                  <Card key={flight.id}>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{flight.airline}</h3>
                      <p>Departure: {flight.departure}</p>
                      <p>Arrival: {flight.arrival}</p>
                      <p className="font-bold mt-2">Price: ${flight.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}