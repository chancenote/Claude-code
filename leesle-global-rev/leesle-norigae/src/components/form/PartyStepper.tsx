"use client";

interface PartyStepperProps {
  label: string;
  required?: boolean;
  value: number;
  max: number;
  onChange: (value: number) => void;
  maxLabel?: string;
  error?: string;
}

export default function PartyStepper({
  label,
  required,
  value,
  max,
  onChange,
  maxLabel,
  error,
}: PartyStepperProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="stepper-btn"
          onClick={() => value > 1 && onChange(value - 1)}
          aria-label="Decrease"
        >
          -
        </button>
        <span className="text-xl font-bold w-10 text-center">{value}</span>
        <button
          type="button"
          className="stepper-btn"
          onClick={() => value < max && onChange(value + 1)}
          aria-label="Increase"
        >
          +
        </button>
        {maxLabel && (
          <span className="text-sm text-charcoal/50">{maxLabel}</span>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
