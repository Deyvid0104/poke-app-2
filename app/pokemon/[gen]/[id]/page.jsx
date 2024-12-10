"use client";
import React, { useEffect, useState } from "react"; // Asegúrate de importar React
import { useRouter } from "next/navigation";
import PokeModal from "@/componentes/Modal";

export default function PokemonDetail({ params }) {
  const { id } = React.use(params); // Desenvuelve los parámetros
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

  const { gen } = React.use(params); // Desenvuelve también gen aquí
  const handlePrevious = () => {
    const previousId = Math.max(1, pokemon.id - 1); // Asegúrate de no ir por debajo de 1
    router.push(`/pokemon/${gen}/${previousId}`); // Navega al Pokémon anterior
  };

  const handleNext = () => {
    const nextId = pokemon.id + 1; // Asumiendo que los IDs son consecutivos
    router.push(`/pokemon/${gen}/${nextId}`); // Navega al siguiente Pokémon
  };

  const handleClose = () => {
    router.push(`/pokemon/${gen}`); // Cierra el modal y regresa a la lista
  };

  return (
    <>
      {pokemon && (
        <PokeModal
          // show={true} // Siempre se muestra el modal
          // handlePrevious={handlePrevious}
          // handleNext={handleNext}
          // handleClose={handleClose}
          // pokemon={pokemon}
          show={true} // Siempre se muestra el modal
          handleClose={handleClose}
          pokemon={pokemon}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  );
}

////////////////////////////////////////////

// 'use client';
// import React, { useEffect, useState } from "react"; // Asegúrate de importar React
// import { useRouter } from "next/navigation";
// import PokeModal from "@/componentes/Modal";

// export default function PokemonDetail({ params }) {
//   const { id } = React.use(params); // Desenvuelve los parámetros
//   const router = useRouter();
//   const [pokemon, setPokemon] = useState(null);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         if (!response.ok) {
//           throw new Error("Error al obtener el Pokémon");
//         }
//         const data = await response.json();
//         setPokemon({
//           id: data.id,
//           nombre: data.name,
//           hp: data.stats[0].base_stat,
//           ataque: data.stats[1].base_stat,
//           defensa: data.stats[2].base_stat,
//           img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
//         });
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//       }
//     };

//     fetchPokemon();
//   }, [id]);

//   const handleClose = () => {
//     router.push(`/pokemon/${params.gen}`); // Cierra el modal y regresa a la lista
//   };

//   return (
//     <>
//       {pokemon && (
//         <PokeModal
//           show={true} // Siempre se muestra el modal
//           handleClose={handleClose}
//           pokemon={pokemon}
//         />
//       )}
//     </>
//   );
// }

///////////////////////////////////////////////////7

// "use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import PokeModal from "@/componentes/Modal";

// export default function PokemonDetail({ params }) {
//   const { id } = params;
//   const router = useRouter();
//   const [pokemon, setPokemon] = useState(null);

//   useEffect(() => {
//     const fetchPokemon = async () => {
//       try {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         if (!response.ok) {
//           throw new Error("Error al obtener el Pokémon");
//         }
//         const data = await response.json();
//         setPokemon({
//           id: data.id,
//           nombre: data.name,
//           hp: data.stats[0].base_stat,
//           ataque: data.stats[1].base_stat,
//           defensa: data.stats[2].base_stat,
//           img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
//         });
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//       }
//     };

//     fetchPokemon();
//   }, [id]);

//   const handleClose = () => {
//     router.push(`/gen1`); // Cierra el modal y regresa a la lista
//   };

//   return (
//     <>
//       {pokemon && (
//         <PokeModal
//           show={true} // Siempre se muestra el modal
//           handleClose={handleClose}
//           pokemon={pokemon}
//         />
//       )}
//     </>
//   );
// }
