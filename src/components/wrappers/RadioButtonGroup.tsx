import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type RadioOption = {
  label: string
  value: string
}

type RadioButtonGroupProps = {
  label: string
  options: RadioOption[]
  value: string
  onValueChange: (value: string) => void
}

export function RadioButtonGroup({
  label,
  options,
  value,
  onValueChange,
}: RadioButtonGroupProps) {
  return (
    <div className="grid gap-2">
      <p className="text-sm font-medium">{label}</p>
      <RadioGroup value={value} onValueChange={onValueChange}>
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2 text-sm">
            <RadioGroupItem value={option.value} />
            <span>{option.label}</span>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
