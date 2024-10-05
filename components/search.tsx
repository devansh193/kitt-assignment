// import { cn } from "@/lib/utils";
// import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
// import { Progress } from "@radix-ui/react-progress";
// import { ArrowLeftRight, CalendarIcon, Calendar } from "lucide-react";
// import { format } from "path";
// import { Button } from "react-day-picker";
// import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";
// import { Label } from "./ui/label";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

// export const Search = () => {
//   return (
//     <Card className="">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-black">
//           Flight Search
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="mb-6">
//           <RadioGroup
//             defaultValue="oneWay"
//             onValueChange={setFlightType}
//             className="flex space-x-4"
//           >
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem
//                 value="oneWay"
//                 id="oneWay"
//                 className="border-black text-black"
//               />
//               <Label htmlFor="oneWay" className="text-black">
//                 One-way
//               </Label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem
//                 value="roundTrip"
//                 id="roundTrip"
//                 className="border-black text-black"
//               />
//               <Label htmlFor="roundTrip" className="text-black">
//                 Round-trip
//               </Label>
//             </div>
//           </RadioGroup>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-9 gap-4 mb-6 items-end">
//           <div className="relative md:col-span-4">
//             <Label htmlFor="source" className="text-black mb-2 block">
//               Where from?
//             </Label>
//             <Select onValueChange={setSource}>
//               <SelectTrigger className="w-full bg-white">
//                 <SelectValue placeholder="Select departure airport" />
//               </SelectTrigger>
//               <SelectContent>
//                 {airportSuggestions.map((airport) => (
//                   <SelectItem key={airport.code} value={airport.code}>
//                     {airport.code} - {airport.name} ({airport.city})
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="md:col-span-1 flex justify-center items-center">
//             <ArrowLeftRight className="text-gray-400" />
//           </div>
//           <div className="relative md:col-span-4">
//             <Label htmlFor="destination" className="text-black mb-2 block">
//               Where to?
//             </Label>
//             <Select onValueChange={setDestination}>
//               <SelectTrigger className="w-full bg-white">
//                 <SelectValue placeholder="Select arrival airport" />
//               </SelectTrigger>
//               <SelectContent>
//                 {airportSuggestions.map((airport) => (
//                   <SelectItem key={airport.code} value={airport.code}>
//                     {airport.code} - {airport.name} ({airport.city})
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="md:col-span-4">
//             <Label htmlFor="departureDate" className="text-black mb-2 block">
//               Departure
//             </Label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   id="departureDate"
//                   variant={"outline"}
//                   className={cn(
//                     "w-full justify-start text-left font-normal",
//                     !departureDate && "text-muted-foreground"
//                   )}
//                 >
//                   <CalendarIcon className="mr-2 h-4 w-4" />
//                   {departureDate ? (
//                     format(departureDate, "PPP")
//                   ) : (
//                     <span>Departure Date</span>
//                   )}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0">
//                 <Calendar
//                   mode="single"
//                   selected={departureDate}
//                   onSelect={setDepartureDate}
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>
//           <div className="md:col-span-1" />
//           {flightType === "roundTrip" && (
//             <div className="md:col-span-4">
//               <Label htmlFor="returnDate" className="text-black mb-2 block">
//                 Return
//               </Label>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     id="returnDate"
//                     variant={"outline"}
//                     className={cn(
//                       "w-full justify-start text-left font-normal",
//                       !returnDate && "text-muted-foreground"
//                     )}
//                   >
//                     <CalendarIcon className="mr-2 h-4 w-4" />
//                     {returnDate ? (
//                       format(returnDate, "PPP")
//                     ) : (
//                       <span>Return Date</span>
//                     )}
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0">
//                   <Calendar
//                     mode="single"
//                     selected={returnDate}
//                     onSelect={setReturnDate}
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>
//           )}
//         </div>
//         <div className="flex items-center justify-end">
//           <Button
//             onClick={handleSearch}
//             className="bg-[#00897b] hover:bg-[#00796b] text-white"
//             disabled={
//               isSearching ||
//               !source ||
//               !destination ||
//               !departureDate ||
//               (flightType === "roundTrip" && !returnDate)
//             }
//           >
//             Search Flights
//           </Button>
//         </div>
//         {isSearching && (
//           <div className="mt-4">
//             <Progress value={progress} className="w-full" />
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };
