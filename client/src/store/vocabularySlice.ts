import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getVocabulary,
  removeVocabulary,
  saveVocabulary,
  updateVocabulary,
} from './action';
import { VocabularyType } from '@/type';

// Định nghĩa trạng thái ban đầu
interface CocabularyState {
  data: Record<string, any>;
  loading: boolean;
  error: string | null;
}

// Trạng thái ban đầu
const initialState: CocabularyState = {
  data: [],
  loading: false,
  error: null,
};

const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    increment: (state) => {
      // state.data += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVocabulary.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVocabulary.fulfilled, (state, action) => {
        state.data = action.payload.data; // Cập nhật giá trị dựa trên phản hồi API
        state.loading = false;
      })
      .addCase(getVocabulary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      })

      // Xử lý action saveVocabulary
      .addCase(saveVocabulary.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveVocabulary.fulfilled, (state, action) => {
        state.loading = false;
        // Dữ liệu trả về từ API khi ghi thành công, có thể cần điều chỉnh
        state.data = action.payload.data; // Thêm phần tử vào dữ liệu (hoặc thay đổi theo ý muốn)
      })
      .addCase(saveVocabulary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to save data';
      })

      // Xử lý action updateVocabulary
      .addCase(updateVocabulary.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVocabulary.fulfilled, (state, action) => {
        state.loading = false;
        // Dữ liệu trả về từ API khi ghi thành công, có thể cần điều chỉnh
        state.data = action.payload.data; // Thêm phần tử vào dữ liệu (hoặc thay đổi theo ý muốn)
      })
      .addCase(updateVocabulary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to save data';
      })

      // Xử lý action updateVocabulary
      .addCase(removeVocabulary.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeVocabulary.fulfilled, (state, action) => {
        state.loading = false;
        // Dữ liệu trả về từ API khi ghi thành công, có thể cần điều chỉnh
        state.data = action.payload.data; // Thêm phần tử vào dữ liệu (hoặc thay đổi theo ý muốn)
      })
      .addCase(removeVocabulary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to save data';
      });
  },
});

export const { increment } = vocabularySlice.actions;
export default vocabularySlice.reducer;
