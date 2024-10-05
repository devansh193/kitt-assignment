import { mockFlightData } from "@/components/data";
import { atom } from "recoil";

export const sourceAtom = atom<string>({
  key: "sourceAtom",
  default: "Where from?",
});

export const destinationAtom = atom<string>({
  key: "destinationAtom",
  default: "Where from?",
});

export const flightAtom = atom<typeof mockFlightData>({
  key: "flightAtom",
  default: [],
});
