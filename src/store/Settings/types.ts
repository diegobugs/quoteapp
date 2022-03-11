import { LanguageType } from "@utils";

// Tipo del estado
export type SettingsReducer = {
  appConfigured?: Boolean;
  language?: LanguageType;
};
