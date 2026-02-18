"use client";

import type { TimeSlot } from "@/types";
import { formatTime } from "@/lib/utils";
import { useTranslation } from "@/i18n/useTranslation";
import Spinner from "@/components/ui/Spinner";

interface TimeSlotListProps {
  slots: TimeSlot[];
  loading: boolean;
  selectedSlotId: string | null;
  onSelectSlot: (slot: TimeSlot) => void;
}

export default function TimeSlotList({
  slots,
  loading,
  selectedSlotId,
  onSelectSlot,
}: TimeSlotListProps) {
  const { lang, t } = useTranslation();

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Spinner />
      </div>
    );
  }

  if (slots.length === 0) {
    return (
      <p className="text-center text-charcoal/50 py-8">{t("slot_empty")}</p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {slots.map((slot) => {
        const remaining = slot.max_capacity - slot.current_count;
        const isFull = remaining <= 0;
        const isSelected = selectedSlotId === slot.id;
        const start = formatTime(slot.start_time, lang);
        const end = formatTime(slot.end_time, lang);

        let cls = "slot-card";
        if (isFull) cls += " full";
        if (isSelected) cls += " selected";

        return (
          <div
            key={slot.id}
            className={cls}
            onClick={() => !isFull && onSelectSlot(slot)}
            role="button"
            tabIndex={0}
            aria-label={`${start} - ${end}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isFull) onSelectSlot(slot);
            }}
          >
            <div className="font-heading font-bold">{start}</div>
            <div className="text-xs text-charcoal/50 mb-1">
              {start} - {end}
            </div>
            {isFull ? (
              <span className="text-red-400 text-xs font-medium">
                {t("slot_full")}
              </span>
            ) : (
              <span className="text-green-600 text-xs">
                {t("slot_remaining", { n: remaining })}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
