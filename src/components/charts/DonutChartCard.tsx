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

type DonutPoint = {
  name: string
  value: number
  fill: string
}

type DonutChartCardProps = {
  title: string
  description?: string
  data: DonutPoint[]
}

function buildConfig(data: DonutPoint[]): ChartConfig {
  return data.reduce<ChartConfig>((acc, item) => {
    acc[item.name] = {
      label: item.name,
      color: item.fill,
    }
    return acc
  }, {})
}

export function DonutChartCard({
  title,
  description,
  data,
}: DonutChartCardProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

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
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={90}
            />
          </PieChart>
        </ChartContainer>
        <p className="mt-2 text-sm text-muted-foreground">Total: {total}</p>
      </CardContent>
    </Card>
  )
}
