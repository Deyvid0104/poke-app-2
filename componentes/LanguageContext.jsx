import React, { createContext, useContext, useState } from 'react';
import { getDictionary } from '@/componentes/Diccionario'; // Asegúrate de importar el diccionario

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Idioma por defecto
  const dictionary = getDictionary(language); // Obtener el diccionario según el idioma

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ dictionary, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};