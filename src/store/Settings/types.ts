import { LanguageType } from "@utils";

// Tipo del estado
export type SettingsReducer = {
  appConfigured?: Boolean;
  darkMode?: Boolean;
  language?: LanguageType;
  newQuoteInterval: number;
};
