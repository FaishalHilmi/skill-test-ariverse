import { ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  value: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export default function SelectField({
  value,
  options,
  onChange,
  className = "",
}: SelectFieldProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={onChange}
        className="
          w-full appearance-none
          rounded-xl border border-outline/10
          bg-surface-container
          px-4 py-3 pr-12
          text-sm font-medium
          outline-none
          transition-colors duration-300
          hover:bg-surface-container-high
          focus:ring-2 focus:ring-primary/20
        "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        className="
          pointer-events-none absolute
          right-4 top-1/2
          h-4 w-4
          -translate-y-1/2
          text-on-surface-variant
        "
      />
    </div>
  );
}
