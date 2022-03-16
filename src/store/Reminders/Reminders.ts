import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReminderType } from "@utils";

import { RemindersReducer } from "./types";

const initialState: RemindersReducer = [];

const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    setReminders: (state, action: PayloadAction<ReminderType>) => [
      ...state,
      action.payload,
    ],
    updateReminder: (state, action: PayloadAction<ReminderType>) => [
      ...state.map((reminder) => {
        if (reminder.id === action.payload.id) {
          reminder = action.payload;
        }
        return reminder;
      }),
    ],
    deleteReminder: (state, action: PayloadAction<ReminderType>) => [
      ...state.filter((reminder) => reminder.id !== action.payload.id),
    ],
    clearReminders: () => initialState,
  },
});

export const remindersReducer = remindersSlice.reducer;
export const remindersActions = remindersSlice.actions;
