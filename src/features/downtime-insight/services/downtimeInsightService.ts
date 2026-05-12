export type DowntimeDashboardMockData = {
  reason: string
  actionNote: string
  thresholdMinutes: number
  timeRange: string
  includePlannedStops: boolean
  timeRangeOptions: { label: string; value: string }[]
  reasonOptions: { label: string; value: string }[]
  minutesTrendData: { label: string; value: number }[]
  reasonPieData: { name: string; value: number; fill: string }[]
  machineDonutData: { name: string; value: number; fill: string }[]
  downtimeByLineData: { label: string; value: number }[]
}

export async function getDowntimeInsightMockData(): Promise<DowntimeDashboardMockData> {
  return {
    reason: "mechanical",
    actionNote: "Check spindle vibration and cooling system.",
    thresholdMinutes: 45,
    timeRange: "7d",
    includePlannedStops: false,
    timeRangeOptions: [
      { label: "Last 24h", value: "24h" },
      { label: "Last 7 days", value: "7d" },
      { label: "Last 30 days", value: "30d" },
    ],
    reasonOptions: [
      { label: "Mechanical", value: "mechanical" },
      { label: "Electrical", value: "electrical" },
      { label: "Material", value: "material" },
    ],
    minutesTrendData: [
      { label: "Mon", value: 68 },
      { label: "Tue", value: 54 },
      { label: "Wed", value: 72 },
      { label: "Thu", value: 49 },
      { label: "Fri", value: 41 },
      { label: "Sat", value: 38 },
    ],
    reasonPieData: [
      { name: "Mechanical", value: 38, fill: "var(--chart-1)" },
      { name: "Electrical", value: 24, fill: "var(--chart-2)" },
      { name: "Material", value: 18, fill: "var(--chart-3)" },
      { name: "Operator", value: 20, fill: "var(--chart-4)" },
    ],
    machineDonutData: [
      { name: "CNC-01", value: 28, fill: "var(--chart-1)" },
      { name: "CNC-02", value: 21, fill: "var(--chart-2)" },
      { name: "Press-01", value: 19, fill: "var(--chart-3)" },
      { name: "Assembly-03", value: 32, fill: "var(--chart-5)" },
    ],
    downtimeByLineData: [
      { label: "Line A", value: 140 },
      { label: "Line B", value: 120 },
      { label: "Line C", value: 96 },
      { label: "Line D", value: 72 },
    ],
  }
}
