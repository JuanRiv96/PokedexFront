import { configureStore } from "@reduxjs/toolkit";
import pokemons from "../reducer";

const store = configureStore({
  reducer: {
    pokemons,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
