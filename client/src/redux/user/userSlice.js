import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: state => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: state => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    deleteUserStart: state => {
      state.loading = true;
    },

    deleteUserSuccess: state => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutStart: state => {
      state.loading = true;
    },
    signOutSuccess: state => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutFail: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFail,
  updateUserStart,
  updateUserSuccess,
  updateUserFail,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFail,
  signOutStart,
  signOutSuccess,
  signOutFail,
} = userSlice.actions;
export default userSlice.reducer;
