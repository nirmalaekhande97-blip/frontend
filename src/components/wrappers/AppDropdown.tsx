import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type DropdownItem = {
  label: string
  value: string
  onSelect?: () => void
}

type AppDropdownProps = {
  triggerLabel: string
  items: DropdownItem[]
  onSelect?: (value: string) => void
}

export function AppDropdown({
  triggerLabel,
  items,
  onSelect,
}: AppDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {triggerLabel}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => {
              item.onSelect?.()
              onSelect?.(item.value)
            }}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
