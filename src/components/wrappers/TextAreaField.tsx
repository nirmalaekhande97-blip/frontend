import { Textarea } from "@/components/ui/textarea"

type TextAreaFieldProps = {
  label: string
  value: string
  placeholder?: string
  rows?: number
  onChange: (value: string) => void
}

export function TextAreaField({
  label,
  value,
  placeholder,
  rows = 4,
  onChange,
}: TextAreaFieldProps) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium">{label}</label>
      <Textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
