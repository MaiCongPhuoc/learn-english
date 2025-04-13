import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_SERVER_BACKEND;

// Tạo một async action để gọi API
export const getVocabulary = createAsyncThunk(
  'vocabulary/getVocabulary',
  async () => {
    // Gọi API và trả về kết quả
    const response = await axios.get(`${API_URL}read-text-file`);
    return response.data; // Giả sử API trả về một giá trị
  }
);

// Tạo một async action để gọi API
export const saveVocabulary = createAsyncThunk(
  'vocabulary/saveVocabulary',
  async (data: any) => {
    // Gọi API và trả về kết quả
    const response = await axios.post(`${API_URL}write-text-file`, {
      data,
    });
    return response.data; // Giả sử API trả về một giá trị
  }
);

// Tạo một async action để gọi API
export const updateVocabulary = createAsyncThunk(
  'vocabulary/updateVocabulary',
  async (data: any) => {
    // Gọi API và trả về kết quả
    const response = await axios.put(`${API_URL}update-vocabulary`, {
      data,
    });
    return response.data; // Giả sử API trả về một giá trị
  }
);

// Tạo một async action để gọi API
export const removeVocabulary = createAsyncThunk(
  'vocabulary/removeVocabulary',
  async (key: any) => {
    // Gọi API và trả về kết quả
    const response = await axios.delete(`${API_URL}delete-vocabulary/${key}`);
    return response.data; // Giả sử API trả về một giá trị
  }
);
