import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
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

type PiePoint = {
  name: string
  value: number
  fill: string
}

type PieChartCardProps = {
  title: string
  description?: string
  data: PiePoint[]
}

function buildConfig(data: PiePoint[]): ChartConfig {
  return data.reduce<ChartConfig>((acc, item) => {
    acc[item.name] = {
      label: item.name,
      color: item.fill,
    }
    return acc
  }, {})
}

export function PieChartCard({ title, description, data }: PieChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-64 w-full" config={buildConfig(data)}>
          <PieChart accessibilityLayer>
            <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
            <Pie data={data} dataKey="value" nameKey="name" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
