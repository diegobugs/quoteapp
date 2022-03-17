import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteType } from "@utils";

import { QuotesReducer } from "./types";

const initialState: QuotesReducer = {
  lastQuoteTime: undefined,
  quotes: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuotes: (state, action: PayloadAction<QuoteType>) => ({
      ...state,
      lastQuoteTime: new Date().getTime(),
      quotes: [...state.quotes, action.payload],
    }),
    markQuoteAsFavorite: (state, action: PayloadAction<QuoteType>) => ({
      ...state,
    }),
  },
});

export const quotesReducer = quotesSlice.reducer;
export const quotesActions = quotesSlice.actions;
