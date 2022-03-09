import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { settingsReducer } from "../Settings";
import { reduxStorage } from "./reduxStorage";

export type RootStoreType = ReturnType<typeof rootReducer>;

const persistanceConfiguration = {
  key: "root",
  blacklist: ["navigation"],
  storage: reduxStorage,
};

export const rootReducer = combineReducers({
  // Place reducers in this section
  // I.e: settings: settingsReducer,
  settings: settingsReducer,
});

const persistedReducer = persistReducer(persistanceConfiguration, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
