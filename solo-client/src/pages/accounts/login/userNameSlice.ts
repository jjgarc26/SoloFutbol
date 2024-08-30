import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

interface UsernameState {
  value: string;
}

const initialState: UsernameState = {
  value: "",
};

export const UsernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const { setUsername } = UsernameSlice.actions;
export default UsernameSlice.reducer;
