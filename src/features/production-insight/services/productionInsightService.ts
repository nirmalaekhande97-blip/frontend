export type ProductionDashboardMockData = {
  lineName: string
  note: string
  targetOutput: number
  speedThreshold: number
  shift: string
  selectedPlant: string
  autoPlanning: boolean
  plantOptions: { label: string; value: string }[]
  shiftOptions: { label: string; value: string }[]
  trendData: { label: string; value: number }[]
  outputByLineData: { label: string; value: number }[]
  plannedVsActualData: { label: string; planned: number; actual: number }[]
}

export async function getProductionInsightMockData(): Promise<ProductionDashboardMockData> {
  return {
    lineName: "Line A",
    note: "Monitor OEE trend for the morning shift.",
    targetOutput: 1200,
    speedThreshold: 78,
    shift: "morning",
    selectedPlant: "plant-1",
    autoPlanning: true,
    plantOptions: [
      { label: "Plant 1", value: "plant-1" },
      { label: "Plant 2", value: "plant-2" },
      { label: "Plant 3", value: "plant-3" },
    ],
    shiftOptions: [
      { label: "Morning", value: "morning" },
      { label: "Evening", value: "evening" },
      { label: "Night", value: "night" },
    ],
    trendData: [
      { label: "Mon", value: 72 },
      { label: "Tue", value: 77 },
      { label: "Wed", value: 75 },
      { label: "Thu", value: 81 },
      { label: "Fri", value: 84 },
      { label: "Sat", value: 79 },
    ],
    outputByLineData: [
      { label: "Line A", value: 1180 },
      { label: "Line B", value: 980 },
      { label: "Line C", value: 870 },
      { label: "Line D", value: 760 },
    ],
    plannedVsActualData: [
      { label: "Week 1", planned: 4200, actual: 3980 },
      { label: "Week 2", planned: 4200, actual: 4060 },
      { label: "Week 3", planned: 4200, actual: 4170 },
      { label: "Week 4", planned: 4200, actual: 4210 },
    ],
  }
}
