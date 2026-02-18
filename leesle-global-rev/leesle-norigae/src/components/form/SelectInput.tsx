"use client";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: readonly SelectOption[];
  placeholder?: string;
}

export default function SelectInput({
  label,
  required,
  value,
  onChange,
  options,
  placeholder,
}: SelectInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-light rounded-lg px-4 py-2.5 text-sm transition font-body"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
