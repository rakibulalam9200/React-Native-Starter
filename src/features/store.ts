import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './api/apiSlice';
import authStateReducer from './auth/authState';
// import { apiSlice } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    authState: authStateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// setupListeners(store.dispatch)
export default store;
