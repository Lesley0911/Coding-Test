	
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
            'Welcome':'Welcome!!',
            'login':'Login',
            'logout':'Logout',
            'lang':'Language: ',
            'en':'Eng'
        }
      },
      cn: {
        translation:{
            'Welcome':'歡迎!!',
            'login':'登入',
            'lang':'語言: ',
            'cn':'中文',
            'logout':'登出'
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;