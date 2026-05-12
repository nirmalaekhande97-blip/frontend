import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

type MenuItem = {
  label: string
  onSelect?: () => void
}

type AppMenuProps = {
  label: string
  items: MenuItem[]
}

export function AppMenu({ label, items }: AppMenuProps) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>{label}</MenubarTrigger>
        <MenubarContent>
          {items.map((item) => (
            <MenubarItem key={item.label} onClick={item.onSelect}>
              {item.label}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
