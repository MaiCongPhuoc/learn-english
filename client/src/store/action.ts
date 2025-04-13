import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_URL_SERVER_BACKEND;

// Tạo một async action để gọi API
export const getVocabulary = createAsyncThunk(
  'vocabulary/getVocabulary',
  async () => {
    // Gọi API và trả về kết quả
    const response = await axios.get(
      `https://learn-english-xb8j.onrender.com/read-text-file`
    );
    return response.data; // Giả sử API trả về một giá trị
  }
);

// Tạo một async action để gọi API
export const saveVocabulary = createAsyncThunk(
  'vocabulary/saveVocabulary',
  async (data: any) => {
    // Gọi API và trả về kết quả
    const response = await axios.post(
      `https://learn-english-xb8j.onrender.com/write-text-file`,
      {
        data,
      }
    );
    return response.data; // Giả sử API trả về một giá trị
  }
);

// Tạo một async action để gọi API
export const updateVocabulary = createAsyncThunk(
  'vocabulary/updateVocabulary',
  async (data: any) => {
    // Gọi API và trả về kết quả
    const response = await axios.put(
      `https://learn-english-xb8j.onrender.com/update-vocabulary`,
      {
        data,
      }
    );
    return response.data; // Giả sử API trả về một giá trị
  }
);

// Tạo một async action để gọi API
export const removeVocabulary = createAsyncThunk(
  'vocabulary/removeVocabulary',
  async (key: any) => {
    // Gọi API và trả về kết quả
    const response = await axios.delete(
      `https://learn-english-xb8j.onrender.com/delete-vocabulary/${key}`
    );
    return response.data; // Giả sử API trả về một giá trị
  }
);
