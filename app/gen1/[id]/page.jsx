"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PokeModal from "@/componentes/Modal";

export default function PokemonDetail({ params }) {
  const { id } = params;
  const router = useRouter();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener el Pokémon");
        }
        const data = await response.json();
        setPokemon({
          id: data.id,
          nombre: data.name,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        });
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  const handleClose = () => {
    router.push(`/gen1`); // Cierra el modal y regresa a la lista
  };

  return (
    <>
      {pokemon && (
        <PokeModal
          show={true} // Siempre se muestra el modal
          handleClose={handleClose}
          pokemon={pokemon}
        />
      )}
    </>
  );
}
