"use client";

import type { GuestFormData, TimeSlot } from "@/types";
import { formatDisplayDate, formatTime } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { useTranslation } from "@/i18n/useTranslation";
import type { DictKey } from "@/i18n/dictionaries";

interface StepReviewProps {
  selectedDate: string;
  selectedSlot: TimeSlot;
  formData: GuestFormData;
  specialRequest: string;
  onSpecialRequestChange: (value: string) => void;
  isSubmitting: boolean;
  onSubmit: () => void;
  onBack: () => void;
}

export default function StepReview({
  selectedDate,
  selectedSlot,
  formData,
  specialRequest,
  onSpecialRequestChange,
  isSubmitting,
  onSubmit,
  onBack,
}: StepReviewProps) {
  const { lang, t } = useTranslation();

  const reviewItems: { key: DictKey; value: string }[] = [
    { key: "review_date", value: formatDisplayDate(selectedDate, lang) },
    {
      key: "review_time",
      value: `${formatTime(selectedSlot.start_time, lang)} - ${formatTime(selectedSlot.end_time, lang)}`,
    },
    { key: "review_name", value: formData.guestName },
    { key: "review_email", value: formData.email },
    {
      key: "review_phone",
      value: `${formData.countryCode} ${formData.phoneNumber}`,
    },
    { key: "review_guests", value: String(formData.partySize) },
  ];

  return (
    <div className="animate-fadeIn">
      <h2 className="font-heading text-xl font-bold mb-6">{t("step3_title")}</h2>

      {/* Special Request */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1.5">
          {t("label_request")}
        </label>
        <textarea
          rows={3}
          value={specialRequest}
          onChange={(e) => onSpecialRequestChange(e.target.value)}
          placeholder={t("ph_request")}
          className="w-full border border-gray-light rounded-lg px-4 py-2.5 text-sm transition resize-none font-body"
        />
      </div>

      {/* Review Summary */}
      <div className="bg-gray-lighter rounded-xl p-5 sm:p-6 mb-6 space-y-3">
        <h3 className="font-heading font-bold">{t("review_title")}</h3>
        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
          {reviewItems.map((item) => (
            <span className="contents" key={item.key}>
              <span className="text-charcoal/60">{t(item.key)}</span>
              <span className="font-medium">{item.value}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Button variant="secondary" onClick={onBack} className="px-6">
          {t("btn_back")}
        </Button>
        <Button variant="cta" onClick={onSubmit} disabled={isSubmitting}>
          <span>{t("btn_submit")}</span>
          {isSubmitting && <Spinner size="sm" />}
        </Button>
      </div>
    </div>
  );
}
