import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../types/App.types";
const initialState: UserType = {
  uid: "",
  email: "",
  displayName: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      return action.payload;
    },
    removeUser: (state) => {
      return initialState;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
