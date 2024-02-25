import { configureStore } from "@reduxjs/toolkit";
import { oneCallAPI } from "../api/oneCallAPI2.5";

export const store = configureStore({
  reducer: {
    [oneCallAPI.reducerPath]: oneCallAPI.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(oneCallAPI.middleware),
});
