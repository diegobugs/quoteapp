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
    markQuoteAsFavorite: (state, action: PayloadAction<QuoteType["id"]>) => ({
      ...state,
      quotes: [
        ...state.quotes.map((quote) =>
          quote.id === action.payload ? { ...quote, isFav: true } : quote
        ),
      ],
    }),
    unmarkQuoteAsFavorite: (state, action: PayloadAction<QuoteType["id"]>) => ({
      ...state,
      quotes: [
        ...state.quotes.map((quote) =>
          quote.id === action.payload ? { ...quote, isFav: false } : quote
        ),
      ],
    }),
  },
});

export const quotesReducer = quotesSlice.reducer;
export const quotesActions = quotesSlice.actions;
