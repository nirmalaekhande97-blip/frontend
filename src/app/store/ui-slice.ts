import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type DashboardKey = "production" | "downtime"

type UiState = {
  activeDashboard: DashboardKey
}

const initialState: UiState = {
  activeDashboard: "production",
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setActiveDashboard: (state, action: PayloadAction<DashboardKey>) => {
      state.activeDashboard = action.payload
    },
  },
})

export const { setActiveDashboard } = uiSlice.actions

export default uiSlice.reducer
