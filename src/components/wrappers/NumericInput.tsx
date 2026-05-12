import { Input } from "@/components/ui/input"

type NumericInputProps = {
  label: string
  value: number
  min?: number
  max?: number
  step?: number
  onChange: (value: number) => void
}

export function NumericInput({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: NumericInputProps) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium">{label}</label>
      <Input
        type="number"
        value={Number.isFinite(value) ? String(value) : ""}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
  )
}
