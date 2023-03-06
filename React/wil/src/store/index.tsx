import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsSliceReducer,usersSliceReducer } from "./Slice";


const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
    Products: productsSliceReducer,
    Users:usersSliceReducer, 
});

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer:persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
