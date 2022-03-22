import { QuoteType } from "@utils";
import ViewShot from "react-native-view-shot";

export type QuoteHeaderProps = {
  onBackPress?: () => void;
  currentQuote?: QuoteType;
  snapRef?: ViewShot | null;
};
