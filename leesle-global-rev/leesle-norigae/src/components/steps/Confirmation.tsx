"use client";

import { formatDisplayDate, formatTime } from "@/lib/utils";
import { useTranslation } from "@/i18n/useTranslation";

interface ConfirmationProps {
  refId: string;
  date: string;
  startTime: string;
  endTime: string;
  partySize: number;
}

export default function Confirmation({
  refId,
  date,
  startTime,
  endTime,
  partySize,
}: ConfirmationProps) {
  const { lang, t } = useTranslation();

  return (
    <div className="animate-fadeIn text-center py-8">
      {/* Checkmark animation */}
      <svg className="mx-auto mb-6" width="80" height="80" viewBox="0 0 80 80">
        <circle
          className="confirm-circle"
          cx="40"
          cy="40"
          r="38"
          fill="none"
          stroke="#16a34a"
          strokeWidth="3"
        />
        <path
          className="confirm-check"
          d="M24 42 L34 52 L56 30"
          fill="none"
          stroke="#16a34a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <h2 className="font-heading text-2xl font-bold mb-2">
        {t("confirm_title")}
      </h2>
      <p className="text-charcoal/60 mb-6">{t("confirm_desc")}</p>

      <div className="inline-block bg-gray-lighter rounded-xl p-5 text-left space-y-2 text-sm">
        <div className="flex gap-3">
          <span className="text-charcoal/60">{t("confirm_ref")}</span>
          <span className="font-mono font-bold">{refId}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-charcoal/60">{t("review_date")}</span>
          <span className="font-medium">{formatDisplayDate(date, lang)}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-charcoal/60">{t("review_time")}</span>
          <span className="font-medium">
            {formatTime(startTime, lang)} - {formatTime(endTime, lang)}
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-charcoal/60">{t("review_guests")}</span>
          <span className="font-medium">{partySize}</span>
        </div>
      </div>
    </div>
  );
}
