import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import darkSlice from "../slices/dark";
import rootSaga from "../slices/saga/sagas";
const reducres = combineReducers({
  dark: darkSlice.reducer,
});
const sagaMiddleware = createSagaMiddleware();

const createStore = configureStore({
  reducer: reducres,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducres>;
export default createStore;
