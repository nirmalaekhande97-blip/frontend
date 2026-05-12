import { type PropsWithChildren } from "react"
import { Provider } from "react-redux"

import { store } from "@/app/store/store"

export function AppProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>
}
