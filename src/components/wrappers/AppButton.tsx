import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"

type AppButtonProps = ComponentProps<typeof Button> & {
  label: string
}

export function AppButton({ label, ...props }: AppButtonProps) {
  return <Button {...props}>{label}</Button>
}
