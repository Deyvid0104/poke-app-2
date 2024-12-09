// /app/pokemon/gen3/page.jsx
import React from 'react';
import PokemonCard from '../../../componentes/PokemonCard';
import { fetchPokemon } from '../../../lib/api';

const Gen3 = ({ pokemons }) => {
  return (
    <div className="container">
      <h1>Pokémon de la 3ª Generación</h1>
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
    const randomId = Math.floor(Math.random() * 135) + 252; // IDs de 252 a 386
    promises.push (fetchPokemon(randomId));
  }
  const pokemons = await Promise.all(promises);

  return {
    props: {
      pokemons,
    },
  };
}

export default Gen3;