import { Toggle } from "@/components/ui/toggle"

type ToggleWithValueDisplayProps = {
  label: string
  value: boolean
  onValueChange: (value: boolean) => void
  onText?: string
  offText?: string
}

export function ToggleWithValueDisplay({
  label,
  value,
  onValueChange,
  onText = "ON",
  offText = "OFF",
}: ToggleWithValueDisplayProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-card p-3">
      <div className="grid">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs text-muted-foreground">
          Current value: {value ? onText : offText}
        </span>
      </div>
      <Toggle pressed={value} onPressedChange={onValueChange}>
        {value ? onText : offText}
      </Toggle>
    </div>
  )
}
