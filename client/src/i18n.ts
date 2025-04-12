import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi', // Ngôn ngữ mặc định
    lng: 'vi', // Ngôn ngữ ban đầu
    interpolation: {
      escapeValue: false, // React tự động bảo vệ khỏi XSS
    },
    backend: {
      loadPath: '/local/{{lng}}/translation.json',
    },
  });

export default i18n;
