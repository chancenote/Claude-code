"use client";

import { useCalendar } from "@/hooks/useCalendar";
import { useTranslation } from "@/i18n/useTranslation";
import type { DictKey } from "@/i18n/dictionaries";

interface CalendarProps {
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
}

const DAY_KEYS: DictKey[] = [
  "day_sun", "day_mon", "day_tue", "day_wed", "day_thu", "day_fri", "day_sat",
];

export default function Calendar({ selectedDate, onSelectDate }: CalendarProps) {
  const { year, month, days, prevMonth, nextMonth, monthNames } = useCalendar();
  const { lang, t } = useTranslation();

  const monthLabel =
    lang === "ko"
      ? `${year}년 ${monthNames.ko[month]}`
      : `${monthNames.en[month]} ${year}`;

  return (
    <div className="bg-white border border-gray-light rounded-xl p-4 sm:p-6 mb-6">
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-lighter rounded-lg transition"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="font-heading font-bold text-lg">{monthLabel}</h3>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-lighter rounded-lg transition"
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="cal-grid mb-1">
        {DAY_KEYS.map((key) => (
          <div key={key} className="text-center text-xs font-medium text-charcoal/50 py-2">
            {t(key)}
          </div>
        ))}
      </div>

      {/* Calendar body */}
      <div className="cal-grid">
        {days.map((cell, i) => {
          if (cell.isEmpty) {
            return <div key={`empty-${i}`} className="cal-cell empty" />;
          }

          let cls = "cal-cell";
          if (cell.isPast) cls += " disabled";
          if (cell.isToday) cls += " today";
          if (selectedDate === cell.date) cls += " selected";

          return (
            <div
              key={cell.date}
              className={cls}
              onClick={() => !cell.isPast && onSelectDate(cell.date)}
            >
              {cell.day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
