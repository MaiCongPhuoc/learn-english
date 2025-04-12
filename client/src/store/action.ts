import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Tạo một async action để gọi API
export const getVocabulary = createAsyncThunk(
  'vocabulary/getVocabulary',
  async () => {
    // Gọi API và trả về kết quả
    const response = await axios.get('http://localhost:5000/read-text-file');
    return response.data; // Giả sử API trả về một giá trị
  }
);

// Tạo một async action để gọi API
export const saveVocabulary = createAsyncThunk(
  'vocabulary/saveVocabulary',
  async (data: any) => {
    // Gọi API và trả về kết quả
    const response = await axios.post('http://localhost:5000/write-text-file', {
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
    const response = await axios.put(
      'http://localhost:5000/update-vocabulary',
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
      `http://localhost:5000/delete-vocabulary/${key}`
    );
    return response.data; // Giả sử API trả về một giá trị
  }
);
