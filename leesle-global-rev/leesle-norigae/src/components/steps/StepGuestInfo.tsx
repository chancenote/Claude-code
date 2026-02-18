"use client";

import type { GuestFormData } from "@/types";
import TextInput from "@/components/form/TextInput";
import PhoneInput from "@/components/form/PhoneInput";
import SelectInput from "@/components/form/SelectInput";
import PartyStepper from "@/components/form/PartyStepper";
import Button from "@/components/ui/Button";
import { NATIONALITIES } from "@/constants/countries";
import { useTranslation } from "@/i18n/useTranslation";

interface StepGuestInfoProps {
  formData: GuestFormData;
  onFormChange: (data: Partial<GuestFormData>) => void;
  maxParty: number;
  errors: Record<string, string>;
  onNext: () => void;
  onBack: () => void;
}

export default function StepGuestInfo({
  formData,
  onFormChange,
  maxParty,
  errors,
  onNext,
  onBack,
}: StepGuestInfoProps) {
  const { t } = useTranslation();

  return (
    <div className="animate-fadeIn">
      <h2 className="font-heading text-xl font-bold mb-6">{t("step2_title")}</h2>

      <div className="space-y-5">
        <TextInput
          label={t("label_name")}
          required
          value={formData.guestName}
          onChange={(v) => onFormChange({ guestName: v })}
          placeholder={t("ph_name")}
          error={errors.name}
        />

        <TextInput
          label={t("label_email")}
          required
          type="email"
          value={formData.email}
          onChange={(v) => onFormChange({ email: v })}
          placeholder={t("ph_email")}
          error={errors.email}
        />

        <PhoneInput
          label={t("label_phone")}
          required
          countryCode={formData.countryCode}
          phoneNumber={formData.phoneNumber}
          onCountryCodeChange={(v) => onFormChange({ countryCode: v })}
          onPhoneNumberChange={(v) => onFormChange({ phoneNumber: v })}
          placeholder={t("ph_phone")}
          error={errors.phone}
        />

        <SelectInput
          label={t("label_nationality")}
          value={formData.nationality}
          onChange={(v) => onFormChange({ nationality: v })}
          options={NATIONALITIES}
          placeholder={t("opt_select")}
        />

        <PartyStepper
          label={t("label_party")}
          required
          value={formData.partySize}
          max={maxParty}
          onChange={(v) => onFormChange({ partySize: v })}
          maxLabel={t("party_max", { n: maxParty })}
          error={errors.party}
        />
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="secondary" onClick={onBack} className="px-6">
          {t("btn_back")}
        </Button>
        <Button onClick={onNext}>{t("btn_next")}</Button>
      </div>
    </div>
  );
}
