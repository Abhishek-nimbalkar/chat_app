import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {conatactSliceReducer,userSliceReducer} from "stateSlice/userDataSlice";


const persistConfig = {
  key: "root",
  storage,
};
const reducer = combineReducers({
    Conatacts: conatactSliceReducer,
    Users:userSliceReducer, 
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
