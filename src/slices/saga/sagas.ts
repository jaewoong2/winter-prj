import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import userSaga from "./userSaga";

export default function* rootSaga(): Generator<
  AllEffect<Generator<AllEffect<ForkEffect<void>>, void, unknown>>,
  void,
  unknown
> {
  yield all([userSaga()]);
}
