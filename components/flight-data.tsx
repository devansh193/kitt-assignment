import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Clock, ArrowRight } from "lucide-react";

interface FlightCardProps {
  flightName: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  source: string;
  destination: string;
  stops: number;
  fare: number;
}

export function FlightCard({
  flightName,
  departureTime,
  arrivalTime,
  duration,
  source,
  destination,
  stops,
  fare,
}: FlightCardProps) {
  return (
    <Card className="w-full">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-4/5 lg:pr-4 lg:border-r border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">
                {flightName}
              </h3>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                {duration}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <div className="text-center sm:text-left mb-2 sm:mb-0">
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {departureTime}
                </p>
                <p className="text-sm text-gray-600">{source}</p>
              </div>
              <div className="flex flex-col items-center my-2 sm:my-0">
                <div className="w-32 h-px bg-gray-300 mb-2 hidden sm:block"></div>
                <Plane className="w-5 h-5 text-blue-500 mb-2" />
                <p className="text-xs text-gray-500">
                  {stops === 0
                    ? "Non-stop"
                    : `${stops} stop${stops > 1 ? "s" : ""}`}
                </p>
              </div>
              <div className="text-center sm:text-right">
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  {arrivalTime}
                </p>
                <p className="text-sm text-gray-600">{destination}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/5 lg:pl-4 flex flex-row lg:flex-col justify-between items-center lg:items-start mt-4 lg:mt-0">
            <div className="text-center lg:text-left">
              <p className="text-xl sm:text-2xl font-bold text-gray-800">
                ${fare}
              </p>
              <p className="text-xs text-gray-500">per passenger</p>
            </div>
            <Button className="w-32 lg:w-full mt-2 lg:mt-4 bg-[#00897b] hover:bg-[#00796b] text-white">
              Select <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
