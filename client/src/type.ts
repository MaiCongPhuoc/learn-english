export const API_URL = import.meta.env.VITE_URL_SERVER_BACKEND;

export type VocabularyType = {
  vocabulary: string;
  meaning: string;
  read: string;
  classification: string;
};
