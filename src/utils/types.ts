/*
  DEFINE ALL GLOBAL TYPES FOR THE APPLICATION
*/
export type LanguageType = "ES" | "EN" | "PT";

export type DayStringType = "Su" | "M" | "Tu" | "W" | "Th" | "F" | "S";
export type ReminderType = {
  id: string | Uint8Array;
  time: number;
  days: Array<DayStringType>;
};
export type QuoteType = {
  id: string | Uint16Array;
  quote: string;
  author: string;
  isFav?: boolean;
};
