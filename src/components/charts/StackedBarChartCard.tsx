import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type StackedBarPoint = {
  label: string
  planned: number
  actual: number
}

type StackedBarChartCardProps = {
  title: string
  description?: string
  data: StackedBarPoint[]
}

const config = {
  planned: { label: "Planned", color: "var(--chart-3)" },
  actual: { label: "Actual", color: "var(--chart-4)" },
} satisfies ChartConfig

export function StackedBarChartCard({
  title,
  description,
  data,
}: StackedBarChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-64 w-full" config={config}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="planned" fill="var(--color-planned)" stackId="a" />
            <Bar dataKey="actual" fill="var(--color-actual)" stackId="a" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
