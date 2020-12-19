import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import darkSlice from "../slices/dark";
import userSlice from "../slices/user";
import rootSaga from "../slices/saga/sagas";
const reducres = combineReducers({
  dark: darkSlice.reducer,
  user: userSlice.reducer,
});
const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: reducres,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: process.env.NODE_ENV !== "production",
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export type RootState = ReturnType<typeof reducres>;
export default createStore;
