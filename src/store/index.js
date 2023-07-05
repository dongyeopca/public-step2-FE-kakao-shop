import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

// persist를 구현하기 위해 추가
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"

const reducers = combineReducers({
  user: userSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// 전역 저장소
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
