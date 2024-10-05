"use client";
import FlightSearch from "@/components/flight-search";
import { RecoilRoot } from "recoil";

export default function page() {
  return (
    <RecoilRoot>
      <div>
        <FlightSearch />
      </div>
    </RecoilRoot>
  );
}
