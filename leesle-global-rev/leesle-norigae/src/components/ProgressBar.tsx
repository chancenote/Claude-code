"use client";

import { useTranslation } from "@/i18n/useTranslation";
import type { DictKey } from "@/i18n/dictionaries";

interface ProgressBarProps {
  currentStep: number;
}

const STEPS: { num: number; labelKey: DictKey }[] = [
  { num: 1, labelKey: "step1_label" },
  { num: 2, labelKey: "step2_label" },
  { num: 3, labelKey: "step3_label" },
];

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const { t } = useTranslation();

  if (currentStep > 3) return null;

  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {STEPS.map((step, i) => (
        <div key={step.num} className="flex items-center">
          {/* Step circle + label */}
          <div className="flex items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step.num <= currentStep
                  ? "bg-primary text-white"
                  : "bg-gray-light text-charcoal/50"
              }`}
            >
              {step.num}
            </div>
            <span className="ml-2 text-sm font-medium hidden sm:inline">
              {t(step.labelKey)}
            </span>
          </div>
          {/* Connector line (not after last step) */}
          {i < STEPS.length - 1 && (
            <div
              className="w-10 sm:w-16 h-0.5 mx-2 transition-colors"
              style={{
                backgroundColor:
                  step.num < currentStep ? "#000000" : "#e5e5e5",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
