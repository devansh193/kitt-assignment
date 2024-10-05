import { AirportDetails } from "./select";

export const mockFlightData = [
  {
    outbound: {
      departure: "New York (JFK)",
      arrival: "London (LHR)",
      departureDate: "2023-07-15",
      departureTime: "08:00 AM",
      arrivalTime: "08:00 PM",
      duration: "12h 00m",
      airline: "British Airways",
      flightNumber: "BA178",
      stops: [
        {
          airport: "Boston (BOS)",
          duration: "2h 30m",
        },
      ],
    },
    return: {
      departure: "London (LHR)",
      arrival: "New York (JFK)",
      departureDate: "2023-07-22",
      departureTime: "11:00 AM",
      arrivalTime: "01:45 PM",
      duration: "14h 45m",
      airline: "American Airlines",
      flightNumber: "AA107",
      stops: [
        {
          airport: "Dublin (DUB)",
          duration: "3h 15m",
        },
        {
          airport: "Boston (BOS)",
          duration: "1h 45m",
        },
      ],
    },
  },
  {
    outbound: {
      departure: "San Francisco (SFO)",
      arrival: "Tokyo (HND)",
      departureDate: "2023-08-10",
      departureTime: "10:00 AM",
      arrivalTime: "01:30 PM",
      duration: "11h 30m",
      airline: "Japan Airlines",
      flightNumber: "JL001",
      stops: [
        {
          airport: "Honolulu (HNL)",
          duration: "1h 50m",
        },
      ],
    },
    return: {
      departure: "Tokyo (HND)",
      arrival: "San Francisco (SFO)",
      departureDate: "2023-08-17",
      departureTime: "02:30 PM",
      arrivalTime: "07:00 AM",
      duration: "10h 30m",
      airline: "United Airlines",
      flightNumber: "UA837",
      stops: [],
    },
  },
  {
    outbound: {
      departure: "Los Angeles (LAX)",
      arrival: "Paris (CDG)",
      departureDate: "2023-09-05",
      departureTime: "05:00 PM",
      arrivalTime: "11:30 AM",
      duration: "11h 30m",
      airline: "Air France",
      flightNumber: "AF065",
      stops: [
        {
          airport: "Toronto (YYZ)",
          duration: "2h 15m",
        },
      ],
    },
    return: {
      departure: "Paris (CDG)",
      arrival: "Los Angeles (LAX)",
      departureDate: "2023-09-12",
      departureTime: "03:30 PM",
      arrivalTime: "06:00 PM",
      duration: "12h 30m",
      airline: "Delta Airlines",
      flightNumber: "DL157",
      stops: [
        {
          airport: "Amsterdam (AMS)",
          duration: "1h 30m",
        },
      ],
    },
  },
  {
    outbound: {
      departure: "Chicago (ORD)",
      arrival: "Frankfurt (FRA)",
      departureDate: "2023-10-01",
      departureTime: "09:00 PM",
      arrivalTime: "11:30 AM",
      duration: "8h 30m",
      airline: "Lufthansa",
      flightNumber: "LH431",
      stops: [],
    },
    return: {
      departure: "Frankfurt (FRA)",
      arrival: "Chicago (ORD)",
      departureDate: "2023-10-08",
      departureTime: "12:30 PM",
      arrivalTime: "02:45 PM",
      duration: "9h 15m",
      airline: "Lufthansa",
      flightNumber: "LH430",
      stops: [],
    },
  },
  {
    outbound: {
      departure: "Miami (MIA)",
      arrival: "Buenos Aires (EZE)",
      departureDate: "2023-11-15",
      departureTime: "07:00 PM",
      arrivalTime: "05:30 AM",
      duration: "9h 30m",
      airline: "LATAM Airlines",
      flightNumber: "LA8190",
      stops: [],
    },
    return: {
      departure: "Buenos Aires (EZE)",
      arrival: "Miami (MIA)",
      departureDate: "2023-11-22",
      departureTime: "09:00 PM",
      arrivalTime: "05:30 AM",
      duration: "8h 30m",
      airline: "American Airlines",
      flightNumber: "AA900",
      stops: [],
    },
  },
];

export const mockAirports: AirportDetails[] = [
  {
    id: "1",
    name: "John F. Kennedy International Airport",
    code: "JFK",
  },
  {
    id: "2",
    name: "Heathrow Airport",
    code: "LHR",
  },
  {
    id: "3",
    name: "Los Angeles International Airport",
    code: "LAX",
  },
  {
    id: "4",
    name: "Dubai International Airport",
    code: "DXB",
  },
  {
    id: "5",
    name: "Changi Airport",
    code: "SIN",
  },
  {
    id: "6",
    name: "Indira Gandhi International Airport",
    code: "DEL",
  },
  {
    id: "7",
    name: "Charles de Gaulle Airport",
    code: "CDG",
  },
  {
    id: "8",
    name: "Sydney Kingsford Smith Airport",
    code: "SYD",
  },
  {
    id: "9",
    name: "Toronto Pearson International Airport",
    code: "YYZ",
  },
  {
    id: "10",
    name: "San Francisco International Airport",
    code: "SFO",
  },
];
