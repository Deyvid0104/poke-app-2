// /app/pokemon/gen2/page.jsx
import React from 'react';
import PokemonCard from '../../../componentes/PokemonCard';
import { fetchPokemon } from '../../../lib/api';

const Gen2 = ({ pokemons }) => {
  return (
    <div className="container">
      <h1>Pokémon de la 2ª Generación</h1>
      <div className="row">
        {pokemons.map(pokemon => (
          <div className="col-md-4" key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const promises = [];
  for (let i = 0; i < 10; i++) {
    const randomId = Math.floor(Math.random() * 100) + 152; // IDs de 152 a 251
    promises.push(fetchPokemon(randomId));
  }
  const pokemons = await Promise.all(promises);

  return {
    props: {
      pokemons,
    },
  };
}

export default Gen2;