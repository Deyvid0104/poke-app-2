const Diccionario = {
  es: {
    title: "Pokémon Aleatorio",
    error: "Error: No se pudo cargar el Pokémon",
    loading: "Cargando...",
    // Agrega más traducciones en español aquí
  },
  en: {
    title: "Random Pokémon",
    error: "Error: Could not load the Pokémon",
    loading: "Loading...",
    // Agrega más traducciones en inglés aquí
  },
  fr: {
    title: "Pokémon Aléatoire",
    error: "Erreur : Impossible de charger le Pokémon",
    loading: "Chargement...",
    // Agrega más traducciones en francés aquí
  },
};

export const getDictionary = (lang) => Diccionario[lang]
// export default Diccionario;