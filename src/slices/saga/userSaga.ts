import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  takeLatest,
} from "redux-saga/effects";
import { loginAction, loginErrorACtion, loginSuccessAction } from "../user";

function loginUserAPI(data: { email: string; password: string }) {
  return axios.post("http://192.168.25.11:3010/winter-proj/login", data);
}

function* loginUser(
  action: PayloadAction<{ email: string; password: string }>
) {
  try {
    const result = yield call(loginUserAPI, action.payload);
    const userData = {
      uid: result.data[0].UID,
      photoURL: result.data[0].PHOTOURL,
      email: result.data[0].EMAIL,
      nickname: result.data[0].NICKNAME,
    };
    yield put({
      type: loginSuccessAction.type,
      payload: {
        user: userData,
      },
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: loginErrorACtion.type,
      payload: {
        error: "로그인 에러",
      },
    });
  }
}

function* watchLoginUser() {
  yield takeLatest(loginAction, loginUser);
}

export default function* userSaga() {
  yield all([fork(watchLoginUser)]);
}
