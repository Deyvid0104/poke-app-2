const Diccionario = {
  es: {
    home: 'Inicio',
    title: "Pokémon Aleatorio",
    error: "Error: No se pudo cargar el Pokémon",
    loading: "Cargando...",
    gen1: "1ra Generación",
    gen2: "2da Generación",
    gen3: "3ra Generación",
    btnSaberMas: "Saber más",
    btnCerrar: "Cerrar",
    ataque: "Ataque",
    defensa: "Defensa",
    // Agrega más traducciones en español aquí
  },
  en: {
    home: 'Home',
    title: "Random Pokémon",
    error: "Error: Could not load the Pokémon",
    loading: "Loading...",
    gen1: "1st Generation",
    gen2: "2nd Generation",
    gen3: "3rd Generation",
    btnSaberMas: "Learn more",
    btnCerrar: "Close",
    ataque: "Attack",
    defensa: "Defense",
    // Agrega más traducciones en inglés aquí
  },
  fr: {
    home: 'Accueil',
    title: "Pokémon Aléatoire",
    error: "Erreur : Impossible de charger le Pokémon",
    loading: "Chargement...",
    gen1: "1ère Génération",
    gen2: "2ème Génération",
    gen3: "3ème Génération",
    btnSaberMas: "En savoir plus",
    btnCerrar: "Fermer",
    ataque: "Attaque",
    defensa: "Défense",
    // Agrega más traducciones en francés aquí
  },
};

export const getDictionary = (lang) => Diccionario[lang]
// export default Diccionario;