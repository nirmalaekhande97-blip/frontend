import type { PropsWithChildren } from "react"
import { BarChart3, Settings2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { setActiveDashboard, type DashboardKey } from "@/app/store/ui-slice"

const sidebarItems: { key: DashboardKey; label: string; icon: typeof BarChart3 }[] =
  [
    { key: "production", label: "Production Insight", icon: BarChart3 },
    { key: "downtime", label: "Downtime Insight", icon: Settings2 },
  ]

export function AppShell({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch()
  const activeDashboard = useAppSelector((state) => state.ui.activeDashboard)

  const activeItem =
    sidebarItems.find((item) => item.key === activeDashboard) ?? sidebarItems[0]

  return (
    <div className="flex h-screen bg-muted/20">
      <aside className="flex w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
        <div className="border-b border-sidebar-border px-4 py-4">
          <h2 className="text-sm font-semibold text-sidebar-foreground">
            Manufacturing UI
          </h2>
        </div>
        <nav className="flex flex-1 flex-col gap-2 p-3">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = activeDashboard === item.key

            return (
              <Button
                key={item.key}
                variant={isActive ? "secondary" : "ghost"}
                className="justify-start gap-2"
                onClick={() => dispatch(setActiveDashboard(item.key))}
              >
                <Icon className="size-4" />
                {item.label}
              </Button>
            )
          })}
        </nav>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center border-b bg-background px-6">
          <h1 className="text-lg font-semibold">{activeItem.label}</h1>
        </header>
        <main className="min-h-0 flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  )
}
