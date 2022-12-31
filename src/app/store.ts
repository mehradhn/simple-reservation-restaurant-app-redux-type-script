import { configureStore } from "@reduxjs/toolkit";
import reservationsReducers from "../features/reservationSlice";
import customerReducers from "../features/customerSlice";
export const store = configureStore({
  reducer: {
    reservations: reservationsReducers,
    customers: customerReducers,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Inferring these types from the store itself means:
// they correctly update  as you add more state slices or modify middleware settings. Since those are types,
// it's safe to export them directly from your store setup file such as app/store
