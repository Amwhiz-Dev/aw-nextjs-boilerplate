import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserData } from "@codeBase/src/interface/userData";
import { Slice } from "@codeBase/src/enum/slice.enum";

type InitialStateType = {
  userData: UserData;
};

const initialState: InitialStateType = {
  userData: {email:"amwhiz.com"},
};

export const userSlice = createSlice({
  name: Slice.USER,
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    deleteUser: (state) => {
      state.userData = {};
    },
  },
});

export const { updateUser, deleteUser } = userSlice.actions;

// Selector to get user data
export const getUser = (state: RootState): UserData =>
  state.user.userData;

export default userSlice.reducer;
