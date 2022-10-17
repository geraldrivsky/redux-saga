import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import countReducer from "./CountSlice";
import usersReducer from "./UsersSlice";


const rootReducer = combineReducers({ countReducer, usersReducer });
export const sagaMiddleware = createSagaMiddleware();

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
