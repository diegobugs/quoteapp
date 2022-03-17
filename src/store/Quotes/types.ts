import { QuoteType } from "@utils";

// Tipo del estado
export type QuotesReducer = {
  lastQuoteTime: number | undefined;
  quotes: Array<QuoteType>;
};
