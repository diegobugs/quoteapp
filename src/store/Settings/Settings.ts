import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SettingsReducer } from "./types";

const initialState: SettingsReducer = {
  appConfigured: false,
  language: undefined,
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
