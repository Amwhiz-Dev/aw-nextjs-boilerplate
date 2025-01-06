import { configureStore } from "@reduxjs/toolkit";
import userReducer, { getUser } from "./slice/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Get stored data using slice
const state = store.getState();
export const userData = getUser(state) ?? {};  // Users Slice 
