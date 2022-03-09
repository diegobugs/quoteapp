import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SettingsReducer } from "./types";

const initialState: SettingsReducer = {
  firstAppRun: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsReducer>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const settingsReducer = settingsSlice.reducer;
export const settingsActions = settingsSlice.actions;
