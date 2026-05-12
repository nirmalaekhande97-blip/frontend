import type { ReactNode } from "react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type TabItem = {
  label: string
  value: string
  content: ReactNode
}

type AppTabsProps = {
  defaultValue: string
  items: TabItem[]
}

export function AppTabs({ defaultValue, items }: AppTabsProps) {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}
