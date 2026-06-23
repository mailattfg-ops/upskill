"use client";

import * as React from "react";
import { Clock } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface TimePickerProps {
  value: string; // e.g. "14:30"
  onChange: (value: string) => void;
}

export function TimePicker({ value, onChange }: TimePickerProps) {
  const [hour, setHour] = React.useState("09");
  const [minute, setMinute] = React.useState("00");
  const [ampm, setAmpm] = React.useState("AM");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (value) {
      if (value.includes(":")) {
        const [hStr, mStr] = value.split(":");
        const hVal = parseInt(hStr, 10);
        const mVal = mStr ? mStr.substring(0, 2) : "00";
        
        let h12 = hVal % 12;
        if (h12 === 0) h12 = 12;
        const h12Str = String(h12).padStart(2, "0");
        const ampmVal = hVal >= 12 ? "PM" : "AM";
        
        setHour(h12Str);
        setMinute(mVal);
        setAmpm(ampmVal);
      }
    }
  }, [value]);

  const handleTimeChange = (newHour: string, newMinute: string, newAmpm: string) => {
    setHour(newHour);
    setMinute(newMinute);
    setAmpm(newAmpm);

    let hVal = parseInt(newHour, 10);
    if (newAmpm === "PM" && hVal < 12) hVal += 12;
    if (newAmpm === "AM" && hVal === 12) hVal = 0;
    const hStr24 = String(hVal).padStart(2, "0");
    
    onChange(`${hStr24}:${newMinute}`);
  };

  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0"));
  const minutes = Array.from({ length: 12 }, (_, i) => String(i * 5).padStart(2, "0"));

  const formattedDisplayValue = `${hour}:${minute} ${ampm}`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-full h-[44px] lg:h-[36px] px-[14px] lg:px-[12px] py-[10px] lg:py-[4px] bg-white border border-[#d4d4d4] rounded-[8px] text-[15px] lg:text-[16px] leading-[24px] font-sans font-medium text-[#171717] focus:outline-none focus:border-[#4879ff] focus:ring-1 focus:ring-[#4879ff] transition-all cursor-pointer flex items-center justify-between"
        >
          <span>{value ? formattedDisplayValue : "Select time"}</span>
          <Clock className="w-4 h-4 text-gray-400" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-3 w-[260px] bg-white border border-gray-200 shadow-md rounded-[12px] z-50">
        <div className="flex gap-2 justify-center items-center">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mb-1 font-semibold">Hour</span>
            <select
              value={hour}
              onChange={(e) => handleTimeChange(e.target.value, minute, ampm)}
              className="border border-gray-200 rounded-md p-1.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#7f56d9]"
            >
              {hours.map((h) => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>
          <span className="text-gray-400 font-bold self-end mb-2">:</span>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mb-1 font-semibold">Min</span>
            <select
              value={minute}
              onChange={(e) => handleTimeChange(hour, e.target.value, ampm)}
              className="border border-gray-200 rounded-md p-1.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#7f56d9]"
            >
              {minutes.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-center ml-2">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 mb-1 font-semibold">AM/PM</span>
            <div className="flex border border-gray-200 rounded-md overflow-hidden bg-white text-xs">
              <button
                type="button"
                onClick={() => handleTimeChange(hour, minute, "AM")}
                className={cn(
                  "px-2.5 py-1.5 transition-colors cursor-pointer",
                  ampm === "AM" ? "bg-[#7f56d9] text-white" : "text-gray-700 hover:bg-gray-100"
                )}
              >
                AM
              </button>
              <button
                type="button"
                onClick={() => handleTimeChange(hour, minute, "PM")}
                className={cn(
                  "px-2.5 py-1.5 transition-colors cursor-pointer",
                  ampm === "PM" ? "bg-[#7f56d9] text-white" : "text-gray-700 hover:bg-gray-100"
                )}
              >
                PM
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
