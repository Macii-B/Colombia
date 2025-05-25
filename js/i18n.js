import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar archivos de traducción
import es from '../locales/es.json';
import en from '../locales/en.json';

i18next
    .use(LanguageDetector)
    .init({
        resources: {
            es: {
                translation: es
            },
            en: {
                translation: en
            }
        },
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18next; 