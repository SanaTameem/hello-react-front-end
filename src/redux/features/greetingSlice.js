import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  text: '',
  error: '',
};

export const fetchMessage = createAsyncThunk('greeting/fetchMessage', async () => {
  const response = await axios.get('http://127.0.0.1:3000/root/index');
  return response.data.text;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.text = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMessage.rejected, (state, action) => {
      state.isLoading = false;
      state.text = '';
      state.error = action.error.message;
    });
  },
});

export default greetingSlice.reducer;
