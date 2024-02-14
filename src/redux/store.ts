import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
export type RootState = {
  reducer: {
    user: {
      uid: string;
      email: string;
      displayName?: string | null;
    };
    movies: {
      nowPlayingMovies: any[];
      trailer: any;
    };
  };
};
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
});
export const persitedStore = persistStore(store);
export default store;
