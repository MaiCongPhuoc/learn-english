import { configureStore } from '@reduxjs/toolkit';
import vocabularyReducer from './vocabularySlice';

const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
// store.getState() là hàm trả về toàn bộ state hiện tại trong Redux.
// ReturnType<typeof store.getState> nghĩa là: lấy kiểu của state, gán cho tên RootState.
export type RootState = ReturnType<typeof store.getState>;

// store.dispatch là hàm bạn dùng để gửi (dispatch) action.
// typeof store.dispatch sẽ lấy kiểu chính xác của nó.
export type AppDispatch = typeof store.dispatch;
