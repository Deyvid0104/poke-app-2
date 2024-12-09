"use client";
import { useEffect, useState } from "react";
// import Navegacion from "@/componentes/Nav";
import { Pokemon } from "@/componentes/Pokemon";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/contenedor.module.css";
import Cargando from "@/componentes/Cargando";

export default function Home() {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      const randomId = Math.floor(Math.random() * 151) + 1; // Genera un ID aleatorio entre 1 y 151
      console.log(randomId);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        if (!response.ok) {
          throw new Error("Error al obtener el Pokémon");
        }
        const data = await response.json();
        setRandomPokemon({
          id: data.id,
          nombre: data.name,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomPokemon();
  }, []);

  return (
    <>
      <div>
        <div className={styles.inicio}>
          <h1 className={styles.titulo}>Pokémon Aleatorio</h1>
          {loading && <Cargando/>}
          {error && <div>Error: {error}</div>}
          <Pokemon id={Math.floor(Math.random() * 151) + 1} generation="gen1" />
          {/* <Pokemon id={Math.floor(Math.random() * 151) + 1} /> */}
        </div>
      </div>
    </>
  );
}
