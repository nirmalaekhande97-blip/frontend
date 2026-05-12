import { Input } from "@/components/ui/input"

type TextFieldProps = {
  label: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

export function TextField({
  label,
  value,
  placeholder,
  onChange,
}: TextFieldProps) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium">{label}</label>
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}
