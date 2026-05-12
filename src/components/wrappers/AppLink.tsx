import type { AnchorHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function AppLink({ className, ...props }: AppLinkProps) {
  return (
    <a
      className={cn(
        "text-sm font-medium text-primary underline-offset-4 hover:underline",
        className
      )}
      {...props}
    />
  )
}
