import { useEffect, useMemo, useState } from "react"

import {
  BarChartCard,
  LineChartCard,
  StackedBarChartCard,
} from "@/components/charts"
import {
  AppButton,
  AppDropdown,
  AppLink,
  AppMenu,
  AppTabs,
  NumericInput,
  RadioButtonGroup,
  SliderInput,
  TextAreaField,
  TextField,
  ToggleWithValueDisplay,
} from "@/components/wrappers"
import { getProductionInsightMockData } from "@/features/production-insight/services/productionInsightService"

export function ProductionInsightDashboard() {
  const [lineName, setLineName] = useState("")
  const [note, setNote] = useState("")
  const [targetOutput, setTargetOutput] = useState(0)
  const [speedThreshold, setSpeedThreshold] = useState<number[]>([0])
  const [selectedShift, setSelectedShift] = useState("")
  const [selectedPlant, setSelectedPlant] = useState("")
  const [autoPlanning, setAutoPlanning] = useState(false)
  const [plantOptions, setPlantOptions] = useState<
    { label: string; value: string }[]
  >([])
  const [shiftOptions, setShiftOptions] = useState<
    { label: string; value: string }[]
  >([])
  const [trendData, setTrendData] = useState<{ label: string; value: number }[]>(
    []
  )
  const [outputByLineData, setOutputByLineData] = useState<
    { label: string; value: number }[]
  >([])
  const [plannedVsActualData, setPlannedVsActualData] = useState<
    { label: string; planned: number; actual: number }[]
  >([])

  useEffect(() => {
    void getProductionInsightMockData().then((data) => {
      setLineName(data.lineName)
      setNote(data.note)
      setTargetOutput(data.targetOutput)
      setSpeedThreshold([data.speedThreshold])
      setSelectedShift(data.shift)
      setSelectedPlant(data.selectedPlant)
      setAutoPlanning(data.autoPlanning)
      setPlantOptions(data.plantOptions)
      setShiftOptions(data.shiftOptions)
      setTrendData(data.trendData)
      setOutputByLineData(data.outputByLineData)
      setPlannedVsActualData(data.plannedVsActualData)
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
              title="Production Trend"
              description="Daily units trend"
              data={trendData}
            />
            <BarChartCard
              title="Output by Line"
              description="Current line output"
              data={outputByLineData}
            />
            <div className="lg:col-span-2">
              <StackedBarChartCard
                title="Planned vs Actual"
                description="Weekly production comparison"
                data={plannedVsActualData}
              />
            </div>
          </div>
        ),
      },
    ],
    [plannedVsActualData, outputByLineData, trendData]
  )

  return (
    <div className="space-y-4">
      <section className="rounded-lg border bg-card p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-base font-semibold">Controls</h3>
          <div className="flex flex-wrap items-center gap-2">
            <AppDropdown
              triggerLabel={
                plantOptions.find((item) => item.value === selectedPlant)
                  ?.label ?? "Select Plant"
              }
              items={plantOptions}
              onSelect={setSelectedPlant}
            />
            <AppMenu
              label="Actions"
              items={[
                { label: "Refresh" },
                { label: "Export CSV" },
                { label: "Export PDF" },
              ]}
            />
            <AppButton label="Apply Filters" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <TextField
            label="Line Name"
            value={lineName}
            onChange={setLineName}
            placeholder="Line name"
          />
          <NumericInput
            label="Target Output"
            value={targetOutput}
            min={0}
            onChange={setTargetOutput}
          />
          <SliderInput
            label="Speed Threshold (%)"
            value={speedThreshold}
            min={0}
            max={100}
            onValueChange={setSpeedThreshold}
          />
          <RadioButtonGroup
            label="Shift"
            options={shiftOptions}
            value={selectedShift}
            onValueChange={setSelectedShift}
          />
          <TextAreaField
            label="Supervisor Note"
            value={note}
            onChange={setNote}
            placeholder="Add a note"
          />
          <ToggleWithValueDisplay
            label="Auto Planning"
            value={autoPlanning}
            onValueChange={setAutoPlanning}
            onText="Enabled"
            offText="Disabled"
          />
          <div className="flex items-end pb-1">
            <AppLink href="#" onClick={(event) => event.preventDefault()}>
              Open Production Playbook
            </AppLink>
          </div>
        </div>
      </section>

      <section>
        <AppTabs defaultValue="overview" items={tabItems} />
      </section>
    </div>
  )
}
