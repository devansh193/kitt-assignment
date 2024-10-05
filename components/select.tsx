import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "./ui/select";

export interface AirportDetails {
  id: string;
  name: string;
  code: string;
}

interface SelectFlightProps {
  airport: AirportDetails[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const SelectFlight = ({
  airport,
  value,
  onChange,
  placeholder,
}: SelectFlightProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full bg-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {airport.map((airport) => (
          <SelectItem key={airport.id} value={airport.code}>
            {airport.code} - {airport.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
