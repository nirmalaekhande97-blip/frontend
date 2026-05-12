import { useAppSelector } from "@/app/store/hooks"
import { DowntimeInsightDashboard } from "@/features/downtime-insight/pages/DowntimeInsightDashboard"
import { ProductionInsightDashboard } from "@/features/production-insight/pages/ProductionInsightDashboard"

export function AppRoutes() {
  const activeDashboard = useAppSelector((state) => state.ui.activeDashboard)

  if (activeDashboard === "downtime") {
    return <DowntimeInsightDashboard />
  }

  return <ProductionInsightDashboard />
}
