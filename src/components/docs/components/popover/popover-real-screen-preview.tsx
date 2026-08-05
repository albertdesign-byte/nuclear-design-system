"use client";

import { Button } from "@/components/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover";
import { InfoIcon } from "lucide-react";

export function PopoverRealScreenPreview() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="sm" />}>
        <InfoIcon />
        Lisinopril 10 mg
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Lisinopril 10 mg</PopoverTitle>
          <PopoverDescription>
            ACE inhibitor for hypertension. Take once daily in the morning with
            or without food. Monitor potassium and renal function.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
