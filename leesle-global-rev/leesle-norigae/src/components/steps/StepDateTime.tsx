"use client";

import type { TimeSlot } from "@/types";
import Calendar from "@/components/calendar/Calendar";
import TimeSlotList from "@/components/slots/TimeSlotList";
import Button from "@/components/ui/Button";
import { useTranslation } from "@/i18n/useTranslation";

interface StepDateTimeProps {
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
  slots: TimeSlot[];
  slotsLoading: boolean;
  selectedSlot: TimeSlot | null;
  onSelectSlot: (slot: TimeSlot) => void;
  onNext: () => void;
}

export default function StepDateTime({
  selectedDate,
  onSelectDate,
  slots,
  slotsLoading,
  selectedSlot,
  onSelectSlot,
  onNext,
}: StepDateTimeProps) {
  const { t } = useTranslation();

  return (
    <div className="animate-fadeIn">
      <h2 className="font-heading text-xl font-bold mb-6">{t("step1_title")}</h2>

      <Calendar selectedDate={selectedDate} onSelectDate={onSelectDate} />

      {selectedDate && (
        <div>
          <h3 className="font-heading font-bold text-lg mb-3">
            {t("slot_title")}
          </h3>
          <TimeSlotList
            slots={slots}
            loading={slotsLoading}
            selectedSlotId={selectedSlot?.id ?? null}
            onSelectSlot={onSelectSlot}
          />
        </div>
      )}

      <div className="mt-8 flex justify-end">
        <Button
          onClick={onNext}
          disabled={!selectedDate || !selectedSlot}
        >
          {t("btn_next")}
        </Button>
      </div>
    </div>
  );
}
