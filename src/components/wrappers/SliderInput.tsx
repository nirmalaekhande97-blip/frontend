import { Slider } from "@/components/ui/slider"

type SliderInputProps = {
  label: string
  value: number[]
  min?: number
  max?: number
  step?: number
  onValueChange: (value: number[]) => void
}

export function SliderInput({
  label,
  value,
  min,
  max,
  step = 1,
  onValueChange,
}: SliderInputProps) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{value[0]}</span>
      </div>
      <Slider
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={(nextValue) =>
          onValueChange(Array.isArray(nextValue) ? [...nextValue] : [nextValue])
        }
      />
    </div>
  )
}
