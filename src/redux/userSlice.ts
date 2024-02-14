import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// type userState = {
//   loggin: boolean;
// };
// const initialState: userState = {
//   loggin: false,
// };
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
    removeUser: (state, action: PayloadAction) => {
      return null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
