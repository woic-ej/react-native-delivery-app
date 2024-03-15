const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
});

export default basketSlice.reducer;
