import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "stateSlice/userDataSlice";

const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
    Users: userSlice 
});

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer:persistedReducer,
});

export default store;
