"use client";

import { COUNTRY_CODES } from "@/constants/countries";

interface PhoneInputProps {
  label: string;
  required?: boolean;
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export default function PhoneInput({
  label,
  required,
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  placeholder,
  error,
}: PhoneInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="flex gap-2">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className="border border-gray-light rounded-lg px-2 py-2.5 text-sm w-28 shrink-0 transition font-body"
          aria-label="Country code"
        >
          {COUNTRY_CODES.map((cc) => (
            <option key={cc.code} value={cc.code}>
              {cc.label}
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => onPhoneNumberChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 border border-gray-light rounded-lg px-4 py-2.5 text-sm transition font-body"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
