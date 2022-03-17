import { QuoteType } from "@utils";

export type QuoteHeaderProps = {
  onBackPress?: () => void;
  currentQuote?: QuoteType;
};
