import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateType {
  user: userType;
  isLoading: boolean;
  error: string;
}

interface userType {
  email: string;
  nickname: string;
  photoURL: string;
  uid?: number;
}

const initialState: stateType = {
  user: {
    email: "",
    nickname: "",
    photoURL: "",
    uid: undefined,
  },
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<{ user: userType }>) => {
      state.isLoading = false;
      state.user = action.payload.user;
    },
    loginError: (state, action: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  login: loginAction,
  loginError: loginErrorACtion,
  loginSuccess: loginSuccessAction,
} = userSlice.actions;

export default userSlice;
