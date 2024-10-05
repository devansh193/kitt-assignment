import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface FlightCardProps {
  flightName: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  source: string;
  sourceCode: string;
  destination: string;
  destinationCode: string;
  returnSource: string;
  returnDestination: string;
  returnDeparture: string;
  returnArrival: string;
  stops: number;
  fare: number;
}

export default function Component(
  props: FlightCardProps = {
    flightName: "Emirates",
    departureTime: "09:00",
    arrivalTime: "14:30",
    duration: "5h 30m",
    source: "CDG",
    sourceCode: "CDG",
    returnDeparture: "14:00:00",
    returnArrival: "21:30:00",
    returnSource: "LAX",
    returnDestination: "JFK",
    destination: "DXB",
    destinationCode: "DXB",
    stops: 0,
    fare: 1500,
  }
) {
  const {
    flightName,
    departureTime,
    arrivalTime,
    duration,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    source,
    sourceCode,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    destination,
    destinationCode,
    returnDeparture,
    returnArrival,
    returnSource,
    returnDestination,
    stops,
    fare,
  } = props;

  return (
    <div className="flex justify-center w-full">
      <Card className="overflow-hidden w-full max-w-4xl">
        <CardContent className="p-4">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-3">
              <h2 className="font-semibold text-lg">{flightName}</h2>
              <p className="text-sm text-muted-foreground">
                {departureTime} - {arrivalTime}
              </p>
            </div>
            <div className="col-span-3">
              <p className="font-medium">
                {sourceCode} - {destinationCode}
              </p>
              <p className="text-sm text-muted-foreground">{duration}</p>
            </div>
            <div className="col-span-2 flex items-center space-x-2">
              <Plane className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {stops === 0
                  ? "Direct"
                  : `${stops} stop${stops > 1 ? "s" : ""}`}
              </span>
            </div>
          </div>
        </CardContent>
        <CardContent className="p-4">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-3">
              <h2 className="font-semibold text-lg">{flightName}</h2>
              <p className="text-sm text-muted-foreground">
                {returnDeparture} - {returnArrival}
              </p>
            </div>
            <div className="col-span-3">
              <p className="font-medium">
                {returnSource} - {returnDestination}
              </p>
              <p className="text-sm text-muted-foreground">{duration}</p>
            </div>
            <div className="col-span-2 flex items-center space-x-2">
              <Plane className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {stops === 0
                  ? "Direct"
                  : `${stops} stop${stops > 1 ? "s" : ""}`}
              </span>
            </div>
            <div className="col-span-4 flex items-center">
              <Separator orientation="vertical" className="h-20 ml-10" />
              <div className="flex-grow flex justify-start items-center space-x-4 ml-5">
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">from</p>
                  <p className="text-2xl font-bold">AED {fare}</p>
                  <Button className="mt-2 w-full bg-[#003E39] hover:bg-primary/90 text-primary-foreground">
                    Select
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
