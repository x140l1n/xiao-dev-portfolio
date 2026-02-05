import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import es from './es';

Vue.use(VueI18n);

const messages = {
  en,
  es
};

const savedLocale = localStorage.getItem('locale') || 'en';

const i18n = new VueI18n({
  locale: savedLocale,
  fallbackLocale: 'en',
  messages
});

export default i18n;
