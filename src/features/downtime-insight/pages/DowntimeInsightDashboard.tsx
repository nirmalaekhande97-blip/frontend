import { useEffect, useMemo, useState } from "react"

import { BarChartCard, DonutChartCard, LineChartCard, PieChartCard } from "@/components/charts"
import {
  AppButton,
  AppDropdown,
  AppTabs,
  NumericInput,
  RadioButtonGroup,
  TextAreaField,
  ToggleWithValueDisplay,
} from "@/components/wrappers"
import { getDowntimeInsightMockData } from "@/features/downtime-insight/services/downtimeInsightService"

export function DowntimeInsightDashboard() {
  const [reason, setReason] = useState("")
  const [actionNote, setActionNote] = useState("")
  const [thresholdMinutes, setThresholdMinutes] = useState(0)
  const [timeRange, setTimeRange] = useState("")
  const [includePlannedStops, setIncludePlannedStops] = useState(false)
  const [timeRangeOptions, setTimeRangeOptions] = useState<
    { label: string; value: string }[]
  >([])
  const [reasonOptions, setReasonOptions] = useState<
    { label: string; value: string }[]
  >([])
  const [minutesTrendData, setMinutesTrendData] = useState<
    { label: string; value: number }[]
  >([])
  const [reasonPieData, setReasonPieData] = useState<
    { name: string; value: number; fill: string }[]
  >([])
  const [machineDonutData, setMachineDonutData] = useState<
    { name: string; value: number; fill: string }[]
  >([])
  const [downtimeByLineData, setDowntimeByLineData] = useState<
    { label: string; value: number }[]
  >([])

  useEffect(() => {
    void getDowntimeInsightMockData().then((data) => {
      setReason(data.reason)
      setActionNote(data.actionNote)
      setThresholdMinutes(data.thresholdMinutes)
      setTimeRange(data.timeRange)
      setIncludePlannedStops(data.includePlannedStops)
      setTimeRangeOptions(data.timeRangeOptions)
      setReasonOptions(data.reasonOptions)
      setMinutesTrendData(data.minutesTrendData)
      setReasonPieData(data.reasonPieData)
      setMachineDonutData(data.machineDonutData)
      setDowntimeByLineData(data.downtimeByLineData)
    })
  }, [])

  const tabItems = useMemo(
    () => [
      {
        label: "Overview",
        value: "overview",
        content: (
          <div className="grid gap-4 lg:grid-cols-2">
            <LineChartCard
              title="Downtime Trend"
              description="Minutes per day"
              data={minutesTrendData}
            />
            <BarChartCard
              title="Downtime by Line"
              description="Total minutes by line"
              data={downtimeByLineData}
            />
            <PieChartCard
              title="Reason Distribution"
              description="Downtime by reason"
              data={reasonPieData}
            />
            <DonutChartCard
              title="Machine Contribution"
              description="Downtime by machine"
              data={machineDonutData}
            />
          </div>
        ),
      },
    ],
    [downtimeByLineData, machineDonutData, minutesTrendData, reasonPieData]
  )

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-semibold">Downtime Filters</h3>
          <div className="flex items-center gap-2">
            <AppDropdown
              triggerLabel={
                timeRangeOptions.find((item) => item.value === timeRange)?.label ??
                "Select Range"
              }
              items={timeRangeOptions}
              onSelect={setTimeRange}
            />
            <AppButton label="Run Analysis" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <RadioButtonGroup
            label="Primary Reason"
            options={reasonOptions}
            value={reason}
            onValueChange={setReason}
          />
          <NumericInput
            label="Alert Threshold (min)"
            value={thresholdMinutes}
            min={0}
            onChange={setThresholdMinutes}
          />
          <TextAreaField
            label="Action Note"
            value={actionNote}
            onChange={setActionNote}
            placeholder="Next maintenance action"
          />
          <ToggleWithValueDisplay
            label="Include Planned Stops"
            value={includePlannedStops}
            onValueChange={setIncludePlannedStops}
            onText="Included"
            offText="Excluded"
          />
        </div>
      </section>

      <section>
        <AppTabs defaultValue="overview" items={tabItems} />
      </section>
    </div>
  )
}
