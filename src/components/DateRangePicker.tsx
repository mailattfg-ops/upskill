"use client";

import { useState } from "react";

interface DateRangePickerProps {
  initialStartDate: Date | null; // Keep prop name to minimize changes in consumer
  initialEndDate: Date | null;   // Keep prop name to minimize changes in consumer
  onApply: (start: Date | null, end: Date | null) => void;
  onCancel: () => void;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sat", "Su"];

export default function DateRangePicker({
  initialStartDate,
  onApply,
  onCancel,
}: DateRangePickerProps) {
  // Set default month to January 2027 to match the spec
  const [currentYear, setCurrentYear] = useState(2027);
  const [currentMonth, setCurrentMonth] = useState(0); // January (0-indexed)

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialStartDate || new Date(2027, 0, 6)
  );

  // Formatting utility: "Jan 6, 2027"
  const formatDateString = (date: Date | null) => {
    if (!date) return "";
    const monthsShort = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthsShort[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  // Navigations
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Generate calendar days
  const generateDays = () => {
    const days: { date: Date; isCurrentMonth: boolean }[] = [];

    // First day of current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    // Day of the week (0 = Sunday, 1 = Monday, etc.)
    let startDayOfWeek = firstDayOfMonth.getDay();
    // Convert to Monday start: 0 = Mon, 1 = Tue, ..., 6 = Sun
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    // Days in previous month
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const daysInPrevMonth = new Date(
      prevMonthYear,
      prevMonth + 1,
      0
    ).getDate();

    // Days in current month
    const daysInCurrentMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();

    // Add trailing days from previous month
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(prevMonthYear, prevMonth, daysInPrevMonth - i),
        isCurrentMonth: false,
      });
    }

    // Add days of current month
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      days.push({
        date: new Date(currentYear, currentMonth, i),
        isCurrentMonth: true,
      });
    }

    // Add leading days from next month to fill 42 days grid (6 weeks)
    const totalDays = 42;
    const remainingDays = totalDays - days.length;
    const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;

    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(nextMonthYear, nextMonth, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
  };

  const isSameDate = (d1: Date, d2: Date) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  // Check if a date has an event dot (matching the mockup positions for Jan 2027)
  const hasEventDot = (date: Date, isCurrentMonth: boolean) => {
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();

    // Matches Jan 2027 / Jan 2023 mockup calendar dots:
    // 26th of prev month (December 2026) has dot
    if (!isCurrentMonth && d === 26 && m === 11 && y === 2026) {
      return { active: false }; // neutral dot (#a3a3a3)
    }
    // 11th of January 2027 has active purple dot (#7f56d9)
    if (isCurrentMonth && d === 11 && m === 0 && y === 2027) {
      return { active: true };
    }
    // 24th of January 2027 has active purple dot (#7f56d9)
    if (isCurrentMonth && d === 24 && m === 0 && y === 2027) {
      return { active: true };
    }

    return null;
  };

  return (
    <div className="w-[212px] h-auto bg-white rounded-[12px] border border-[#f5f5f5] shadow-[0_8px_8px_-4px_rgba(0,0,0,0.03),0_20px_24px_-4px_rgba(0,0,0,0.08)] flex flex-col justify-between overflow-hidden select-none font-sans z-50">
      
      {/* Calendar Content Area */}
      <div className="p-2 pb-0 flex flex-col gap-1.5">
        
        {/* Month Navigation */}
        <div className="w-full h-[24px] flex items-center justify-between">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="w-4 h-4 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-0.5 font-sans font-semibold text-[12px] leading-[16px] text-[#404040]">
            <select
              value={currentMonth}
              onChange={(e) => setCurrentMonth(Number(e.target.value))}
              className="bg-transparent hover:text-[#7f56d9] transition-colors cursor-pointer focus:outline-none font-semibold text-[12px] text-[#404040] py-0.5 border-0 appearance-none text-center"
            >
              {MONTH_NAMES.map((name, index) => (
                <option key={name} value={index}>
                  {name}
                </option>
              ))}
            </select>
            <select
              value={currentYear}
              onChange={(e) => setCurrentYear(Number(e.target.value))}
              className="bg-transparent hover:text-[#7f56d9] transition-colors cursor-pointer focus:outline-none font-semibold text-[12px] text-[#404040] py-0.5 border-0 appearance-none text-center"
            >
              {Array.from({ length: 11 }, (_, i) => 2025 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleNextMonth}
            className="w-4 h-4 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Date Input Row (Single full-width input showing selected date) */}
        <div className="w-full h-[26px]">
          <input
            type="text"
            readOnly
            value={formatDateString(selectedDate)}
            placeholder="Select Date"
            className="w-full h-[26px] px-2 py-0.5 bg-white border border-[#7f56d9] ring-1 ring-[#7f56d9] rounded-[4px] text-[12px] leading-[16px] font-sans font-medium text-[#171717] text-center"
          />
        </div>

        {/* Date Grid */}
        <div className="w-full flex flex-col gap-[2px]">
          
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 text-center shrink-0">
            {WEEKDAYS.map((day) => (
              <span key={day} className="w-[28px] h-[16px] flex items-center justify-center font-sans font-medium text-[10px] leading-[14px] text-[#404040]">
                {day}
              </span>
            ))}
          </div>

          {/* Day Cells Grid */}
          <div className="grid grid-cols-7 gap-y-[2px] text-center">
            {generateDays().map(({ date, isCurrentMonth }, idx) => {
              const selected = selectedDate && isSameDate(date, selectedDate);
              const dot = hasEventDot(date, isCurrentMonth);

              let bgStyle = "";
              let textStyle = "text-[#404040]";

              if (selected) {
                bgStyle = "bg-[#7f56d9] rounded-full text-white";
                textStyle = "text-white font-medium";
              } else if (!isCurrentMonth) {
                textStyle = "text-[#737373] hover:bg-[#f5f5f5] rounded-full";
              } else {
                textStyle = "text-[#404040] hover:bg-[#f5f5f5] rounded-full";
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleDayClick(date)}
                  className={`w-[28px] h-[28px] flex flex-col items-center justify-center relative cursor-pointer font-sans text-[10.5px] leading-[14px] transition-all ${bgStyle} ${textStyle}`}
                >
                  {/* Day Number */}
                  <span className="block">{date.getDate()}</span>

                  {/* Event Dot Indicator */}
                  {dot && (
                    <span
                      className={`w-[3px] h-[3px] rounded-full absolute bottom-[1px] left-1/2 -translate-x-1/2 ${
                        dot.active ? "bg-[#7f56d9]" : "bg-[#a3a3a3]"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Bottom Panel */}
      <div className="h-[38px] w-full border-t border-[#e5e5e5] p-1.5 flex items-center justify-between gap-1.5 bg-white">
        <button
          type="button"
          onClick={onCancel}
          className="w-full h-[26px] bg-white border border-[#d4d4d4] rounded-[4px] text-[11px] leading-[14px] font-sans font-semibold text-[#404040] transition-colors hover:bg-gray-50 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-pointer"
        >
          Cancel
        </button>
        
        <button
          type="button"
          onClick={() => onApply(selectedDate, null)}
          className="w-full h-[26px] bg-[#7f56d9] border border-[#7f56d9] rounded-[4px] text-[11px] leading-[14px] font-sans font-semibold text-white transition-colors hover:bg-[#693cb8] flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-pointer"
        >
          Apply
        </button>
      </div>

    </div>
  );
}
